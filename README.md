Adds [xonsh](https://xon.sh/) language support for VSCode Editor.

## Features

* Syntax Highlight

  + the tmLanguage file from [MagicPython](https://github.com/MagicStack/MagicPython/blob/master/grammars/src/MagicPython.syntax.yaml) extension is used.

  + code snippets inside `markdown` files also work.

* Autocompletion with Language server protocol.
  + [pyls](https://github.com/palantir/python-language-server/) is used for jedi completion.

## Installation

### Visual Studio Code

Hit `F1` and enter the `ext install jnoortheen.xonsh` command or search for `xonsh` .

### Python-language-server

* Make sure that [ `pyls` ](https://github.com/palantir/python-language-server/) is installed and available on the `$PATH`
* I recommend using [pipx](https://github.com/pipxproject/pipx/)

``` sh
pipx install 'python-language-server[all]'
```

## Contributing

I have created this extension since there were none to support Xonsh. It is a superset of Python but has breaking syntax definition. So setting language mode as Python will list Syntax errors. This is just a start, adding basic syntax highlight. PRs are welcome. If we can add features from the Python extension it is great editor as well. Our aim is to make the `Python extension` support `xonsh` as well. It will happen only when it becomes popular enough.

* Document the purpose of functions and classes.
* When adding a new feature, please mention it in the `README.md` Features section. Use screenshots when applicable.
* [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) style should be used for commit messages as it is used to generate changelog.

## Development

* TypeScript is used to develop the extension

``` sh
  yarn install
  yarn build # this will build the extension
```

* check [Extension Quickstart](./vsc-extension-quickstart.md)
* husky is used for git hooks

---
Special thanks to
 * The extension [sublime-cocnut](https://github.com/evhub/sublime-coconut) does support coconut language. Which is also a superset of Python.

## Links

* [Extension page](https://marketplace.visualstudio.com/items?itemName=jnoortheen.xonsh)
