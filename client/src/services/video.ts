export const useVideo = async () => {
  const data = await fetch("http://localhost:3000/videos", {
    method: "GET",
  })
  console.log(data)
}
