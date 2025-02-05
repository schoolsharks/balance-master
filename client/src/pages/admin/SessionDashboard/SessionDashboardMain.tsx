import { CircularProgress, Grid2, IconButton, Stack, Typography } from "@mui/material";
import Header from "./Header";
import GroupTrust from "./GroupTrust";
import ChoicesDistrubution from "./ChoicesDistrubution";
import TimeVsEfforts from "./TimeVsEfforts";
import FeedbackAnalysis from "./FeedbackAnalysis";
import ScenarioAnalysis from "./ScenarioAnalysis";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SessionDashboardMain = () => {
  const { trustScore, scenariosAnalysis, livePlayers } = useSelector(
    (state: RootState) => state.admin
  );

  const navigate=useNavigate()

  const analysisCards = [
    <GroupTrust trustScore={trustScore ?? 0} />,
    <ChoicesDistrubution />,
    <TimeVsEfforts />,
    <FeedbackAnalysis />,
    ...scenariosAnalysis.map((item, index) => (
      <ScenarioAnalysis
        scenarioNumber={index + 1}
        scenarioText={item.question ?? ""}
        optimalPercent={
          (item.optimal * 100) /
          (item.optimal + item.suboptimal + item.acceptable)
        }
      />
    )),
  ];

  if (livePlayers === 0) {
    return (
      <Stack bgcolor={"#000"} height={window.innerHeight} direction={"row"} padding={"48px"}>
        <IconButton onClick={()=>navigate("/admin/home")} sx={{height:"max-content"}}>
            <ArrowBackIos sx={{ color: "#fff" }} />
          </IconButton>
        <Typography color="#898989" marginTop={"6px"}>
          No Players
        </Typography>
      </Stack>
    );
  }
  if (trustScore === null) {
    return (
      <Stack
        minHeight={window.innerHeight}
        bgcolor={"#000"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <Stack
      bgcolor={"#000"}
      color={"#fff"}
      minHeight={window.innerHeight}
      padding={"28px 40px"}
    >
      <Header />
      <Grid2 container spacing={2} marginTop={"52px"}>
        {analysisCards.map((item, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            {item}
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};

export default SessionDashboardMain;
