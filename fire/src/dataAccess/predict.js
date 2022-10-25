import axios from 'axios';

export function doPredict(path, satellite){
    let url = "http://localhost:9997/api/predict/";

    let body = {
        filepath : path,
        satellite: parseInt(satellite)
    }

    return axios.post(url, body)
}