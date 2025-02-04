import { Modal, Box, Button } from "@mui/material";
import User from "../types/UserType";

function PopUp({ setUserData,cancel, userData, dispatch, addUser, open }: { setUserData:any,userData: User, dispatch: any, addUser: any, open: boolean, cancel: any }) {
  return (
    <Modal open={open} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 1 }}>
        <Button variant="contained" color="primary" onClick={() => {
          dispatch(addUser(userData));
          cancel(false);
          setUserData({
            id: Date.now().toString(),
            name: "",
            email: "",
            phone: "",
            address: "",
          })
        }}>
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={() => {
          cancel(false)
          setUserData({
            id: Date.now().toString(),
            name: "",
            email: "",
            phone: "",
            address: "",
          })
        }
        } sx={{ marginLeft: 1 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}

export default PopUp;