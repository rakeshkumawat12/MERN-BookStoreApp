import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItem="center">
        <Button LinkComponent={Link} to="/books" sx={{marginTop: 15, background:'orange'}} variant="contained">
        <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
    </div>
  )
}
