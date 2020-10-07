Adds [xonsh](https://xon.sh/) language support for VSCode Editor.

It trieds to modify the default VSCode's [Python extension](https://github.com/microsoft/vscode/tree/master/extensions/python) to support xonsh as well.

## Features

* Syntax Highlight

  + the tmLanguage file from [MagicPython](https://github.com/MagicStack/MagicPython/blob/master/grammars/src/MagicPython.syntax.yaml) extension is used.

  + code snippets inside `markdown` files also work.

## Todos

**PRs welcome** for them

* at this point it doesn't do anything special than `MagicPython` with `language-configuration.json`
  + [ ] add subprocess mode lines support - https://macromates.com/manual/en/regular_expressions
  + [ ] add $variable support
  + [ ] add macros syntax support
  + [ ] path string support
  + [ ] the extra set of syntax - https://github.com/ninjaaron/xonsh-quickstart (I don't find a list of checklist anywhere else.)

* auto-formatter support
* code-completion support
* snippets

## Installation

### Visual Studio Code

Hit `F1` and enter the `ext install jnoortheen.xonsh` command or search for `xonsh` .

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
