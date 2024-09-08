import { Box, Stack } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Videos = ({ videos }) => {
  console.log(videos);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}>
      {videos.map((index, item) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channel={item}/>}
          {item.id.videoId && <VideoCard video={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos