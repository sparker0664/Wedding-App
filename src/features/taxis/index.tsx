import { Container, rem, Stack, Text, Title } from "@mantine/core";
import classes from "../../global.module.css";
import TaxiCompany from "./components/taxiCompany";
import taxiTaxi from "../../assets/taxis/taxiTaxi.png";
import taxiMan from "../../assets/taxis/taxiMan.png";
import callTaxi from "../../assets/taxis/callTaxi.jpg";

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
      <Stack>
        <TaxiCompany
          name="Taxi Taxi Braintree"
          phoneNumber="01376 505050"
          address="28 Panfield Ln, Braintree CM7 2TH"
          website="https://taxitaxi.cab/book-a-taxi/"
          operatingHours="24/7"
          imageSrc={taxiTaxi}
        />
        <TaxiCompany
          name="The Taxi Man Braintree"
          phoneNumber="01376 357777"
          address="77 Bartram Ave, Braintree CM7 3RA"
          website="https://www.thetaximan.com/"
          operatingHours="24/7"
          imageSrc={taxiMan}
        />
        <TaxiCompany
          name="Call Taxi Braintree"
          phoneNumber="01376 310610"
          address="77 Bartram Ave, Braintree CM7 3RA"
          website="Peel Cres, Braintree CM7 2RS"
          operatingHours="24/7"
          imageSrc={callTaxi}
        />
      </Stack>
    </Container>
  );
}
