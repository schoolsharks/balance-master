import { Stack, Typography, useTheme } from "@mui/material";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const FeedbackAnalysis = () => {
  const theme = useTheme();
  const {feedbackAnalysis}=useSelector((state:RootState)=>state.admin)


  return (
    <Stack border={"1px solid #ffffff"} borderRadius={"10px"} padding="25px">
      <Typography fontSize={"20px"} fontWeight={"700"} marginBottom={"32px"}>
        {feedbackAnalysis[0]?.question}
      </Typography>
      {feedbackAnalysis[0]?.options.map((item, index) => (
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          key={index}
          direction={"row"}
          bgcolor={"#fff"}
          borderRadius={"10px"}
          height={"94px"}
          margin={"5px 0"}
          padding="14px"
          gap={"16px"}
        >
          <Typography fontWeight={"600"} color="#000">
            {item.option}
          </Typography>
          <Stack
            justifyContent={"center"}
            bgcolor={theme.palette.primary.grey}
            padding={"7px 16px"}
            borderRadius={"6px"}
          >
            <Typography fontSize={"18px"} fontWeight={"700"} color="#ffffff">
              {item.percentage.toFixed()}%
            </Typography>
          </Stack>
        </Stack>
      ))}
      <Stack
        marginTop={"28px"}
        justifyContent={"space-between"}
        minHeight={"140px"}
        padding={"12px"}
        bgcolor={theme.palette.primary.red}
        flex={"1"}
        borderRadius={"10px"}
      >
        <Typography fontSize={"14px"} fontWeight={"700"}>
          As on 31st of Jan
        </Typography>
        <Typography fontSize={"32px"} fontWeight={"700"}>
          8%{" "}
          <span style={{ fontWeight: "400", fontSize: "1rem" }}>
            were active on Insights
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeedbackAnalysis;
