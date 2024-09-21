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
        background: "#0a0a0a",
        boxShadow: "none",
        boxSizing: "border-box",
        border: "1px solid #99999955",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        '&:hover': {
          background: "#1e1e1e",
          border: "1px solid #1e1e1e",
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
        height: "80px",
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
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
          sx={{ width: "fit-content", border:"1px solid red", }}>
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
                background: "#2e2e2e",
                color: "#bbb"
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