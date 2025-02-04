import express from "express"
import asyncHandler from "../../utils/asyncHandler"
import * as adminControllers from "../../controllers/admin"

const router=express.Router()

router.get("/current-session",asyncHandler(adminControllers.fetchCurrentSessionInfo))



export default router