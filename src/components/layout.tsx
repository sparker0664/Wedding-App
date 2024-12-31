import { AppShell, Group, useMantineTheme } from "@mantine/core";
import { Outlet } from "react-router";
import StandardButton from "./buttons/StandardButton";

export default function Layout() {
    const theme = useMantineTheme();
    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{ width: "1px" }}
            padding="md"
            styles={{
                header: {
                    backgroundColor: theme.colors.lavender[2],
                    color: theme.colors.gold[2],
                },
                footer: {
                    backgroundColor: theme.colors.mintGreen[0],
                    color: theme.colors.blushPink[0],
                },
                main: {
                    backgroundColor: theme.colors.buttercream[2],
                },
            }}
        >
            <AppShell.Header
                pt="sm"
                pr="sm"
            >
                <Group justify="flex-end">
                    <StandardButton>Location</StandardButton>
                    <StandardButton>Location</StandardButton>
                    <StandardButton>Location</StandardButton>
                    <StandardButton>Location</StandardButton>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar />
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
            <AppShell.Footer>footer</AppShell.Footer>
        </AppShell>
    );
}
