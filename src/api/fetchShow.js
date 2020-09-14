import axios from 'axios'

export const fetchEpisodes = () => {
    return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(err => {
        console.log('Hold on a sec, fetching data...', err.message)
    })
}