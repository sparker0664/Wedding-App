import {
  AppShell,
  Burger,
  em,
  Group,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { Outlet } from "react-router";
import StandardButton from "./buttons/StandardButton";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function Layout() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const menuHeight = opened && isMobile ? 200 : 60;
  const theme = useMantineTheme();
  return (
    <AppShell
      header={{ height: menuHeight }}
      footer={{ height: 60 }}
      padding="md"
      styles={{
        header: {
          backgroundColor: theme.colors.lavender[0],
          color: theme.colors.charcoalGray[3],
          fontFamily: "cursive",
        },
        footer: {
          backgroundColor: theme.colors.mintGreen[0],
          color: theme.colors.gold[0],
        },
        main: {
          backgroundColor: theme.colors.buttercream[3],
          width: rem("100vw"),
          borderLeft: 0,
          borderRight: 0,
        },
        navbar: {
          width: rem("0vw"),
        },
      }}
    >
      <AppShell.Header pt="sm" pr="sm" mb="sm">
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        {(opened || !isMobile) && (
          <Group justify="Center">
            <StandardButton>Home</StandardButton>
            <StandardButton>Church</StandardButton>
            <StandardButton>Reception</StandardButton>
            <StandardButton>RSVP</StandardButton>
            <StandardButton>Hotels & accommodation</StandardButton>
            <StandardButton>Taxi services</StandardButton>
            <StandardButton>Gift list</StandardButton>
          </Group>
        )}
      </AppShell.Header>
      <AppShell.Navbar />
      <AppShell.Main>
        <Group>
          <Outlet />
        </Group>
      </AppShell.Main>
      <AppShell.Footer>footer</AppShell.Footer>
    </AppShell>
  );
}
