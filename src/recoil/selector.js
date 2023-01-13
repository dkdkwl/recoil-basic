import { selector } from "recoil";
import { api } from "./api";

const API_KEY = process.env.REACT_APP_API_KEY;
export const movieData = selector({    
    key : 'getApi',
    default : [],
    get : async ({get})=>{
        const popular = await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const rated = await api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upcoming = await api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        const [popularData,ratedData,upcomingData] = await Promise.all([popular,rated,upcoming]);
        
        console.log("popularData",popularData);
        console.log("ratedData",ratedData);
        console.log("upcomingData",upcomingData);
        return {popularData,ratedData,upcomingData};
    }
});