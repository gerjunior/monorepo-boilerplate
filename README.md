# A monorepo Boilerplate

## :wrench: Technologies Used

- [node 14.x](https://nodejs.org/en/) with [ECMAScript Modules](https://nodejs.org/api/esm.html#esm_modules_ecmascript_modules) -> use `import/export`
  instead of `require` and `module.exports`, having a pretty much modern code! [Here's how](https://blog.logrocket.com/es-modules-in-node-today/)

- [lerna](https://github.com/lerna/lerna) -> main monorepo managing tool. Hoist packages, run commands in parallel through packages etc.

- [yarn](https://yarnpkg.com/) -> Manage packages. With `yarn workspaces` working together with `lerna`, we can have a single lockfile in
  the project root to manage all packages inside the repo.

- [eslint](https://eslint.org/), [prettier](https://prettier.io/) -> Linting

- [jest](https://jestjs.io/pt-BR/) -> Testing Tool

- [github actions](https://docs.github.com/en/actions/learn-github-actions) -> CI/CD

- [codecov](https://about.codecov.io/) -> quality assurance

## How to run

You'll need to have installed:

- node `>= v14.15.5` (I prefer to use [nvm](https://github.com/nvm-sh/nvm))
- lerna (`npm install -g lerna`)
- yarn (`npm install -g yarn`)

Optionally:

- dbaeumer.vscode-eslint
- esbenp.prettier-vscode

### Commands

- `lerna bootstrap` will install all packages dependencies in the root of the monorepo and with a single lockfile.
- `lerna run script-name` -> it will execute a command in every package that has this command in the `scripts` tag. It can be `lint`,
  `test` or whatever command you have on the package.
- `lerna create ${package-name} packages/lambda --yes` will create a package called `packageName` inside the specified folder. The `--yes` flag
  will skip the other `package.json` `init` prompts.
- `lerna add @config/eslint-config-monorepo --scope=@lambda/example-function` -> adds `@config/eslint-config-monorepo` to `@lambda/example-function`
  You can only add one package per time, but you can specify more than one scope with brackets expansions like `--scope=@lambda/{example-function,other-function}`.

## Details

### Why do I need a .gitignore inside each package?

I really hate that file being there. I tried to decrease as much as I could the number of configuration files inside each package, but that's
a hard task in some cases.
The reason is just because the VSCode's ESLint extension tries to find a `.gitignore` file in each directory that it is running. We are
using `"mode": "auto"` with `eslint.workingDirectories` to automatically handle each package depending on where the `.eslintrc.json` file is
([see here](./vscode/settings.json)).
So to have `codeActionsOnSave` and all VSCode's ESLint stuff working, we need a `.gitignore` in each package.
PS: `codeActionsOnSave` formats your code when you save a file. Very useful since we are using ESLint with Prettier.

### Why do I need that NODE_OPTIONS when running jest?

Because we are using ECMAScript Modules and Jest needs that extra configuration to work with it. [see here](https://jestjs.io/pt-BR/docs/ecmascript-modules)

### More questions?

Please LMK!
