//Grading System  Write a function that takes a score and returns the grade. 90+ → "A" 80+ → "B" 70+ → "C" below → "F"// 
const score=70
function grading(score){
    if(score>=90){console.log("A");
    }
    else if(score>=80){console.log("B");
    }
    else if(score>=70){console.log("C");
    }
    else {console.log("F");
    }
}
grading(score)