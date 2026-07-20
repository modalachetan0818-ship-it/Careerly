import { Router } from "express";
import { getHomeContent, getCompanyInfo } from "../controllers/siteController.js";

export const siteRouter = Router();

siteRouter.get("/home", getHomeContent);
siteRouter.get("/company", getCompanyInfo);
