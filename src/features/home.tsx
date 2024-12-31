import classes from "./home.module.css";
import { Container, Title, useMantineTheme } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Home() {
    const theme = useMantineTheme();
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    return (
        <Container>
            <Title
                className={classes.cursive}
                c={theme.colors.charcoalGray[5]}
                order={1}
            >
                Fiona Brown & Sean Parker
            </Title>
            <Title
                order={3}
                className={classes.cursive}
            >
                16/05/2026
            </Title>
            <Title
                order={3}
                className={classes.cursive}
                mb="lg"
            >
                Please join us on our special day where we tie the knot
            </Title>
            <Carousel
                pt="lg"
                slideSize="70%"
                height={200}
                slideGap="md"
                loop
                draggable={false}
                withControls={false}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
                <Carousel.Slide>4</Carousel.Slide>
                <Carousel.Slide>5</Carousel.Slide>
            </Carousel>
        </Container>
    );
}
