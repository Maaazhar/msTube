/* eslint-disable react/prop-types */
import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoUrl, demoVideoTitle } from "../utils/constants"
import { Link } from "react-router-dom";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  console.log(snippet);

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: "320px" },
        m: "10px",
        background: "#1e1e1e",
        boxShadow: "none",
        boxSizing: "border-box",
        border: "1px solid #000",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        '&:hover': {
          border: "1px solid #1e1e1e",
          transform: "scale(1.035)",
        }
      }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { xs: '100%', sm: '358px', md: "320px" },
            height: 180,

          }} />
      </Link>
      <CardContent sx={{
        height: "106px",
        // background: "#1e1e1e"
      }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography
            variant="subtitle"
            fontWeight="bold"
            color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="gray"
            mt={1}
            sx={{
              width: "fit-content",
              p: "0px 4px",
              borderRadius: "3px",
              transition: "all 0.3s ease-in-out",
              '&:hover': {
                background: "white",
                color: "#2a1010"
              }
            }}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{
              ml: "5px",
              fontSize: 12,
              color: "gray"
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
            {/* {parseInt(viewCount).toLocaleString()} views */}
          </Typography>
          <Typography
            variant="body1"
            sx={{ opacity: 0.7 }}>
            {/* {parseInt(likeCount).toLocaleString()} likes */}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default VideoCard