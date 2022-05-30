#!/usr/bin/env node

// import chalk from 'chalk';
// import chalkAnimation from 'chalk-animation';
// import gradient from 'gradient-string';
// import inquirer from 'inquirer';
// import figlet from 'figlet';
// import { createSpinner } from 'nanospinner';

// let playerName 

// const welcomeTimeOut =  (ms = 2000) => new Promise ((r)=> setTimeout(r, ms))

// async function welcome(){
//     const rainbowTitle = chalkAnimation.rainbow('Who wants to be a JavaScript millionaire? /n')

//     await welcomeTimeOut()
//     rainbowTitle.stop
//     console.log(`${chalk.bgBlue('How to play')}
//     'Get three questions correct'
//     Or this challenge will be ${chalk.bgRed('terminated')}
//     `)
// };

// async function askName (){
//     const answers = await inquirer.prompt({
//         name:'player_name',
//         type: 'input',
//         message: 'What is your name',
//         default(){
//             return 'player'
//         }
//     })
//     playerName = answers.player_name
//     console.log(`welcome ${playerName}`)
// }

// async function handleAnswer(isCorrect){
//     const spinner = createSpinner('checking answer...').start()
//     await welcomeTimeOut();

//     if (isCorrect){
//         spinner.success({text:`nice work ${playerName}`})
//     }else{
//         spinner.error({text:`incorrect answer ${playerName}`})
//         process.exit(1)
//     }
// }

// async function questionOne(){
//     const answers = await inquirer.prompt({
//         name:"question one",
//         type: "list",
//         message:'Javascript was created in how many days/n',
//         choices:[
//             "63",
//             "10",
//             "7",
//             "21"
//         ]
//     });
//     return handleAnswer(answers["question one"] == "10")
// }

// async function questionTwo(){
//     const answers = await inquirer.prompt({
//         name:"question two",
//         type: "list",
//         message:'Javascript has how many letters/n',
//         choices:[
//             "10",
//             "9",
//             "7",
//             "8"
//         ]
//     });
//     return handleAnswer(answers["question two"] == "10")
// }

// async function questionThree(){
//     const answers = await inquirer.prompt({
//         name:"question three",
//         type: "list",
//         message:'Javascript has how many letters/n',
//         choices:[
//             "10",
//             "9",
//             "7",
//             "8"
//         ]
//     });
//     return handleAnswer(answers["question three"] == "10")
// }

// function winner (){
//     console.clear()
//     const message = `congrats ${playerName}`

//     figlet(message,(err,data)=>{
//         console.log(gradient.pastel.multiline(data))
//     })
// }

// await welcome()
// await askName()
// await questionOne()
// await questionTwo()
// await questionThree()
// await winner()
