import {
  Card,
  Container,
  Group,
  Text,
  Image,
  Title,
  rem,
  Badge,
  em,
} from "@mantine/core";
import church from "./../../assets/church/stMarysBocking.jpg";
import classes from "../../global.module.css";
import localClasses from "./church.module.css";
import { useMediaQuery } from "@mantine/hooks";
export default function ChurchPage() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const badgeSize = isMobile ? "md" : "lg";
  return (
    <Container>
      <Title className={classes.title} size={rem(60)}>
        St Marys Church Bocking
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image className={localClasses.image} src={church} height={500} />
        </Card.Section>

        <Group justify="flex-end" mt="md" mb="xs">
          <Badge className={localClasses.badge} size={badgeSize}>
            Address: Church St, Bocking CM7 5SR
          </Badge>
        </Group>

        <Text className={classes.paragraph}>
          We will be getting married at St Mary's Church in Bocking, Essex. This
          beautiful church is where Sean's grandparents go to church each week,
          and where they got married too. All are welcome to the service,
          however the wedding dinner is invite only.
        </Text>
        <Text className={classes.paragraph}>
          <Text component={"span"} inherit inline fw={700}>
            Transport:
          </Text>{" "}
          The nearest train station is Braintree, which is a 7 minute drive or
          45 minute walk from the church.
        </Text>
        <Text className={classes.paragraph}>
          <Text component={"span"} inherit inline fw={700}>
            Parking:
          </Text>{" "}
          There is a small car park directly outside the church. But don't block
          the entrance for the bride! There is also street parking available on
          Church Street and the surrounding roads.
        </Text>
      </Card>
    </Container>
  );
}
