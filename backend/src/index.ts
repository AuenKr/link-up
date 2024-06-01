import express from "express";
import dotenv from "dotenv";
import {
  getAllUsersRoute,
  getSingleUser,
  onboardingRoute,
  saveUserRoute,
  updateUserIndustriesRoute,
  updateUserSkillsRoute,
} from "./routes/userRoutes";
const cors = require("cors");
import mentorRoutes from "./routes/mentorRoutes";
import { getUserProfile } from "./controllers/userController";
import { getAllPostRoute } from "./routes/postRoute";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "Server is fine",
  });
});

app.use("/api/mentor", mentorRoutes);
app.use("/api/onboarding", onboardingRoute);

app.use("/api/profile/:username", getUserProfile);
// /users
app.use(getAllUsersRoute);

// get single user
app.use("/api/user", getSingleUser);

// get all posts
app.use("/api/posts", getAllPostRoute);

// save-user
app.use(saveUserRoute);

//edit-user
app.use(onboardingRoute);

// skills
app.use(updateUserSkillsRoute);

// industries
app.use(updateUserIndustriesRoute);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
