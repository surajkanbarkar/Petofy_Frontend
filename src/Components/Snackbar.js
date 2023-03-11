import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarComponent = ({open, alert, alertSeverity}) =>{
    //const [open2, setOpen2] = useState(open);
    return <Snackbar open={open} autoHideDuration={1000} onClose={() => open = false}>
            <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                {alert}
            </Alert>
        </Snackbar>
}

export default SnackbarComponent;