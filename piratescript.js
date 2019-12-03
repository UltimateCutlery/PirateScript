// MAKE SURE THIS REMAINS UNCHANGED
 
function piratize(input){

    var words = input.split(" "); // split input into an array of individual words
    
    var piratewords = words.map(function(word){
            if (isNaN(word)==false){
                return word
            } else if (word == "pounds"){
                word = "doubloons";
                return word; // if the word is pounds, replaces with dubloons
            } else { 
                word = word.substr(1) + word.substr(0,1) + "arr";
                return word; //moves first letter to end and adds arr
            }
    });
    var piratephrase = piratewords.join(" ");
    
    return piratephrase;
    };




