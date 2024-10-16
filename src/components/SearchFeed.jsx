import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { useParams } from "react-router-dom"

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        height: "100%",
        flex: 2,
        overflowY: "auto"
      }}>
      <Typography
        variant="h4"
        fontWeight="bold" mb={2}
        sx={{
          color: "#fff"
        }}>
        Search result for <span style={{
          color: "#f31503"
        }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed