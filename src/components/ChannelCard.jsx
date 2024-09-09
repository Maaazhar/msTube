/* eslint-disable react/prop-types */
import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { demoProfilePicture } from "../utils/constants"
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  console.log(channel);

  return (
    <Box sx={{
      width: { xs: '100%', sm: '358px', md: "320px" },
      height: "326px",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px",
      boxShadow: "none"
    }}>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff"
        }}>
          <CardMedia
            image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channel?.snippet?.title}
            sx={{
              width: 180,
              height: 180,
              mb: 2,
              border: "1px solid #e3e3e3",
              borderRadius: "50%"
            }} />
          <Typography
            variant="subtitle"
            fontWeight="bold"
            color="#fff">
            {channel?.snippet?.title}
            <CheckCircle sx={{
              ml: "5px",
              fontSize: 14,
              color: "gray"
            }} />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                color: "gray"
              }}>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} subscribers.
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard