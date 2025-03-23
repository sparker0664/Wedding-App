import { ReactNode } from "react";
import { Box, Group, Text } from "@mantine/core";
import classes from "./iconLabelLink.module.css";
interface IconLabelLinkProps {
  icon: ReactNode;
  label: string;
  name: string;
  url: string;
}
export default function IconLabelLink({
  icon,
  label,
  name,
  url,
}: IconLabelLinkProps) {
  return (
    <Box>
      <Group align="center">
        <div style={{ width: 30 }}>{icon}</div>
        <Text fw={700} className={classes.text}>
          {label + `: `}
        </Text>
        <Text component={"a"} href={url} fw={700} className={classes.text}>
          {name}
        </Text>
      </Group>
    </Box>
  );
}
