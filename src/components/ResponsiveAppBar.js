import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import mainLogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { NestedDropdown } from "mui-nested-menu";

const pages = ["Über Uns", "Ausbildung", "Kurse", "Kontakt"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenSubMenu = (event) => {
    setAnchorElSubMenu(event.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={mainLogo}
              alt="Logo"
              width="auto"
              height="80px"
              onClick={() => navigate("/")}
            />

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon color="black" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      if (page.toLowerCase() === "über uns") {
                        navigate("/uberuns");
                      } else if (page.toLowerCase() === "kurse") {
                        navigate("/kurse");
                      } else if (page.toLowerCase() === "kontakt") {
                        navigate("/kontakt");
                      }
                      handleCloseNavMenu();
                    }}
                  >
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <React.Fragment key={page}>
                  {page.toLowerCase() === "ausbildung" ? (
                    (
                      <React.Fragment>
                        <NestedDropdown
                          menuItemsData={{label: 'Ausbildung',
                          items: [
                           
                          
                            {
                              label: 'Stapler',
                              callback: () => navigate("/stapler"),

                            },
                          ],}}
                          ButtonProps={{ endIcon:"", sx:{color:"black", justifyContent:"center", alignContent:"center" }, }}
                          
                          onClick={() => console.log("Clicked")}
                        ></NestedDropdown>
                      </React.Fragment>
                    )
                  ) : (
                    <Button
                      onClick={() => {
                        if (page.toLowerCase() === "über uns") {
                          navigate("/uberuns");
                        } else if (page.toLowerCase() === "kurse") {
                          navigate("/kurse");
                        } else if (page.toLowerCase() === "kontakt") {
                          navigate("/kontakt");
                        }
                        handleCloseNavMenu();
                      }}
                      sx={{  mx: 1, color: "black", cursor: "pointer" }}
                    >
                      {page}
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
