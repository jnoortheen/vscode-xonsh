Adds [xonsh](https://xon.sh/) language support for VSCode Editor.

It trieds to modify the default VSCode's [Python extension](https://github.com/microsoft/vscode/tree/master/extensions/python) to support xonsh as well.

## Features

* Syntax Highlight

  + the tmLanguage file from [MagicPython](https://github.com/MagicStack/MagicPython/blob/master/grammars/src/MagicPython.syntax.yaml) extension is used.

  # todo - add image - syntax highlight support

  + code snippets inside `markdown` files also work.

  # todo - add markdown support snippet

## Todos

**PRs welcome** for them

* auto-formatter support
* code-completion support
* snippets

## Installation

### Visual Studio Code

Hit `F1` and enter the `ext install jnoortheen.xonsh` command or search for `xonsh` .

### Installing the extension Locally

Just clone the [GitHub repository](https://github.com/jnoortheen/xonsh-vscode-ext) under your local extensions folder:

* Windows: `%USERPROFILE%\.vscode\extensions`
* Mac / Linux: `$HOME/.vscode/extensions`

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

* husky is used for git hooks

---
Special thanks to
 * The extension [vscode-fish](https://github.com/evhub/sublime-coconut) does support coconut language. Which is also a superset of Python.

## Links

* [Extension page](https://marketplace.visualstudio.com/items?itemName=jnoortheen.xonsh)
