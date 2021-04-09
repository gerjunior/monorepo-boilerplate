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
