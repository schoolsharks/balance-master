import { Stack, Typography } from "@mui/material"
import SemiCircleProgress from "../../../components/SemicircleProgress"

const GroupTrust = ({trustScore}:{trustScore:number}) => {
  return (
    <Stack bgcolor={"#fff"} color={"#000000"} height={"100%"} borderRadius={"10px"} padding={"25px"}>
      <Typography fontSize={"20px"} fontWeight={"800"}>Group Trust</Typography>
      <Typography fontSize={"15px"} fontWeight={"600"} color="#44444475">Required mandate 80%</Typography>
      
      <Stack position={"relative"} alignItems={"center"}>
      <SemiCircleProgress value={trustScore}/>
      <Stack position={"absolute"} sx={{bottom:"12px", left:"50%",transform:"translateX(-50%)"}}>
        <Typography fontSize={"45px"} fontWeight={"800"} lineHeight={"45px"}>{trustScore}%</Typography>
        <Typography fontSize={"15px"} fontWeight={"500"} color="#44444475">The Company</Typography>
      </Stack>
      </Stack>
    </Stack>
  )
}

export default GroupTrust
