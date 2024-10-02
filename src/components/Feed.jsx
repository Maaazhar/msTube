import { useEffect, useState } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" }
      }} >
      <Box
        sx={{
          height: { sx: "auto", md: "fit" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0,  }
        }} >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff"
          }}>
          Copyright 2024 @ MS Tube
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          height: "90vh",
          flex: 2,
          overflowY: "auto"
        }}>
        <Typography
          variant="h4"
          fontWeight="bold" mb={2}
          sx={{
            color: "#fff"
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