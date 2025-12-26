import axiosClient from "../axiosClient";

const AUTH_BASE = "/v1/auth";

export const authService = {
    register: (data) => axiosClient.post(`${AUTH_BASE}/register`, data),

    login: (data) => axiosClient.post(`${AUTH_BASE}/login`, data),

    logout: () => axiosClient.post(`${AUTH_BASE}/logout`)
};

export default authService;
