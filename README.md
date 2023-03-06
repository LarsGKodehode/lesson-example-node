# NodeJS Intro

## Content
- [About](#about)
- [Setup](#setup)
  - [NodeJs](#nodejs)
  - [Node Package Manager](#node-package-manager)
  - [Node Package Repository](#npmjs---node-package-repository)
  - [Node Package Executor](#node-package-executor)
- [Common Commands](#common-commands)
  - [node](#node)
  - [npm](#npm)
  - [npx](#npx)
  - [npmjs](#npmjs)
- [Interesting Stuff](#interesting-stuff)

## About

### [NodeJS](https://nodejs.org/en/)

The JavaScript [Runtime Enviroment](https://en.wikipedia.org/wiki/Runtime_system). Essential for running JavaScript outside of your browser. If you want to write your backend in JavaScript, you need to install NodeJS on your server. Due to how many parts of the modern web is reliant on NodeJS they are following a strict [release schedule](https://nodejs.dev/en/about/releases/). If you do not like installing new software, I advise looking into something like **Node Version Manager**. Installation instruction for [Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades) / [POSIX](https://github.com/nvm-sh/nvm).

Along with NodeJS comes a couple of other tools and web .

### [Node Package Manager](https://docs.npmjs.com/)

NPM is the Package Manager for Node. It is used for installing, removing, updating and interact with any third party packages you have added to your project.

### [NPMJS - Node Package Repository](https://www.npmjs.com/)

This is the official npm package repository, where all (most all) of the code you will add to your project comes from. You can think of this as the AppStore or PlayStore of JavaScript projects. Depending on the company you end up working for, they might have set up their own private repository.

### [Node Package <s>e</s>Xecutor]((https://www.npmjs.com/package/npx))

NPX is the node package runner and allows you to execute JavaScript scripts. It is also capable of executing JavaScript that is hosted remotely without permanently installing them on your system.

## Setup

Node.JS is a program that you need to install locally on your machine.

Recommended, Node Version Manager:
- [Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)
- [POSIX](https://github.com/nvm-sh/nvm).

Pure Node.JS:
- [Node.JS](https://nodejs.org/)

## Common Commands

### NodeJS
The basic *what can I do with this* option. The one argument you should, absolutely, memorize.
```sh
node --help
```

Check the version of node you are currently running. ALso a quick check to see if node is setup correctly.
```sh
node --version
node -v
```

Start up a node [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) in your terminal, and start writing some code.
```sh
node
```

You can also give it a [**PATH**](https://en.wikipedia.org/wiki/Path_(computing)) to a JavaScript file that you want to run.
```sh
node src/example.js
```

### NPM

Basic argument again. Displays a list of often used commands.
```sh
npm --help
```

Initialize a empty npm project. Everything is contained within the generated [package.json](package.json). This file *package.json* contains the definition, with all the files, external dependencies and a bunch of other stuff as well. <br>[Here is a link to the offical documentation for that file](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
```sh
npm init
```

Add a package to a projects dependencies.
```sh
npm install <name-of-package>
```

Remove a package from a projects dependencies.
```sh
npm install <name-of-package>
```

If you have packages that you only are using for development you can tack on a ```--save-dev```, shorthand ```-D``` to the install directive to have npm store the package in the devDependencies field instead.
```sh
npm install --save-dev <name-of-package>
npm install --D <name-of-package>
```

At times you might have a bunch of commands you need to run from your terminal. The scripts field inside *package.json* allows you to setup a sequence of scripts once and have a simple way of executing them. Another common usage is to standarized the command for certain actions. Later on we will make heavy us of that for starting up a development server and pushing our project to production.
```sh
npm run example
```

Here is a [link to a npm cheat sheet](https://devhints.io/npm)

### NPX

[Link to script](https://gist.github.com/LarsGKodehode/9023a44d8d250d6d53e6c164968692ee)
```sh
npx https://gist.github.com/LarsGKodehode/9023a44d8d250d6d53e6c164968692ee
```

**WARNING**: Do not execute scripts from untrusted sources. While incredible helpful this might result in modification to your system. Anything from *nothing* -> *messy* -> *malicious* is plausible.

Ways to limit undesired effects:
1. Read through the script to understand what it does.
2. Test the script in some isolated enviroment
3. Make a commit point before executing the script
4. Use [devcontainers](https://code.visualstudio.com/docs/devcontainers/containers) for your projects.

### [Link to npmjs.com](https://www.npmjs.com/)

## Interesting Stuff
TODO: List out some fun/smart ways to start scripting with JavaScript