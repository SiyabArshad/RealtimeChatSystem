import axios from "./http";

const setAuthToken = (token,clientdata) => {
console.log(clientdata)
    if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
        axios.defaults.headers.common["clientid"] = clientdata?.clientID;

    } else {
        delete axios.defaults.headers.common["x-auth-token"];
        delete axios.defaults.headers.common["clientid"];
    }
};

export default setAuthToken;
