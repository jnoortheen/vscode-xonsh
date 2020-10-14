/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Noortheen Raja NJ <jnoortheen@gmail.com>. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ExtensionContext, languages, IndentAction } from 'vscode'

import { workspace, Disposable, ExtensionContext } from 'vscode'
import {
    LanguageClient,
    LanguageClientOptions,
    SettingMonitor,
    ServerOptions,
    ErrorAction,
    ErrorHandler,
    CloseAction,
    TransportKind,
} from 'vscode-languageclient'

export function activate(ctx: ExtensionContext): any {
    const executable = workspace
        .getConfiguration('pyls')
        .get<string>('executable')

    languages.setLanguageConfiguration('python', {
        onEnterRules: [
            {
                beforeText: /^\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\s*$/,
                action: { indentAction: IndentAction.Indent },
            },
        ],
    })
}
