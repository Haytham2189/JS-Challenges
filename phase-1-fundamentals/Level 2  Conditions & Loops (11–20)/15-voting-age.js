//Voting Age  Write a function that takes an age and prints if the person can vote or not. canVote(17) → "Cannot vote"//
const age=17
function canVote(age){
    if(age>=18){console.log("Can vote");
    }
    else{console.log("cannot vote");
    }
}
canVote(age)