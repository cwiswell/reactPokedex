import axios from 'axios';

const CACHE_PREFIX = "pokeapi-ts-wrapper-";

export default class PokeApiService {
    apiPrefix: string = 'https://pokeapi.co/api/v2';

    getPokemon = (name: string | null) => {
        if (name === null) {
            return;
        }
        
        axios.get(`${this.apiPrefix}/pokemon/${name}`)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}
