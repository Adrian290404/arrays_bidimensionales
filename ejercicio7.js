/* 

7. Transponer una matriz

Dada una matriz rectangular, crea una nueva matriz que sea su transpuesta (intercambiar filas por columnas).

Ejemplo:

[
  [1, 2, 3],
  [4, 5, 6]
]


Debe transformarse en:

[
  [1, 4],
  [2, 5],
  [3, 6]
]

*/

const array = [
    [1, 2, 3],
    [4, 5, 6]
]

const random = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12]
]

const transpuesto = (arr) => {

    if (arr[0].length == arr[1].length){
        let res = []

        arr.forEach(fila => {
            fila.forEach((valor, indice) => {

                if (fila == arr[0]){
                    let newArray = [valor]
                    res.push(newArray)
                }

                else{
                    res[indice].push(valor)
                }
                
            })
        });

        console.log(res)
    }
    else{
        console.log("No es una matriz rectangular")
    }
}

transpuesto(array)
transpuesto(random)