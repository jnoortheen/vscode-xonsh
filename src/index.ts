/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Noortheen Raja NJ <jnoortheen@gmail.com>. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
    Disposable,
    ExtensionContext,
    IndentAction,
    languages,
    workspace,
} from 'vscode'

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
} from 'vscode-languageclient'

function startLangServer(
    command: string,
    args: string[],
    documentSelector: string[]
): Disposable {
    const serverOptions: ServerOptions = {
        command,
        args,
    }
    const clientOptions: LanguageClientOptions = {
        documentSelector: documentSelector,
        synchronize: {
            configurationSection: 'pyls',
        },
    }
    return new LanguageClient(command, serverOptions, clientOptions).start()
}

export function activate(ctx: ExtensionContext): void {
    const executable = workspace
        .getConfiguration('pyls')
        .get<string>('executable')

    if (executable) {
        ctx.subscriptions.push(startLangServer(executable, ['-vv'], ['python']))
    }

    languages.setLanguageConfiguration('python', {
        onEnterRules: [
            {
                beforeText: /^\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\s*$/,
                action: { indentAction: IndentAction.Indent },
            },
        ],
    })
}
