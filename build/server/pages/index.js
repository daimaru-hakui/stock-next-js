(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 845:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "@chakra-ui/icons"
var icons_namespaceObject = require("@chakra-ui/icons");;
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(426);
;// CONCATENATED MODULE: external "react-csv"
var external_react_csv_namespaceObject = require("react-csv");;
;// CONCATENATED MODULE: ./components/FormArea.tsx






const FormArea = props => {
  const {
    inputValue,
    filterItems,
    selectData,
    handleChangeText,
    onClickSearch,
    onClickReset
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("form", {
    onSubmit: onClickSearch,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.InputGroup, {
      w: "auto",
      justifyContent: "center",
      alignItems: "center",
      py: 6,
      px: 10,
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Input, {
        onChange: handleChangeText,
        type: "text",
        value: inputValue,
        variant: "outline",
        placeholder: selectData.length > 0 ? selectData.map(data => ` ${data} `) : "例)SP125",
        list: "search",
        w: {
          base: "100%",
          md: "450px"
        },
        mr: 1,
        py: 6,
        onKeyPress: e => e.key == "Enter" ? onClickSearch(e) : false
      }), /*#__PURE__*/jsx_runtime_.jsx("datalist", {
        id: "search",
        children: filterItems.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: item["品番"],
          children: item["商品名"]
        }, index))
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
        type: "submit",
        colorScheme: "teal",
        px: 5,
        py: 6,
        mr: 1,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
          as: icons_namespaceObject.Search2Icon,
          mr: 1
        }), "\u691C\u7D22"]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
        onClick: onClickReset,
        colorScheme: "red",
        px: 5,
        py: 6,
        children: "RESET"
      })]
    })
  });
};

/* harmony default export */ var components_FormArea = (FormArea);
// EXTERNAL MODULE: ./components/SearchList.module.css
var SearchList_module = __webpack_require__(115);
var SearchList_module_default = /*#__PURE__*/__webpack_require__.n(SearchList_module);
;// CONCATENATED MODULE: ./components/SearchList.tsx








const SearchList = props => {
  const {
    items,
    products,
    selectData,
    filterItems,
    onClickDelete
  } = props;
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,react_.useDisclosure)();
  const {
    0: showItem,
    1: setShowItem
  } = (0,external_react_.useState)("");

  const onClickModal = data => {
    setShowItem(data);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      justifyContent: "center",
      alignItems: "center",
      direction: "column-reverse",
      children: selectData.map((data, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        px: 5,
        mb: 5,
        mx: 2,
        borderRadius: 5,
        boxShadow: "base",
        className: (SearchList_module_default()).fade,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Table, {
          w: {
            base: "100%",
            md: "600px"
          },
          size: "sm",
          variant: "striped",
          colorScheme: "gray",
          mb: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.TableCaption, {
            placement: "top",
            px: 0,
            mb: 2,
            fontSize: "medium",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              justifyContent: "space-between",
              alignItems: "center",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                fontSize: {
                  base: "xs",
                  md: "md"
                },
                direction: {
                  base: "column",
                  md: "row"
                },
                alignItems: "start",
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                  mr: 2,
                  children: data
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                  mr: 2,
                  children: filterItems.map(item => item["品番"] == data && item["商品名"])
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                  children: filterItems.map(item => item["品番"] == data && item["上代"] && "￥" + item["上代"])
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                children: [products.map((product, index) => product["model"] == data && /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
                  onClick: () => {
                    onClickModal(data);
                    onOpen();
                  },
                  variant: "outline",
                  colorScheme: "gray",
                  mr: 2,
                  children: "\u8A73\u7D30"
                }, index)), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
                  variant: "outline",
                  colorScheme: "gray",
                  onClick: e => onClickDelete(e, index),
                  children: /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                    as: icons_namespaceObject.DeleteIcon
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Thead, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Tr, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
                textAlign: "center",
                children: "\u30B5\u30A4\u30BA"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
                textAlign: "center",
                children: "\u5728\u5EAB\u6570"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
                textAlign: "center",
                children: "\u5916\u90E8\u5728\u5EAB"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
                textAlign: "center",
                children: "TOTAL"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
                textAlign: "center",
                children: "\u4ED5\u639B\u7D0D\u671F"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Th, {
                textAlign: "center",
                children: "\u4ED5\u639B\u6570\u91CF"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tbody, {
            children: items.map((item, index) => {
              if (item["品番"] == data) {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Tr, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                    textAlign: "center",
                    children: item["サイズ"]
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                    textAlign: "center",
                    children: item["在庫数"]
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                    textAlign: "center",
                    children: item["外部在庫"]
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                    textAlign: "center",
                    children: item["TOTAL"]
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                    textAlign: "center",
                    children: item["仕掛"]
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Td, {
                    textAlign: "center",
                    children: item["数量"]
                  })]
                }, index);
              }
            })
          })]
        })
      }, index))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Modal, {
      isOpen: isOpen,
      onClose: onClose,
      size: "xl",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ModalOverlay, {}), products.map((product, index) => {
        if (product["model"] == showItem) {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ModalContent, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ModalHeader, {
              children: [product["model"], product["category"]]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.ModalCloseButton, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.ModalBody, {
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: product["size_spec"]
                }
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.ModalFooter, {
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
                colorScheme: "blue",
                mr: 3,
                onClick: onClose,
                children: "Close"
              })
            })]
          }, index);
        }
      })]
    })]
  });
};

/* harmony default export */ var components_SearchList = (SearchList);
;// CONCATENATED MODULE: ./components/Stock.tsx









const Stock = props => {
  const {
    items,
    products
  } = props;
  const {
    0: selectData,
    1: setSelectData
  } = (0,external_react_.useState)([]); //検索時にインプット入力した配列リスト

  const {
    0: inputValue,
    1: setInputValue
  } = (0,external_react_.useState)(""); //インプット入力値

  const {
    0: csvData,
    1: setCsvData
  } = (0,external_react_.useState)(""); //CSVデータ
  //品番の重複削除

  const filterItems = items.filter((item, index, self) => self.findIndex(e => e["品番"] === item["品番"]) === index); //CSVファイルに変換

  const onClickCsv = () => {
    const csvData = items.filter(item => {
      return selectData.includes(item["品番"]);
    });
    const header = Object.keys(items[0]).join(",") + "\n";
    const body = csvData.map(d => {
      return Object.keys(d).map(key => {
        return d[key];
      }).join(",");
    }).join("\n");
    const csvFile = header + body;
    setCsvData(csvFile);
  }; //INPUTの入力値を取得


  const handleChangeText = e => {
    setInputValue(e.target.value);
  }; //検索絞り込み


  const onClickSearch = e => {
    e.preventDefault();
    let filterItem = filterItems.filter(item => {
      return item["品番"] == inputValue;
    });
    let newData = filterItem.map(v => {
      return v["品番"];
    });
    if (newData.length === 0) return;

    if (!selectData.includes(newData[0])) {
      setSelectData([...selectData, newData[0]]);
    }

    setInputValue("");
  }; //選択している全ての品番を削除


  const onClickReset = () => {
    setInputValue("");
    setSelectData([]);
  }; //選択した品番の削除


  const onClickDelete = (e, index) => {
    let deleteNumber = index;
    setSelectData([...selectData].filter((v, index) => {
      return index !== Number(deleteNumber);
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_FormArea, {
      inputValue: inputValue,
      filterItems: filterItems,
      selectData: selectData,
      handleChangeText: handleChangeText,
      onClickSearch: onClickSearch,
      onClickReset: onClickReset
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      justifyContent: "center",
      mb: 6,
      children: selectData.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(external_react_csv_namespaceObject.CSVLink, {
        data: csvData,
        filename: new Date().toLocaleString() + "_zaiko.csv",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
          onClick: onClickCsv,
          children: ["CSV\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9", /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
            as: icons_namespaceObject.DownloadIcon
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SearchList, {
      items: items,
      products: products,
      selectData: selectData,
      filterItems: filterItems,
      onClickDelete: onClickDelete
    })]
  });
};
;// CONCATENATED MODULE: ./components/Header.tsx




const Header = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,react_.useDisclosure)();

  const handleToggle = () => isOpen ? onClose() : onOpen();

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    as: "nav",
    align: "center",
    justify: "space-between",
    wrap: "wrap",
    padding: 4,
    bg: "teal.500",
    color: "white",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      align: "center",
      mr: 5,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
        as: "h1",
        size: "lg",
        letterSpacing: "tighter",
        children: "DAIMARU HAKUI"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      display: {
        base: "block",
        md: "none"
      },
      onClick: handleToggle,
      children: /*#__PURE__*/jsx_runtime_.jsx(icons_namespaceObject.HamburgerIcon, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      direction: {
        base: "column",
        md: "row"
      },
      display: {
        base: isOpen ? "block" : "none",
        md: "flex"
      },
      width: {
        base: "full",
        md: "auto"
      },
      alignItems: "center",
      flexGrow: 1,
      mt: {
        base: 4,
        md: 0
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
        href: "https://www.daimaru-hakui.co.jp/",
        children: "WEB\u30B5\u30A4\u30C8"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      display: {
        base: isOpen ? "block" : "none",
        md: "block"
      },
      mt: {
        base: 4,
        md: 0
      }
    })]
  });
};
;// CONCATENATED MODULE: ./contexts/StockContext.js



const StockContext = /*#__PURE__*/(0,external_react_.createContext)({});

const StockContextProvider = props => {
  const {
    children
  } = props;
  const {
    0: items,
    1: setItems
  } = (0,external_react_.useState)("zaiko");
  return /*#__PURE__*/jsx_runtime_.jsx(StockContext.Provider, {
    value: items,
    children: children
  });
};

/* harmony default export */ var contexts_StockContext = (StockContextProvider);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/HeadMeta.tsx




const HeadMeta = ({
  title,
  description
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:site_name",
      content: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      href: "/favicon.png"
    })]
  });
};

/* harmony default export */ var components_HeadMeta = (HeadMeta);
;// CONCATENATED MODULE: ./components/MainTitle.tsx





const MainTitle = props => {
  const {
    h2Title,
    h3Title
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
    spacing: 3,
    direction: "column",
    alignItems: "center",
    mt: 16,
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      fontSize: "3xl",
      as: "h2",
      fontWeight: "bold",
      children: h2Title
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      fontSize: "xl",
      as: "h3",
      px: 3,
      children: h3Title
    })]
  });
};

/* harmony default export */ var components_MainTitle = (MainTitle);
;// CONCATENATED MODULE: ./pages/index.tsx










const Home = props => {
  const {
    items,
    products
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(contexts_StockContext, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_HeadMeta, {
        title: "大丸白衣 在庫表",
        description: "マイユニフォームクラブとセレナーデの商品在庫を検索することができるWEBアプリです。"
      }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(components_MainTitle, {
        h2Title: "在庫検索",
        h3Title: "品番を入力して在庫検索ができます。"
      }), /*#__PURE__*/jsx_runtime_.jsx(Stock, {
        items: items,
        products: products
      })]
    })
  });
};

/* harmony default export */ var pages = (Home);
async function getStaticProps() {
  const [itemsRes, productsRes] = await Promise.all([external_axios_default().get("https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv"), external_axios_default().get("https://catalog-information.microcms.io/api/v1/products", {
    headers: {
      "X-API-KEY": "6ada6ea2-91a7-4914-aff7-0803ef6db4bb"
    }
  })]);
  const splitItems = await itemsRes.data.split("\n");
  const itemKeys = await splitItems[0].trim().split(",");
  let items = [];

  for (let i = 1; i < splitItems.length; i++) {
    let csvObject = new Object();
    let itemValues = splitItems[i].split(",");

    for (let j = 0; j < itemKeys.length; j++) {
      csvObject[itemKeys[j]] = itemValues[j];
    }

    items.push(csvObject);
  }

  const products = productsRes.data.contents;
  return {
    props: {
      items,
      products
    }
  };
} // export async function getStaticProps() {
//   const res = await axios.get(
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv"
//   );
//   const splitItems = await res.data.split("\n");
//   const itemKeys = await splitItems[0].trim().split(",");
//   let jsonDatas = [];
//   for (let i = 1; i < splitItems.length; i++) {
//     let csvObject = new Object();
//     let itemValues = splitItems[i].split(",");
//     for (let j = 0; j < itemKeys.length; j++) {
//       csvObject[itemKeys[j]] = itemValues[j];
//     }
//     jsonDatas.push(csvObject);
//   }
//   return {
//     props: {
//       items: jsonDatas,
//     },
//   };
// }
// export async function getStaticProps() {
//   const res = await fetch(
//     "https://daimaru-hakui.microcms.io/api/v1/catalog?limit=200",
//     {
//       headers: { "X-API-KEY": process.env.API_KEY },
//     }
//   );
//   const data = await res.json();
//   return {
//     props: {
//       catalogs: data.contents,
//     },
//   };
// }

/***/ }),

/***/ 115:
/***/ (function(module) {

// Exports
module.exports = {
	"fade": "SearchList_fade__2FHes",
	"fade1": "SearchList_fade1__2ZbLj"
};


/***/ }),

/***/ 426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(845));
module.exports = __webpack_exports__;

})();