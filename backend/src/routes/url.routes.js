import { Router } from "express";
import { redirectToFullUrl, shortUrl } from "../controller/url.controller.js";

export const router = Router()

router.post("/short-url", shortUrl)
router.get("/:id", redirectToFullUrl)