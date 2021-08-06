(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 958:
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
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "@chakra-ui/icons"
var icons_namespaceObject = require("@chakra-ui/icons");;
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(426);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: ./components/FormArea.tsx






const FormArea = props => {
  const {
    inputValue,
    filterItems,
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
        placeholder: "\u4F8B\uFF09SP125",
        list: "search",
        w: {
          base: "100%",
          md: "500px"
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
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
        type: "submit",
        colorScheme: "teal",
        px: 5,
        py: 6,
        mr: 1,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
          as: icons_namespaceObject.Search2Icon
        })
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
;// CONCATENATED MODULE: ./components/SearchList.tsx




const SearchList = props => {
  const {
    items,
    selectData,
    filterItems,
    onClickDelete
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
    justifyContent: "center",
    alignItems: "center",
    direction: "column",
    children: selectData.map((data, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      px: 5,
      mb: 5,
      mx: 2,
      borderRadius: 5,
      boxShadow: "base",
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
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                mr: 2,
                children: data
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                children: filterItems.map(item => item["品番"] == data ? item["商品名"] : null)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
                value: index,
                variant: "outline",
                colorScheme: "gray",
                mr: 2,
                children: "\u8A73\u7D30"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
                value: index,
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
  });
};
;// CONCATENATED MODULE: ./components/Stock.tsx








const Stock = ({
  items
}) => {
  //重複削除
  const filterItems = items.filter((item, index, self) => self.findIndex(e => e["品番"] === item["品番"]) === index);
  const {
    0: selectData,
    1: setSelectData
  } = (0,external_react_.useState)([]); //検索時にインプット入力した配列リスト

  const {
    0: inputValue,
    1: setInputValue
  } = (0,external_react_.useState)(""); //インプット入力値

  const handleChangeText = e => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

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
    setSelectData([...selectData].filter((v, index) => {
      return index !== Number(deleteNumber);
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_FormArea, {
      inputValue: inputValue,
      filterItems: filterItems,
      handleChangeText: handleChangeText,
      onClickSearch: onClickSearch,
      onClickReset: onClickReset
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      justifyContent: "center",
      mb: 6,
      children: selectData.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
        children: ["CSV\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9", /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
          as: icons_namespaceObject.DownloadIcon
        })]
      }) : null
    }), /*#__PURE__*/jsx_runtime_.jsx(SearchList, {
      items: items,
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
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
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
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        children: "Docs"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        children: "Examples"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        children: "Blog"
      })]
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
;// CONCATENATED MODULE: ./pages/index.tsx









const Home = ({
  items
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(contexts_StockContext, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "\u5927\u4E38\u767D\u8863 \u5728\u5EAB\u8868"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          href: "/favicon.ico"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: 3,
        direction: "column",
        alignItems: "center",
        mt: 16,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "3xl",
          as: "h2",
          fontWeight: "bold",
          children: "\u5728\u5EAB\u691C\u7D22"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "xl",
          as: "h3",
          px: 3,
          children: "\u54C1\u756A\u3092\u5165\u529B\u3057\u3066\u5728\u5EAB\u691C\u7D22\u304C\u3067\u304D\u307E\u3059\u3002"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Stock, {
        items: items
      })]
    })
  });
};

/* harmony default export */ var pages = (Home);
async function getStaticProps() {
  const res = await external_axios_default().get("https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv");
  const splitItems = await res.data.split("\n");
  const itemKeys = await splitItems[0].trim().split(",");
  let jsonDatas = [];

  for (let i = 1; i < splitItems.length; i++) {
    let csvObject = new Object();
    let itemValues = splitItems[i].split(",");

    for (let j = 0; j < itemKeys.length; j++) {
      csvObject[itemKeys[j]] = itemValues[j];
    }

    jsonDatas.push(csvObject);
  }

  return {
    props: {
      items: jsonDatas
    }
  };
} // export async function getStaticProps() {
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
var __webpack_exports__ = (__webpack_exec__(958));
module.exports = __webpack_exports__;

})();