/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard } from "./";
import { hover } from "../utils/constants";

const Videos = ({ videos, direction }) => {
  // console.log(videos);
  // console.log(hover);

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
    // gap={3}
    >
      {videos?.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard
            channel={item}
            marginTop="10px"
            marginInline={{xs:"0px", sm : "10px", md : "10px"}}
            background="#0a0a0a"
            border="1px solid #99999955"
            hover={hover} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos