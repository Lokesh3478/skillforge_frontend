import axiosClient from "../axiosClient";
const COURSE_BASE = "/v1/courses";

export const fetchAllCourses = (params) => {
    return axiosClient.get(`${COURSE_BASE}`, { params });
}
export const fetchCoursesByTopic = (topicId, params) => {
    return axiosClient.get(`${COURSE_BASE}/topic/${topicId}`, { params });
}
console.log("Course API loaded"+import.meta.env.VITE_API_BASE_URL);