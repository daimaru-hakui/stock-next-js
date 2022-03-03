import React, { useState } from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Icon, WrapItem } from "@chakra-ui/react";
import { CSVLink } from "react-csv";
import FormArea from "./FormArea";
import SearchList from "./SearchList";

type Props = {
  id: string;
  code: string;
  number: string;
  name: string;
  price: string;
  size: string;
  stock1: number;
  stock2: number;
  total: number;
  // schedule: string;
  quantity: number;
};

export const Stock: React.FC<any> = (props) => {
  const { items, products } = props;
  const [selectData, setSelectData] = useState([]); //検索時にインプット入力した配列リスト
  const [inputValue, setInputValue] = useState(""); //インプット入力値
  const [csvData, setCsvData] = useState(""); //CSVデータ

  //numberの重複削除
  const filterItems = items.filter(
    (item, index, self) =>
      self.findIndex((e) => e["number"] === item["number"]) === index
  );

  //CSVファイルに変換
  const onClickCsv = () => {
    const csvData = items.filter((item) => selectData.includes(item["number"]));

    //特定のkeyを削除したい時
    // delete items[0]["number"];
    csvData.filter((data) => {
      delete data["id"];
    });

    // const header = Object.keys(items[0]).join(",") + "\n";
    const header =
      "商品コード,品番,商品名,上代,サイズ,在庫数,外部在庫,TOTAL,仕掛,数量\n";

    const body = csvData
      .map((d) => {
        return Object.keys(d)
          .map((key) => d[key])
          .join(",");
      })
      .join("\n");
    const csvFile = header + body;
    setCsvData(csvFile);
  };

  //INPUTの入力値を取得
  const handleChangeText = (e) => setInputValue(e.target.value);

  //検索絞り込み
  const onClickSearch = (e) => {
    e.preventDefault();
    let filterItem = filterItems.filter((item) => item["number"] == inputValue); //Input入力値と同じオブジェクトを取り出す。
    let newData = filterItem.map((item) => item["number"]); //オブジェクトから品番だけを取り出す
    if (newData.length === 0) return; //データ空白であればリターンで返す。

    !selectData.includes(newData[0]) &&
      setSelectData([...selectData, newData[0]]);

    setInputValue("");

    // let filterItem = filterItems.filter((item) => {
    //   return item["number"].includes(inputValue);
    // });
    // let newData = filterItem.map((v) => {
    //   return v["number"];
    // });

    // if (newData.length === 0) return;
    // newData.map((data) => {
    //   if (!selectData.includes(data)) {
    //     setSelectData((prev) => [...prev, data]);
    //   }
    // });
    // setInputValue("");
  };

  //選択している全てのnumberを削除
  const onClickReset = () => {
    setInputValue("");
    setSelectData([]);
  };

  //選択したnumberの削除
  const onClickDelete = (e, index) => {
    let deleteNumber = index;
    setSelectData(
      [...selectData].filter((v, index) => index !== Number(deleteNumber))
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
        products={products}
        selectData={selectData}
        filterItems={filterItems}
        onClickDelete={onClickDelete}
      />
    </>
  );
};
