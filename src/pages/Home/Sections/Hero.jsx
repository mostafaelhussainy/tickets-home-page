import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  return (
    <section id="hero">
      <h2>
        the power of
        <br />
        of smart ticketing
      </h2>
      <div className="search-input">
        <TextField
          placeholder="search by artist, event or venue"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
