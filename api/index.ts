import express from 'express';
import { readData } from "./libs/utils"
import { fileName } from "./libs/constants"

const playlists = readData(fileName.playlists, "PLAYLIST")
// const videos = readData(fileName.videos, "VIDEO")
console.log("Playlists: ", playlists)
// console.log("Videos: ", videos)

const app = express();
const PORT = 8000;
app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
