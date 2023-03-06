#!/bin/env node

console.log(`Hello World!`)

/**
 * process.argv is an array of all the arguments the script is called with
 * The first element is the PATH to the NodeJS runtime enviroment
 * The second element is the PATH to the script file
 * The rest are any custom argument YOU call the script with
*/
process.argv.forEach((arg, i) => console.log(`Argument ${i}: ${arg}`))