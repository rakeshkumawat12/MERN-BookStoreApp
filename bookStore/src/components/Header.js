import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined"
import { NavLink } from "react-router-dom"

export default function Header() {
  const [value, setValue] = useState()
  return (
    <div>
      <AppBar sx={{ background: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/">
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor='secondary'
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}
