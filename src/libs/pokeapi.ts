import axios from 'axios';
import Pokemon from '../interfaces/pokemon';

//const CACHE_PREFIX = "pokeapi-ts-wrapper-";
const apiPrefix: string = 'https://pokeapi.co/api/v2';

export default class PokeApiService {

    getPokemon = (name: string | null): Promise<Pokemon | null> | null => {
        if (name === null) {
            return null;
        }

        return axios.get(`${apiPrefix}/pokemon/${name}`)
            .then(function (response) {
                let data: Pokemon = response.data;

                return data;
            })
            .catch(function (error) {
                console.log(error);
                return null;
            });
    }

    getData = <T extends {}>(url: string): Promise<T> => {
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
