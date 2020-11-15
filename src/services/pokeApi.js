function resolveFetch (url){
    const pokemonPromise = new Promise((resolve, reject)=> {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                reject(new Error('Network response was not ok'));
            } else {
                return response.json()
            } 
        })
        .then(data => resolve(data));
    });
    return pokemonPromise;
}

export async function getAllPokemon (){
    return resolveFetch('pokemons.json');
}

export async function getPokemonDetails (url){
    return resolveFetch(url);
}
