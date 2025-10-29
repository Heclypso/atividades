const numeros = ['1', '2', '3', '4', '5']

const somarNumerosPares = () => {
    const numerosPares = numeros.filter((n) => n % 2 === 0)
    console.log(numerosPares)
}

somarNumerosPares()

