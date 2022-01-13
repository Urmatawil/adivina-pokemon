import pokeAPI from '@/api/pokemonApi'

//generamos un arreglo con 4 números aleatorios del 1 al 650
const randomPoke = async () => {
    let randomPokemons = []

    while (randomPokemons.length < 4) {
        let num = Math.trunc(Math.random() * 650);
        if (!randomPokemons.includes(num)) {
            randomPokemons.push(num + 1)
        }
    }
    const pokemons = await pokeNames(randomPokemons)
    return pokemons
}

//desestructuramos y generamos las rutas con axios
const pokeNames = async ([a, b, c, d] = []) => {
    const promiseArr = [
        pokeAPI.get(`/${a}`),
        pokeAPI.get(`/${b}`),
        pokeAPI.get(`/${c}`),
        pokeAPI.get(`/${d}`)
    ]
    //usamos Promise.all para resolver las 4 promesas
    const [p1, p2, p3, p4] = await Promise.all(promiseArr)

    //Devolvemos el resultado de las 4 promesas
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }
    ]
}

export default randomPoke