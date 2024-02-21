const arr = ["Marche", "Geromel", "Villasanti", "Carballo", "Du", "Pavon", "DC", "Soteldo"]
console.log(arr)

// Adicionar Elementos


// push (add no final)
arr.push("Cristaldo")
console.log(arr)

// unshift (add no começo)
arr.unshift("Cristaldo")
console.log(arr)


// Remover Elementos


// pop (remover no final)
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift (remover no comeco)
let primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)


// Pesquisar um elemento


// Includes (pesquisa elemento)
const inclui = arr.includes("Geromel")
console.log(inclui)

// indexOf (pesquisa a posicao do elemento)
const indice = arr.indexOf("Geromel")
console.log(indice)


// Cortar e Concatenar Arrays


// slice (copia parte do array)
const hobbits = arr.slice(1, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(outros)