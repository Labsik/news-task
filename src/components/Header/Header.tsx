import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Links } from "./Links";
import { AuthContext } from "../../context";
import { useLogout } from "../../hooks";

export const Header = () => {
  const { isAuth } = useContext(AuthContext);
  const { logout } = useLogout();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
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
              <Links to="/" title="Main" />
              <Links to="/news" title="News" />
              <Links to="/profile" title="Profile" />
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, gap: 2, display: { xs: "none", sm: "flex" } }}
          >
            <Links to="/" title="Main" />
            <Links to="/news" title="News" />
            {isAuth ? <Links to="/profile" title="Profile" /> : null}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isAuth ? (
              <MenuItem onClick={logout}>Logout</MenuItem>
            ) : (
              <Links to="/login" title="Login" />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
