const palavras = ['banana', 'arara', 'maça', 'ovo']

const palavrasPalindromas = palavras.filter((p) => p.split("").reverse().join("") === p)

console.log(palavrasPalindromas)