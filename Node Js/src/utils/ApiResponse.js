class ApiResponse{
    constructor(status, message, data="Success"){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode<400;
    }
}