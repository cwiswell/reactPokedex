import axios from 'axios';

//const CACHE_PREFIX = "pokeapi-ts-wrapper-";
const apiPrefix: string = 'https://pokeapi.co/api/v2';

export default class PokeApiService {

    getPokemon = (name: string | null) => {
        if (name === null) {
            return;
        }

        return axios.get(`${apiPrefix}/pokemon/${name}`)
            .then(function (response) {
                let data = response.data;

                return data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return null;
            });
    }

    getData = (url: string) => {
        return axios.get(url)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return null;
            });
    }
}
