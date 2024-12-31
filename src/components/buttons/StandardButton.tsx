import { Button, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";

interface StandardButtonProps {
    children: ReactNode;
}

export default function StandardButton({ children }: StandardButtonProps) {
    const theme = useMantineTheme();
    return (
        <Button
            styles={{
                root: {
                    backgroundColor: theme.colors.softCoral[4],
                    color: theme.white,
                    "&:hover": {
                        backgroundColor: theme.colors.softCoral[5],
                    },
                },
            }}
        >
            {children}
        </Button>
    );
}
