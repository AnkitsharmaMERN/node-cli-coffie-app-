const readline = require('readline')
var clc = require("cli-color");


// then take the user input for the coffee through process (predefined module )
const { stdin: input, stdout: output } = require('process')
// console.log(process)




const Menu = [
    {Item_Name:"Black tea",Price:"50 RS"},
    {Item_Name:"Green tea",Price:"70 RS"},
    {Item_Name:"Black coffie",Price:"100 RS"},
    {Item_Name:"Milk coffie",Price:"150 RS"}
]


// you have to build a coffee shop cli app
function coffee() {
    // you have to present the user with the coffee and the price
    console.table(Menu)
    const rl = readline.createInterface({ input, output, })
    rl.question(clc.blue("Please select your cofiee no 0-3 \n"), (no) => {
        rl.question(clc.yellow("Please enter your name \n"), (name) => {

            if (no == "0") {
                // then just show coffee is preparing
                console.log(clc.red("we are preparing your black tea \n"))
                setTimeout(() => {
                    // then after that print your coffee is ready and yoou have to pay this much amount
                    console.log(clc.green(`${name} black tea is ready your bill is 50rs \n`))
                    coffee()
                }, 1000)
            } else if (no == "1") {
                console.log(clc.red("we are preparing your green tea \n"))
                setTimeout(() => {
                    // then after that print your coffee is ready and yoou have to pay this much amount
                    console.log(clc.green(`${name} green tea is ready your bill is 70rs \n`))
                    coffee()
                }, 1000)
            } else if (no == "2") {
                console.log(clc.red("we are preparing your black coffee )\n"))
                setTimeout(() => {
                    // then after that print your coffee is ready and yoou have to pay this much amount
                    console.log(clc.green(`${name} black coffee is ready your bill is 100rs \n`))
                    coffee()
                }, 1000)
            } else if (no == "3") {
                console.log(clc.red("we are preparing your Milk coffee \)n"))
                setTimeout(() => {
                    // then after that print your coffee is ready and yoou have to pay this much amount
                    console.log(clc.green(`${name} Milk coffee is ready your bill is 150rs \n`))
                    coffee()
                }, 1000)
            }
            else {
                console.log("please enter 0-3 no only \n")
                coffee()
            }
            rl.close()
        }) 
    })
}

coffee()







// your task is to write the application that takes user input and write it to the file --