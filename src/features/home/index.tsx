import classes from "../../global.module.css";
import { Container, Title, Image, SimpleGrid, Card, Text, em } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import imagePaths from "../../index.ts";
import { useMediaQuery } from "@mantine/hooks";

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const carouselHeight = isMobile ? 200 : 400;

  const slideshowSlides = imagePaths.map((src) => (
    <Carousel.Slide key={src}>
      <Image src={src.toString()} />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Title className={classes.title}>
        Fiona Brown & Sean Parker
      </Title>
      <Title className={classes.subTitle}>
        16/05/2026
      </Title>
      <Title className={classes.subTitle} >
        Please join us on our special day where we tie the knot
      </Title>
      <Carousel
        pt="xs"
        slideSize="70%"
        height={carouselHeight}
        slideGap="md"
        loop
        draggable={false}
        withControls={false}
        plugins={[autoplay.current]}
      >
        {slideshowSlides}
      </Carousel>
      <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 2 }}>
        <Card>
          <Title className={classes.subTitle}>Day Guest Information</Title>
          <Text className={classes.paragraph}>
            The ceremony will take place at 1pm at the church. We will then take photos are the church
            before heading to the reception venue. The reception will start at 2pm where there will be a wedding lunch,
            followed by speeches and cake cutting. Daniel is going to run some fun and games before kicking off the evening at 7pm.
          </Text>
        </Card>
        <Card>
          <Title className={classes.subTitle}>Evening Guest</Title>
          <Text className={classes.paragraph}>
            The evening will kick off at the reception venue at
            approximately 7pm. We will have a live DJ and intend to dance the
            night away. There will be also a selection of evening food that
            guests are more than welcome to.
          </Text>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
