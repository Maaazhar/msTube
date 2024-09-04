import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Box } from '@mui/material'
import { Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail } from './components'

const App = () => (
  <Router>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </Router>
)

export default App
