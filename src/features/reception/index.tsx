import {
  Card,
  Container,
  Group,
  Title,
  Text,
  Image,
  rem,
  Badge,
  em,
  Box,
} from "@mantine/core";
import reception from "../../assets/reception/greatLodge.jpg";
import classes from "../../global.module.css";
import localClasses from "./reception.module.css";
import { useMediaQuery } from "@mantine/hooks";
export default function ReceptionPage() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const badgeSize = isMobile ? "sm" : "lg";

  const badge = isMobile ? (
    <Box className={localClasses.mobileBadge}>
      Address: Braintree Rd, Great Bardfield, Braintree CM7 4QD
    </Box>
  ) : (
    <Badge className={localClasses.badge} size={badgeSize}>
      Address: Braintree Rd, Great Bardfield, Braintree CM7 4QD
    </Badge>
  );
  return (
    <Container>
      <Title className={classes.title} size={rem(60)}>
        Anne of Cleves Barn
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image className={localClasses.image} src={reception} height={500} />
        </Card.Section>

        <Group justify="flex-end" mt="md" mb="xs">
          {badge}
        </Group>

        <Text className={classes.paragraph}>
          The reception will take place at Anne of Cleves Barn in Great
          Bardfield. This estate was gifted to Anne of Cleves by Henry VIII as
          part of their divorce settlement. The reception will start at 4pm with
          drinks on arrival. We will then have a wedding lunch followed by
          speeches and some entertainment arranged by Daniel. The evening
          reception will start at 7pm with a some food and dancing. Guests can
          explore the grounds for pictures and there is a car park on site where
          guests can leave their cars overnight. Guests must be off the premises
          by 12am.
        </Text>
        <Text className={localClasses.boldParagraph} fw={700}>
          Taxis must be booked in advance as there is no taxi rank in Great
          Bardfield!
        </Text>
      </Card>
    </Container>
  );
}
