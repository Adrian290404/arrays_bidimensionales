/*

5. Encontrar el mayor número

Dada una matriz de enteros, encuentra el número más grande.

*/

const array = [
    [6, 2, 7],
    [1, 2, 8],
    [3, 9, 4]
]

const showBiggest = (arr) => {
    let res
    arr.forEach(fila => {
        fila.forEach(valor => {
            res == undefined ? (res = valor) : (
                res < valor && (res = valor)
            )
        })
    })
    return res
}

console.log(showBiggest(array))