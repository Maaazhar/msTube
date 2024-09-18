/* eslint-disable react/prop-types */
import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoUrl, demoVideoTitle } from "../utils/constants"
import { Link } from "react-router-dom";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(snippet);

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: "320px" },
        m: "10px",
        borderRadius: "5px",
        background: "#1e1e1e",
        boxShadow: "none",
        boxSizing: "border-box",
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
            variant="subtitle2"
            fontWeight="bold"
            color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{
              ml: "5px",
              fontSize: 12,
              color: "gray"
            }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard