import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [recommendedVideos, setRecommendedVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRecommendedVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{
            width: "100%",
            position: "sticky",
            top: "86px"
          }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls />
            <Typography
              variant="h5"
              p={0.5}
              color="#fff"
              fontWeight="300"
              sx={{
                display: '-webkit-box',
                mt: "10px",
                ml: "10px",
                textOverflow: 'ellipsis',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
              {title}
            </Typography>
            <Stack
              py={1}
              px={2}
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }} >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: 'h6' }}
                  color="#fff" >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                      ml: "5px"
                    }} />
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="20px"
                alignItems="center">
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center" >
          <Videos
            videos={recommendedVideos}
            direction="column" />
        </Box>
      </Stack >
    </Box >
  )
}

export default VideoDetail