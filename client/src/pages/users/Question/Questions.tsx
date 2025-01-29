import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import useQuestions from "../../../hooks/useQuestions";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";



const Questions = () => {
  const theme = useTheme();
  const [activeOption, setActiveOption] = useState<string>("");
  const { trustScore, timeInHand } = useSelector(
    (state: RootState) => state.user
  );

  const { currentQuestion, fetchNextQuestion } = useQuestions();

  useEffect(() => {
    fetchNextQuestion("", "");
  }, []);

  const handleOptionClick = (quesId: string, option: string) => {
    setActiveOption(option);
    setTimeout(() => {
      fetchNextQuestion(quesId, option);
      setActiveOption("")
    }, 500);
  };

  if (!currentQuestion) {
    return <CircularProgress />;
  }

  return (
    <Stack
      bgcolor={"#000000"}
      padding="28px 24px"
      color={"#fff"}
      sx={{ minHeight: window.innerHeight }}
    >
      {/* Trust Percentage and Time */}
      <Stack
        direction={"row"}
        gap={"4px"}
        sx={{ borderRadius: "5px", overflow: "hidden" }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.primary.grey,
            padding: "12px",
            flex: "1",
          }}
        >
          <Typography fontWeight={"400"}>Trust Percentage</Typography>
          <Typography fontWeight={"800"} fontSize={"24px"} marginTop={"8px"}>
            {trustScore}%
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#fff",
            color: theme.palette.primary.grey,
            padding: "12px",
            flex: "1",
          }}
        >
          <Typography fontWeight={"400"}>Time In Hand</Typography>
          <Typography fontWeight={"800"} fontSize={"24px"} marginTop={"8px"}>
            {timeInHand}{" "}
            <span style={{ fontWeight: "400", fontSize: "1rem" }}>hours</span>
          </Typography>
        </Box>
      </Stack>

      {/* Question */}
      <Typography fontSize={"16px"} fontWeight={"700"} marginTop={"32px"} dangerouslySetInnerHTML={{__html:currentQuestion?.question}}>
        {/* {currentQuestion?.question} */}
      </Typography>

      {/* Options */}
      <Stack gap={"12px"} marginTop={"auto"} paddingTop={"32px"}>
        {currentQuestion?.options.map((option, index) => (
          <Stack
            key={index}
            direction={"row"}
            minHeight={"112px"}
            border={"1px solid #54545680"}
            onClick={() =>
              handleOptionClick(currentQuestion?.quesId, option.option)
            }
            sx={{
              borderWidth: "1px 1px 1px 0",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
             
            }}
          >
            <Box
              position={"absolute"}
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: theme.palette.primary.red,
                zIndex: "1",
                transition:"all 0.3s ease",
                transform:
                  option.option === activeOption
                    ? "translateX(0%)"
                    : "translateX(-100%)",
              }}
            />
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              minHeight={"100%"}
              minWidth="60px"
              borderRadius={"5px"}
              sx={{
                background:
                  "linear-gradient(90deg, #D9D9D9 0%, #000000 94.65%)",
              }}
            >
              <Typography fontSize={"24px"} fontWeight={"700"} zIndex={"2"}>
                {option.option}
              </Typography>
            </Stack>
            <Stack justifyContent={"center"}>
              <Typography margin={"auto 0"} zIndex={"2"} dangerouslySetInnerHTML={{__html:option.optionText}}>
                {/* {option.optionText} */}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Questions;
