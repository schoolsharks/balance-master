import { ArrowBackIos } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import QR_CODE from "../../../assets/qr-code/qr-code.webp"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Header = () => {
  const {livePlayers,gameCompletion}=useSelector((state:RootState)=>state.admin)
  const theme = useTheme();
  const navigate=useNavigate();
  const handleBack=()=>{
    navigate("/admin/home")
  }
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"} gap={"18px"}>
        <Stack direction={"row"} gap={"20px"}>
          <IconButton onClick={handleBack} sx={{ height: "max-content",position:"absolute",transform:"translateX(-90%) translateY(5px)" }}>
            <ArrowBackIos sx={{ color: "#fff" }} />
          </IconButton>
          <Box>
            <Typography fontSize={"30px"} fontWeight={"800"}>
              Balance Master
            </Typography>
            <Typography
              fontSize={"20px"}
              fontWeight={"500"}
              sx={{ opacity: 0.58 }}
            >
              Dashboard
            </Typography>
          </Box>
          <img src={QR_CODE} alt="QR_CODE" style={{height:"64px",borderRadius:"5px",margin:"auto"}}/>
        </Stack>
        <Stack
          direction={"row"}
          gap={"6px"}
          borderRadius={"5px"}
          overflow={"hidden"}
          height={"max-content"}
        >
          <Box
            padding={"8px 12px"}
            width={"200px"}
            bgcolor={theme.palette.primary.grey}
          >
            <Typography fontSize={"15px"} fontWeight={"400"}>
              Game Completion
            </Typography>
            <Typography fontSize={"22px"} fontWeight={"800"}>
              {gameCompletion.toFixed()}%
            </Typography>
          </Box>
          <Box padding={"8px 12px"} width={"200px"} bgcolor={"#fff"} color={"#000"}>
            <Typography fontSize={"15px"} fontWeight={"400"}>
              Live Players in Session
            </Typography>
            <Typography fontSize={"22px"} fontWeight={"800"}>
              {livePlayers}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Box height={"2px"} bgcolor={"#FF0000"} borderRadius={"10px"} marginTop={"20px"}/>
    </>
  );
};

export default Header;
