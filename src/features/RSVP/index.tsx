import { Box, Container } from "@mantine/core";
import classes from "./rsvp.module.css";
export default function RSVPPage() {
  return (
    <Container fluid size={"xl"} w={"100%"}>
      <Box className={classes.iframeContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdYX9TlW0Nchedj_7CK-HrVMcXWe5oEdSTbdV6tRazlurBBHA/viewform?embedded=true"
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
