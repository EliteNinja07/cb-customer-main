import { Link, List, ListItem } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
const styles = {
  ListItem: {
    borderBottom: "1px solid #a0a0a038",
    _hover: {
      color: "#0052ff",
    },
    "&:last-child": {
      border: "none",
    },
  },
};
export default () => {
  return (
    <List>
      <ListItem sx={styles.ListItem} px={5} py={4}>
        <Link href="/home/help/How-to-use-the-support-system">
          <FormattedMessage id="support.title1" />
        </Link>
      </ListItem>
      <ListItem sx={styles.ListItem} px={5} py={4}>
        <Link href="/home/help/How-to-use-the-support-system">
          <FormattedMessage id="support.title2" />
        </Link>
      </ListItem>
      <ListItem sx={styles.ListItem} px={5} py={4}>
        <Link href="/home/help/How-to-use-the-support-system">
          <FormattedMessage id="support.title3" />
        </Link>
      </ListItem>
      <ListItem sx={styles.ListItem} px={5} py={4}>
        <Link href="/home/help/How-to-use-the-support-system">
          <FormattedMessage id="support.title4" />
        </Link>
      </ListItem>
    </List>
  );
};
