import {
  AppShell,
  Burger,
  Button,
  em,
  Group,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { Link, Outlet } from "react-router";
import { useDisclosure, useHeadroom, useMediaQuery } from "@mantine/hooks";
import classes from "./layout.module.css";
export default function Layout() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const menuHeight = opened && isMobile ? 200 : 60;
  const pinned = useHeadroom({ fixedAt: 0 });
  const theme = useMantineTheme();
  return (
    <AppShell
      header={{ height: menuHeight, collapsed: !pinned && isMobile }}
      padding="md"
      styles={{
        header: {
          background: "#466851",
          fontFamily: theme.fontFamily,
        },
        main: {
          background: "white",
          width: rem("100vw"),
          borderLeft: 0,
          borderRight: 0,
        },
        navbar: {
          width: rem("0vw"),
        },
      }}
    >
      <AppShell.Header pt="sm" pr="sm" mb="xs">
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        {(opened || !isMobile) && (
          <Group justify="Center">
            <Button className={classes.navButton} component={Link} to={"home"}>
              Home
            </Button>
            <Button
              className={classes.navButton}
              component={Link}
              to={"church"}
            >
              Church
            </Button>
            <Button
              className={classes.navButton}
              component={Link}
              to={"reception"}
            >
              Reception
            </Button>
            <Button
              className={classes.navButton}
              component={Link}
              to={"hotels"}
            >
              Hotels
            </Button>
            <Button className={classes.navButton} component={Link} to={"taxis"}>
              Taxi services
            </Button>
            <Button className={classes.navButton} component={Link} to={"rsvp"}>
              RSVP
            </Button>
          </Group>
        )}
      </AppShell.Header>
      <AppShell.Navbar />
      <AppShell.Main>
        <Group>
          <Outlet />
        </Group>
      </AppShell.Main>
      <AppShell.Footer />
    </AppShell>
  );
}
