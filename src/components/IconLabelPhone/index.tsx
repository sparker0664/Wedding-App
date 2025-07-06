import { ReactNode } from "react";
import { Box, Group, Text } from "@mantine/core";
import classes from "./iconLabelPhone.module.css";
interface IconLabelPhoneProps {
  icon: ReactNode;
  label: string;
  phoneNumber: string;
}
export default function IconLabelPhone({
  icon,
  label,
  phoneNumber,
}: IconLabelPhoneProps) {
  return (
    <Box>
      <Group align="center">
        <div style={{ width: 30 }}>{icon}</div>
        <Text fw={700} className={classes.text}>
          {label + `: `}
        </Text>
        <Text
          component={"a"}
          href={`tel:${phoneNumber}`}
          fw={700}
          className={classes.text}
        >
          {phoneNumber}
        </Text>
      </Group>
    </Box>
  );
}
