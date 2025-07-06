import { ReactNode } from "react";
import { Box, Button, Group, Text } from "@mantine/core";
import classes from "./iconLabelCopy.module.css";
interface IconLabelCopyProps {
  icon: ReactNode;
  label: string;
  text: string;
}
export default function IconLabelCopy({
  icon,
  label,
  text,
}: IconLabelCopyProps) {
  return (
    <Box>
      <Group align="center">
        <div style={{ width: 30 }}>{icon}</div>
        <Text fw={700} className={classes.text}>
          {label + `: `}
        </Text>
        <Button
          className={classes.text}
          onClick={async () => await navigator.clipboard.writeText(text)}
          variant="subtle"
        >
          {text}
        </Button>
      </Group>
    </Box>
  );
}
