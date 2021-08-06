import { DownloadIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import FormArea from "./FormArea";
import { SearchList } from "./SearchList";

export const Stock = ({ items }) => {
  //重複削除
  const filterItems = items.filter(
    (item, index, self) =>
      self.findIndex((e) => e["品番"] === item["品番"]) === index
  );

  const [selectData, setSelectData] = useState([]); //検索時にインプット入力した配列リスト
  const [inputValue, setInputValue] = useState(""); //インプット入力値

  const handleChangeText = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    let filterItem = filterItems.filter((item) => {
      return item["品番"] == inputValue;
    });

    let newData = filterItem.map((v) => {
      return v["品番"];
    });

    if (newData.length === 0) return;
    if (!selectData.includes(newData[0])) {
      setSelectData([newData[0], ...selectData]);
    }
    setInputValue("");
  };

  const onClickReset = () => {
    setInputValue("");
    setSelectData([]);
  };

  const onClickDelete = (e, index) => {
    let deleteNumber = index;
    setSelectData(
      [...selectData].filter((v, index) => {
        return index !== Number(deleteNumber);
      })
    );
  };

  return (
    <>
      <FormArea
        inputValue={inputValue}
        filterItems={filterItems}
        handleChangeText={handleChangeText}
        onClickSearch={onClickSearch}
        onClickReset={onClickReset}
      />
      <Flex justifyContent="center" mb={6}>
        {selectData.length > 0 ? (
          <Button>
            CSVダウンロード
            <Icon as={DownloadIcon} />
          </Button>
        ) : null}
      </Flex>
      <SearchList
        items={items}
        selectData={selectData}
        filterItems={filterItems}
        onClickDelete={onClickDelete}
      />
    </>
  );
};
