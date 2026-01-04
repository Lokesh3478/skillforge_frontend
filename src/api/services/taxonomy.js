import axiosClient from "../axiosClient";
const BASE_URL = "/v1/taxonomy";
export const fetchAllTopics = () => {
  return axiosClient.get(`${BASE_URL}/topics`);
};