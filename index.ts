#! /usr/bin/env node
import inquirer from "inquirer" ;

console.log("\n*** Welcome to The Guests Verification Center ***\n");

let myLoop = true ;

let guestsList = ["muniza" , "nabeel" , "ahmed" , "abdul Nafay" , "parisa"];

while(myLoop){
    let usrInput = await inquirer.prompt(
        [
            {
                name : "usrName" ,
                type : "input" ,
                message : "Enter Your Name"
            }
        ]
    )
    let guestName = usrInput.usrName ;
    // let {usrName} = usrInput ;   // destructuring
    
    let lowerGuestName = guestName.toLowerCase()

    if(guestsList.includes(lowerGuestName)){
        console.log(`" Hello ${guestName}! Have a NiCe Day."`)
        
        myLoop = false 

    }else{
        console.log(`\nSorry!!! ${guestName}, Your Name is not on the Guest List ..\n`)

        let askagain = await inquirer.prompt(
            [
                {
                    name : "moreName",
                    type : "confirm",
                    message : "Do You Have another Name?? if so , we can check Again ..",
                    default : false
                }
            ]
        )
        if(askagain.moreName === false){
            myLoop = false;
            console.log(`\n We apologize, but you are not in the guest list. Please Contact The Event Organizer.\n`) 
        } 
    } 
};
