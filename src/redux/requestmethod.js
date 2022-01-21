import axios from "axios";

const URL="http://localhost:5000/api/"

export const publick = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  const TOKEN=JSON.parse(localStorage.getItem("applicationState")).user.currentuser.accessToken;
  console.log(TOKEN)
  
export const userRequest= axios.create({
    baseURL: URL,
    timeout: 1500,
    headers: {token: `Bearer ${TOKEN}`}
  });
  
  export const publicRequest= axios.create({
    baseURL: URL,
    timeout: 1500,
    headers: {token: `Bearer ${TOKEN}`}
  });
  export const fileupoad= axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });