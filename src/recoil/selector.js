import axios from "axios";
import { selector } from "recoil";

const API_KEY = process.env.REACT_APP_API_KEY;
export const getApi = selector({    
    key : 'getApi',
    default : [],
    get : async ({get})=>{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const popularData = response.data.results;
        console.log(popularData);
        return popularData;
    }
});