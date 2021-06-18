import React from 'react'
import Carousel from './Carousel.js'
import Gallery from "../Gallery/Gallery.js"
import About from "./About.js";
import { Container, Paper } from '@material-ui/core'
import Reservation from '../Reservation/Reservation'
function HomePage() {

    let headline = true
    return (
        <>
            <div style={{ padding: "2%", width: "94%" }}>
                <Paper variant="outlined" square>
                    <Carousel></Carousel>
                </Paper>

            </div>
            <Container >


                <About></About>
                <Gallery></Gallery>
                <Reservation falsePaper={headline} />

            </Container>
        </>
    )
}

export default HomePage
