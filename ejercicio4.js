/*

4. Suma de todos los elementos

Dada una matriz de enteros, calcula la suma de todos los números.

*/

const array = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8]
]

const sumaTotal = (arr) => {
    let res = 0

    arr.forEach(fila => {
        fila.forEach(valor => {
            res += valor 
        })
    });

    return res
}

console.log(sumaTotal(array))