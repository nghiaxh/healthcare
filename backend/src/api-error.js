class ApiError extends Error {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }
}

export default ApiError;