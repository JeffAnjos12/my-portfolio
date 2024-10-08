import { Grid, Typography , Container, styled, Box } from "@mui/material"
import Avatar from "../../../../assets/imgs/Avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";

const Hero = () => {
  
    const StyledHero = styled("div") (() => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))
    const StyledImg = styled("img") (({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border:`1px solid ${theme.palette.primary.contrastText}`
    }))


    return (
      <>
      <StyledHero>
        <Container  maxWidth="lg">

        <Grid container  spacing={2}>
            <Grid item xs= {12} md= {5}>
                <Box position="relative">
                    <Box position="absolute" width="150%" top={-100} right={0}>
                        <AnimatedBackground/>
                    </Box>
                    <Box position={"relative"} textAlign={"center"}>
                        <StyledImg src={Avatar} alt="Avatar" />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= {12} md= {7}>
                <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={1}> Jefferson Anjos</Typography>
                <Typography color="primary.contrastText" variant="h2" textAlign="center"> I'm a Software Engineer</Typography>
                <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                        <StyledButton>
                            <DownloadIcon/>
                            <Typography>Download CV</Typography>
                        </StyledButton>
                </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledButton>
                    <MailOutlineIcon/>
                    <Typography>Contact me!</Typography>
                        </StyledButton>
                </Grid>
            </Grid>
                </Grid>
        </Grid>
        </Container>
      </StyledHero>
      </>
    )
  }
  
  export default Hero
  