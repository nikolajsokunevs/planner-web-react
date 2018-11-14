import axios from 'axios';

export const GET = requestWrapper('GET');
export const POST = requestWrapper('POST');
export const PUT = requestWrapper('PUT');
export const DELETE = requestWrapper('DELETE');

function requestWrapper(method) {
    return (url, params, data, executor, headers) => {
        const body = data ? data : null;
        const uriParams = params ? {params: JSON.stringify(params)} : null;
        const initialRequetData = {
            url: url,
            method: method,
            params: uriParams,
            data: body,
            headers: headers
        };
        return axios(initialRequetData).then(function (response) {
            return parseDataJSON(response)
        }).catch(function(error){
          console.log(error)
          return error;
        })
    }
}

function parseDataJSON(res) {
    const {data} = res;
    return data;
}