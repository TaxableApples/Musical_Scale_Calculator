import React, { useState } from "react";
import { Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import { notes, scales } from "./Data";
import Notes from "./Notes";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function Options() {
  const classes = useStyles();
  const [root, setRoot] = useState("C");
  const [scale, setScale] = useState("Major");

  const changeRoot = (event) => {
    setRoot(event.target.value);
  };

  const changeScale = (event) => {
    setScale(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="select-root">Root</InputLabel>
        <Select
          value={root}
          onChange={changeRoot}
          label="Root"
          id="select-root"
        >
          {notes.map((e, i) => (
            <MenuItem key={e + i} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="select-scale">Scale</InputLabel>
        <Select
          value={scale}
          onChange={changeScale}
          label="Scale"
          id="select-scale"
        >
          {Object.keys(scales).map((e, i) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Notes root={root} scale={scale} />
    </div>
  );
}

export default Options;
