/* 

1. Crear una matriz 2x2

Crea una matriz de 2 filas y 2 columnas con números enteros e imprímela en consola.

*/

const array = [ 
    [1, 2], 
    [3, 4] 
]
let res = ""

array.forEach(fila => {
    fila.forEach(valor => {
        res == "" ? (res = valor) : (res = res + ", " + valor);
    })
})

console.log(res)