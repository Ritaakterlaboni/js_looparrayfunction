//nasted funtion

//nasted funtion holo akta function ar modde arekta funtion use kora

function outerFunction() {
    console.log("This is the outer function");

    function innersFunction() {
        console.log("This is the 1st inner function");
    }

    innersFunction();

    function innerFunction(){
        console.log("This is the 2nd inner function");
        
    }

    innerFunction();
}

outerFunction();


//adult ki na aita nested funtion use kore with if....else



function cheeker(age){
    console.log("check kora hobe adult ki na");

    function isadult(){
        if (age >= 18){
            console.log("you are a adult person.");
        }
        else{
            console.log("you are a not adult person.");

        }
    }

    isadult();
}
cheeker(20);



//for loop , function array diye prottek ar sathe alada bhabe lekha dekhano holo



let students = ["Rita", "Sathy", "Jerin"];

function functionwith(studentsname) {
    console.log(`Welcome ${studentsname}`);             //backtik diye string r variable ak sathe lekha jai
}

for (let i = 0; i < students.length; i++) {
    functionwith(students[i]);
}


// function scope ar baire call kora hoi normally kintu jodi kno khetre akta loop thake jekhane bar bar alada alada vhabe lekha dekhaite chai tokhon loop ar vhitore call korbo


//map funtion without arrow function

let student = ["Rita", "Sathy", "Jerin"];

student.map(function(name) {                    //name akta perameter ai khane amar iccha moto kisu likte parbo 
    console.log(`Welcome ${name}`);
});


//for each without arrow function


let studnt = ["Rita", "Sathy", "Jerin"];

studnt.forEach(function(name) {                                 //for each r map prai same e kaj kore 
    console.log(`Welcome ${name}`);
});