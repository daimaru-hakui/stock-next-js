import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const MainTitle = (props) => {
  const { h2Title, h3Title } = props;
  return (
    <Stack spacing={3} direction="column" alignItems="center" mt={16}>
      <Text fontSize="3xl" as="h2" fontWeight="bold">
        {h2Title}
      </Text>
      <Text fontSize="xl" as="h3" px={3}>
        {h3Title}
      </Text>
    </Stack>
  );
};

export default MainTitle;
