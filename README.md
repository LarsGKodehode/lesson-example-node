# NodeJS Example

## Content
- [Before you start](#before-you-start)
- [Cheat Sheat](#cheat-sheat)
  - [node](#node)
  - [npm](#npm)
  - [npmjs](#npmjs)
- [Background Information](#background-information)
  - [NodeJs](#nodejs)
  - [Node Package Manager](#node-package-manager)
  - [Node Package Repository](#npmjs---node-package-repository)
- [Interesting Stuff](#interesting-stuff)

## Before you start
To make use and follow allong with the instructions in this repository you need NodeJS installed on your local machine.
Click the link and follow the instruction for your operating system.
- [Click Here!](https://nodejs.org/)

## Cheat Sheat

### node
The basic *what can I do with this* option. One thing you should absolutely memorize.
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

### npm
Basic argument again. Displays a list of often used commands.
```sh
npm --help
```
Initialize a empty npm project. Everything is contained within the generated [package.json](package.json).
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

### [npx](https://www.npmjs.com/package/npx)
npx stands for Node Package Execute and allows you to run JavaScript files from your terminal, it also allows you to run JavaScript that is hosted on external web servers.

### [npmjs](https://www.npmjs.com/)


## Background Information

### [NodeJS](https://nodejs.org/en/)
The JavaScript [Runtime Enviroment](https://en.wikipedia.org/wiki/Runtime_system). Essential for running JavaScript outside of your browser, also something you wil use when you want to create backend services with JavaScript.

### [Node Package Manager](https://docs.npmjs.com/)
How we easily have access to other peoples code and how we manage alle of our package dependencies.

### [NPMJS - Node Package Repository](https://www.npmjs.com/)
This is the official npm package repository, where all (most all) of the code you will add to your project comes from. You can think of this as the AppStore or PlayStore of JavaScript projects.


## Interesting Stuff
TODO: List out some fun/smart ways to start scripting with JavaScript