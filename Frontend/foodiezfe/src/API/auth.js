

import instance from ".";
import { setToken } from "./storage"

const register = async (formData) => {
    console.log("first")
    const data = await instance.post("http://localhost:8080/api/auth/register"	, formData);
    localStorage.setItem("token", data.token);
    console.log("register data", data)
    return data;
};
const login = async (formData) => {
    const data = await instance.post("http://localhost:8080/api/auth/login", formData);
    localStorage.setItem("token", data.token);
    console.log("login data", data)
    return data;
};

export { register, login };