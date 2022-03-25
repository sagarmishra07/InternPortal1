import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Navbar from "../components/navbar/Navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Loading from "../components/navbar/Loading";
const cards = [1, 2, 3];

const theme = createTheme();

export default function Roadmap() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 500);
    if (loading)
        return (
            <main>
                <Loading />
            </main>
        );
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h4"
                            variant="h4"
                            align="center"
                            color="primary"
                            gutterBottom
                        >
                            Dont Know Where To Start?
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            color="secondary"
                            paragraph
                        >
                            Get roadmap of the job title that u are interested
                            and watch where u should start
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 5 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        color="secondary"
                                    >
                                        ReactJs
                                    </Typography>
                                    <Typography>
                                        A JavaScript library for building user
                                        interfaces.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <Link to="/reactjs">View More</Link>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        {/* card */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        color="secondary"
                                    >
                                        Django
                                    </Typography>
                                    <Typography>
                                        DjangoThe web framework for
                                        perfectionists with deadlines.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <Link to="/django">View More</Link>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>{" "}
                        {/* card */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        color="secondary"
                                    >
                                        NodeJs
                                    </Typography>
                                    <Typography>
                                        A JavaScript library for building user
                                        interfaces.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to="#">View More</Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}
