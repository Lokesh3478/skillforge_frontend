import axios from "axios";
import { BASE_URL } from "./config";
import requestInterceptor from "./interceptors/requestInterceptor";
import responseInterceptor from "./interceptors/responseInterceptor";

const axiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

axiosClient.interceptors.request.use(requestInterceptor);
axiosClient.interceptors.response.use(
    response => response,
    responseInterceptor
);

export default axiosClient;
