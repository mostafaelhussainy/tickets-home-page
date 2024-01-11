import { Button, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = () => {
  const [value, setValue] = useState("eng | AED");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <header>
      <h1>Logo</h1>
      <div className="navigation">
        <Button variant="text">home</Button>
        <Button variant="text">categories</Button>
        <Button variant="text">contact us</Button>
      </div>
      <div className="controls">
        <Select value={value} defaultValue={value} onChange={handleChange}>
          <MenuItem value={"eng | AED"}>
            <span class="fi fi-us"></span>
            eng | AED
          </MenuItem>
        </Select>
        <Button variant="outlined">register</Button>
        <Button variant="text">sign in</Button>
      </div>
    </header>
  );
};

export default Header;
