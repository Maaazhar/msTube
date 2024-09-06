import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

const selectedCategory = "New";
const Sidebar = () => (
  <div>
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%"
        },
        flexDirection: { md: "column" }
      }}>
        {categories.map((category, i) => (
          <button
          key={i}
          className="category-btn" 
          style={{
            background: category.name === selectedCategory && "#fc1503", 
            color: "white"
          }}>
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
    </Stack>
  </div>
)

export default Sidebar