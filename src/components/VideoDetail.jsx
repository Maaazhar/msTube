import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  // if(!videoDetail?.snippet) return <Loader />;

  // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{
            width: "100%",
            position: "sticky",
            top: "86px"
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography
              variant="h5"
              p={2}
              color="#fff"
              fontWeight="300">
              {videoDetail?.snippet.title}
              {/* {title} */}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail