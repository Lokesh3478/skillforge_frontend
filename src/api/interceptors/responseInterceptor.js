export default function responseInterceptor(error) {
    if (error.response) {
        const { status } = error.response;

        if (status === 401) {
            console.error("Unauthorized → redirecting to login...");
            window.location.href = "/login";
        }

        if (status === 403) {
            console.error("Forbidden");
        }
    }
    return Promise.reject(error);
}
