import { GET, POST } from "../utils/";

const BASE_URL = "http://localhost:8080/";

const getAllEvents = () => {
  return GET(BASE_URL + "myapp/event/all");
};

const createEvent = event => {
  return POST(BASE_URL + "myapp/event/add", null, event);
};

const login = loginDetails => {
  return POST(BASE_URL + "myapp/user/signIn", null, loginDetails);
};

const createAccount = accountDetails => {
  return POST(BASE_URL + "myapp/user/signUp", null, accountDetails);
};

export default {
  getAllEvents,
  createEvent,
  login,
  createAccount
};
