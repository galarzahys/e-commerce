import React from "react";
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
import { Badge, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { actionTypes } from "../context/reducer";
import { ShoppingCart } from "@mui/icons-material";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [{ basket, user }, dispatch] = useStateValue();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        dispatch({
          type: actionTypes.EMPTY_BASKET,
          basket: [],
        });
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              src={"./logo.png"}
              alt={"shadow-reels-logo"}
              height={"50px"}
            ></img>
          </Grid>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DrumShop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={`/`} style={{ textDecoration: "none" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >Products</Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={`/basket`} style={{ textDecoration: "none" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >My basket</Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Grid sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src={"./logo.png"}
              alt={"shadow-reels-logo"}
              height={"50px"}
            ></img>
          </Grid>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

              <Link to={`/`} style={{ textDecoration: "none" }}>
                <Button

                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >Products

                </Button>
              </Link>
                            <Link to={`/basket`} style={{ textDecoration: "none" }}>
                            <Button

                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: "white", display: "block" }}
                            >My Basket

                            </Button>
                          </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? user.email : "Invitado"}
            <Tooltip title="Open settings" sx={{ p: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Tooltip title="Go to basket" sx={{ p: 0 }}>
            <Link to={"/basket"}>
              <IconButton>
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to={"/login"}>
                  <Button color="inherit" onClick={handleLogout}>
                    {user ? "Logout" : "Login"}
                  </Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
