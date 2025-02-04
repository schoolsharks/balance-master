import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import GameDescription from "../../../components/GameDescription";
import QR_CODE from "../../../assets/qr-code/qr-code.webp"


const Home = () => {
  const theme = useTheme();
  return (
    <Stack minHeight={window.innerHeight} bgcolor={"#000"} color={"#fff"} padding={"60px 120px"}>
        <Stack maxWidth={"1300px"} margin={"auto"}>
      <Stack direction={"row"} gap="120px"  width={"100%"} justifyContent={"space-around"}>
        <Stack flex={"1"} maxWidth={"600px"}>
          <GameDescription />
        </Stack>
        <Stack flex={"1"} maxWidth={"480px"} gap={"12px"}>
          <Stack
            direction={"row"}
            gap={"13px"}
            borderRadius={"5px"}
            overflow={"hidden"}
          >
            <Box padding={"12px"} bgcolor={theme.palette.primary.grey} flex={"1"}>
              <Typography fontSize={"1.25rem"} fontWeight={"400"}>Game Completion</Typography>
              <Typography fontSize={"30px"} fontWeight={"800"}>100%</Typography>
            </Box>
            <Box padding={"12px"} bgcolor={"#fff"} color={"#000"} flex={"1"}>
              <Typography fontSize={"1.25rem"} fontWeight={"400"}>Live Players in Session</Typography>
              <Typography fontSize={"30px"} fontWeight={"800"}>47</Typography>
            </Box>
          </Stack>
          <Stack flex={"1"}>
            <img src={QR_CODE} alt="" style={{width:"100%",borderRadius:"5px"}}/>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"} marginTop={"24px"}>
        <Button
          variant="outlined"
          sx={{
            width: "max-content",
            textTransform: "none",
            borderRadius: "48px",
            fontSize: "20px",
            padding: "0 28px",
            height: "40px",
            border: "2px solid #fff",
          }}
        >
          Next
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: "max-content",
            textTransform: "none",
            borderRadius: "48px",
            fontSize: "20px",
            padding: "0 28px",
            height: "40px",
            border: "2px solid #fff",
          }}
        >
          Reset
        </Button>
      </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
