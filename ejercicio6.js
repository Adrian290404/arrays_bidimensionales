/* 

6. Matriz identidad

Crea una función que reciba un número n y genere una matriz identidad de tamaño n x n (ejemplo para n=3):

[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]

*/

const createArray = (n) => {
    let array = []
    
    for (let i = 0; i < n ; i++){
        let newArray = []

        for (let j = 0; j < n; j++) {
            i == j ? newArray.push(1) : newArray.push(0)
        }

        array.push(newArray)
    }

    return array
}

const showArray = (arr) => {
    arr.forEach(fila => 
        console.log(fila)
    )
}

showArray(createArray(2))
console.log("-----------------")
showArray(createArray(5))