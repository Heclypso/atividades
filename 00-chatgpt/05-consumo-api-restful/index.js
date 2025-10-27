const apiGet = async (url) => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Erro no fetch: ${res.status}`)
    }

    return res.json()
}

const loadProducts = async () => {
    try {
        const products = await apiGet('https://dummyjson.com/products')
        console.log(products)
    } catch (error) {
        console.log(error.message)
    }
}

loadProducts()