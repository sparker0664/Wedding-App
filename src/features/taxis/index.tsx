import { Container, rem, Text, Title } from "@mantine/core";
import classes from "../../global.module.css";

export default function TaxisPage() {
  return (
    <Container>
      <Title className={classes.title} size={rem(60)}>
        Taxi Services
      </Title>
      <Text className={classes.paragraph}>
        Taxi's must be booked in advance, please feel free to book with one of
        the services below
      </Text>
    </Container>
  );
}
