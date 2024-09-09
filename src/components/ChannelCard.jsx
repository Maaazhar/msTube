/* eslint-disable react/prop-types */
import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { demoProfilePicture } from "../utils/constants"
import { Link } from "react-router-dom";

const ChannelCard = ({ channel: { id: { channelId }, snippet } }) => {
  console.log(snippet);

  return (
    <Box sx={{
      borderRadius: "20px",
      boxShadow: "none"
    }}>
      <Link to={channelId && `/channel/${channelId}`}>
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff"
        }}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={snippet?.title}
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
            {snippet?.title}
            <CheckCircle sx={{
              ml: "5px",
              fontSize: 14,
              color: "gray"
            }} />
          </Typography>
          {}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard