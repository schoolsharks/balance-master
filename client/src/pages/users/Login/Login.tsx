import {
  Button,
  Checkbox,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import "./Login.css";
import { ArrowBack, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { createUser } from "../../../store/user/userActions";

const Login = () => {
  const navigate = useNavigate();
  const [error,setError]=useState<string|null>(null)
  const dispatch=useDispatch<AppDispatch>()
  const [tncModalOpen, setTncModalOpen] = useState<boolean>(false);
  const [tncAccepted, setTncAccepted] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
    employeeId: "",
  });

  const handleChange = (field: any) => (e: any) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit=()=>{
    if(formValues.name.trim()===""){
      setError("Screen name is required")
    }
    else if(!tncAccepted){
      setError("Accept terms and conditions to continue")
    }
    else{
      dispatch(createUser(formValues))
    }
  }

  return (
    <Stack flex={"1"}>
      {!tncModalOpen ? (
        <UpperTriangleBox sx={{ height: "100%", flex: "1" }}>
          <Stack padding="16px" flex={"1"} marginTop={"-36px"}>
            <Typography color="#fff" fontSize={"30px"} fontWeight={"700"}>
              Login
            </Typography>
            <Stack spacing={3} marginTop={"32px"}>
              <TextField
                id="name"
                label="Name *"
                variant="standard"
                placeholder="eg. Vanessa Jenson"
                value={formValues.name}
                onChange={handleChange("name")}
              />
              <TextField
                id="email"
                label="Email"
                className="not-mandate"
                variant="standard"
                placeholder="eg. vanessa.jenson@example.com"
                value={formValues.email}
                onChange={handleChange("email")}
              />
              <TextField
                id="contact"
                label="Contact"
                variant="standard"
                className="not-mandate"
                placeholder="eg. +91 XXXXX XXXXX"
                value={formValues.contact}
                onChange={handleChange("contact")}
              />
              <TextField
                id="employeeId"
                label="Employee Id"
                variant="standard"
                className="not-mandate"
                placeholder="eg. EMP12345"
                value={formValues.employeeId}
                onChange={handleChange("employeeId")}
              />
              {error && <Typography fontSize={"12px"} color="red" bgcolor="white" padding="0 10px" >{error}</Typography>}
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ transform: "translateX(-14px)" }}
              >
                <Checkbox
                  checked={tncAccepted}
                  onChange={() => setTncAccepted((prev) => !prev)}
                  sx={{
                    "&.MuiCheckbox-root": { color: "#ffffff" },
                  }}
                />
                <Typography
                  fontWeight={"500"}
                  color={"#ffffffad"}
                  fontSize={"14px"}
                >
                  I agree to the
                  <span
                    onClick={() => setTncModalOpen(true)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "4px",
                      color: "#ffffff",
                    }}
                  >
                    Terms & conditions{" "}
                  </span>
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              margin={"auto 0 16px"}
              padding="10px"
              alignItems={"center"}
              gap={"24px"}
            >
              <IconButton onClick={() => navigate(-1)} sx={{ padding: "0" }}>
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
              <Button
                variant="outlined"
                onClick={handleSubmit}
                sx={{
                  width: "max-content",
                  textTransform: "none",
                  borderRadius: "48px",
                  fontSize: "20px",
                  padding: "0 20px",
                  height: "40px",
                }}
              >
                Start
              </Button>
            </Stack>
          </Stack>
        </UpperTriangleBox>
      ) : (
        <UpperTriangleBox
          sx={{ height: "100%", margin: "72px 20px ", borderRadius: "20px" }}
        >
          <Stack color={"#fff"} padding={"16px"} marginBottom={"32px"}>
            <Stack direction={"row-reverse"}>
              <IconButton onClick={() => setTncModalOpen(false)}>
                <Close sx={{ color: "#fff" }} />
              </IconButton>
            </Stack>
            <Typography
              fontSize={"24px"}
              fontWeight={"800"}
              textAlign={"center"}
              marginTop={"16px"}
            >
              TERMS & CONDITIONS
            </Typography>
            <Typography marginTop={"12px"}>
              This game is designed for fun and educational purposes only!{" "}
              <br />
              <br />
              No real data will be collected, stored, or shared during the game.{" "}
              <br />
              <br />
              All inputs will be erased after the game concludes unless you
              explicitly request to stay connected for follow-up discussions or
              insights. <br />
              <br />
              Enjoy the experience without any worries! <br />
              <br />
            </Typography>
          </Stack>
        </UpperTriangleBox>
      )}
    </Stack>
  );
};

export default Login;
