let P=Math.floor(Math.random()*10)+1;
let C=0;
let N;
do {
    N=parseInt(prompt("saisir d'entrer un nombre entre 1 et 10 :"));
    if (isNaN(N) || N<1 || N>10){
        alert("entrer un nombre entre 1 et 10 :");
        C++;
    } else if (N<P){
        alert("le nombre est plus petit.");
        C++;
    } else if (N>P){
        alert("le nombre est plus grand.");
        C++;
    }
} while (N!==P);
alert("le nombre de tentatives est :" + C);

