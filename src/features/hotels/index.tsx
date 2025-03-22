import {
  Container,
  rem,
  Title,
  Stack,
} from "@mantine/core";
import classes from "../../global.module.css";
import premierInn from "../../assets/hotels/premierInn.jpg";
import travelLodge from "../../assets/hotels/travelLodge.jpg";
import whiteHartBraintree from "../../assets/hotels/whiteHartBraintree.jpg";
import hotels from "./content.json";
import HotelCard from "./components/HotelCard/HotelCard.tsx";

// Map images to their paths in JSON
const imageMap: { [key: string]: string } = {
  "../../assets/hotels/premierInn.jpg": premierInn,
  "../../assets/hotels/travelLodge.jpg": travelLodge,
  "../../assets/hotels/whiteHeartBraintree.jpg":whiteHartBraintree
};

export default function HotelsPage(){
  return (
    <Container>
      <Title className={classes.title} size={rem(60)}>Hotels</Title>
      <Stack mt="md">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            websiteUrl={hotel.websiteUrl}
            name={hotel.name}
            description={hotel.description}
            price={hotel.price}
            imageSrc={imageMap[hotel.imageSrc]} // Resolve image path
          />
        ))}
      </Stack>
    </Container>
  )
}