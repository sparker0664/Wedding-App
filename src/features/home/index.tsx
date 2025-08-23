import classes from "../../global.module.css";
import localClasses from "./home.module.css";
import timelineImage from "../../assets/timeline/timeline.png";
import {
  Container,
  Title,
  Image,
  rem,
  SimpleGrid,
  Card,
  Text,
  em,
  Modal,
  Button,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import imagePaths from "../../index.ts";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconHeart } from "@tabler/icons-react";

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const carouselHeight = isMobile ? 200 : 400;
  const [opened, { open, close }] = useDisclosure(false);
  const slideshowSlides = imagePaths.map((src) => (
    <Carousel.Slide key={src}>
      <Image src={src.toString()} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Modal
        title={<Title>Order of the Day</Title>}
        opened={opened}
        onClose={close}
        closeOnClickOutside
        closeOnEscape
        withCloseButton
        centered
        size={"xl"}
        classNames={{
          content: localClasses.orderOfTheDay,
          close: localClasses.closeButton,
          title: localClasses.title,
        }}
        transitionProps={{ transition: "fade-up" }}
      >
        <Image src={timelineImage} />
      </Modal>
      <Container>
        <Title className={classes.title} size={rem(60)}>
          Fiona Brown & Sean Parker
        </Title>
        <Title className={classes.title}>16/05/2026</Title>
        <Title className={classes.title}>
          Please join us on our special day as we tie the knot
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
        <div className={localClasses.divider}>
          <IconHeart className={localClasses.icon} />
        </div>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
          <Card className={classes.card}>
            <Title className={classes.title}>Day Guests </Title>
            <Text className={classes.paragraph}>
              You are invited to join us for our wedding ceremony at St Mary's
              Church, the drinks reception and dinner at Anne of Cleves Barn,
              and the evening disco that follows.
              <Text className={localClasses.boldParagraph} fw={700}>
                Please RSVP with your dietary requirements by 1st March 2026.
              </Text>
            </Text>
          </Card>
          <Card className={classes.card}>
            <Title className={classes.title}>Evening Guests</Title>
            <Text className={classes.paragraph}>
              The evening disco will kick off at the reception venue at
              approximately 7pm. You are welcome to join us at the church
              ceremony too, but please arrange your own dinner plans.
              <Text className={localClasses.boldParagraph} fw={700}>
                If you fancy hearty pub grub, we recommend the Retreat, opposite
                St Mary's Church.
              </Text>
            </Text>
          </Card>
        </SimpleGrid>
        <Button className={localClasses.revealButton} onClick={open}>
          Order of the Day
        </Button>
      </Container>
    </>
  );
}
