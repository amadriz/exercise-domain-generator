
function domainGenerator(){

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['com','net','cr','us'];


let newPron = "";
let newAdj = "";
let newNoun = "";
let newExt = "";

let a = 0;


    for(let i = 0; i < pronoun.length; i++){
        newPron = pronoun[i];
        for(let c = 0; c < adj.length; c++){
            newAdj = newPron
            newPron += adj[c];
            for(let x = 0; x < noun.length; x++){
            newNoun = newPron;
            newPron += noun[x];
            for(let y = 0; y < ext.length; y++){
                newExt = newPron;
                newPron += "." + ext[y];
                console.log(newPron)
                a++
                newPron = newExt;
            }//fourth for
            newPron = newNoun
            }//third for    
            newPron = newAdj    
        } //second for
    } //First for
    return "Se encontraron " + a +" posibles cominaciones"
}
console.log(domainGenerator());
