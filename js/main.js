// creo costante button
const button = document.getElementById("bottone");

// prendiamo info dagli input quando viene spinto il bottone
button.addEventListener("click",
    function(event) {
        event.preventDefault();
        let inputName = document.querySelector(".nome").value;
        let inputTrip = parseInt(document.querySelector(".km").value);
        let inputAge = document.querySelector(".anni").value;
        console.log("Nome", inputName, "Lunghezza", inputTrip, "Età", inputAge);

        // creo variabile prezzo per km
        let price = 0.21;
        console.log("Prezzo base per km", price);

        // calcolo prezzo prima di eventuale sconto
        let noDiscount = (inputTrip*price);
        console.log("Prezzo senza sconto", noDiscount);

        // creo variabili da utilizzare nel prossimo if else
        let afterDiscount;
        let offer;

        // va applicato sconto per gli under 18 di 20%, oppure per gli over 65 di 40% sul prezzo finale
        if (inputAge === ("Minorenne")) {
            afterDiscount = (noDiscount-(noDiscount*0.2));
            offer = ("Biglietto U18");

        } else if (inputAge === ("Over65")) {
            afterDiscount = (noDiscount-(noDiscount*0.4));
            offer = ("Biglietto Ov65");
            
        } else {
            afterDiscount = noDiscount;
            offer = ("Biglietto Standard");
            
        }
        console.log("Prezzo prima dell'arrotondamento: ", afterDiscount);

        // arrotondamento prezzo finale dopo sconto
        let finalPrice = afterDiscount.toFixed(2);
        console.log("Prezzo finale dopo arrotondamento", finalPrice);

        // genero numeri casuali per carrozza e CP
        let carrozz = Math.floor(Math.random() * 10) + 1;
        console.log("Numero carrozza", carrozz);
        
        let cp = Math.floor(Math.random()*90000) + 10000;
        console.log("Numero CP", cp);
        
        // stampo info sul biglietto
        document.getElementById("pass-name").innerHTML =inputName;
        document.getElementById("off").innerHTML =offer;
        document.getElementById("carr").innerHTML =carrozz;
        document.getElementById("cp").innerHTML =cp;
        document.getElementById("final-p").innerHTML =finalPrice;

    }

)
