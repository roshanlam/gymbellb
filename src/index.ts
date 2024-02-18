import express from "express";
import { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "./models/User";
import { MainUser, TargetUser } from "./interfaces";

const app: Application = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT: number = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome To GymBell's API </h1>");
});

app.post("/auth/register", async (req, res) => {
  try {
    const user = req.body;
    const { email, password } = user;
    const isEmailAllReadyExist = await User.findOne({
      email: email,
    });

    if (isEmailAllReadyExist) {
      res.status(400).json({
        status: 400,
        message: "Email all ready in use",
      });
      return;
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });


    // Send the newUser as  response;
    res.status(200).json({
      status: 201,
      success: true,
      message: " User created Successfully",
      user: newUser,
    });
  } catch (error: any) {
    // console the error to debug
    console.log(error);

    // Send the error message to the client
    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const user = req.body;
    const { email, password } = user;
    const isUserExist = await User.findOne({
      email: email,
    });

    if (!isUserExist) {
      res.status(404).json({
        status: 404,
        success: false,
        message: "User not found",
      });
      return;
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      isUserExist?.password as string
    );

    if (!isPasswordMatched) {
      res.status(400).json({
        status: 400,
        success: false,
        message: "wrong password",
      });
      return;
    }
    const token = jwt.sign(
      { _id: isUserExist?._id, email: isUserExist?.email },
      "YOUR_SECRET",
      {
        expiresIn: "1d",
      }
    );

    // send the response
    res.status(200).json({
      status: 200,
      success: true,
      message: "login success",
      token: token,
    });
  } catch (error: any) {
    // Send the error message to the client
    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

app.post("/UserInfo", async (req, res) => {
  try {
    const info: MainUser = req.body;
    console.log(info);
    const user = await User.findOneAndUpdate(
      {_id: info._id },
      info,
      { new: true },
    )
    if (!user) {
      console.log(user);
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "User updated",
      user: user,
    });
    
  }
  catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        status: 400,
        message: error.message,
      });
    } else {
      // Handle cases where the error might not be an instance of Error
      return res.status(400).json({
        status: 400,
        message: "An unknown error occurred",
      });
    }
  }
  
  
});

app.get("/auth/user", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized",
      });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized - Token missing",
      });
    }
    const user = jwt.verify(token, "YOUR_SECRET");
    return res.status(200).json({
      status: 200,
      success: true,
      message: "User found",
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "Invalid token",
    });
  }
});

interface UserMatchingInfo {
  email: string;
}

const decomposedObjects = (object: any) =>  Object.entries(object).map(([key, value]) => {
  return { [key]: value };
});


app.get("/user/getBuddies", async (req, res) => {
  try{
    const MainUser = req.body;
    const UserInfo = await User.findOne({
      email: MainUser.email,
    });
    const targetUser = UserInfo?.targetUser;
    const matchingUsers = await User.find({
      $or: [
        ...decomposedObjects(targetUser)
      ],
      email: { $ne: MainUser.email }
    })
    if (!UserInfo) {
      res.status(404).json({
        status: 404,
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: "User found",
      user: matchingUsers,
    });
  } catch (error) {
    console.log(error);
  }
});

const DATABASE_URL = "mongodb+srv://gymbell:ItsSafeAndLit24@cluster0.yg4q8go.mongodb.net/?retryWrites=true&w=majority";
// Listen the server
app.listen(PORT, async () => {
  console.log(`🗄️  Server Fire on http:localhost//${PORT}`);
  try {
    await mongoose.connect(
      DATABASE_URL as string
    );
    console.log("🛢️  Connected To Database");
  } catch (error) {
    console.log("⚠️ Error to connect Database");
  }
});