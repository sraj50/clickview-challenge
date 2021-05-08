import express from 'express'
import playlistRouter from "./routes/playlist"
import videoRouter from "./routes/video"

const app = express();
const PORT = 8000;

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));
app.use("/playlist", playlistRouter)
app.use("/video", videoRouter)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
