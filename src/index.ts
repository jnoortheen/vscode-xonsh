/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Noortheen Raja NJ <jnoortheen@gmail.com>. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
  env,
  ExtensionContext,
  IndentAction,
  languages,
  Uri,
  window,
  workspace,
} from 'vscode';
import * as client from './client';
import { which } from './which';
import { UriMessageItem } from './models';

function getExePath(): string | undefined {
  const executable = workspace
    .getConfiguration('pylsp')
    .get<string>('executable');
  if (executable) {
    const isWindows = process.platform === 'win32';
    return which(
      isWindows && !executable.endsWith('.exe')
        ? `${executable}.exe`
        : executable
    );
  }
}
async function checkServerInstalled(): Promise<string | undefined> {
  const executable = getExePath();
  if (executable === undefined || executable === '') {
    const selection = await window.showErrorMessage<UriMessageItem>(
      'Unable to find Python language server',
      {
        title: 'Install language server',
        uri: Uri.parse('https://github.com/python-lsp/python-lsp-server'),
      }
    );
    if (selection?.uri !== undefined) {
      await env.openExternal(selection?.uri);
      return;
    }
  }
  return executable;
}

export async function activate(ctx: ExtensionContext): Promise<void> {
  const executable = await checkServerInstalled();

  if (executable) {
    ctx.subscriptions.push(client.activate(executable));
  }

  languages.setLanguageConfiguration('xonsh', {
    onEnterRules: [
      {
        beforeText: /^\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\s*$/,
        action: { indentAction: IndentAction.Indent },
      },
    ],
  });
}
