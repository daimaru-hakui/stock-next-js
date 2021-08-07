import { Search2Icon } from "@chakra-ui/icons";
import { Button, Icon, Input, InputGroup } from "@chakra-ui/react";
import React from "react";

const FormArea = (props) => {
  const {
    inputValue,
    filterItems,
    selectData,
    handleChangeText,
    onClickSearch,
    onClickReset,
  } = props;

  return (
    <form onSubmit={onClickSearch}>
      <InputGroup
        w="auto"
        justifyContent="center"
        alignItems="center"
        py={6}
        px={10}
      >
        <Input
          onChange={handleChangeText}
          type="text"
          value={inputValue}
          variant="outline"
          placeholder={
            selectData.length > 0
              ? selectData.map((data) => ` ${data} `)
              : "例)SP125"
          }
          list="search"
          w={{ base: "100%", md: "450px" }}
          mr={1}
          py={6}
          onKeyPress={(e) => (e.key == "Enter" ? onClickSearch(e) : false)}
        />
        <datalist id="search">
          {filterItems.map((item, index) => (
            <option key={index} value={item["品番"]}>
              {item["商品名"]}
            </option>
          ))}
        </datalist>
        <Button type="submit" colorScheme="teal" px={5} py={6} mr={1}>
          <Icon as={Search2Icon} mr={1} />
          検索
        </Button>
        <Button onClick={onClickReset} colorScheme="red" px={5} py={6}>
          RESET
        </Button>
      </InputGroup>
    </form>
  );
};

export default FormArea;
