import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: false,
  },
  sex: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  age_range: {
    type: String,
    required: false,
  },
  focus: {
    type: String,
    required: false,
  },
  nutrition: {
    type: String,
    required: false,
  },
  level: {
    type: String,
    required: false,
  },
  location: {
    type: Object,
    required: false,
  }
});

export const User = mongoose.model("User", UserSchema);