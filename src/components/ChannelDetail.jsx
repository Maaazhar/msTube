import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { ChannelCard, Videos } from "./"
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id])

  return (
    <Box>
    </Box>
  )
}

export default ChannelDetail