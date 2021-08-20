import { Disposable, window, workspace } from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(serverPath: string): Disposable {
  const serverOptions: ServerOptions = {
    command: serverPath,
    args: ['-v'],
  };

  const docSelector: { scheme: string; language: string }[] = [
    { scheme: 'file', language: 'xonsh' },
    { scheme: 'untitled', language: 'xonsh' },
  ];

  const clientOptions: LanguageClientOptions = {
    documentSelector: docSelector,
    synchronize: {
      fileEvents: [
        workspace.createFileSystemWatcher('**/*.xsh'),
        workspace.createFileSystemWatcher('**/*.xonsh'),
      ],
      configurationSection: 'pylsp',
    },
    outputChannel: window.createOutputChannel('Xonsh'),
  };

  client = new LanguageClient('xonsh', 'Xonsh', serverOptions, clientOptions);
  client.registerProposedFeatures();
  return client.start();
}

export function deactivate(): Thenable<void> | undefined {
  return client ? client.stop() : undefined;
}
