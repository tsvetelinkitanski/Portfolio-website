import { Typography } from '@mui/material'
import React from 'react'

export default function Headline({name}) {
  return (
    <Typography sx={{paddingBottom: "10px", paddingLeft: "auto", paddingTop: "30px", color: "#10637D"}} variant='h5'>{name}</Typography>
    )
}
