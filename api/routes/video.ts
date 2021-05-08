import express, { Router, Request, Response } from "express"
import { readData } from "../libs/utils"
import { fileName } from "../libs/constants"

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  try {
    return readData(fileName.videos, "VIDEO", res)
  } catch (error) {
    console.log(error)
  }
})

export default router
