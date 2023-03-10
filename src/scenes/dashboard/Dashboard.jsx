import { useNavigate } from "react-router-dom";

import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//Components
import Header from "../../components/Header/Header";
import Transaction from "../../components/Transaction/Transaction";
import PieChart from "../../components/PieChart/PieChart";
import Logout from "../../components/Logout/Logout";

//User Service
import { logout } from "../../utilities/service/user";

//Color Theme
import { tokens } from "../../theme";

const Dashboard = ({
  currencyEx,
  currencyCal,
  currency,
  setUser,
  user,
  transactions,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //Navigate to other Pages
  const navigate = useNavigate();

  //Item Format
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  //Handle User Logout
  const handleLogOut = () => {
    logout();
    setUser(null);
    navigate("/");
  };

  //Get Most Recent Two Transactions Showing in dashboard
  const displayTransaction = transactions.slice(0, 2);

  return (
    <Box sx={{ mt: 3, mx: 1 }}>
      <Box>
        <Header
          title="Dashboard"
          subtitle="Welcome to dashboard"
          note={currencyEx === currency.CAD ? "CAD $" : "USD $"}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <Box
                display="flex"
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mb: 2 }}>Welcome, {user.name}</Typography>
                <Logout
                  colors={colors}
                  handleLogout={handleLogOut}
                  setUser={setUser}
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ marginBottom: "20px" }}>
              <Box
                display="flex"
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mb: 2 }}>
                  Total Sold Item: {transactions.length}
                </Typography>
              </Box>
            </Item>
            <Item>
              <Box
                display="flex"
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mb: 2 }}>
                  Total Profit:{" "}
                  {currencyCal(
                    transactions.map((t) => t.profit).reduce((a, b) => a + b, 0)
                  )}
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <PieChart currencyCal={currencyCal} height={200} user={user} />
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item>
              <Transaction
                currencyCal={currencyCal}
                transactions={displayTransaction}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
