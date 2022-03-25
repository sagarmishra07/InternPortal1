import React from "react";
import Navbar from "../navbar/Navbar";
import "./React.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

function Django() {
    return (
        <>
            <Navbar />{" "}
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: "paper",
                            pt: 8,
                            pb: 1,
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
                                Roadmap to Master Django
                            </Typography>

                            <Typography
                                variant="h6"
                                align="center"
                                color="secondary"
                                paragraph
                            >
                                This assumes you know fundamentals of
                                programming, python and data structures.Lets
                                divide the learning into sections.
                            </Typography>
                        </Container>
                    </Box>
                    <Container sx={{ py: 10 }} maxWidth="lg">
                        {/* End hero unit */}
                        <Grid container spacing={10}>
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
                                            color="primary"
                                        >
                                            Preface:
                                        </Typography>
                                        <Typography>
                                            1.How internet works generally?
                                        </Typography>
                                        <Typography>
                                            2.What is an API / REST API?
                                        </Typography>
                                        <Typography>
                                            3.What is JSON and Serialization?
                                        </Typography>
                                        <Typography>
                                            4.What is linux and distributions
                                        </Typography>
                                        <Typography>
                                            5.Basic linux commands & package
                                            manager fundamentals
                                        </Typography>
                                    </CardContent>
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
                                            color="primary"
                                        >
                                            Basic Concepts:
                                        </Typography>
                                        <Typography>
                                            1.What is a database (relational)?
                                        </Typography>{" "}
                                        <Typography>
                                            2.What is a framework and why use a
                                            framework at all?
                                        </Typography>{" "}
                                        <Typography>
                                            3.Django project structure Bootstrap
                                            etc
                                        </Typography>{" "}
                                        <Typography>
                                            4.Creating models
                                        </Typography>{" "}
                                        <Typography>6.Migrations</Typography>{" "}
                                        <Typography>
                                            5.Basic APIView and JSON serializing
                                        </Typography>
                                        <Typography>
                                            6.Calling API with postman
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>{" "}
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
                                            color="primary"
                                        >
                                            User Management System:
                                        </Typography>
                                        <Typography>
                                            1.Authentication Vs. Authorization
                                        </Typography>{" "}
                                        <Typography>
                                            2.Different authentication types
                                            (Session Based, Token Based, OAuth2)
                                        </Typography>{" "}
                                        <Typography>
                                            3.What is JWT and how it works
                                        </Typography>{" "}
                                        <Typography>
                                            4.Authentication classes and
                                            permission classes
                                        </Typography>{" "}
                                        <Typography>
                                            5.Protected API endpoints
                                        </Typography>{" "}
                                    </CardContent>
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
                                            color="primary"
                                        >
                                            API In Depth:
                                        </Typography>
                                        <Typography>
                                            1.ModelSerializer
                                        </Typography>
                                        <Typography>
                                            2.CRUD, Different view types & http
                                            verbs
                                        </Typography>
                                        <Typography>
                                            3.Different database relations
                                        </Typography>
                                        <Typography>
                                            4.Writing models with relations
                                        </Typography>
                                        <Typography>
                                            5.CRUD for endpoints with relations
                                        </Typography>
                                        <Typography>
                                            6.Using urls.py file in every django
                                            app
                                        </Typography>
                                        <Typography>
                                            7.Different DBMS (PostgreSQL,
                                            SQLite, MySQL, ...)
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>{" "}
                        <center>Related Links</center>
                        <center>
                            {" "}
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label="Django Docs"
                                    color="primary"
                                    onClick={() =>
                                        window.open(
                                            "https://www.djangoproject.com/start/"
                                        )
                                    }
                                />
                                <Chip
                                    label="coursera"
                                    color="success"
                                    onClick={() =>
                                        window.open(
                                            "https://www.coursera.org/specializations/django"
                                        )
                                    }
                                />{" "}
                                <Chip
                                    label="Code With Harry"
                                    color="error"
                                    onClick={() =>
                                        window.open(
                                            "https://www.youtube.com/watch?v=JxzZxdht-XY"
                                        )
                                    }
                                />
                                <Chip
                                    label="Traversy Media"
                                    color="secondary"
                                    onClick={() =>
                                        window.open(
                                            "https://www.youtube.com/watch?v=PtQiiknWUcI"
                                        )
                                    }
                                />
                                <Chip
                                    label="Tutorials Point"
                                    color="success"
                                    onClick={() =>
                                        window.open(
                                            " https://www.tutorialspoint.com/django/index.htm"
                                        )
                                    }
                                />
                                <Chip
                                    label="Django Rest Framework"
                                    color="primary"
                                    onClick={() =>
                                        window.open(
                                            "https://www.django-rest-framework.org/"
                                        )
                                    }
                                />
                            </Stack>
                        </center>
                    </Container>{" "}
                </main>
            </ThemeProvider>
        </>
    );
}

export default Django;
