import { Button, Stack, Typography } from "@mui/material";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { useEffect, useState } from "react";
import useQuestions from "../../../hooks/useQuestions";
import { useNavigate } from "react-router-dom";
import { Check } from "@mui/icons-material";

const QuickOmnia = () => {
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState<string>("");
  const [responded,setResponded]=useState(false)
  const {
    currentQuestion,
    // quickOmniaCompleted,
    handleRespondQuickOmnia,
    handleFetchQuickOmnia,
  } = useQuestions();

  const handleOptionClick = (quesId: string, option: string) => {
    setActiveOption(option);
    handleRespondQuickOmnia(quesId, option);
    setResponded(true)
  };

  useEffect(() => {
    handleFetchQuickOmnia();
  }, []);

  return (
    <Stack
      sx={{
        minHeight: window.innerHeight,
        bgcolor: "#fff",
      }}
    >
      <UpperTriangleBox sx={{ margin: "48px 24px", borderRadius: "20px" }}>
        <Stack color={"#fff"} marginTop={"-48px"} padding={"0 16px 48px"}>
          <Typography fontSize={"24px"} fontWeight={"700"}>
            Placeholder
          </Typography>
          <Typography fontSize={"18px"} fontWeight={"700"} marginTop={"32px"}>
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
                  borderWidth: "1px",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  minHeight={"100%"}
                  minWidth="50px"
                  borderRadius={"5px"}
                >
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    border={`1px solid #fff`}
                    width={"30px"}
                    height={"30px"}
                    borderRadius={"2px"}
                  >
                    {option.option === activeOption ? <Check /> : null}
                  </Stack>
                  {/* <Typography fontSize={"24px"} fontWeight={"700"} zIndex={"2"}>
                    {option.option}
                  </Typography> */}
                </Stack>
                <Stack justifyContent={"center"}>
                  <Typography margin={"auto 0"} zIndex={"2"}>
                    {option.optionText}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Button
            variant="outlined"
            disabled={!responded}
            onClick={() => navigate("/completed")}
            sx={{
              width: "max-content",
              textTransform: "none",
              borderRadius: "48px",
              fontSize: "20px",
              padding: "0 20px",
              height: "40px",
              marginTop: "20px",
              border: !responded ? "1px solid grey !important" : "",
              color: !responded ? "grey !important" : "",
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
