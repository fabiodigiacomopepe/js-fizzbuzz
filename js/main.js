// fisso le mie variabili globali
const contenitore = document.getElementById("contenitore");

// creo contatore da 1 a 100
for (let i = 1; i <= 100; i++) {

    // creo elemento span
    const quadrato = document.createElement('span');

    // aggiungo classe "square" allo span
    quadrato.classList.add("square");

    if (i % 3 === 0 && i % 5 === 0) {   // se i è multiplo sia di 3 che di 5    appendo in span FIZZBUZZ
        quadrato.append("fizzbuzz");
        quadrato.classList.add("red");
    } else if (i % 3 === 0) {           // se i è multiplo solo di 3            appendo in span FIZZ
        quadrato.append("fizz");
        quadrato.classList.add("green");
    } else if (i % 5 === 0) {           // se i è multiplo solo di 5            appendo in span     BUZZ
        quadrato.append("buzz");
        quadrato.classList.add("yellow");
    } else                              // se i non è ne multiplo ne di 3 e/o 5 appendo in span numero
        quadrato.append(i);
    
    // appendo span con risultato (numero/fizzbuzz/fizz/buzz) al contenitore
    contenitore.append(quadrato);

    // riporto in console l'HTML interno dello span
    console.log(quadrato.textContent);
}
