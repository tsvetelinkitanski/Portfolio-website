import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Contact() {
    return (
        <Card  style={{ maxWidth: 850, margin: "0 auto", padding: "20px 5px" }} id="contact">
            <CardContent>
                <Typography gutterBottom variant="h4">Contact Me</Typography>
                <Typography gutterBottom color="textSecondary" variant="body2" component="p">Fill up the form and I will get back to you within 24 hours.</Typography>
                <form>
                    <Grid container spacing={1}>

                        <Grid xs={12} sm={6} item>
                            <TextField
                                required
                                label="First Name"
                                placeholder='Enter first name'
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                required
                                label="Last Name"
                                placeholder='Enter last name'
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                required
                                type="email"
                                label="Email"
                                placeholder='Enter email'
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type="number"
                                label="Phone number"
                                placeholder='Enter phone number'
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                label="Message"
                                placeholder='Type message here'
                                multiline rows={4}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <Button type='submit' variant="contained" color='primary' fullWidth>Submit</Button>
                        </Grid>

                    </Grid>

                </form>

            </CardContent>
        </Card>)
}
