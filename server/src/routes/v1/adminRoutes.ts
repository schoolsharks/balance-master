import express from "express"
import asyncHandler from "../../utils/asyncHandler"
import * as adminControllers from "../../controllers/admin"

const router=express.Router()

router.get("/current-session",asyncHandler(adminControllers.fetchCurrentSessionInfo))
router.post("/reset-session",asyncHandler(adminControllers.resetSession))



export default router