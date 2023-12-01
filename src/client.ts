import { ExtensionContext, window, workspace } from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from 'vscode-languageclient/node';
import * as net from "net";

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

function startLangServerTCP(addr: number): LanguageClient {
    const serverOptions: ServerOptions = () => {
        return new Promise((resolve /*, reject */) => {
            const clientSocket = new net.Socket();
            clientSocket.connect(addr, "127.0.0.1", () => {
                resolve({
                    reader: clientSocket,
                    writer: clientSocket,
                });
            });
        });
    };

    return new LanguageClient(
        `tcp lang server (port ${addr})`,
        serverOptions,
        getClientOptions()
    );
}

export async function activate(ctx: ExtensionContext): Promise<void> {
  // const serverOptions: ServerOptions = {
  //   command: "",
  //   args: ['-v'],
  // };

  // client = new LanguageClient('xonsh', 'Xonsh', serverOptions, clientOptions);
  client = startLangServerTCP(2007)
  client.registerProposedFeatures();
  await client.start();
  ctx.subscriptions.push(client);
}

export function deactivate(): Thenable<void> | undefined {
  return client ? client.stop() : undefined;
}
