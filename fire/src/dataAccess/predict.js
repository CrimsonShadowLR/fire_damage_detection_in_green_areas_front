import axios from 'axios';

export function doPredict(path){
    let url = "http://localhost:8086/predict/";

    let body = {
        filepath : path
    }

    return axios.post(url, body)
}