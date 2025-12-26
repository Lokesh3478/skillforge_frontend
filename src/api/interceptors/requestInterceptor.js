import { getToken } from "../../utils/token";

export default function requestInterceptor(config) {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}
