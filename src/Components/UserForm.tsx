import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Paper, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../GlobalData/UserSlice";
import PopUp from "./PopUp";

const UserForm = () => {
  const [userData, setUserData] = useState({
    id: Date.now().toString(),
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isDirty, setIsDirty] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        setShowPopUp(true);
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(addUser(userData));
    setIsDirty(false);
    setUserData({
      id: Date.now().toString(),
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setShowPopUp(false);
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            User Information
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              style={{ marginTop: "1rem" }}
              fullWidth
            >
              Save
            </Button>
          </Box>
        </Paper>
      </Grid>
      {showPopUp && (
        <PopUp
          setUserData={setUserData}
          userData={userData}
          open={true}
          dispatch={dispatch}
          addUser={addUser}
          cancel={setShowPopUp}
        />
      )}
    </Grid>
  );
};

export default UserForm;
