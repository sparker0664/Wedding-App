import { Card, Container, Group, Text, Image, Title, rem } from "@mantine/core";
import church from "./../../assets/church/stMarysBocking.jpg";
import classes from "../../global.module.css"
import localClasses from "./church.module.css"
export default function ChurchPage(){
  return(
    <Container>
      <Title className={classes.title} size={rem(60)}>St Marys Church Bocking</Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={church}
            height={500}
          />
        </Card.Section>

        <Group justify="flex-end" mt="md" mb="xs">
          <Text className={localClasses.address}>Address: Church St, Bocking CM7 5SR</Text>
        </Group>

        <Text className={classes.paragraph}>
          St Mary's Church Bocking is a beautiful church located in the heart of Bocking.
          Bocking itself is a small village located in the Braintree district of Essex, England.
          This is where we will be getting married and we would love for you to join us.
          The service starts at 2pm and we will be taking photos after the service.
          All are welcome to the service, however, the wedding lunch is invite only.
          Evening guests are welcome to join the evening reception at 7pm.
          There is outside parking near the church and a small car park across the road
          from the church. We look forward to seeing you there.
        </Text>
      </Card>
    </Container>
  )
}