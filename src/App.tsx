import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";

import utils from './utils'

import "./App.css";

function App() {
  const [state, setState] = useState([false, false, false, false]);
  const [popup, setPopup] = useState<any>({
    open: false,
    message: null,
  });

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const arr = [...state];
    arr[+event.target.name] = event.target.checked;
    setState(arr);
    try {
      await utils.setSwitches(arr);
      setPopup({open: true, message: "Газ подан"})
    } catch (e) {
      setPopup({open: true, message: "Ошибка"})
    }
    
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        style={{
          backgroundColor: "#424341",
          height: "100vh",
          padding: "20px",
        }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item sm={12}>
            <Card>
              <CardContent>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Подать газ</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state[0]}
                          onChange={handleChange}
                          name="0"
                        />
                      }
                      label="Первый"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state[1]}
                          onChange={handleChange}
                          name="1"
                        />
                      }
                      label="Второй"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state[2]}
                          onChange={handleChange}
                          name="2"
                        />
                      }
                      label="Третий"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={state[3]}
                          onChange={handleChange}
                          name="3"
                        />
                      }
                      label="Четвёртый"
                    />
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={popup.open}
        autoHideDuration={1000}
        message={popup.message}
        onClose={() =>
          setPopup({
            open: false,
            message: null,
          })
        }
      ></Snackbar>
    </React.Fragment>
  );
}

export default App;
