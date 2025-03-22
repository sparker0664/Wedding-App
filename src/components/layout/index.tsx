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
import classes from "./layout.module.css"
export default function Layout() {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const menuHeight = opened && isMobile ? 200 : 60;
  const pinned = useHeadroom({ fixedAt: 120 });
  const theme = useMantineTheme();
  return (
    <AppShell
      header={{ height: menuHeight, collapsed: !pinned }}
      padding="md"
      styles={{
        header: {
          background: "linear-gradient(to bottom, #f7f3fa, #ffffff)",
          fontFamily: theme.fontFamily,
        },
        main: {
          background: "linear-gradient(to bottom, #f7f3fa, #ffffff)",
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
            <Button className={classes.navButton} component={Link} to={"home"}>Home</Button>
            <Button className={classes.navButton} component={Link} to={"church"}>Church</Button>
            <Button className={classes.navButton}>Reception</Button>
            <Button className={classes.navButton}>Hotels & accommodation</Button>
            <Button className={classes.navButton}>Taxi services</Button>
            <Button className={classes.navButton}>Gift list</Button>
          </Group>
        )}
      </AppShell.Header>
      <AppShell.Navbar />
      <AppShell.Main>
        <Group>
          <Outlet />
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}
