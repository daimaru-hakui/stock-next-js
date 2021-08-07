import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Icon,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Styles from "./SearchList.module.css";

const SearchList = (props) => {
  const { items, selectData, filterItems, onClickDelete } = props;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column-reverse"
    >
      {selectData.map((data, index) => (
        <Box
          px={5}
          mb={5}
          mx={2}
          borderRadius={5}
          boxShadow="base"
          key={index}
          className={Styles.fade}
        >
          <Table
            w={{ base: "100%", md: "600px" }}
            size="sm"
            variant="striped"
            colorScheme="gray"
            mb={6}
          >
            <TableCaption placement="top" px={0} mb={2} fontSize="medium">
              <Flex justifyContent="space-between" alignItems="center">
                <Flex
                  fontSize={{ base: "xs", md: "md" }}
                  direction={{ base: "column", md: "row" }}
                  alignItems="start"
                >
                  <Box mr={2}>{data}</Box>
                  <Box mr={2}>
                    {filterItems.map(
                      (item) => item["品番"] == data && item["商品名"]
                    )}
                  </Box>
                  <Box>
                    {filterItems.map(
                      (item) =>
                        item["品番"] == data &&
                        item["上代"] &&
                        "￥" + item["上代"]
                    )}
                  </Box>
                </Flex>
                <Flex>
                  {/* <Button variant="outline" colorScheme="gray" mr={2}>
                    詳細
                  </Button> */}
                  <Button
                    variant="outline"
                    colorScheme="gray"
                    onClick={(e) => onClickDelete(e, index)}
                  >
                    <Icon as={DeleteIcon} />
                  </Button>
                </Flex>
              </Flex>
            </TableCaption>
            <Thead>
              <Tr>
                <Th textAlign="center">サイズ</Th>
                <Th textAlign="center">在庫数</Th>
                <Th textAlign="center">外部在庫</Th>
                <Th textAlign="center">TOTAL</Th>
                <Th textAlign="center">仕掛納期</Th>
                <Th textAlign="center">仕掛数量</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item, index) => {
                if (item["品番"] == data) {
                  return (
                    <Tr key={index}>
                      <Td textAlign="center">{item["サイズ"]}</Td>
                      <Td textAlign="center">{item["在庫数"]}</Td>
                      <Td textAlign="center">{item["外部在庫"]}</Td>
                      <Td textAlign="center">{item["TOTAL"]}</Td>
                      <Td textAlign="center">{item["仕掛"]}</Td>
                      <Td textAlign="center">{item["数量"]}</Td>
                    </Tr>
                  );
                }
              })}
            </Tbody>
          </Table>
        </Box>
      ))}
    </Flex>
  );
};
export default SearchList;
