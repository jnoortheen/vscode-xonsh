import { ExtensionContext, window, workspace } from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from 'vscode-languageclient/node';

let client: LanguageClient;

function getClientOptions(): LanguageClientOptions {
  const docSelector: { scheme: string; language: string }[] = [
    { scheme: 'file', language: 'xonsh' },
    { scheme: 'untitled', language: 'xonsh' },
  ];

  return   {
    documentSelector: docSelector,
    synchronize: {
      fileEvents: [
        workspace.createFileSystemWatcher('**/*.xsh'),
      ],
      configurationSection: 'pylsp',
    },
    outputChannel: window.createOutputChannel('Xonsh'),
  };

}

export async function activate(
  ctx: ExtensionContext, executable: string
): Promise<void> {
  const serverOptions: ServerOptions = {
    command: executable,
    args: ['-v'],
  };

  client = new LanguageClient(
    'pylsp',
    'xonsh Python Language Server',
    serverOptions,
    getClientOptions()
  );

  client.registerProposedFeatures();
  await client.start();
  ctx.subscriptions.push(client);
}

export function deactivate(): Thenable<void> | undefined {
  return client ? client.stop() : undefined;
}
