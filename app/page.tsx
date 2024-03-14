"use client";

import Image from "next/image";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container, Stack, Box, Typography } from "@mui/material";
import "animate.css";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function Home() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "5rem",
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h1"
                        mb="2rem"
                        textAlign="center"
                    >
                        Vítejte na mé stránce
                    </Typography>
                    <Image
                        src="/plink182.webp"
                        alt="Emo cat plinking"
                        width={640}
                        height={256}
                        className="mb-14 animate__animated animate__flash animate__infinite"
                    />
                </Box>
                <Stack spacing={12}>
                    <Box id="lorem1">
                        <Typography component="h2" variant="h3" mb="2rem">
                            # KOTVA 1
                        </Typography>
                        <Typography
                            component="p"
                            variant="h4"
                            letterSpacing={2}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eum sit modi ex praesentium iure deserunt non
                            quo quibusdam neque. Suscipit temporibus enim odit
                            similique ea minus in cupiditate ut harum? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus delectus soluta itaque ipsam quisquam
                            tempora assumenda eveniet, est nihil eligendi
                            temporibus reiciendis culpa in nostrum. Mollitia
                            doloremque ex possimus veritatis! Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Ipsam
                            labore, possimus est eligendi officia itaque, odit
                            maiores, repudiandae recusandae similique quod
                            voluptatibus. Iusto architecto veritatis quam ab
                            officiis? Eligendi, voluptatibus.
                        </Typography>
                    </Box>
                    <Box id="lorem2">
                        <Typography component="h2" variant="h3" mb="2rem">
                            # KOTVA 2
                        </Typography>
                        <Typography
                            component="p"
                            variant="h4"
                            letterSpacing={2}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eum sit modi ex praesentium iure deserunt non
                            quo quibusdam neque. Suscipit temporibus enim odit
                            similique ea minus in cupiditate ut harum? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus delectus soluta itaque ipsam quisquam
                            tempora assumenda eveniet, est nihil eligendi
                            temporibus reiciendis culpa in nostrum. Mollitia
                            doloremque ex possimus veritatis! Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Ipsam
                            labore, possimus est eligendi officia itaque, odit
                            maiores, repudiandae recusandae similique quod
                            voluptatibus. Iusto architecto veritatis quam ab
                            officiis? Eligendi, voluptatibus.
                        </Typography>
                    </Box>
                    <Box id="lorem3">
                        <Typography component="h2" variant="h3" mb="2rem">
                            # KOTVA 3
                        </Typography>
                        <Typography
                            component="p"
                            variant="h4"
                            letterSpacing={2}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eum sit modi ex praesentium iure deserunt non
                            quo quibusdam neque. Suscipit temporibus enim odit
                            similique ea minus in cupiditate ut harum? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus delectus soluta itaque ipsam quisquam
                            tempora assumenda eveniet, est nihil eligendi
                            temporibus reiciendis culpa in nostrum. Mollitia
                            doloremque ex possimus veritatis! Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Ipsam
                            labore, possimus est eligendi officia itaque, odit
                            maiores, repudiandae recusandae similique quod
                            voluptatibus. Iusto architecto veritatis quam ab
                            officiis? Eligendi, voluptatibus.
                        </Typography>
                    </Box>
                    <Box id="lorem4">
                        <Typography component="h2" variant="h3" mb="2rem">
                            # KOTVA 4
                        </Typography>
                        <Typography
                            component="p"
                            variant="h4"
                            letterSpacing={2}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eum sit modi ex praesentium iure deserunt non
                            quo quibusdam neque. Suscipit temporibus enim odit
                            similique ea minus in cupiditate ut harum? Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus delectus soluta itaque ipsam quisquam
                            tempora assumenda eveniet, est nihil eligendi
                            temporibus reiciendis culpa in nostrum. Mollitia
                            doloremque ex possimus veritatis! Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Ipsam
                            labore, possimus est eligendi officia itaque, odit
                            maiores, repudiandae recusandae similique quod
                            voluptatibus. Iusto architecto veritatis quam ab
                            officiis? Eligendi, voluptatibus.
                        </Typography>
                    </Box>
                </Stack>
            </Container>
            <Footer theme={darkTheme} />
        </ThemeProvider>
    );
}
