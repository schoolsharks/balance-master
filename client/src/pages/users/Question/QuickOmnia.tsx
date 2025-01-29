import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { useEffect, useState } from "react";
import useQuestions from "../../../hooks/useQuestions";
import { useNavigate } from "react-router-dom";

const QuickOmnia = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState<string>("");
  const {
    currentQuestion,
    quickOmniaCompleted,
    handleRespondQuickOmnia,
    handleFetchQuickOmnia,
  } = useQuestions();

  const handleOptionClick = (quesId: string, option: string) => {
    setActiveOption(option);
    setTimeout(()=>{
        handleRespondQuickOmnia(quesId, option);
        setActiveOption("")
    },300)
  };

  useEffect(() => {
    handleFetchQuickOmnia();
  }, []);

  return (
    <Stack
      sx={{
        minHeight: window.innerHeight,
        bgcolor: theme.palette.primary.grey,
      }}
    >
      <UpperTriangleBox sx={{ margin: "48px 24px" }}>
        <Stack color={"#fff"} marginTop={"-48px"} padding={"0 16px 48px"}>
          <Typography fontSize={"24px"} fontWeight={"700"}>
            Quick Omnia
          </Typography>
          <Typography fontSize={"16px"} fontWeight={"700"} marginTop={"32px"}>
            {currentQuestion?.question}
          </Typography>

          {/* Options */}
          <Stack gap={"12px"} marginTop={"32px"}>
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
                  position:"relative",
                  overflow:"hidden"
                }}
              >
                <Box
                  position={"absolute"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: theme.palette.primary.red,
                    zIndex: "1",
                    transition: "all 0.3s ease",
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
                  <Typography margin={"auto 0"} zIndex={"2"}>{option.optionText}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Button
            variant="outlined"
            disabled={!quickOmniaCompleted}
            onClick={() => navigate("/completed")}
            sx={{
              width: "max-content",
              textTransform: "none",
              borderRadius: "48px",
              fontSize: "20px",
              padding: "0 20px",
              height: "40px",
              marginTop: "20px",
              border: !quickOmniaCompleted ? "1px solid grey !important" : "",
              color: !quickOmniaCompleted ? "grey !important" : "",
            }}
          >
            Results
          </Button>
        </Stack>
      </UpperTriangleBox>
    </Stack>
  );
};

export default QuickOmnia;
