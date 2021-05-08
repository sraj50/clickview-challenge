import fs from "fs"
import path from "path"

export const readData = (file: string, type: "PLAYLIST" | "VIDEO") => {
  const dataPath = path.join(__dirname, "../data", file)
  fs.readFile(dataPath, "utf8", (error, data) => {
    if (error) {
      console.log(error)
      return
    }
    switch (type) {
      case "PLAYLIST": {
        // @ts-ignore
        return JSON.parse(data.substring(18, data.length-1))
      }
      case "VIDEO": {
        // @ts-ignore
        return JSON.parse(data.substring(15, data.length-1))
      }
      default: return null
    }
  })
}
