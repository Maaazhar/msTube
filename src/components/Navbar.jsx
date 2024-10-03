import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
// import { logo } from "../utils/constants"
import { SearchBar } from "."

const Navbar = () => (
  <Stack
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between"
    }}
    direction="row"
    alignItems="center"
    p={2}>
    <Link
      style={{ 
        display: "flex", 
        alignItems: "center" 
      }}
      to="/msTube/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="red"
        className="">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
      </svg>
    </Link>
    <SearchBar />
  </Stack>
)
export default Navbar