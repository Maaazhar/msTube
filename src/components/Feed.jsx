import { useEffect, useState } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        position: "relative",
        alignItems: "start",
        flexDirection: { sx: "column", md: "row" }
      }} >
      <Box
        sx={{
          position: "sticky",
          top: "0",
          px: { sx: 0, },
          height: { sx: "auto", md: "fit" },
          borderRight: "1px solid #3d3d3d",
          overflowY: "auto",
        }} >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mx: 0.5,
            my: 3,
            color: "#aaaaaaa5",
            textAlign: "center",
            overflow: "auto",
          }}>
          Copyright 2024 - {currentYear}
          <br /> @ msTube.
          <br /> Design & Development
          <br /> by <Typography
          variant="body2"
          sx={{
            display: "inline",
            color: "aaaaaaa5",
            '&:hover': {
                color: "red"
              }
          }}>
            <a
              style={{
                color: "inherit"
              }}
              target="_blank"
              href="https://mazharul-islam.web.app/">
              Mazharul Islam</a>
          </Typography>
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          // height: "90vh",
          flex: 2,
          overflowY: "auto"
        }}>
        <Typography
          variant="h4"
          fontWeight="bold" mb={2}
          sx={{
            color: "#fff",
            textAlign: "center",
          }}>
          {selectedCategory} <span style={{
            color: "#f31503"
          }}>
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed