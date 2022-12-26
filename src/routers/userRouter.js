import express from "express";
import { user, userId, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", user);
userRouter.get("/:id(\\d+)", userId);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
