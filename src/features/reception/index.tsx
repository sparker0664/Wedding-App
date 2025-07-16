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
        Anne of Cleves Barn & Bardfield Vineyard
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image className={localClasses.image} src={reception} height={500} />
        </Card.Section>

        <Group justify="flex-end" mt="md" mb="xs">
          {badge}
        </Group>

        <Text className={classes.paragraph}>
          The reception will take place at Anne of Cleves Barn at Bardfield
          Vineyard. So named because the estate was gifted to Anne of Cleves by
          Henry VIII as part of their divorce settlement.
        </Text>
        <Text className={classes.paragraph}>
          The drinks reception and dinner is by invite only. Evening guests
          should not arrive til later for the evening disco. See the wedding
          timeline for more information.
        </Text>
        <Text className={classes.paragraph}>
          <Text component={"span"} inherit inline fw={700}>
            Parking:
          </Text>{" "}
          There is a car park on site where guests can leave their cars
          overnight.
        </Text>
        <Text className={classes.paragraph}>
          <Text component={"span"} inherit inline fw={700}>
            Transport:
          </Text>{" "}
          Bardfield Vineyard is a 15 minute drive from St Mary's Church. For the
          evening, please pre-book your taxis. Arrange your taxi to leave for
          around 11.30pm because guests must be off the premises by midnight.
        </Text>
        <Text className={localClasses.boldParagraph} fw={700}>
          Taxis must be booked in advance as there is poor mobile phone signal
          and no taxi rank in Great Bardfield!
        </Text>
      </Card>
    </Container>
  );
}
