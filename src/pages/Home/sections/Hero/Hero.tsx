import { Grid, Typography , Container, styled } from "@mui/material"
import Avatar from "../../../../assets/imgs/Avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {
  
    const StyledHero = styled("div") (() => ({
        backgroundColor: "#000",
        height: "100vh",
    }))
    const StyledImg = styled("img") (() => ({
        width: "100%",
        borderRadius: "50%",
        border:"1px solid #fff"
    }))


    return (
      <>
      <StyledHero>
        <Container  maxWidth="lg">

        <Grid container  spacing={2}>
            <Grid item xs= {12} md= {4}>
            <StyledImg src={Avatar} alt="" />
            </Grid>
            <Grid item xs= {12} md= {8}>
                <Typography color="primary" variant="h1" textAlign="center"> Jefferson Anjos</Typography>
                <Typography color="primary" variant="h2" textAlign="center"> I'm a Software Engineer</Typography>
                <Grid container display="flex" justifyContent="center">
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <button>
                    <DownloadIcon/>
                        Download CV
                        </button>
                </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <button>
                    <MailOutlineIcon/>
                        Download CV
                        </button>
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
  