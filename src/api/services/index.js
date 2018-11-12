import {GET, POST} from "../utils/";

const BASE_URL='http://localhost:8080/';

const getAllEvents=()=>{
    return GET(BASE_URL+'myapp/event/all')
}

const getAllEvents=()=>{
    return GET(BASE_URL+'myapp/event/all')
}

const createEvent=(event)=>{
    return POST(BASE_URL+'myapp/event/add', null, event)
}

export default{
    getAllEvents,
    createEvent
}