"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQxNmUyOTk0NjU2NDc5NjcxYzUzYmEiLCJlbWFpbCI6InJvc2hhbGxAdW1hc3MuZWR1IiwiaWF0IjoxNzA4MjI4MjI3LCJleHAiOjE3MDgzMTQ2Mjd9.1q1wVD_yv1NN136l0PUPxLeTrQuunIuykLGbHnsJrZk"; // Replace with your actual token
axios_1["default"].get('http://localhost:8000/auth/user', {
    headers: {
        Authorization: "Bearer ".concat(token)
    }
})
    .then(function (response) {
    console.log(response.data);
})["catch"](function (error) {
    console.error(error.response.data);
});
