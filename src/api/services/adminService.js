import axiosClient from "../axiosClient";

const BASE = "/v1/admin";

export const fetchAdminDashboard = () =>
  axiosClient.get(`${BASE}/dashboard`);

export const fetchAllUsers = () =>
  axiosClient.get(`${BASE}/all-users`);

export const createInstructor = () =>
  axiosClient.post(`${BASE}/create-instructor`);
