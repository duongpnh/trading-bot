<a id="logos" class="anchor" aria-hidden="true" href="#logos"></a><br/>

<h1 align="center">
  <p align="center">React Typescript</p>
  <a href="https://boilerplates.js.org"><img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/logo/logo.png"  width="150" alt="Boilerplates"></a>
</h1>

### 🔍 Overview

These are the most relevant technologies that this boilerplate includes, all of them are configured to inspire your project and are showing examples of what you can do with them.

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** Written in TypeScript language.
- **SASS:** Some good Sass practices to create the Styles.
- **Autoprefixer:** Automatically add vendor prefixes to these Styles.
- **Webpack:** Automation of tasks and compilation of the project.
- **Babel:** Transpiler to different versions of EcmaScript.
- **Browserlist:** To configure which browsers will support.
- **Jest:** Framework for testing.
- **ESLint:** Linting for Scripts.
- **StyleLint:** Linting for Styles.
- **Prettier:** Formatter for Scripts and Styles.
- **EditorConfig:** Formatter for files in general.
- **Husky:** Used for attaching to git hooks and run scripts.
- **Inversify:** You can optionally configure Dependency Injection.

### 🥑 Demo (In progress)

Once you download the project you will find a complete demo of how it works, including (each boilerplate could include different examples):

- **Page:** Example of how to create a page.
- **File structure:** Project structure [following "feature" convention](https://medium.com/@CKGrafico/taking-decisions-to-structure-big-projects-with-hooks-stores-services-and-more-a703c7874480).
- **Styles structure:** Structure, mixins and variables using [non-strict BEM](https://medium.com/@CKGrafico/choosing-how-to-structure-our-css-components-7af3c7ea4f27).
- **File names:** File names structure [using "type name" convention](https://medium.com/@CKGrafico/taking-decisions-to-structure-big-projects-with-hooks-stores-services-and-more-a703c7874480).
- **Modules:** Splitting the code in different modules to separate the concepts and scale the project.
- **Navigation:** Managing the routing of your the application.
- **Global State Management:** Creating a better communication between components.

### 📚 Setup and scripts

> Before clone this project.
> **Install** all the dependencies.

```shell
$ yarn
```

**Run** the project for local development.

```shell
$ yarn start
```

**Build** the project for a production environment.

```shell
$ yarn build
```

**Test** your code.

```shell
$ yarn test
```

The **linting** is configured with [**husky**](https://github.com/typicode/husky) and will run before commit, but you can run it.

```shell
$ yarn lint # (Will run scripts and styles linting with autofix)
$ yarn lint:scripts # (Will run ESLint)
$ yarn lint:styles # (Will run Stylelint)
$ yarn lint:editor # (Will run ECLint)
```
