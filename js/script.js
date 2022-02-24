let fizz = "Fizz"
let buzz = "Buzz"

const divAll = document.getElementById("all");
const divPerTaF = document.getElementById("for-five-three")
const divPerT = document.getElementById("for-three")
const divPerF = document.getElementById("for-five")

/* ciclo for che incrementa il valore dell'indice di uno per ogni ciclo compiuto partendo da 0 */
for( let i = 0; i < 101; i++ ){
    
    /* dichiarazione condizionale nella quale diciamo allo script di stampare nella console le variabili fizz e buzz se l'indice è divisibile sia per 3 che per 5  */
    if(i % 3 == 0 && i % 5 == 0){
        let newDiv = document.createElement("div");
        newDiv.classList.add("box", "my-marg");
        newDiv.innerHTML = fizz + buzz + i;
        divPerTaF.append(newDiv)
        console.log(fizz + buzz + i);
    /* dichiarazione condizionale nella quale diciamo allo script di stampare nella console le variabili fizz  se l'indice è divisibile per 3*/
    }else if (i % 3 == 0){
        let newDiv = document.createElement("div");
        newDiv.classList.add("box", "my-marg");
        newDiv.innerHTML = fizz + i;
        divPerT.append(newDiv)
        console.log(fizz + i)
    /* dichiarazione condizionale nella quale diciamo allo script di stampare nella console le variabili  buzz se l'indice è divisibile  per 5  */
    }else if (i % 5 == 0){
        let newDiv = document.createElement("div");
        newDiv.classList.add("box", "my-marg");
        newDiv.innerHTML = buzz + i;
        divPerF.append(newDiv)
        console.log(buzz + i)

    }else{
        let newDiv = document.createElement("div");
        newDiv.classList.add("box", "my-marg");
        newDiv.innerHTML =i;
        divAll.append(newDiv)
        console.log(i)
    
    }
};