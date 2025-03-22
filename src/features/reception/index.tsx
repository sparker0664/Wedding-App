import { Card, Container, Group, Title, Text, Image } from "@mantine/core";
import reception from "../../assets/reception/greatLodge.jpg";
import classes from "../../global.module.css";
export default function ReceptionPage(){
  return(
    <Container>
      <Title className={classes.title}>Reception</Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={reception}
            height={160}
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Reception</Text>
        </Group>

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>
      </Card>
    </Container>
  )
}