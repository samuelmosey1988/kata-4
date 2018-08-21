const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
const container = document.querySelector("main");
const katas = {
    1: function () {
        const arrayifiedString = gotCitiesCSV.split(",");

        printKata(1, JSON.stringify(arrayifiedString));
    },

    2: function () {
        const arrayifiedString = bestThing.split(" ");

        printKata(2, JSON.stringify(arrayifiedString));
    }

}

function executeKatas() {
    for (let kataNumber in katas) {
        katas[kataNumber]();
    }
}

function printKata(kataNumber, resultString) {
    const kataHeading = document.createElement("span");
    kataHeading.textContent = "Kata " + kataNumber + ": ";
    kataHeading.className = "kata-heading";

    const resultElement = document.createElement("article");
    resultElement.appendChild(kataHeading);

    const textNode = document.createTextNode(resultString);
    resultElement.appendChild(textNode);

    container.appendChild(resultElement);
}

//KATA 1
function katas1() {
    const arrayifiedString = gotCitiesCSV.split(",");
    printKata(1, JSON.stringify(arrayifiedString));
}

katas1();

//KATA 2
function katas2() {
    const arrayifiedString = bestThing.split(" ");
    printKata(2, JSON.stringify(arrayifiedString));
}

katas2();

//KATA 3

function katas3() {
    const arrayifiedString = gotCitiesCSV.split(",");
    const joinedWithSemicolon = arrayifiedString.join(";")

    printKata(3, JSON.stringify(joinedWithSemicolon));
}

katas3();

//KATA 4

function katas4() {
    const joinedWithComma = lotrCitiesArray.join(",");

    printKata(4, JSON.stringify(joinedWithComma));
}

katas4();

//KATA 5

function katas5() {
    let firstFiveCities = "";
    for (let i = 0; i < 5; i++) {
        firstFiveCities += lotrCitiesArray[i]
        if (i < 4) {
            firstFiveCities += ", "
        
        }
    }
    printKata(5, JSON.stringify(firstFiveCities));

}

katas5();

//KATA 6

function katas6() {
    let lastFiveCities = "";
    const startingIndex = lotrCitiesArray.length - 5; 
    
    for (let i = startingIndex; i < lotrCitiesArray.length; i++) {
        lastFiveCities += lotrCitiesArray[i]
        if (i < lotrCitiesArray.length - 1) {
            lastFiveCities += ", ";
        
        }
    }
    printKata(6, JSON.stringify(lastFiveCities));

}


katas6();

//KATA 7

function katas7() {
    let ThirdThroughFifthCities = "";
    const startingIndex = 2;
    const terminatingIndex = 5;  
    
    for (let i = startingIndex; i < terminatingIndex; i++) {
        ThirdThroughFifthCities += lotrCitiesArray[i]
        if (i < terminatingIndex) {
            ThirdThroughFifthCities += ", ";
        
        }
    }
    printKata(7, JSON.stringify(ThirdThroughFifthCities));

}

katas7();

//KATA 8

function katas8() {
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rohan"), 1);

    printKata(8, JSON.stringify(lotrCitiesArray))
}

katas8();

//KATA 9 

function katas9() {
    const startingIndex = lotrCitiesArray.indexOf("Dead Marshes") + 1; 
    const numberOfCitiesToDelete = lotrCitiesArray.length - startingIndex;  
    
    lotrCitiesArray.splice(startingIndex, numberOfCitiesToDelete)
    
    printKata(9, JSON.stringify(lotrCitiesArray))
}

katas9();

//KATA 10

function katas10() { 
   const startingIndex = lotrCitiesArray.indexOf("Gondor") + 1; 
   lotrCitiesArray.splice(startingIndex, 0, "Rohan"); 

   printKata(10, JSON.stringify(lotrCitiesArray));
}

katas10();

//KATA 11

function katas11() {
    const startingIndex = lotrCitiesArray.indexOf("Dead Marshes"); 
    lotrCitiesArray.splice(startingIndex, 1, "Deadest Marshes"); 

    printKata(11, JSON.stringify(lotrCitiesArray)); 
}

katas11(); 

//KATA 12

function katas12(){
    const first14Characters = bestThing.slice(0, 13 + 1); 
    printKata(12, JSON.stringify(first14Characters)); 
}

katas12();

//KATA 13 
 
function katas13(){
    const last12Characters = bestThing.slice(-12); 
    printKata(13, JSON.stringify(last12Characters)); 

}

katas13(); 

//KATA 14 

function katas14(){
    bestThing.slice(22,38)    
    printKata(14, bestThing.slice(22,38))
}

katas14();

//KATA 15

function katas15(){
    let last12Characters = bestThing.substring(bestThing.length - 13)
    printKata(15, last12Characters);
     
}

katas15();

//KATA 16

function katas16(){
    bestThing.slice(22,38)    
    printKata(16, bestThing.slice(22,38))
}

katas16(); 

//KATA 17

function katas17(){
    bestThing.indexOf("only")
    printKata(17, bestThing.indexOf("only"))
}

katas17();

//KATA 18

function katas18(){
    bestThing.indexOf("bit")
    printKata(18, bestThing.indexOf("bit"))    
}

katas18();

//KATA 19

function katas19(){
    
}

