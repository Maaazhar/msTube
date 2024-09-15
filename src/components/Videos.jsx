/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  // console.log(videos);

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={3}>
      {videos?.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos