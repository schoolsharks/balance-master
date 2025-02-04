import { Grid2, Stack } from "@mui/material";
import Header from "./Header";
import GroupTrust from "./GroupTrust";
import ChoicesDistrubution from "./ChoicesDistrubution";
import TimeVsEfforts from "./TimeVsEfforts";
import FeedbackAnalysis from "./FeedbackAnalysis";
import ScenarioAnalysis from "./ScenarioAnalysis";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const SessionDashboardMain = () => {
  const { trustScore, scenariosAnalysis } = useSelector(
    (state: RootState) => state.admin
  );

  const analysisCards = [
    <GroupTrust trustScore={trustScore} />,
    <ChoicesDistrubution />,
    <TimeVsEfforts />,
    <FeedbackAnalysis />,
    ...scenariosAnalysis.map((item, index) => (
      <ScenarioAnalysis
        scenarioNumber={index+1}
        scenarioText={item.question ??""}
        optimalPercent={item.optimal*100/(item.optimal+item.suboptimal+item.acceptable)}
      />
    )),
    // <ScenarioAnalysis
    //   scenarioNumber={1}
    //   scenarioText="It’s Thursday evening, and the Deputy Treasurer from “The Company” requests a list of accounts and balances in 6 key markets (3 in Europe: UK, Ireland, Netherlands, and 3 in Asia: Hong Kong, Singapore, Australia). They’re reviewing partners."
    //   optimalPercent={25}
    // />,
    // <ScenarioAnalysis
    //   scenarioNumber={2}
    //   scenarioText="It’s Thursday evening, and the Deputy Treasurer from “The Company” requests a list of accounts and balances in 6 key markets (3 in Europe: UK, Ireland, Netherlands, and 3 in Asia: Hong Kong, Singapore, Australia). They’re reviewing partners."
    //   optimalPercent={75}
    // />,
    // <ScenarioAnalysis
    //   scenarioNumber={3}
    //   scenarioText="It’s Thursday evening, and the Deputy Treasurer from “The Company” requests a list of accounts and balances in 6 key markets (3 in Europe: UK, Ireland, Netherlands, and 3 in Asia: Hong Kong, Singapore, Australia). They’re reviewing partners."
    //   optimalPercent={10}
    // />,
    // <ScenarioAnalysis
    //   scenarioNumber={4}
    //   scenarioText="It’s Thursday evening, and the Deputy Treasurer from “The Company” requests a list of accounts and balances in 6 key markets (3 in Europe: UK, Ireland, Netherlands, and 3 in Asia: Hong Kong, Singapore, Australia). They’re reviewing partners."
    //   optimalPercent={15}
    // />,
    // <ScenarioAnalysis
    //   scenarioNumber={5}
    //   scenarioText="It’s Thursday evening, and the Deputy Treasurer from “The Company” requests a list of accounts and balances in 6 key markets (3 in Europe: UK, Ireland, Netherlands, and 3 in Asia: Hong Kong, Singapore, Australia). They’re reviewing partners."
    //   optimalPercent={25}
    // />,
  ];
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
