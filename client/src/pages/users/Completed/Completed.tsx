import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { choisesTypes } from "../../../data/choiseTypes";
import { Cached, ExpandMore, HomeOutlined } from "@mui/icons-material";
import useCompleted from "../../../hooks/useCompleted";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import StrategicAdvisorBadge from "../../../assets/badges/Strategic_Advisor_Badge.png";
import SolidPerformerBadge from "../../../assets/badges/Solid_Performer_Badge.png";
import RiskyBadge from "../../../assets/badges/Risky_Badge.png";
import { useNavigate } from "react-router-dom";
import { reset } from "../../../store/user/userActions";
import graph from "../../../assets/graph.png"

const Completed = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { name } = useSelector((state: RootState) => state.user);

  const { analytics, fetchCompletedStatus } = useCompleted();
  const [badge, setBadge] = useState<any>();
  const [archeTypeDesc,setArcheTypeDesc]=useState<string>("")
  useEffect(() => {
    fetchCompletedStatus();
  }, []);

  const choisesColors = [
    { bg: "#ffffff", color: "#000000" },
    { bg: theme.palette.primary.grey, color: "#ffffff" },
    { bg: theme.palette.primary.red, color: "#ffffff" },
  ];
  const whyOmniaColors = [
    theme.palette.primary.grey,
    "#E5E6E7",
    theme.palette.primary.red,
  ];

  useEffect(() => {
    const archeType = analytics?.archeType;
    if (archeType === "Strategic Advisor") {
      setBadge(StrategicAdvisorBadge);
      setArcheTypeDesc("The GOAT of decision-making—smart, balanced, and always ahead of the game.")
    } else if (archeType === "Solid Performer") {
      setBadge(SolidPerformerBadge);
      setArcheTypeDesc("A steady player—makes mostly good choices but misses key opportunities to maximize trust and efficiency. Reliable, but not exceptional.")
      
    }
    if (archeType === "Risky") {
      setBadge(RiskyBadge);
      setArcheTypeDesc("Inconsistent and slow—too many suboptimal decisions make Ms. Tan question their judgment. A risky bet for critical tasks.")
    }
  }, [analytics]);

  const handleReset = () => {
    dispatch(reset()).unwrap();
    navigate("/onboarding/1");
  };


  if (!analytics) {
    return;
  }
  return (
    <Stack bgcolor={"#000000"} padding={"24px 16px"} color={"#fff"}>
      <Stack
        direction={"row"}
        gap={"4px"}
        sx={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.primary.grey,
            padding: "12px",
            flex: "1",
          }}
        >
          <Typography fontWeight={"400"}>Game Completion</Typography>
          <Typography fontWeight={"800"} fontSize={"24px"} marginTop={"8px"}>
            {analytics.gameCompletion.toFixed(2)}%
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
          <Typography fontWeight={"400"}>Live Players</Typography>
          <Typography fontWeight={"800"} fontSize={"24px"} marginTop={"8px"}>
            {analytics.players}
          </Typography>
        </Box>
      </Stack>

      {/* Hi, User */}
      <Typography fontSize={"24px"} fontWeight={"700"} marginTop={"48px"}>
        Hi {name},
      </Typography>

      <img src={badge} style={{ width: "142px", margin: "26px auto 12px" }} />

      {/* Badge */}
      <Typography
        fontWeight={"300"}
        fontSize={"20px"}
        textAlign={"center"}
        lineHeight={"26px"}
        marginTop={"12px"}
      >
        You are the
      </Typography>
      <Typography fontWeight={"700"} fontSize={"28px"} textAlign={"center"}>
        {analytics.archeType}
      </Typography>
      <Typography marginTop={"20px"} fontSize={"18px"} fontWeight={"400"}>
       {archeTypeDesc}
      </Typography>

      {/* Radar Chart */}
      <Typography fontWeight={"700"} fontSize={"24px"} marginTop={"48px"}>
        Reflections
      </Typography>
      <Box
        height={"480px"}
        margin={"-72px 0"}
        sx={{ "& *": { fontFamily: "Red Hat Display", fontSize: "12px" } }}
      >
        <ResponsiveContainer>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="65%"
            data={analytics.choicesDistribution}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="key" />
            {/* <PolarRadiusAxis angle={30} domain={[0, 1]} />{" "} */}
            <Radar
              name="Choices"
              dataKey="self"
              stroke={theme.palette.primary.red}
              fill={theme.palette.primary.red}
              fillOpacity={0.6}
            />
            <Radar
              name="Choices"
              dataKey="group"
              stroke={"#ffffff"}
              fill={"#ffffff"}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <Stack direction={"row"} marginTop={"-140px"} gap={"20px"}>
          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <Box
              width={"18px"}
              height={"18px"}
              bgcolor={theme.palette.primary.red}
              borderRadius="2px"
            />
            <Typography fontWeight={"400"} fontSize={"1rem"}>
              Self
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <Box
              width={"18px"}
              height={"18px"}
              bgcolor={"#fff"}
              borderRadius="2px"
            />
            <Typography fontWeight={"400"} fontSize={"1rem"}>
              Group
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* Choises Types Info */}
      <Stack gap={"16px"}>
        {choisesTypes.map((item, index) => (
          <Accordion
            sx={{
              borderRadius: "10px !important",
              bgcolor: choisesColors[index].bg,
              color: choisesColors[index].color,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMore sx={{ color: choisesColors[index].color }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ borderRadius: "10px", padding: "8px 20px" }}
            >
              <Typography fontSize={"18px"} fontWeight={"700"}>
                {item.choise}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ marginTop: "-20px" }}>
              {item.content.map((point, index) => (
                <Stack direction={"row"} key={index} gap={"6px"}>
                  <Typography>◆</Typography>
                  <Typography>{point}</Typography>
                </Stack>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>

      {/* Trust score */}
      <Stack
        borderRadius={"10px"}
        bgcolor={"#ffffff"}
        marginTop={"48px"}
        padding={"20px"}
        color={"#000000"}
      >
        {/* Your Trust Score */}
        <Typography fontWeight={"700"} fontSize={"24px"}>
          Your Trust Score
        </Typography>
        <Stack
          direction="row"
          height={"56px"}
          gap={"4px"}
          position={"relative"}
          marginTop={"16px"}
        >
          <Box
            flex={analytics.trustScore}
            bgcolor={theme.palette.primary.red}
            borderRadius={"5px"}
          />
          <Box
            flex={100 - analytics.trustScore}
            borderRadius={"5px"}
            bgcolor={"#E5E6E7"}
          />
          <Typography
            position={"absolute"}
            fontSize={"20px"}
            fontWeight={"700"}
            left="8px"
            top={"50%"}
            color="#ffffff"
            sx={{ transform: "translateY(-50%)" }}
          >
            {analytics.trustScore}%
          </Typography>
          <Typography
            position={"absolute"}
            fontSize={"20px"}
            fontWeight={"700"}
            right="8px"
            top={"50%"}
            sx={{ transform: "translateY(-50%)" }}
          >
            {100 - analytics.trustScore}%
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          marginTop={"4px"}
        >
          <Typography fontWeight={"500"}>Your Bank</Typography>
          <Typography fontWeight={"500"}>Alpha Bank</Typography>
        </Stack>

        {/* Group Trust Score */}

        <Typography fontWeight={"700"} fontSize={"24px"} marginTop={"24px"}>
          Group Trust Score
        </Typography>
        <Stack
          direction="row"
          height={"56px"}
          gap={"4px"}
          position={"relative"}
          marginTop={"16px"}
        >
          <Box
            flex={analytics.overallTrustScore}
            bgcolor={"#000000"}
            borderRadius={"5px"}
          />
          <Box
            flex={analytics.overallTrustScore}
            borderRadius={"5px"}
            bgcolor={"#E5E6E7"}
          />
          <Typography
            position={"absolute"}
            fontSize={"20px"}
            fontWeight={"700"}
            left="8px"
            top={"50%"}
            color="#ffffff"
            sx={{ transform: "translateY(-50%)" }}
          >
            {analytics.overallTrustScore.toFixed()}%
          </Typography>
          <Typography
            position={"absolute"}
            fontSize={"20px"}
            fontWeight={"700"}
            right="8px"
            top={"50%"}
            sx={{ transform: "translateY(-50%)" }}
          >
            {(100 - analytics.overallTrustScore).toFixed()}%
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          marginTop={"4px"}
        >
          <Typography fontWeight={"500"}>Your Bank</Typography>
          <Typography fontWeight={"500"}>Alpha Bank</Typography>
        </Stack>

        {/* Winning Probability */}
        <Typography fontSize={"18px"} fontWeight={"500"} marginTop={"24px"}>
          Winning Probability Benchmark{" "}
          <span style={{ fontWeight: "700" }}>80%</span>
        </Typography>
      </Stack>

      {/* Optimal Choice Vs Time   */}
      <Typography fontSize={"24px"} fontWeight={"700"} marginTop={"48px"}>
        Optimal Choice VS Time
      </Typography>
      <Stack
        gap="4px"
        borderRadius={"10px"}
        overflow={"hidden"}
        marginTop={"16px"}
      >
        <Stack direction={"row"} gap={"4px"}>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={theme.palette.primary.grey}
            flex={"1"}
          >
            <Typography fontSize={"18px"} fontWeight={"500"}>
              Time Saved{" "}
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.timeInHand < 0 ? 0 : analytics.timeInHand}{" "}
              <span style={{ fontWeight: "400", fontSize: "1rem" }}>hours</span>
            </Typography>
          </Stack>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={"#ffffff"}
            color={"#000000"}
            flex={"1"}
          >
            <Typography fontSize={"18px"} fontWeight={"500"}>
              Time Saved <br />
              (Group)
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              92
              {/* {analytics.overallTimeInhand < 0
                ? 0
                : analytics.overallTimeInhand}{" "} */}
              <span style={{ fontWeight: "400", fontSize: "1rem" }}>hours</span>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={"4px"}>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={theme.palette.primary.red}
            flex={"1"}
          >
            <Typography fontSize={"18px"} fontWeight={"500"}>
              Time Consumed By Colleagues
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.colleaguesTime < 0 ? 0 : analytics.colleaguesTime}{" "}
              <span style={{ fontWeight: "400", fontSize: "1rem" }}>hours</span>
            </Typography>
          </Stack>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={"#ffffff"}
            color={"#000000"}
            flex={"1"}
          >
            <Typography fontSize={"18px"} fontWeight={"500"}>
              Time Consumed By Group
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.overallColleaguesTime < 0
                ? 0
                : analytics.overallColleaguesTime.toFixed()}
              <span style={{ fontWeight: "400", fontSize: "1rem" }}>
                {" "}
                hours
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography fontSize={"18px"} fontWeight={"500"} marginTop={"16px"}>
        Self Service Tool would have saved 189.5 hours.
      </Typography>
      <Typography fontSize={"15px"} fontWeight={"300"}>
        (Calculations = Total time - Time saved by Optimal choices)
      </Typography>

      {/* Omnia - The Choice */}

      <Typography fontSize={"24px"} fontWeight={"700"} marginTop={"48px"}>
        Placeholder
      </Typography>
      <Stack
        gap="4px"
        borderRadius={"10px"}
        overflow={"hidden"}
        marginTop={"16px"}
      >
        <Stack direction={"row"} gap={"4px"}>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={theme.palette.primary.grey}
            flex={"1"}
          >
            <Typography fontSize={"18px"} fontWeight={"500"}>
              Preferred Use Of Insights
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.optimalChoices.toFixed()}%
            </Typography>
          </Stack>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={"#ffffff"}
            color={"#000000"}
            flex={"1"}
          >
            <Typography fontSize={"18px"} fontWeight={"500"}>
              Group Preferred Insights
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.overallOptimalChoices.toFixed()}%
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"}>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={theme.palette.primary.red}
            flex={"1"}
          >
            <Typography fontSize={"18px"} fontWeight={"500"}>
              As on 31st of Jan
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              20%{" "}
              <span style={{ fontWeight: "400", fontSize: "1rem" }}>
                were active on Insights
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Omnia Insight Effect */}
      <Stack padding="16px" bgcolor={"#ffffff"} borderRadius={"10px"} marginTop={"48px"}>
        <Typography fontSize={"24px"} fontWeight={"700"} color="#000">
          Optimal Choices Effect
          <br />
          (Group)
        </Typography>
        <Stack direction={"row"} gap={"4.5px"} alignItems={"center"} justifyContent={"flex-end"}>
          <Box width="12px" height="12px" bgcolor={theme.palette.primary.grey}/>
          <Typography color={theme.palette.primary.grey}>Placeholder</Typography>
        </Stack>
        <img src={graph} style={{width:"90%",margin:"auto"}}/>
      </Stack>

      {/* Why Optimal - QNA Responses */}

      <Stack
        marginTop={"48px"}
        borderRadius={"10px"}
        bgcolor="#ffffff"
        padding={"16px"}
      >
        <Typography fontSize={"24px"} fontWeight={"700"} color="#000">
          Placeholder
        </Typography>
        {analytics.whyOmnia.map((ques, index) => (
          <Stack key={index}>
            <Typography
              color={theme.palette.primary.grey}
              fontSize={"18px"}
              fontWeight={"700"}
              margin={"16px 0 12px"}
            >
              {ques.question}
            </Typography>
            {ques.options.map((option, index) => (
              <>
                <Typography
                  color={theme.palette.primary.grey}
                  fontWeight={"400"}
                >
                  {option.text}
                </Typography>
                <Stack direction={"row"} marginTop={"8px"} gap="4px">
                  <Box flex={"1"} height={"28px"}>
                    <Box
                      height={"100%"}
                      width={option.percentage + "%"}
                      borderRadius={"5px"}
                      bgcolor={whyOmniaColors[index]}
                    />
                  </Box>
                  <Typography
                    color="#000000"
                    fontSize={"20px"}
                    fontWeight={"700"}
                  >
                    {option.percentage}%
                  </Typography>
                </Stack>
              </>
            ))}
          </Stack>
        ))}
      </Stack>

      {/* Home and Reset Buttons */}
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        marginTop={"48px"}
      >
        <IconButton onClick={() => navigate("/onboarding/1")}>
          <HomeOutlined
            sx={{
              color: "#fff",
              borderRadius: "50%",
              border: "1px solid white",
              padding: "6px",
              fontSize: "45px",
            }}
          />
        </IconButton>
        <IconButton onClick={handleReset}>
          <Cached
            sx={{
              color: "#fff",
              borderRadius: "50%",
              border: "1px solid white",
              padding: "6px",
              fontSize: "45px",
            }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Completed;
