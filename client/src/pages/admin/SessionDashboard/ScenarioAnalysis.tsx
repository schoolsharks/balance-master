import { Stack, Typography, useTheme } from "@mui/material";

const ScenarioAnalysis = ({
  scenarioNumber,
  scenarioText,
  optimalPercent,
}: {
  scenarioNumber: number;
  scenarioText: string;
  optimalPercent: number;
}) => {
  const theme = useTheme();
  return (
    <Stack
      height={"100%"}
      bgcolor={"#fff"}
      borderRadius={"10px"}
      color={"#000000"}
      padding={"25px"}
      justifyContent={"space-between"}
      minHeight={"600px"}
    >
      <Stack>
        <Typography fontWeight={"800"} fontSize={"20px"}>
          Scenario {scenarioNumber}
        </Typography>
        <Typography fontSize={"18px"} fontWeight={"700"} marginTop={"55px"}>
          {scenarioText}
        </Typography>
      </Stack>

      <Stack>
        <Stack>
          <Stack
            
            justifyContent={"center"}
            height={"60px"}
            borderRadius={"5px"}
            bgcolor={theme.palette.primary.red}
            width={`${optimalPercent}%`}
            padding={"8px"}
          >
            <Typography fontSize={"25px"} color="#ffffff" fontWeight={"700"} sx={optimalPercent<10?{color:"#000",transform:"translateX(140%)"}:{}}>
              {optimalPercent.toFixed()}%
            </Typography>
          </Stack>
        </Stack>
        <Typography fontWeight={"500"} marginTop={"10px"}>Optimal Choice (Group)</Typography>
      </Stack>
    </Stack>
  );
};

export default ScenarioAnalysis;
