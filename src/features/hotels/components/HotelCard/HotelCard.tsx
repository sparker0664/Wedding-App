import { Badge, Button, Card, Group, Image, Text, Title } from "@mantine/core";
import classes from "../../../../global.module.css";
import localClasses from "./hotelCard.module.css";
interface HotelCardProps {
  websiteUrl: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}
export default function HotelCard({
  websiteUrl,
  name,
  description,
  price,
  imageSrc,
}: HotelCardProps) {
  return (
    <Card className={localClasses.card} withBorder>
      <Card.Section>
        <Title mt="lg" className={classes.title}>
          {name}
        </Title>
      </Card.Section>
      <Card.Section>
        <Image className={localClasses.image} src={imageSrc} height={300} />
      </Card.Section>
      <Card.Section>
        <Text className={localClasses.paragraph}>{description}</Text>
        <Group justify="space-between" mx="sm" my="sm">
          <Badge className={localClasses.badge}>
            {" "}
            Cost: Approx £{price} per night
          </Badge>
          <Button
            className={localClasses.button}
            component="a"
            href={websiteUrl}
          >
            {" "}
            Website
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
