import { Stack, Typography, useTheme } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"

const TimeVsEfforts = () => {
    const theme=useTheme()
    const {timeUsed,colleguesTime}=useSelector((state:RootState)=>state.admin)
  return (
    <Stack color={"#000000"} bgcolor={"#fff"} padding={"25px"} borderRadius={"10px"}>
        <Typography fontSize={"1.25rem"} fontWeight={"800"}>Time Vs Efforts</Typography>
        <Typography fontSize={"15px"} fontWeight={"400"} color="#43474885">You could have used as little as 23 hours and none of your colleagues time had you used Insights.  </Typography>
        <Typography fontSize={"15px"} fontWeight={"700"} marginTop={"10px"}>Optimal time - 35.67 hours</Typography>
        <Stack direction={"row"} marginTop={"10px"} gap={"4px"} color={"#fff"} borderRadius={"10px"} overflow={"hidden"}>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={theme.palette.primary.red}
            flex={"1"}
          >
            <Typography fontSize={"14px"} fontWeight={"700"}>
            Average time used by group
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {timeUsed.toFixed()} <span style={{ fontSize: "15px",fontWeight:"500" }}>hours</span>
            </Typography>
          </Stack>
          <Stack
            justifyContent={"space-between"}
            minHeight={"140px"}
            padding={"12px"}
            bgcolor={theme.palette.primary.grey}
            flex={"1"}
          >
            <Typography fontSize={"14px"} fontWeight={"700"}>
            Effecting colleagues productivity by Group
            </Typography>
            <Typography fontSize={"32px"} fontWeight={"700"}>
              {colleguesTime.toFixed()} <span style={{ fontSize: "15px",fontWeight:"500" }}>hours</span>
            </Typography>
          </Stack>
        </Stack>
      
    </Stack>
  )
}

export default TimeVsEfforts
