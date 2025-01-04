import classes from "./home.module.css";
import { Container, Title, Image, rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import imagePaths from "../index";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const slideshowSlides = imagePaths.map((src) => (
    <Carousel.Slide key={src}>
      <Image src={src.toString()} />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Title className={classes.cursive} size={rem(60)}>
        Fiona Brown & Sean Parker
      </Title>
      <Title order={3} className={classes.cursive}>
        16/05/2026
      </Title>
      <Title order={3} className={classes.cursive} mb="lg">
        Please join us on our special day where we tie the knot
      </Title>
      <Carousel
        pt="lg"
        slideSize="70%"
        height={600}
        slideGap="md"
        loop
        draggable={false}
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slideshowSlides}
      </Carousel>
    </Container>
  );
}
