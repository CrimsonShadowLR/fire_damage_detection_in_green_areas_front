import axios from 'axios';

export function doCheckFiles(path){
    let url = "http://localhost:8086/checkFiles/?name=" + path;

    return axios.get(url)
}