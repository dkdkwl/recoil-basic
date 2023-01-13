import axios from "axios";


// axios 인스턴스를 만들 때 구성 기본 값 설정
export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});