import { ReactNode } from "react";
import { Box, Group, Text } from "@mantine/core";
import classes from "./iconLabelText.module.css";
interface IconLabelTextProps {
  icon: ReactNode;
  label: string;
  text: string;
}
export default function IconLabelText({
  icon,
  label,
  text,
}: IconLabelTextProps) {
  return (
    <Box>
      <Group align="center">
        <div style={{ width: 30 }}>{icon}</div>
        <Text fw={700} className={classes.text}>
          {label + `: `}
        </Text>
        <Text fw={700} className={classes.text}>
          {text}
        </Text>
      </Group>
    </Box>
  );
}
