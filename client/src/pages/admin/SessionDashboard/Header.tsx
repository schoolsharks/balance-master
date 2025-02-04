import { ArrowBack } from "@mui/icons-material"
import { Box, IconButton, Stack, Typography } from "@mui/material"

const Header = () => {
  return (
    <Stack direction={"row"}>
        <Stack direction={"row"}>
            <IconButton sx={{height:"max-content"}}><ArrowBack sx={{color:"#fff"}}/></IconButton>
            <Box>
                <Typography fontSize={"30px"} fontWeight={"800"}>Balance Master</Typography>
                <Typography fontSize={"20px"} fontWeight={"500"} sx={{opacity:0.58}}>Dashboard</Typography>

            </Box>
        </Stack>
        <Stack></Stack>
    </Stack>
  )
}

export default Header
