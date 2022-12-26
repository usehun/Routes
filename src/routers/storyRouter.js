import express from "express";
import { number, edit, storyDelete } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", number);
storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/delete", storyDelete);

export default storyRouter;
