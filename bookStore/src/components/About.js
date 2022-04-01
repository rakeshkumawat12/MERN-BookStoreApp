import { Box, Typography } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center' >
          <Typography sx={{fontFamily: "fantasy"}} variant="h2">
            This is a CRUD Application
          </Typography>
          <Typography sx={{fontFamily: "fantasy"}} variant="h3">By MERN STACK</Typography>
      </Box>
    </div>
  )
}
