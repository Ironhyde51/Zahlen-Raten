
let zufallsZahl = Math.floor(Math.random() * 100) + 1;
let versuche = 0;


function pruefen() {
    let tipp = Number(document.getElementById("eingabe").value);
    versuche++;
    if (tipp>zufallsZahl){
        document.getElementById("hinweis").textContent =
         " Zu hoch! Versuch es nochmal.";
    } else if (tipp<zufallsZahl){
        document.getElementById("hinweis").textContent =
         " Zu niedrig! Versuch es nochmal.";
    } else {
        document.getElementById("hinweis").textContent =
         " Richtig! Du hast " + versuche + " Versuche gebraucht.";
    }
        document.getElementById("versuche").textContent =
        "Versuche: " + versuche;
}

function neuesSpiel() {
    zufallsZahl = Math.floor(Math.random() * 100) + 1;
    versuche = 0;
    document.getElementById("hinweis").textContent = 
    " Neues Spiel gestartet! Viel Glück!";
    document.getElementById("versuche").textContent = 
    "Versuche: 0";
    document.getElementById("eingabe").value = "";
}