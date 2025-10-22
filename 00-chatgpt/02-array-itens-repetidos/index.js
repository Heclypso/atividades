const array = ['Uva', 'Maça', 'Uva', 'Laranja', 'Limão', 'Limão']

const set = new Set(array)

const arrayFiltrado = Array(...set)

console.log(arrayFiltrado)