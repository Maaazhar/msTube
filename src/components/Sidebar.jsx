import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

// eslint-disable-next-line react/prop-types
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <div>
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        zIndex: "1",
      }}>
      {categories.map((category, i) => (
        <button
          key={i}
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#fc1503",
            color: "white"
          }}>
          <span style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px"
          }}>
            {category.icon}
          </span>
          <span style={{
            opacity: category.name === selectedCategory ? "1" : "0.7"
          }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  </div>
)

export default Sidebar