import { Box, Stack, Typography, useTheme } from "@mui/material";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const ChoicesDistrubution = () => {
  const theme = useTheme();
  const {choicesDistribution}=useSelector((state:RootState)=>state.admin)
  return (
    <Stack
      bgcolor={"#fff"}
      height={"100%"}
      borderRadius={"10px"}
      color={"#000"}
      padding="25px"
    >
      <Typography fontSize={"1.25rem"} fontWeight={"800"}>
        Optimal Choice
      </Typography>
      <Typography fontSize={"45px"} lineHeight={"45px"} fontWeight={"600"}>
        {choicesDistribution.optimal?.toFixed()}%{" "}
        <span style={{ fontSize: "15px", color: "#43474885" }}>
          Across 5 scenarios
        </span>
      </Typography>
      <Stack
        direction={"row"}
        marginTop={"20px"}
        borderRadius={"10px"}
        bgcolor={theme.palette.primary.grey}
        color={"#fff"}
        padding={"22px"}
        justifyContent={"space-around"}
        alignItems={"center"}
        flex={"1"}
        minHeight={"140px"}
      >
        <Box>
          <Typography fontSize={"30px"} fontWeight={"600"}>{choicesDistribution.suboptimal?.toFixed()}%</Typography>
          <Typography fontSize={"12px"} fontWeight={"600"}>Suboptimal</Typography>
        </Box>
        <Box height={"100%"} width="1px" bgcolor={"#FFFFFF7A"}/>
        <Box>
          <Typography fontSize={"30px"} fontWeight={"600"}>{choicesDistribution.acceptable?.toFixed()}%</Typography>
          <Typography fontSize={"12px"} fontWeight={"600"}>Acceptable</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ChoicesDistrubution;
