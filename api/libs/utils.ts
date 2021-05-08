import fs from "fs"
import path from "path"
import { Response } from "express"

export const readData = (file: string, type: "PLAYLIST" | "VIDEO", response: Response) => {
  const dataPath = path.join(__dirname, "../data", file)
  fs.readFile(dataPath, "utf8", (error, data) => {
    if (error) {
      console.log(error)
      return
    }
    switch (type) {
      case "PLAYLIST": {
        // @ts-ignore
        response.send(JSON.parse(data.substring(18, data.length-1)))
      }
      case "VIDEO": {
        // @ts-ignore
        response.send(JSON.parse(data.substring(16, data.length-1)))
      }
      default: return null
    }
  })
}
