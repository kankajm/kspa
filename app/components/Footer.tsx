import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Theme, Typography } from "@mui/material";

// TODO: text pomoci Typography

interface Props {
    theme: Theme;
}

export default function Footer({ theme }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                mt: "4rem",
            }}
        >
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: "auto",
                    textAlign: "center",
                    backgroundColor: theme.palette.grey[900],
                }}
            >
                Vytvořeno Jaroslavem Kaňkou s využítí: NextJS, MUI{" "}
                <FavoriteIcon />
            </Box>
        </Box>
    );
}
