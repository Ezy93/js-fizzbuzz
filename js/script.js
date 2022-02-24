let fizz = "Fizz"
let buzz = "Buzz"



/* ciclo for che incrementa il valore dell'indice di uno per ogni ciclo compiuto partendo da 0 */
for( let i = 0; i < 101; i++ ){
    
    /* dichiarazione condizionale nella quale diciamo allo script di stampare nella console le variabili fizz e buzz se l'indice è divisibile sia per 3 che per 5  */
    if(i % 3 == 0 && i % 5 == 0){

        console.log(fizz + buzz)
    /* dichiarazione condizionale nella quale diciamo allo script di stampare nella console le variabili fizz  se l'indice è divisibile per 3*/
    }else if (i % 3 == 0){

        console.log(fizz)
    /* dichiarazione condizionale nella quale diciamo allo script di stampare nella console le variabili  buzz se l'indice è divisibile  per 5  */
    }else if (i % 5 == 0){

        console.log(buzz)

    }else{

        console.log(i)
    
    }
};