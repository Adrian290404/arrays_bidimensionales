/* 

3. Recorrer una matriz

Crea una función que reciba una matriz y muestre todos sus elementos en consola, uno por uno.

*/

const array = [
    [1, 2, 3],
    [4, 5, 6]
]
const random = [
    [8, 7],
    [6, 5],
    [4, 3],
    [2, 1]
]

const showArray = (arr) => {
    let res = ""

    arr.forEach(fila => {
        fila.forEach(valor => {
            res == "" ? (res = valor) : (res = res + ", " + valor);
        })
    });

    console.log(res)
}

showArray(array)
showArray(random)