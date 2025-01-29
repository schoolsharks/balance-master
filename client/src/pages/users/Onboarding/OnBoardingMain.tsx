import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import msTanImage from "../../../assets/ms-tan.png"

const OnBoardingMain = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const currentPage = Number(page);

  const handleBack = () => {
    if (currentPage > 1) {
      navigate(`/onboarding/${currentPage - 1}`);
    }
  };

  const handleForward = () => {
    if (currentPage < 3) {
      navigate(`/onboarding/${currentPage + 1}`);
    }
    else{
        navigate("/login")
    }
  };

  return (
    <UpperTriangleBox sx={{ height: "100%", flex: "1" }}>
      <Stack marginTop="-24px" flex={"1"}>
        {currentPage === 1 && <Page1 />}
        {currentPage === 2 && <Page2 />}
        {currentPage === 3 && <Page3 />}

        <Stack
          direction={"row"}
          gap={"20px"}
          padding={"16px"}
          margin={"auto 0 16px"}
        >
          {currentPage > 1 && (
            <IconButton onClick={handleBack}>
              <ArrowBack
                sx={{
                  border: "1.5px solid white",
                  fontSize: "40px",
                  padding: "4px",
                  borderRadius: "50%",
                  color: "#ffffff",
                }}
              />
            </IconButton>
          )}

            <IconButton onClick={handleForward}>
              <ArrowForward
                sx={{
                  border: "1.5px solid white",
                  fontSize: "40px",
                  padding: "4px",
                  borderRadius: "50%",
                  color: "#ffffff",
                }}
              />
            </IconButton>
        </Stack>
      </Stack>
    </UpperTriangleBox>
  );
};

export default OnBoardingMain;

const Page1 = () => {
  const theme = useTheme();
  return (
    <Stack color={"#ffffff"} padding={"24px"}>
      <Typography fontSize={"20px"} fontWeight={"400"}>
        Welcome to
      </Typography>
      <Typography fontSize="30px" fontWeight={"700"} marginTop={"8px"}>
        The Balance Master Challenge! 🎯
      </Typography>
      <Typography fontWeight={"400"} marginTop={"16px"}>
        You’re stepping into a high-stakes, fast-paced game where you’ll flex
        your brainpower to outsmart the competition and win big for your team.{" "}
      </Typography>
      <Typography
        marginTop={"24px"}
        fontSize={"25px"}
        fontWeight={"600"}
        sx={{ color: theme.palette.primary.red }}
      >
        Outsmart, <br />
        Outplay, <br />
        Own the Deal!
      </Typography>
    </Stack>
  );
};

const Page2 = () => {
  const theme = useTheme();
  return (
    <Stack padding={"24px"} color={"#fff"}>
      <Box component={"img"} src={msTanImage} alt=""  sx={{position:"absolute",bottom:"0",right:"0",width:"230px"}}/>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box>
          <Typography fontSize={"20px"} fontWeight={"400"}>
            Meet
          </Typography>
          <Typography
            fontSize={"30px"}
            fontWeight={"700"}
            color={theme.palette.primary.red}
          >
            Ms. Tan
          </Typography>
          <Typography fontWeight={"700"}>(CFO, The company)</Typography>
        </Box>
      </Stack>
      <Typography fontWeight={"400"} marginTop={"5px"}>
        She’s smart, no-nonsense, and loves solutions backed by data. <br />
        But beware—she hates cookie-cutter pitches.{" "}
      </Typography>
      <Typography
        fontSize={"20px"}
        fontWeight={"600"}
        marginTop={"24px"}
        color={theme.palette.primary.red}
      >
        Your Mission?{" "}
      </Typography>
      <Typography>
        Help Ms. Tan, the CFO of The Company, decide which bank—yours or Alpha
        Bank—should handle her company’s global treasury. 💼
      </Typography>
    </Stack>
  );
};

const Page3 = () => {
    const points=["You’ll face 20 real-world scenarios, split into 4 levels.","Each scenario gives you 3 options (A, B, or C).","Choose wisely—your decisions will earn points and shift Ms. Tan’s trust toward your bank or Alpha Bank.","Quick thinker? You’ve got 20 seconds to pick your answer. ⏱️"]
  return (
    <Stack color={"#ffffff"} padding={"24px"}>
      <Typography fontSize={"30px"} fontWeight={"700"} marginBottom="24px">How to Play:</Typography>
      <ul >
      {points.map((point,index)=>(<Typography key={index} marginLeft={"20px"} component={"li"}>{point}</Typography>))}
      </ul>
    </Stack>
  );
};
