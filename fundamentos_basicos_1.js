/*
Obtén del 1 al 255: 
Escribe una función que devuelve un array con todos los números del 1 al 255.
*/
function arr(x){
     a = [];
    for (var i = 1; i <= x; i++){
        a.push(i);
    }
    return a;
}
console.log(arr(255));

/*Consigue pares hasta 1000: 
Escribe una función que entregue la suma de todos los números pares del 1 al 1000 -
 Puedes usar un operador de módulo para este ejercicio. 
*/
function y(){
    var x = 0;
    for (var i = 1; i <= 1000; i++){
        if ( i % 2 == 0){
            x = x + i;
        }
    
    }
    return x;
}
console.log (y());

/*Suma impares hasta 5000:
 Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
 */

function d(){
    var x = 0;
    for (var i = 1; i <= 5000; i++){
        if ( i % 2 != 0){
            x = x + i;
        }

    }
    return x;
}
console.log (d());



/*Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14)
*/
function sumarray (x){
    var c = 0
    for (var i = 0; i < x.length; i++){
        c = c + x [i];
    }
    return c;
}
a = [-5,2,5,12];
b = sumarray (a); 
console.log (b);

/*encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores 
(ej: para [1,3,5,7,20] el promedio es 7.2).

*/
function promedio (x){
    c = sumarray (x);
    return c / x.length;
}
a = [1,3,5,7,20];
b = promedio (a); 
console.log ("el promedio de :" + a)
console.log  ("es : "+ b);

/*Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50
 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’. 
 */

function imparray (){
    var x = [];
    for (var i = 1; i<= 50; i++){
        if ( i % 2 != 0){
            x.push (i);
        }

    }
    return x;
}  
console.log (imparray());

/*Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
*/

function mayor (arr,y){
    var sum = 0;
    for (var i = 0; i< arr.length; i++){
        if (arr[i] > y) {
            sum = sum +1;
        }
    }
    return sum;
}
console.log (mayor([1,3,5,7],3));

/*Cuadrados: Dado un array con múltiples valores,
 escribe una función que reemplace cada valor por el cuadrado del mismo valor
 (ej: [1,5,10,-2] será [1,25,100,4]).
 */

function cuadrado (arr){
    for ( var i= 0; i<arr.length; i++){
        arr [i]=arr[i]*arr[i];
    }
    return arr;
}
console.log (cuadrado ([1,5,10,-2]));

/*Negativos: Dado un array con múltiples valores,
 escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo,
el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
*/
 function negativo (arr){
    for (var i= 0; i<arr.length; i++){
        if (arr[i] > 0 ){
            arr = 0;
        }
    }
    return arr;
}
console.log (negativo([1,5,10,-2]) );

/*Max/Min/Avg: Dado un array con múltiples valores,
 escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original
 (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
 */

function minMaxAvg (arr){
    var min= arr[0];//almacena el valor menor.
    var max = arr[0];//almacena el valor mayor.
    var sum= arr[0]; // almacena la suma de todos los elementos del vector.
    for ( var i = 1; i<arr.length; i++){
        if( min > arr[i]){
            min = arr[i];
        }
        if ( max < arr[i]){
            max = arr [i];
        }
        sum = sum + arr[i];
    }
    var avg= sum / arr.length;//promedio 
    return [max,min,avg]
}
console.log (minMaxAvg([1,5,10,-2]));

/*Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array.
 La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
 */

function intercambio (arr){
    x = arr[0];
    arr [0] = arr [arr.length - 1];
    arr [arr.length - 1] = x;
    return arr;
}
console.log (intercambio ([1,5,10,-2]));


/*De Número a String: Escribe una función que tome un array de números y
 reemplace cualquier valor negativo por el string ‘Dojo’.
 Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
 */

function string (arr){
    for ( i=0; i<arr.length; i++)
        if (arr[i]<0){
            arr[i]= 'dojo';
        }
        return arr;
    
}
console.log (string([-1,-2,2]));
