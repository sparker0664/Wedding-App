import { Card, Container, Group, Title, Text, Image, rem, Badge, em, Box } from "@mantine/core";
import reception from "../../assets/reception/greatLodge.jpg";
import classes from "../../global.module.css";
import localClasses from "./reception.module.css";
import { useMediaQuery } from "@mantine/hooks";
export default function ReceptionPage(){
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const badgeSize = isMobile ? "sm" : "lg";

  const badge = isMobile ? (<Box className={localClasses.mobileBadge}>Address: Braintree Rd, Great Bardfield, Braintree CM7 4QD</Box>)
    : (<Badge className={localClasses.badge} size={badgeSize}>Address: Braintree Rd, Great Bardfield, Braintree CM7 4QD</Badge>)
  return(
    <Container>
      <Title className={classes.title} size={rem(60)}>Anne of Cleves Barn</Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={reception}
            height={500}
          />
        </Card.Section>

        <Group justify="flex-end" mt="md" mb="xs">
          {badge}
        </Group>

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>
      </Card>
    </Container>
  )
}