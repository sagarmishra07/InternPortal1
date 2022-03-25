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

function ReactJs() {
    return (
        <>
            <Navbar />

            <ThemeProvider theme={theme}>
                <CssBaseline />

                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: "background.paper",
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
                                Roadmap for React JS 2022
                            </Typography>

                            <Typography
                                variant="h6"
                                align="center"
                                color="secondary"
                                paragraph
                            >
                                Lets divide the learning into three sections:
                                Fundamentals, Advance and Ecosystem
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
                                            Fundamentals:
                                        </Typography>
                                        <Typography>
                                            1.Create React App
                                        </Typography>
                                        <Typography>2.Components</Typography>
                                        <Typography>
                                            3.Functional Components
                                        </Typography>
                                        <Typography>
                                            4.Class Components
                                        </Typography>
                                        <Typography>
                                            5.Class Components
                                        </Typography>
                                        <Typography>6.JSX</Typography>
                                        <Typography>
                                            7.Props and State
                                        </Typography>
                                        <Typography>
                                            8.useState and useEffect Hooks
                                        </Typography>
                                        <Typography>
                                            9.setState and Component Lifecycle
                                            Methods
                                        </Typography>
                                        <Typography>
                                            10.Conditional Rendering
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
                                            Ecosystem
                                        </Typography>
                                        <Typography>
                                            1.State Management : Redux,Flux
                                        </Typography>{" "}
                                        <Typography>
                                            2.Routing : React Router
                                        </Typography>{" "}
                                        <Typography>
                                            3.Styling : MaterialUI,Tailwind.css,
                                            Bootstrap etc
                                        </Typography>{" "}
                                        <Typography>
                                            4.Testing: Cypress ,Jest
                                        </Typography>{" "}
                                        <Typography>5.TypeScript</Typography>{" "}
                                        <Typography>6.Storybook</Typography>{" "}
                                        <Typography>7.Firebase</Typography>
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
                                            Advance Topics:
                                        </Typography>
                                        <Typography>1.Isomorphic</Typography>
                                        <Typography>2.GraphQL</Typography>
                                        <Typography>
                                            3.Higher Order Components
                                        </Typography>
                                        <Typography>4.Render Props</Typography>
                                        <Typography>5.Refs</Typography>
                                        <Typography>
                                            6.fetch or axios
                                        </Typography>
                                        <Typography>7.useContext</Typography>
                                        <Typography>8.useReducer</Typography>
                                        <Typography>9.useMemo</Typography>
                                        <Typography>10.Custom Hooks</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>{" "}
                        <center>Related Links</center>
                        <center>
                            {" "}
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label="ReactJs Docs"
                                    color="primary"
                                    onClick={() =>
                                        window.open(
                                            "https://reactjs.org/docs/getting-started.html"
                                        )
                                    }
                                />
                                <Chip
                                    label="Microsoft Docs"
                                    color="success"
                                    onClick={() =>
                                        window.open(
                                            " https://docs.microsoft.com/en-us/learn/modules/react-get-started/"
                                        )
                                    }
                                />{" "}
                                <Chip
                                    label="Dev Docs"
                                    color="error"
                                    onClick={() =>
                                        window.open(
                                            " https://devdocs.io/react/"
                                        )
                                    }
                                />
                                <Chip
                                    label="Code with Harry (HTML,CSS)"
                                    color="secondary"
                                    onClick={() =>
                                        window.open(
                                            "https://www.youtube.com/watch?v=GeykycZ4Ixs"
                                        )
                                    }
                                />
                                <Chip
                                    label="Code Evolution"
                                    color="success"
                                    onClick={() =>
                                        window.open(
                                            " https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
                                        )
                                    }
                                />
                                <Chip
                                    label="Tailwind CSS"
                                    color="primary"
                                    onClick={() =>
                                        window.open(
                                            "https://tailwindcss.com/docs/installation"
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

export default ReactJs;
