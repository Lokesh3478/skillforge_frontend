import axiosClient from "../axiosClient";

const ADMIN_BASE = "/v1/admin";

const createInstructor = (data) => {
    return axiosClient.post(`${ADMIN_BASE}/`, data);
}