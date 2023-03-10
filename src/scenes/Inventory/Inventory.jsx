import React, { useState, useEffect } from "react";

import { Box, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//Components
import Header from "../../components/Header/Header";
import List from "../../components/List/List";

//Inventory API
import * as inventoryAPI from "../../utilities/api/inventory";

//Color Theme
import { tokens } from "../../theme";

const Inventory = ({
  currencyEx,
  currencyCal,
  currency,
  user,
  finish,
  setFinish,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [inventory, setInventory] = useState([]);
  const [brand, setBrand] = useState("Nike");

  //Get All Inventories
  useEffect(
    function () {
      const getInventory = async () => {
        const data = { id: user._id };
        const allInventory = await inventoryAPI.getAll(data);
        const inventory = allInventory.data.filter((i) => i.brand === brand);
        setFinish(false);
        setInventory(inventory);
      };
      getInventory();
    },
    [finish, brand]
  );

  return (
    <Box sx={{ mt: 3 }}>
      <Box>
        <Header
          title="Inventory"
          subtitle="Inventory List"
          note={currencyEx === currency.CAD ? "CAD $" : "USD $"}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <FormControl sx={{}} size="small">
                    <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={brand}
                      label="Brand"
                      onChange={(e) => {
                        setBrand(e.target.value);
                      }}
                    >
                      <MenuItem value="Nike">Nike</MenuItem>
                      <MenuItem value="Jordan">Jordan</MenuItem>
                      <MenuItem value="Adidas">Adidas</MenuItem>
                      <MenuItem value="Yeezy">Yeezy</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Highest Bid</TableCell>
                <TableCell>Lowest Ask</TableCell>
                <TableCell>Last Sale</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
        {inventory.map((i) => (
          <List inventory={i} currencyCal={currencyCal} setFinish={setFinish} />
        ))}
      </Box>
    </Box>
  );
};

export default Inventory;
