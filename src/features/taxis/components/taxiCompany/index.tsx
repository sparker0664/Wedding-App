import { Card, Group, Stack, Title, Image } from "@mantine/core";
import classes from "../../../../global.module.css";
import localClasses from "./taxiCompany.module.css";
import IconLabelText from "../../../../components/IconLabelText";
import {
  IconAddressBook,
  IconClockHour5,
  IconPhone,
  IconWorld,
} from "@tabler/icons-react";
import IconLabelCopy from "../../../../components/IconLabelCopy";
import IconLabelLink from "../../../../components/IconLabelLink";
import IconLabelPhone from "../../../../components/IconLabelPhone";

interface TaxiCompanyProps {
  name: string;
  phoneNumber: string;
  address: string;
  website: string;
  operatingHours: string;
  imageSrc: string;
}
export default function TaxiCompany({
  name,
  phoneNumber,
  address,
  operatingHours,
  website,
  imageSrc,
}: TaxiCompanyProps) {
  return (
    <Card className={localClasses.card}>
      <Card.Section>
        <Title className={classes.title}>{name}</Title>
      </Card.Section>
      <Group>
        <Stack mr="lg">
          <IconLabelPhone
            icon={<IconPhone className={localClasses.icon} />}
            label="Phone"
            phoneNumber={phoneNumber}
          />
          <IconLabelCopy
            icon={<IconAddressBook className={localClasses.icon} />}
            label="Address"
            text={address}
          />
          <IconLabelText
            icon={<IconClockHour5 className={localClasses.icon} />}
            label="Operating Hours"
            text={operatingHours}
          />
          <IconLabelLink
            icon={<IconWorld className={localClasses.icon} />}
            label="Website"
            name={name}
            url={website}
          />
        </Stack>
        <Image height={100} width={100} src={imageSrc} />
      </Group>
    </Card>
  );
}
