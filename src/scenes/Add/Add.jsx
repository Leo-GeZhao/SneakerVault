import { useState } from "react";
import Header from "../../components/Header/Header";
import { Box, useTheme, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { tokens } from "../../theme";
import axios from "axios";

const Add = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [url, setUrl] = useState("");
  const [sizeStr, setSizeStr] = useState([]);
  const [expenseStr, setExpenseStr] = useState(null);
  const [brand, setBrand] = useState("Nike");

  const handleSubmit = async () => {
    const size = sizeStr[0].split(",").map(Number);
    const expense = Number(expenseStr);
    const data = { url, size, expense, brand };
    await axios.post("/add", data);
  };

  return (
    <Box>
      <Box>
        <Header title="Add" subtitle="Add sneakers to inventory" />
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "250px" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
        noValidate
        autoComplete="off"
        display="flex"
      >
        <TextField
          required
          id="outlined-required"
          label="SNEAKER URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <FormControl sx={{ width: 250, mt: "10px", mb: "6px" }}>
          <InputLabel id="demo-simple-select-label">Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={brand}
            label="Brand"
            onChange={(e) => setBrand(e.target.value)}
          >
            <MenuItem value="Nike">Nike</MenuItem>
            <MenuItem value="Jordan">Jordan</MenuItem>
            <MenuItem value="Adidas">Adidas</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Expense"
          onChange={(e) => setExpenseStr(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Size"
          helperText="Please type sizes like 4,5,8,9"
          onChange={(e) => setSizeStr([e.target.value])}
        />
        <Button
          variant="outlined"
          style={{
            color: colors.primary[100],
            border: `1px solid ${colors.primary[100]}`,
          }}
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
