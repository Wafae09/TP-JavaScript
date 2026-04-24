const Questions=[
    ["Quelle est la capitale de la France ?","Paris"],
    ["Quelle est la capitale du Maroc ?","Rabat"],
    ["Combien font 25*4 ?","100"],
    ["Combien font 120/3 ?","40"],
];
function lancerQuiz(){
    let C=0;
    for (let i = 0; i < Questions.length; i++){
        let Q=Questions[i][0];
        let Reponse_correcte=Questions[i][1];
        let Reponse_utilisateur=prompt("Question" + (i+1) + Q);
        if (Reponse_correcte.toLowerCase() == Reponse_utilisateur.toLowerCase()){
             alert("Réponse juste");
             C++;
        } else {
             alert("Reponse fausse");
        }
    }
    alert("Vous avez répondu correctement à " + C + " question sur " + Questions.length);
}

