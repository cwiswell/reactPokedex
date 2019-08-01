import axios from 'axios';
import Pokemon from '../interfaces/pokemon';
import Species from '../interfaces/species';

//const CACHE_PREFIX = "pokeapi-ts-wrapper-";
const apiPrefix: string = 'https://pokeapi.co/api/v2';

export default class PokeApiService {

    getPokemon = (name: string | null): Promise<Pokemon | null> | null => {
        if (name === null || name === "") {
            return null;
        }
        let parent = this;
        return axios.get<Pokemon>(`${apiPrefix}/pokemon/${name}`)
            .then(function (response) {
                let data = response.data;
                let promiseArray: Array<Promise<any>> = [];

                let speciesPromise = parent.getData<Species>(data.species.url);
                promiseArray.push(speciesPromise);

                speciesPromise.then(function(speciesData){
                    data.speciesData = speciesData;
                })

                return axios.all(promiseArray).then(function(){
                    return data;
                })
            })
            .catch(function (error) {
                console.log(error);
                return null;
            });
    }

    getData = <T extends {}>(url: string): Promise<T | null>  => {
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
