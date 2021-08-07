import React, { useState } from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { CSVLink } from "react-csv";
import FormArea from "./FormArea";
import SearchList from "./SearchList";

export const Stock = ({ items }) => {
  const [selectData, setSelectData] = useState([]); //検索時にインプット入力した配列リスト
  const [inputValue, setInputValue] = useState(""); //インプット入力値
  const [csvData, setCsvData] = useState(""); //CSVデータ

  //品番の重複削除
  const filterItems = items.filter(
    (item, index, self) =>
      self.findIndex((e) => e["品番"] === item["品番"]) === index
  );

  //CSVファイルに変換
  const onClickCsv = () => {
    const csvData = items.filter((item) => {
      return selectData.includes(item["品番"]);
    });

    const header = Object.keys(items[0]).join(",") + "\n";
    const body = csvData
      .map((d) => {
        return Object.keys(d)
          .map((key) => {
            return d[key];
          })
          .join(",");
      })
      .join("\n");
    const csvFile = header + body;
    setCsvData(csvFile);
  };

  //INPUTの入力値を取得
  const handleChangeText = (e) => {
    setInputValue(e.target.value);
  };

  //検索絞り込み
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
      setSelectData([...selectData, newData[0]]);
    }
    setInputValue("");
  };

  //選択している全ての品番を削除
  const onClickReset = () => {
    setInputValue("");
    setSelectData([]);
  };

  //選択した品番の削除
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
        selectData={selectData}
        handleChangeText={handleChangeText}
        onClickSearch={onClickSearch}
        onClickReset={onClickReset}
      />
      <Flex justifyContent="center" mb={6}>
        {selectData.length > 0 && (
          <CSVLink
            data={csvData}
            filename={new Date().toLocaleString() + "_zaiko.csv"}
          >
            <Button onClick={onClickCsv}>
              CSVダウンロード
              <Icon as={DownloadIcon} />
            </Button>
          </CSVLink>
        )}
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
