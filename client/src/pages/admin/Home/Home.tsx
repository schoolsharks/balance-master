import {
  Box,
  Button,
  Dialog,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import GameDescription from "../../../components/GameDescription";
import QR_CODE from "../../../assets/qr-code/qr-code.webp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  fetchCurrentSessionInfo,
  resetSession,
} from "../../../store/admin/sessionInfoActions";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { livePlayers, gameCompletion } = useSelector(
    (state: RootState) => state.admin
  );
  const [resetSessionDialog, setResetSessionDialog] = useState<boolean>(false);
  const [resetLoading, setResetLoading] = useState(false);

  const handleResetSession = () => {
    setResetLoading(true);
    dispatch(resetSession())
      .then(() => {
        dispatch(fetchCurrentSessionInfo()).then(() =>
          setResetSessionDialog(false)
        );
      })
      .finally(() => {
        setResetLoading(false);
      });
  };

  return (
    <Stack
      minHeight={window.innerHeight}
      bgcolor={"#000"}
      color={"#fff"}
      padding={"60px 120px"}
    >
      <Stack maxWidth={"1300px"} margin={"auto"}>
        <Stack
          direction={"row"}
          gap="120px"
          width={"100%"}
          justifyContent={"space-around"}
        >
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
              <Box
                padding={"12px"}
                bgcolor={theme.palette.primary.grey}
                flex={"1"}
              >
                <Typography fontSize={"1.25rem"} fontWeight={"400"}>
                  Game Completion
                </Typography>
                <Typography fontSize={"30px"} fontWeight={"800"}>
                  {gameCompletion.toFixed()}%
                </Typography>
              </Box>
              <Box padding={"12px"} bgcolor={"#fff"} color={"#000"} flex={"1"}>
                <Typography fontSize={"1.25rem"} fontWeight={"400"}>
                  Live Players in Session
                </Typography>
                <Typography fontSize={"30px"} fontWeight={"800"}>
                  {livePlayers}
                </Typography>
              </Box>
            </Stack>
            <Stack flex={"1"}>
              <img
                src={QR_CODE}
                alt=""
                style={{ width: "100%", borderRadius: "5px" }}
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          marginTop={"24px"}
        >
          <Button
            variant="outlined"
            onClick={() => navigate("/admin/session")}
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
            onClick={() => setResetSessionDialog(true)}
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

      <Dialog
        open={resetSessionDialog}
        onClose={() => setResetSessionDialog(false)}
      >
        <Stack padding={"24px"}>
          <Typography fontSize={"24px"} fontWeight="600">
            Do you want to reset current session
          </Typography>
          <Stack
            direction={"row"}
            gap={"12px"}
            marginTop={"20px"}
            justifyContent={"flex-end"}
          >
            <Button
              variant="outlined"
              onClick={() => setResetSessionDialog(false)}
              sx={{
                border: `2px solid ${theme.palette.primary.red}`,
                color: theme.palette.primary.red,
              }}
            >
              No
            </Button>
            <Button
              variant="contained"
              disabled={resetLoading}
              onClick={handleResetSession}
              sx={{ bgcolor: theme.palette.primary.red, color: "#fff" }}
            >
              Yes
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </Stack>
  );
};

export default Home;
