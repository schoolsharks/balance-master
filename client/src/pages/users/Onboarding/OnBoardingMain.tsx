import {  IconButton, Stack} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import GameDescription from "../../../components/GameDescription";
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
        {/* {currentPage === 2 && <Page2 />} */}
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


  return (
    <Stack color={"#ffffff"} padding={"24px"}>
      <GameDescription/>
    </Stack>
  );
};
