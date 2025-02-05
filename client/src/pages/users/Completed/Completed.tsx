import {
  // Accordion,
  // AccordionDetails,
  // AccordionSummary,
  Box,
  Button,
  // IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// import { choisesTypes } from "../../../data/choiseTypes";
// import {
//   // Cached,
//   ExpandMore,
//   // HomeOutlined
// } from "@mui/icons-material";
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
import StrategicAdvisorBadge from "../../../assets/badges/Strategic_Advisor_Badge.webp";
import SolidPerformerBadge from "../../../assets/badges/Solid_Performer_Badge.webp";
import TransactionalBadge from "../../../assets/badges/Transactional_Badge.webp";
import { useNavigate } from "react-router-dom";
import { reset } from "../../../store/user/userActions";
// import { setUser } from "../../../store/user/userSlice";
// import graph from "../../../assets/graph.png"

const Completed = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { name } = useSelector((state: RootState) => state.user);

  const { analytics, fetchCompletedStatus } = useCompleted();
  const [badge, setBadge] = useState<any>();
  const [archeTypeDesc, setArcheTypeDesc] = useState<string>("");
  useEffect(() => {
    fetchCompletedStatus();
  }, []);

  // const choisesColors = [
  //   { bg: "#ffffff", color: "#000000" },
  //   { bg: theme.palette.primary.grey, color: "#ffffff" },
  //   { bg: theme.palette.primary.red, color: "#ffffff" },
  // ];
  const whyOmniaColors = [
    theme.palette.primary.grey,
    "#E5E6E7",
    theme.palette.primary.red,
  ];

  useEffect(() => {
    const archeType = analytics?.archeType;
    if (archeType === "Strategic Advisor") {
      setBadge(StrategicAdvisorBadge);
      setArcheTypeDesc(
        "You are THE GOAT!  You’ve worked out how to use the tools available to be a legend!"
      );
    } else if (archeType === "Solid Performer") {
      setBadge(SolidPerformerBadge);
      setArcheTypeDesc(
        "You are NOT BAD, but could be getting more deals and spending less time chasing data if you used the tools available"
      );
    }
    if (archeType === "Transactional") {
      setBadge(TransactionalBadge);
      setArcheTypeDesc(
        "You are STRUGGLING… You must be spending lots of time chasing data and struggling to gain the trust of your clients – use the tools to help you."
      );
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
            {analytics.gameCompletion.toFixed()}%
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
      <Typography
        fontSize={"24px"}
        textAlign={"center"}
        fontWeight={"700"}
        marginTop={"48px"}
      >
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
      <Typography
        fontWeight={"700"}
        fontSize={"24px"}
        marginTop={"48px"}
        textAlign={"center"}
      >
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
              strokeWidth={1.5}
              fill={theme.palette.primary.red}
              fillOpacity={0.6}
            />
            <Radar
              name="Choices"
              dataKey="group"
              strokeWidth={1.5}
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
      {/* <Stack gap={"16px"}>
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
      </Stack> */}

      {/* Trust score */}

      <Typography
        fontWeight={"700"}
        fontSize={"24px"}
        marginTop={"12px"}
        textAlign={"center"}
      >
        Trust Score
      </Typography>
      <Stack
        borderRadius={"10px"}
        marginTop={"16px"}
        bgcolor={"#ffffff"}
        padding={"20px"}
        color={"#000000"}
      >
        {/* Your Trust Score */}
        <Typography fontWeight={"700"} fontSize={"24px"}>
          Your
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
            minWidth={"56px"}
          />
          <Box
            flex={100 - analytics.trustScore}
            borderRadius={"5px"}
            bgcolor={"#E5E6E7"}
            minWidth={"56px"}
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
          Group
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
            minWidth={"56px"}
          />
          <Box
            flex={analytics.overallTrustScore}
            borderRadius={"5px"}
            bgcolor={"#E5E6E7"}
            minWidth={"56px"}
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
          Trust benchmark to be set as{" "}
          <span style={{ fontWeight: "700" }}>80%</span>
        </Typography>
      </Stack>

      {/* Time vs Efforts */}

      <Typography
        fontSize={"24px"}
        fontWeight={"700"}
        marginTop={"48px"}
        textAlign={"center"}
      >
        Time vs Efforts
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
            <Typography fontSize={"14px"} fontWeight={"700"}>
              Time used by you
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.timeInHand.toFixed()}{" "}
              <span style={{ fontSize: "15px", fontWeight: "500" }}>hours</span>
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
            <Typography fontSize={"14px"} fontWeight={"700"}>
              Average time used (Group)
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.overallTimeInhand.toFixed()}{" "}
              <span style={{ fontSize: "15px", fontWeight: "500" }}>
                {" "}
                hours
              </span>
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
            <Typography fontSize={"14px"} fontWeight={"700"}>
              Effecting colleagues productivity
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.colleaguesTime.toFixed()}
              <span style={{ fontSize: "15px", fontWeight: "500" }}>
                {" "}
                hours
              </span>
              {/* 22.6 <span style={{ fontSize: "15px" }}> hours</span> */}
            </Typography>
          </Stack>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={"#ffffff"}
            flex={"1"}
            color={"#000000"}
          >
            <Typography fontSize={"14px"} fontWeight={"700"}>
              Effecting colleagues productivity (Group)
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.overallColleaguesTime.toFixed()}{" "}
              <span style={{ fontSize: "15px", fontWeight: "500" }}>
                {" "}
                hours
              </span>
            </Typography>
          </Stack>
        </Stack>
        <Typography
          marginTop={"16px"}
          lineHeight={"24px"}
          fontSize={"16px"}
          fontWeight={"500"}
        >
          You could have used as little as 35.67 hours and none of your
          colleagues time had you used Insights.
          <br />
          What could we do with all that time?
        </Typography>
      </Stack>

      {/* <Typography
        fontSize={"24px"}
        fontWeight={"700"}
        marginTop={"48px"}
        textAlign={"center"}
      >
        Extra Time
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
              Time pushed to colleagues
            </Typography>
            <Typography fontSize={"25px"} fontWeight={"700"}>
              {analytics.colleaguesTime.toFixed()}{" "}
              <span style={{ fontSize: "15px" }}>hours</span>
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
              Time pushed by group to colleagues
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.overallColleaguesTime.toFixed()}{" "}
              <span style={{ fontSize: "15px" }}> hours</span>
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
              Time delegated to others instead of optimal choices
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              121 <span style={{ fontSize: "15px" }}> hours</span>
            </Typography>
          </Stack>
        </Stack>
      </Stack> */}

      {/* Optimal Choice Vs Time   */}
      {/* <Typography
        fontSize={"24px"}
        fontWeight={"700"}
        marginTop={"48px"}
        textAlign={"center"}
      >
        Time Consumed
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
              {analytics.timeInHand < 0 ? 0 : analytics.timeInHand.toFixed()}{" "}
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
              {analytics.overallTimeInhand < 0
                ? 0
                : analytics.overallTimeInhand.toFixed()}{" "}
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
      </Typography> */}

      {/* Omnia - The Choice */}

      {/* <Typography
        fontSize={"24px"}
        fontWeight={"700"}
        marginTop={"48px"}
        textAlign={"center"}
      >
        Placeholder
      </Typography> */}
      <Typography
        fontSize={"24px"}
        fontWeight={"700"}
        marginTop={"48px"}
        textAlign={"center"}
      >
        Optimal Choices
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
            <Typography fontSize={"14px"} fontWeight={"700"}>
              Preferred Use Of Insights
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {analytics.optimalChoices.toFixed(0)}%
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
            <Typography fontSize={"14px"} fontWeight={"700"}>
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
            <Typography fontSize={"14px"} fontWeight={"700"}>
              As on 31st of Jan
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              8%{" "}
              <span style={{ fontWeight: "400", fontSize: "1rem" }}>
                were active on Insights
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Omnia Insight Effect */}
      {/* <Stack padding="16px" bgcolor={"#ffffff"} borderRadius={"10px"} marginTop={"48px"}>
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
      </Stack> */}

      {/* Why Optimal - QNA Responses */}

      <Stack
        marginTop={"48px"}
        borderRadius={"10px"}
        bgcolor="#ffffff"
        padding={"16px"}
      >
        {/* <Typography fontSize={"24px"} fontWeight={"700"} color="#000">
          Placeholder
        </Typography> */}
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
                <Stack direction={"row"} marginTop={"16px"} gap="4px">
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
                    {option.percentage.toFixed()}%
                  </Typography>
                </Stack>
                {/* <Typography
                  color={theme.palette.primary.grey}
                  fontSize={"16px"}
                  fontWeight={"500"}
                >
                  Option {String.fromCharCode(65 + index)}
                </Typography> */}
                <Typography
                  color={theme.palette.primary.grey}
                  fontWeight={"400"}
                  fontSize={"16px"}
                >
                  {option.text}
                </Typography>
              </>
            ))}
          </Stack>
        ))}
      </Stack>

      {/* Restart Buttons */}
      <Stack direction={"row"} marginTop={"48px"} padding="4px">
        <Button
          variant="outlined"
          onClick={handleReset}
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
          Restart
        </Button>
      </Stack>
    </Stack>
  );
};

export default Completed;
