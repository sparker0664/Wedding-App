import { Box, Container } from "@mantine/core";
import classes from "./rsvp.module.css";
export default function RSVPPage() {
  return (
    <Container fluid size={"xl"} w={"100%"}>
      <Box className={classes.iframeContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSckhlfTfSs5YbNJwohaVjbGTWL4Z8DUsflv6_Rt-SKBMAxTnA/viewform?embedded=true"
          width="100%"
          height="75%"
          className={classes.iframe}
        >
          Loading…  
        </iframe>
      </Box>
    </Container>
  );
}
