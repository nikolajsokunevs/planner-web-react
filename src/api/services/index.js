import {GET} from "../utils/";

const BASE_URL='http://localhost:8080/';

const getAllEvents=()=>{
    return GET(BASE_URL+'myapp/event/all')
}

export default{
    getAllEvents
}