import axios from 'axios';

export const GET = requestWrapper('GET');
export const POST = requestWrapper('POST');
export const PUT = requestWrapper('PUT');
export const DELETE = requestWrapper('DELETE');

function requestWrapper(method) {
    return (url, params, data, executor, headers) => {
        console.log(localStorage.getItem('token'))

        const body = data ? data : null;
        const uriParams = params ? {params: JSON.stringify(params)} : null;
        const initialRequestData = {
            url: url,
            method: method,
            params: uriParams,
            data: body,
            headers: addAuthHeader(headers)
        };
        console.log(initialRequestData)
        return axios(initialRequestData).then(function (response) {
            return parseDataJSON(response)
        }).catch(function(error){
          console.log(error)
          return error;
        })
    }
}

function addAuthHeader(headers){
    const composed = headers?headers:{}
    if (localStorage.getItem('token')!=null){
        composed['Authorization']=localStorage.getItem('token');
    }
    return composed
}

function parseDataJSON(res) {
    const {data} = res;
    return data;
}