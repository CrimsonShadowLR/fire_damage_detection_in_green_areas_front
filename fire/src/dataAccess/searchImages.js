import axios from 'axios';

export function doSearchImages(top, bottom, left, right,satellite) {
    let url = "http://localhost:9997/api/searchImages/";


    const body = {
        "top": parseFloat(top),
        "bottom": parseFloat(bottom),
        "left": parseFloat(left),
        "right": parseFloat(right),
        "satellite": parseInt(satellite)
    };

    return axios.post(url,body);
}