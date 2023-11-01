import axios from "axios";

const API_KEY= "d423dc476a5e7c2559dab6541f8dd4dc"
const API_BASE_URL= "https://api.themoviedb.org/3";

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_KEY}
})

export const searchMovies = async(query: string) => {
    try{
        const response = await client.get("/search/movie",{
            params: {query,},
        });

        if(response.data && response.data.results){
            return response.data.results;
        }else{
            console.error("culdn't get the data");
        }
    }catch(error){
        console.error(error);
        return[];
    }
}