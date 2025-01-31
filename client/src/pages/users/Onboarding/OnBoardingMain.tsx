import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
// import msTanImage from "../../../assets/ms-tan.png";

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
    if (currentPage < 1) {
      navigate(`/onboarding/${currentPage + 1}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <UpperTriangleBox sx={{ flex: "1", position: "relative" }}>
      <Stack marginTop="-48px" flex={"1"}>
        {currentPage === 1 && <Page1 />}
        {currentPage === 2 && <Page2 />}
        {/* {currentPage === 3 && <Page3 />} */}

        <Stack
          direction={"row"}
          gap={"20px"}
          padding={"16px"}
          // margin={"auto 0 16px"}
          marginBottom={"16px"}
        >
          {currentPage > 1 && (
            <IconButton onClick={handleBack}>
              <ArrowBack
                sx={{
                  border: "2px solid white",
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
                border: "2px solid white",
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
  // const theme = useTheme();
  const points = [
    "<p>You start with 50% trust and 100 game hours—your goal? Earn Ms. Tan’s full confidence (100% trust) before time runs out!</p>",
    "<p>At every step, choose between three options<b>—each impacts trust and time.</b>  Be smart, act fast, and maximize efficiency to stay ahead. Poor choices waste time and risk losing Ms. Tan’s trust.</p>",
    "<p><b>Simple rule:</b> Make the best decisions, build trust, and don’t run out of time!</p>",
  ];

  return (
    <Stack color={"#ffffff"} padding={"24px"}>
      <Typography fontSize={"20px"} fontWeight={"400"}>
        Welcome to
      </Typography>
      <Typography fontSize="30px" fontWeight={"700"} marginTop={"8px"}>
        The Balance Master Challenge!🎯
      </Typography>
      <Typography fontWeight={"400"} marginTop={"16px"}>
        Your client, <b>“The Company”</b>, is a US-based multinational with
        operations across Europe and Asia Pacific. <br />
        Recently, they underwent an organizational restructure, appointing a new
        Treasurer, Ms. Tan, who is eager to streamline their banking
        relationships and processes.
      </Typography>

      <Typography
        fontSize="30px"
        fontWeight={"700"}
        marginTop={"25px"}
        marginBottom={"10px"}
      >
        Your Mission?{" "}
      </Typography>
      <Stack>
        {points.map((point, index) => (
          <Stack direction={"row"} margin={"5px 0"} gap="6px">
            <Box
              width={"12px"}
              height={"12px"}
              borderRadius={"50%"}
              marginTop={"6px"}
              sx={{
                background: "linear-gradient(90deg,#ffffff,#000000)",
                aspectRatio: "1/1",
              }}
            />
            <Typography key={index} dangerouslySetInnerHTML={{ __html: point }}>
              {/* {point} */}
            </Typography>
          </Stack>
        ))}
      </Stack>
      {/* <Typography
        fontWeight={"700"}
        marginTop={"10px"}
        color={theme.palette.primary.red}
      >
        Time is ticking—can you gain Ms. Tan’s full confidence? ⏳🔥
      </Typography> */}
    </Stack>
  );
};

const Page2 = () => {
  const theme = useTheme();
  const points = [
    "<p>You start with 50% trust and 100 game hours—your goal? Earn Ms. Tan’s full confidence (100% trust) before time runs out!</p>",
    "<p>At every step, choose between three options<b>—each impacts trust and time.</b>  Be smart, act fast, and maximize efficiency to stay ahead. Poor choices waste time and risk losing Ms. Tan’s trust.</p>",
    "<p><b>Simple rule:</b> Make the best decisions, build trust, and don’t run out of time!</p>",
  ];

  return (
    <Stack color="#fff" padding="24px">
      {" "}
      <Typography
        fontSize="30px"
        fontWeight={"700"}
        marginTop={"8px"}
        marginBottom={"10px"}
      >
        Your Mission?{" "}
      </Typography>
      <Stack>
        {points.map((point, index) => (
          <Stack direction={"row"} margin={"10px 0"} gap="6px">
            <Box
              width={"12px"}
              height={"12px"}
              borderRadius={"50%"}
              marginTop={"6px"}
              sx={{
                background: "linear-gradient(90deg,#ffffff,#000000)",
                aspectRatio: "1/1",
              }}
            />
            <Typography key={index} dangerouslySetInnerHTML={{ __html: point }}>
              {/* {point} */}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Typography
        fontWeight={"700"}
        marginTop={"10px"}
        color={theme.palette.primary.red}
      >
        Time is ticking—can you gain Ms. Tan’s full confidence? ⏳🔥
      </Typography>
    </Stack>
  );
};
// const Page2 = () => {
//   const theme = useTheme();
//   return (
//     <Stack padding={"24px"} color={"#fff"}>
//       <Box component={"img"} src={msTanImage} alt=""  sx={{position:"absolute",bottom:"0",right:"0",width:"190px"}}/>
//       <Stack direction={"row"} justifyContent={"space-between"}>
//         <Box>
//           <Typography fontSize={"20px"} fontWeight={"400"}>
//             Meet
//           </Typography>
//           <Typography
//             fontSize={"30px"}
//             fontWeight={"700"}
//             color={theme.palette.primary.red}
//           >
//             Ms. Tan
//           </Typography>
//           <Typography fontWeight={"700"}>(Treasurer, The company)</Typography>
//         </Box>
//       </Stack>
//       <Typography fontWeight={"400"} marginTop={"5px"}>
//       Ms. Tan, the new Treasurer, values speed, accuracy, and smart problem-solving.<br/>But beware—she hates cookie-cutter pitches. {" "}
//       </Typography>
//       <Typography
//         fontSize={"30px"}
//         fontWeight={"700"}
//         marginTop={"24px"}
//         color={theme.palette.primary.red}
//       >
//         Your Mission?{" "}
//       </Typography>
//       <Typography>
//       You start with 50% trust and 100 game hours—your goal? Earn Ms. Tan’s full confidence (100% trust) before time runs out!
//       </Typography>
//     </Stack>
//   );
// };

// const Page3 = () => {
//     const points=["You’ll face 20 real-world scenarios, split into 4 levels.","Each scenario gives you 3 options (A, B, or C).","Choose wisely—your decisions will earn points and shift Ms. Tan’s trust toward your bank or Alpha Bank.","Quick thinker? You’ve got 20 seconds to pick your answer. ⏱️"]
//   return (
//     <Stack color={"#ffffff"} padding={"24px"}>
//       <Typography fontSize={"30px"} fontWeight={"700"} marginBottom="24px">How to Play:</Typography>
//       <ul >
//       {points.map((point,index)=>(<Typography key={index} marginLeft={"20px"} component={"li"}>{point}</Typography>))}
//       </ul>
//     </Stack>
//   );
// };
