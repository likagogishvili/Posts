import React from "react";
import * as muiForHeader from "./headerImports";

function Header() {
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <muiForHeader.AppBar position="static">
      <muiForHeader.Container maxWidth="xl">
        <muiForHeader.Toolbar disableGutters>
          <muiForHeader.AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <muiForHeader.Typography
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
            LOGO
          </muiForHeader.Typography>

          <muiForHeader.Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <muiForHeader.IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <muiForHeader.MenuIcon />
            </muiForHeader.IconButton>
            <muiForHeader.Menu
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
              {pages.map((page) => (
                <muiForHeader.MenuItem key={page} onClick={handleCloseNavMenu}>
                  <muiForHeader.Typography textAlign="center">{page}</muiForHeader.Typography>
                </muiForHeader.MenuItem>
              ))}
            </muiForHeader.Menu>
          </muiForHeader.Box>
          <muiForHeader.AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <muiForHeader.Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </muiForHeader.Typography>
          <muiForHeader.Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <muiForHeader.Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </muiForHeader.Button>
            ))}
          </muiForHeader.Box>

          <muiForHeader.Box sx={{ flexGrow: 0 }}>
            <muiForHeader.Tooltip title="Open settings">
              <muiForHeader.IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <muiForHeader.Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </muiForHeader.IconButton>
            </muiForHeader.Tooltip>
            <muiForHeader.Menu
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
              {settings.map((setting) => (
                <muiForHeader.MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <muiForHeader.Typography textAlign="center">{setting}</muiForHeader.Typography>
                </muiForHeader.MenuItem>
              ))}
            </muiForHeader.Menu>
          </muiForHeader.Box>
        </muiForHeader.Toolbar>
      </muiForHeader.Container>
    </muiForHeader.AppBar>
  );
}
export default Header;
