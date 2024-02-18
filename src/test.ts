import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQxNmUyOTk0NjU2NDc5NjcxYzUzYmEiLCJlbWFpbCI6InJvc2hhbGxAdW1hc3MuZWR1IiwiaWF0IjoxNzA4MjI4MjI3LCJleHAiOjE3MDgzMTQ2Mjd9.1q1wVD_yv1NN136l0PUPxLeTrQuunIuykLGbHnsJrZk"; // Replace with your actual token

axios.get('http://localhost:8000/auth/user', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.error(error.response.data);
});


/*
{
    "_id": "65d183091542a64bad76c244",
    "email": "roshanll@umass.edu",
    "name": "Roshan",
    "sex": "male",
    "country": "USA",
    "age_range": "18-30",
    "focus": "casual",
    "nutrition": "idk/idc",
    "level": "newbee"
}

*/