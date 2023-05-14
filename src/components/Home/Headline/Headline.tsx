import { Typography } from '@mui/material'
import React from 'react'

export default function Headline({name}) {
  return (
    <Typography sx={{paddingBottom: "50px", paddingLeft: "auto"}} variant='h5'>{name}</Typography>
    )
}
