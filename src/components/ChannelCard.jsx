/* eslint-disable react/prop-types */
import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { demoProfilePicture } from "../utils/constants"
import { Link } from "react-router-dom";

const ChannelCard = ({ channel, marginTop }) => {
  channel?.statistics && console.log("ChannelCard:", channel);

  return (
    <Box sx={{
      width: { xs: '100%', sm: '358px', md: "320px" },
      height: "326px",
      mt: marginTop,
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "0",
      boxShadow: "none"
    }}>
      <Link to={`/channel/${channel?.id?.channelId || channel?.id}`}>
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff"
        }}>
          <Box sx={{
            p: 1.5,
            background: "#000",
            borderRadius: "50%"
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
          </Box>
          <Typography
            variant="subtitle"
            fontWeight="bold"
            color="#fff"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "20px"
            }}>
            {channel?.snippet?.title}
            <CheckCircle sx={{
              ml: "5px",
              fontSize: 18,
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