import axios from "axios";

function Api (){
      const baseURL = "http://localhost:3004/";
      const AxiosClient = axios.create({
        baseURL: baseURL,
      });
      return AxiosClient;
}

export default Api;