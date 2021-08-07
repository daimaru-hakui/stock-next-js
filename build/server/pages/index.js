(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/FormArea.tsx":
/*!*********************************!*\
  !*** ./components/FormArea.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\mukai\\Documents\\Next\\stock-app\\components\\FormArea.tsx";




const FormArea = props => {
  const {
    inputValue,
    filterItems,
    selectData,
    handleChangeText,
    onClickSearch,
    onClickReset
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: onClickSearch,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
      w: "auto",
      justifyContent: "center",
      alignItems: "center",
      py: 6,
      px: 10,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("datalist", {
        id: "search",
        children: filterItems.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: item["品番"],
          children: item["商品名"]
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        type: "submit",
        colorScheme: "teal",
        px: 5,
        py: 6,
        mr: 1,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Search2Icon,
          mr: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), "\u691C\u7D22"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: onClickReset,
        colorScheme: "red",
        px: 5,
        py: 6,
        children: "RESET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FormArea);

/***/ }),

/***/ "./components/HeadMeta.tsx":
/*!*********************************!*\
  !*** ./components/HeadMeta.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\mukai\\Documents\\Next\\stock-app\\components\\HeadMeta.tsx";


const HeadMeta = ({
  title,
  description
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:title",
      content: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:site_name",
      content: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "apple-touch-icon",
      href: "/favicon.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeadMeta);

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\mukai\\Documents\\Next\\stock-app\\components\\Header.tsx";


const Header = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();

  const handleToggle = () => isOpen ? onClose() : onOpen();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    as: "nav",
    align: "center",
    justify: "space-between",
    wrap: "wrap",
    padding: 4,
    bg: "teal.500",
    color: "white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      align: "center",
      mr: 5,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        as: "h1",
        size: "lg",
        letterSpacing: "tighter",
        children: "DAIMARU HAKUI"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      display: {
        base: "block",
        md: "none"
      },
      onClick: handleToggle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.HamburgerIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        href: "https://www.daimaru-hakui.co.jp/",
        children: "WEB\u30B5\u30A4\u30C8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      display: {
        base: isOpen ? "block" : "none",
        md: "block"
      },
      mt: {
        base: 4,
        md: 0
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/MainTitle.tsx":
/*!**********************************!*\
  !*** ./components/MainTitle.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\mukai\\Documents\\Next\\stock-app\\components\\MainTitle.tsx";



const MainTitle = props => {
  const {
    h2Title,
    h3Title
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    spacing: 3,
    direction: "column",
    alignItems: "center",
    mt: 16,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "3xl",
      as: "h2",
      fontWeight: "bold",
      children: h2Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "xl",
      as: "h3",
      px: 3,
      children: h3Title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainTitle);

/***/ }),

/***/ "./components/SearchList.tsx":
/*!***********************************!*\
  !*** ./components/SearchList.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchList.module.css */ "./components/SearchList.module.css");
/* harmony import */ var _SearchList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SearchList_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\mukai\\Documents\\Next\\stock-app\\components\\SearchList.tsx";





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
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
  const {
    0: showItem,
    1: setShowItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");

  const onClickModal = data => {
    console.log(data);
    setShowItem(data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      justifyContent: "center",
      alignItems: "center",
      direction: "column-reverse",
      children: selectData.map((data, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        px: 5,
        mb: 5,
        mx: 2,
        borderRadius: 5,
        boxShadow: "base",
        className: (_SearchList_module_css__WEBPACK_IMPORTED_MODULE_4___default().fade),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {
          w: {
            base: "100%",
            md: "600px"
          },
          size: "sm",
          variant: "striped",
          colorScheme: "gray",
          mb: 6,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TableCaption, {
            placement: "top",
            px: 0,
            mb: 2,
            fontSize: "medium",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
              justifyContent: "space-between",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                fontSize: {
                  base: "xs",
                  md: "md"
                },
                direction: {
                  base: "column",
                  md: "row"
                },
                alignItems: "start",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  mr: 2,
                  children: data
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  mr: 2,
                  children: filterItems.map(item => item["品番"] == data && item["商品名"])
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  children: filterItems.map(item => item["品番"] == data && item["上代"] && "￥" + item["上代"])
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: () => {
                    onClickModal(data);
                    onOpen();
                  },
                  variant: "outline",
                  colorScheme: "gray",
                  mr: 2,
                  children: "\u8A73\u7D30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "outline",
                  colorScheme: "gray",
                  onClick: e => onClickDelete(e, index),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.DeleteIcon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Thead, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u30B5\u30A4\u30BA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u5728\u5EAB\u6570"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u5916\u90E8\u5728\u5EAB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "TOTAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u4ED5\u639B\u7D0D\u671F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u4ED5\u639B\u6570\u91CF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tbody, {
            children: items.map((item, index) => {
              if (item["品番"] == data) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["サイズ"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["在庫数"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["外部在庫"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["TOTAL"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["仕掛"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["数量"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 25
                  }, undefined)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 23
                }, undefined);
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      isOpen: isOpen,
      onClose: onClose,
      size: "xl",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
          children: products.map(product => product["model"] == showItem ? product["model"] : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            children: showItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
          children: products.map(product => product["model"] == showItem ? product["composition"] : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            children: ["\u3053\u3053\u306B\u30B5\u30A4\u30BA\u3068\u30B9\u30DA\u30C3\u30AF\u3092\u8868\u793A\u3057\u3088\u3046\u3068\u601D\u3044\u307E\u3059", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 19
            }, undefined), "\u3069\u3046\u3067\u3059\u304B\uFF1F"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            colorScheme: "blue",
            mr: 3,
            onClick: onClose,
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchList);

/***/ }),

/***/ "./components/Stock.tsx":
/*!******************************!*\
  !*** ./components/Stock.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stock": function() { return /* binding */ Stock; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-csv */ "react-csv");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormArea */ "./components/FormArea.tsx");
/* harmony import */ var _SearchList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchList */ "./components/SearchList.tsx");


var _jsxFileName = "C:\\Users\\mukai\\Documents\\Next\\stock-app\\components\\Stock.tsx";






const Stock = props => {
  const {
    items,
    products
  } = props;
  const {
    0: selectData,
    1: setSelectData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); //検索時にインプット入力した配列リスト

  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); //インプット入力値

  const {
    0: csvData,
    1: setCsvData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); //CSVデータ
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormArea__WEBPACK_IMPORTED_MODULE_5__.default, {
      inputValue: inputValue,
      filterItems: filterItems,
      selectData: selectData,
      handleChangeText: handleChangeText,
      onClickSearch: onClickSearch,
      onClickReset: onClickReset
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
      justifyContent: "center",
      mb: 6,
      children: selectData.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_csv__WEBPACK_IMPORTED_MODULE_4__.CSVLink, {
        data: csvData,
        filename: new Date().toLocaleString() + "_zaiko.csv",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: onClickCsv,
          children: ["CSV\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.DownloadIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchList__WEBPACK_IMPORTED_MODULE_6__.default, {
      items: items,
      products: products,
      selectData: selectData,
      filterItems: filterItems,
      onClickDelete: onClickDelete
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./contexts/StockContext.js":
/*!**********************************!*\
  !*** ./contexts/StockContext.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockContext": function() { return /* binding */ StockContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\mukai\\Documents\\Next\\stock-app\\contexts\\StockContext.js";


const StockContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});

const StockContextProvider = props => {
  const {
    children
  } = props;
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("zaiko");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StockContext.Provider, {
    value: items,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StockContextProvider);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Stock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stock */ "./components/Stock.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _contexts_StockContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/StockContext */ "./contexts/StockContext.js");
/* harmony import */ var _components_HeadMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeadMeta */ "./components/HeadMeta.tsx");
/* harmony import */ var _components_MainTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainTitle */ "./components/MainTitle.tsx");


var _jsxFileName = "C:\\Users\\mukai\\Documents\\Next\\stock-app\\pages\\index.tsx";







const Home = props => {
  const {
    items,
    products
  } = props;
  console.log(products);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_StockContext__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadMeta__WEBPACK_IMPORTED_MODULE_5__.default, {
        title: "大丸白衣 在庫表",
        description: "マイユニフォームクラブとセレナーデの商品在庫を検索することができるWEBアプリです。"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainTitle__WEBPACK_IMPORTED_MODULE_6__.default, {
        h2Title: "在庫検索",
        h3Title: "品番を入力して在庫検索ができます。"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stock__WEBPACK_IMPORTED_MODULE_2__.Stock, {
        items: items,
        products: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
async function getStaticProps() {
  const [itemsRes, productsRes] = await Promise.all([axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv"), axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://catalog-information.microcms.io/api/v1/products", {
    headers: {
      "X-API-KEY": "6ada6ea2-91a7-4914-aff7-0803ef6db4bb"
    }
  })]);
  const splitItems = await itemsRes.data.split("\n");
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

  const products = productsRes.data.contents;
  return {
    props: {
      items: jsonDatas,
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

/***/ "./components/SearchList.module.css":
/*!******************************************!*\
  !*** ./components/SearchList.module.css ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"fade": "SearchList_fade__2FHes",
	"fade1": "SearchList_fade1__2ZbLj"
};


/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/icons");;

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-csv":
/*!****************************!*\
  !*** external "react-csv" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-csv");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0Zvcm1BcmVhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRNZXRhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9NYWluVGl0bGUudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9TdG9jay50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29udGV4dHMvU3RvY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0b2NrLWFwcC8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL1NlYXJjaExpc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1jc3ZcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb3JtQXJlYSIsInByb3BzIiwiaW5wdXRWYWx1ZSIsImZpbHRlckl0ZW1zIiwic2VsZWN0RGF0YSIsImhhbmRsZUNoYW5nZVRleHQiLCJvbkNsaWNrU2VhcmNoIiwib25DbGlja1Jlc2V0IiwibGVuZ3RoIiwibWFwIiwiZGF0YSIsImJhc2UiLCJtZCIsImUiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJTZWFyY2gySWNvbiIsIkhlYWRNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhlYWRlciIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VEaXNjbG9zdXJlIiwiaGFuZGxlVG9nZ2xlIiwiTWFpblRpdGxlIiwiaDJUaXRsZSIsImgzVGl0bGUiLCJTZWFyY2hMaXN0IiwiaXRlbXMiLCJwcm9kdWN0cyIsIm9uQ2xpY2tEZWxldGUiLCJzaG93SXRlbSIsInNldFNob3dJdGVtIiwidXNlU3RhdGUiLCJvbkNsaWNrTW9kYWwiLCJjb25zb2xlIiwibG9nIiwiU3R5bGVzIiwiRGVsZXRlSWNvbiIsInByb2R1Y3QiLCJTdG9jayIsInNldFNlbGVjdERhdGEiLCJzZXRJbnB1dFZhbHVlIiwiY3N2RGF0YSIsInNldENzdkRhdGEiLCJmaWx0ZXIiLCJzZWxmIiwiZmluZEluZGV4Iiwib25DbGlja0NzdiIsImluY2x1ZGVzIiwiaGVhZGVyIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJib2R5IiwiZCIsImNzdkZpbGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZmlsdGVySXRlbSIsIm5ld0RhdGEiLCJ2IiwiZGVsZXRlTnVtYmVyIiwiTnVtYmVyIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiRG93bmxvYWRJY29uIiwiU3RvY2tDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlN0b2NrQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRJdGVtcyIsIkhvbWUiLCJnZXRTdGF0aWNQcm9wcyIsIml0ZW1zUmVzIiwicHJvZHVjdHNSZXMiLCJQcm9taXNlIiwiYWxsIiwiYXhpb3MiLCJoZWFkZXJzIiwic3BsaXRJdGVtcyIsInNwbGl0IiwiaXRlbUtleXMiLCJ0cmltIiwianNvbkRhdGFzIiwiaSIsImNzdk9iamVjdCIsIml0ZW1WYWx1ZXMiLCJqIiwicHVz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SUFBVixDQUFlSCxTQUFmO0FBQ0Q7O0FBQ0QsUUFBTTFELFFBQVEsR0FBRytDLFdBQVcsQ0FBQ3JFLElBQVosQ0FBaUJvRixRQUFsQztBQUVBLFNBQU87QUFDTDdGLFNBQUssRUFBRTtBQUNMOEIsV0FBSyxFQUFFeUQsU0FERjtBQUVMeEQ7QUFGSztBQURGLEdBQVA7QUFNRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLDhDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoMkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIElucHV0LCBJbnB1dEdyb3VwIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRm9ybUFyZWEgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbnB1dFZhbHVlLFxyXG4gICAgZmlsdGVySXRlbXMsXHJcbiAgICBzZWxlY3REYXRhLFxyXG4gICAgaGFuZGxlQ2hhbmdlVGV4dCxcclxuICAgIG9uQ2xpY2tTZWFyY2gsXHJcbiAgICBvbkNsaWNrUmVzZXQsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uQ2xpY2tTZWFyY2h9PlxyXG4gICAgICA8SW5wdXRHcm91cFxyXG4gICAgICAgIHc9XCJhdXRvXCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgcHk9ezZ9XHJcbiAgICAgICAgcHg9ezEwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICAgICBzZWxlY3REYXRhLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IHNlbGVjdERhdGEubWFwKChkYXRhKSA9PiBgICR7ZGF0YX0gYClcclxuICAgICAgICAgICAgICA6IFwi5L6LKVNQMTI1XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpc3Q9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgdz17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiNDUwcHhcIiB9fVxyXG4gICAgICAgICAgbXI9ezF9XHJcbiAgICAgICAgICBweT17Nn1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiAoZS5rZXkgPT0gXCJFbnRlclwiID8gb25DbGlja1NlYXJjaChlKSA6IGZhbHNlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAge2ZpbHRlckl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbVtcIuWTgeeVqlwiXX0+XHJcbiAgICAgICAgICAgICAge2l0ZW1bXCLllYblk4HlkI1cIl19XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvclNjaGVtZT1cInRlYWxcIiBweD17NX0gcHk9ezZ9IG1yPXsxfT5cclxuICAgICAgICAgIDxJY29uIGFzPXtTZWFyY2gySWNvbn0gbXI9ezF9IC8+XHJcbiAgICAgICAgICDmpJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tSZXNldH0gY29sb3JTY2hlbWU9XCJyZWRcIiBweD17NX0gcHk9ezZ9PlxyXG4gICAgICAgICAgUkVTRVRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQXJlYTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5jb25zdCBIZWFkTWV0YSA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfSAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtcIi9mYXZpY29uLnBuZ1wifSAvPiAqL31cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgey8qIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmR9IC8+ICovfVxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9e1wiL2Zhdmljb24ucG5nXCJ9IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZE1ldGE7XHJcbiIsImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGbGV4LFxyXG4gIEhlYWRpbmcsXHJcbiAgTGluayxcclxuICBTdGFjayxcclxuICBUZXh0LFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4gKGlzT3BlbiA/IG9uQ2xvc2UoKSA6IG9uT3BlbigpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgd3JhcD1cIndyYXBcIlxyXG4gICAgICBwYWRkaW5nPXs0fVxyXG4gICAgICBiZz1cInRlYWwuNTAwXCJcclxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBsZXR0ZXJTcGFjaW5nPXtcInRpZ2h0ZXJcIn0+XHJcbiAgICAgICAgICBEQUlNQVJVIEhBS1VJXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxCb3ggZGlzcGxheT17eyBiYXNlOiBcImJsb2NrXCIsIG1kOiBcIm5vbmVcIiB9fSBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgIDxIYW1idXJnZXJJY29uIC8+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XHJcbiAgICAgICAgZGlzcGxheT17eyBiYXNlOiBpc09wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiZmxleFwiIH19XHJcbiAgICAgICAgd2lkdGg9e3sgYmFzZTogXCJmdWxsXCIsIG1kOiBcImF1dG9cIiB9fVxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGZsZXhHcm93PXsxfVxyXG4gICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZGFpbWFydS1oYWt1aS5jby5qcC9cIj5XRULjgrXjgqTjg4g8L0xpbms+XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJibG9ja1wiIH19XHJcbiAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgPjwvQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoMlRpdGxlLCBoM1RpdGxlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFN0YWNrIHNwYWNpbmc9ezN9IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtdD17MTZ9PlxyXG4gICAgICA8VGV4dCBmb250U2l6ZT1cIjN4bFwiIGFzPVwiaDJcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgIHtoMlRpdGxlfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBhcz1cImgzXCIgcHg9ezN9PlxyXG4gICAgICAgIHtoM1RpdGxlfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluVGl0bGU7XHJcbiIsImltcG9ydCB7IERlbGV0ZUljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRmxleCxcclxuICBJY29uLFxyXG4gIE1vZGFsLFxyXG4gIE1vZGFsQm9keSxcclxuICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gIE1vZGFsQ29udGVudCxcclxuICBNb2RhbEZvb3RlcixcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbE92ZXJsYXksXHJcbiAgVGFibGUsXHJcbiAgVGFibGVDYXB0aW9uLFxyXG4gIFRib2R5LFxyXG4gIFRkLFxyXG4gIFRoLFxyXG4gIFRoZWFkLFxyXG4gIFRyLFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TZWFyY2hMaXN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFNlYXJjaExpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGl0ZW1zLCBwcm9kdWN0cywgc2VsZWN0RGF0YSwgZmlsdGVySXRlbXMsIG9uQ2xpY2tEZWxldGUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBbc2hvd0l0ZW0sIHNldFNob3dJdGVtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG9uQ2xpY2tNb2RhbCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHNldFNob3dJdGVtKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW4tcmV2ZXJzZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7c2VsZWN0RGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHB4PXs1fVxyXG4gICAgICAgICAgICBtYj17NX1cclxuICAgICAgICAgICAgbXg9ezJ9XHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17NX1cclxuICAgICAgICAgICAgYm94U2hhZG93PVwiYmFzZVwiXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLmZhZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgIHc9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjYwMHB4XCIgfX1cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdHJpcGVkXCJcclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyYXlcIlxyXG4gICAgICAgICAgICAgIG1iPXs2fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2FwdGlvbiBwbGFjZW1lbnQ9XCJ0b3BcIiBweD17MH0gbWI9ezJ9IGZvbnRTaXplPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCJ4c1wiLCBtZDogXCJtZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXI9ezJ9PntkYXRhfTwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXI9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW1bXCLlk4HnlapcIl0gPT0gZGF0YSAmJiBpdGVtW1wi5ZWG5ZOB5ZCNXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVySXRlbXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1wi5ZOB55WqXCJdID09IGRhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1wi5LiK5LujXCJdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCLvv6VcIiArIGl0ZW1bXCLkuIrku6NcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrTW9kYWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtcj17Mn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDoqbPntLBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tEZWxldGUoZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtEZWxldGVJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNhcHRpb24+XHJcbiAgICAgICAgICAgICAgPFRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+44K144Kk44K6PC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuWcqOW6q+aVsDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7lpJbpg6jlnKjluqs8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+VE9UQUw8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+5LuV5o6b57SN5pyfPC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuS7leaOm+aVsOmHjzwvVGg+XHJcbiAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAgICAgICAgPFRib2R5PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCLlk4HnlapcIl0gPT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcIuOCteOCpOOCulwiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCLlnKjluqvmlbBcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wi5aSW6YOo5Zyo5bqrXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcIlRPVEFMXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcIuS7leaOm1wiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCLmlbDph49cIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9UYm9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gc2l6ZT1cInhsXCI+XHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxyXG4gICAgICAgIDxNb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICA8TW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+XHJcbiAgICAgICAgICAgICAgcHJvZHVjdFtcIm1vZGVsXCJdID09IHNob3dJdGVtID8gKFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFtcIm1vZGVsXCJdXHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCb3g+e3Nob3dJdGVtfTwvQm94PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT5cclxuICAgICAgICAgICAgICBwcm9kdWN0W1wibW9kZWxcIl0gPT0gc2hvd0l0ZW0gPyAoXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0W1wiY29tcG9zaXRpb25cIl1cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAg44GT44GT44Gr44K144Kk44K644Go44K544Oa44OD44Kv44KS6KGo56S644GX44KI44GG44Go5oCd44GE44G+44GZXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICDjganjgYbjgafjgZnjgYvvvJ9cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cclxuICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERvd25sb2FkSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gXCJyZWFjdC1jc3ZcIjtcclxuaW1wb3J0IEZvcm1BcmVhIGZyb20gXCIuL0Zvcm1BcmVhXCI7XHJcbmltcG9ydCBTZWFyY2hMaXN0IGZyb20gXCIuL1NlYXJjaExpc3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9jayA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0RGF0YSwgc2V0U2VsZWN0RGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8v5qSc57Si5pmC44Gr44Kk44Oz44OX44OD44OI5YWl5Yqb44GX44Gf6YWN5YiX44Oq44K544OIXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7IC8v44Kk44Oz44OX44OD44OI5YWl5Yqb5YCkXHJcbiAgY29uc3QgW2NzdkRhdGEsIHNldENzdkRhdGFdID0gdXNlU3RhdGUoXCJcIik7IC8vQ1NW44OH44O844K/XHJcblxyXG4gIC8v5ZOB55Wq44Gu6YeN6KSH5YmK6ZmkXHJcbiAgY29uc3QgZmlsdGVySXRlbXMgPSBpdGVtcy5maWx0ZXIoXHJcbiAgICAoaXRlbSwgaW5kZXgsIHNlbGYpID0+XHJcbiAgICAgIHNlbGYuZmluZEluZGV4KChlKSA9PiBlW1wi5ZOB55WqXCJdID09PSBpdGVtW1wi5ZOB55WqXCJdKSA9PT0gaW5kZXhcclxuICApO1xyXG5cclxuICAvL0NTVuODleOCoeOCpOODq+OBq+WkieaPm1xyXG4gIGNvbnN0IG9uQ2xpY2tDc3YgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjc3ZEYXRhID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBzZWxlY3REYXRhLmluY2x1ZGVzKGl0ZW1bXCLlk4HnlapcIl0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gT2JqZWN0LmtleXMoaXRlbXNbMF0pLmpvaW4oXCIsXCIpICsgXCJcXG5cIjtcclxuICAgIGNvbnN0IGJvZHkgPSBjc3ZEYXRhXHJcbiAgICAgIC5tYXAoKGQpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZClcclxuICAgICAgICAgIC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZFtrZXldO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5qb2luKFwiLFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oXCJcXG5cIik7XHJcbiAgICBjb25zdCBjc3ZGaWxlID0gaGVhZGVyICsgYm9keTtcclxuICAgIHNldENzdkRhdGEoY3N2RmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgLy9JTlBVVOOBruWFpeWKm+WApOOCkuWPluW+l1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4ge1xyXG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy/mpJzntKLntZ7jgorovrzjgb9cclxuICBjb25zdCBvbkNsaWNrU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgZmlsdGVySXRlbSA9IGZpbHRlckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbVtcIuWTgeeVqlwiXSA9PSBpbnB1dFZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IG5ld0RhdGEgPSBmaWx0ZXJJdGVtLm1hcCgodikgPT4ge1xyXG4gICAgICByZXR1cm4gdltcIuWTgeeVqlwiXTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChuZXdEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgaWYgKCFzZWxlY3REYXRhLmluY2x1ZGVzKG5ld0RhdGFbMF0pKSB7XHJcbiAgICAgIHNldFNlbGVjdERhdGEoWy4uLnNlbGVjdERhdGEsIG5ld0RhdGFbMF1dKTtcclxuICAgIH1cclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy/pgbjmip7jgZfjgabjgYTjgovlhajjgabjga7lk4HnlarjgpLliYrpmaRcclxuICBjb25zdCBvbkNsaWNrUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gICAgc2V0U2VsZWN0RGF0YShbXSk7XHJcbiAgfTtcclxuXHJcbiAgLy/pgbjmip7jgZfjgZ/lk4Hnlarjga7liYrpmaRcclxuICBjb25zdCBvbkNsaWNrRGVsZXRlID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgZGVsZXRlTnVtYmVyID0gaW5kZXg7XHJcbiAgICBzZXRTZWxlY3REYXRhKFxyXG4gICAgICBbLi4uc2VsZWN0RGF0YV0uZmlsdGVyKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpbmRleCAhPT0gTnVtYmVyKGRlbGV0ZU51bWJlcik7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybUFyZWFcclxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgIGZpbHRlckl0ZW1zPXtmaWx0ZXJJdGVtc31cclxuICAgICAgICBzZWxlY3REYXRhPXtzZWxlY3REYXRhfVxyXG4gICAgICAgIGhhbmRsZUNoYW5nZVRleHQ9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgb25DbGlja1NlYXJjaD17b25DbGlja1NlYXJjaH1cclxuICAgICAgICBvbkNsaWNrUmVzZXQ9e29uQ2xpY2tSZXNldH1cclxuICAgICAgLz5cclxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtYj17Nn0+XHJcbiAgICAgICAge3NlbGVjdERhdGEubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Q1NWTGlua1xyXG4gICAgICAgICAgICBkYXRhPXtjc3ZEYXRhfVxyXG4gICAgICAgICAgICBmaWxlbmFtZT17bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCJfemFpa28uY3N2XCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0Nzdn0+XHJcbiAgICAgICAgICAgICAgQ1NW44OA44Km44Oz44Ot44O844OJXHJcbiAgICAgICAgICAgICAgPEljb24gYXM9e0Rvd25sb2FkSWNvbn0gLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NTVkxpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8U2VhcmNoTGlzdFxyXG4gICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XHJcbiAgICAgICAgc2VsZWN0RGF0YT17c2VsZWN0RGF0YX1cclxuICAgICAgICBmaWx0ZXJJdGVtcz17ZmlsdGVySXRlbXN9XHJcbiAgICAgICAgb25DbGlja0RlbGV0ZT17b25DbGlja0RlbGV0ZX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3RvY2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCBTdG9ja0NvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJ6YWlrb1wiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9ja0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2l0ZW1zfT57Y2hpbGRyZW59PC9TdG9ja0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFN0b2NrIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RvY2tcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFN0b2NrQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9TdG9ja0NvbnRleHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRNZXRhXCI7XG5pbXBvcnQgTWFpblRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5UaXRsZVwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzIH0gPSBwcm9wcztcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RvY2tDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxIZWFkXG4gICAgICAgICAgdGl0bGU9e1wi5aSn5Li455m96KGjIOWcqOW6q+ihqFwifVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgIFwi44Oe44Kk44Om44OL44OV44Kp44O844Og44Kv44Op44OW44Go44K744Os44OK44O844OH44Gu5ZWG5ZOB5Zyo5bqr44KS5qSc57Si44GZ44KL44GT44Go44GM44Gn44GN44KLV0VC44Ki44OX44Oq44Gn44GZ44CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1haW5UaXRsZVxuICAgICAgICAgIGgyVGl0bGU9e1wi5Zyo5bqr5qSc57SiXCJ9XG4gICAgICAgICAgaDNUaXRsZT17XCLlk4HnlarjgpLlhaXlipvjgZfjgablnKjluqvmpJzntKLjgYzjgafjgY3jgb7jgZnjgIJcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFN0b2NrIGl0ZW1zPXtpdGVtc30gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgPC9TdG9ja0NvbnRleHRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IFtpdGVtc1JlcywgcHJvZHVjdHNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGF4aW9zLmdldChcbiAgICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlRQSUQwT3llbzhGd05ONmxEUEVUZ3JoZDhPc21yUko2Ulp5NUVPODBHNHVHZ2tqN1pSaENaOU9Yc1VOREZGMGM1WVdmd1NyQmFFaDlfUC9wdWI/Z2lkPTEzOTkyMzk5NTgmc2luZ2xlPXRydWUmb3V0cHV0PWNzdlwiXG4gICAgKSxcbiAgICBheGlvcy5nZXQoXCJodHRwczovL2NhdGFsb2ctaW5mb3JtYXRpb24ubWljcm9jbXMuaW8vYXBpL3YxL3Byb2R1Y3RzXCIsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLUFQSS1LRVlcIjogXCI2YWRhNmVhMi05MWE3LTQ5MTQtYWZmNy0wODAzZWY2ZGI0YmJcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIF0pO1xuICBjb25zdCBzcGxpdEl0ZW1zID0gYXdhaXQgaXRlbXNSZXMuZGF0YS5zcGxpdChcIlxcblwiKTtcbiAgY29uc3QgaXRlbUtleXMgPSBhd2FpdCBzcGxpdEl0ZW1zWzBdLnRyaW0oKS5zcGxpdChcIixcIik7XG4gIGxldCBqc29uRGF0YXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBzcGxpdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNzdk9iamVjdCA9IG5ldyBPYmplY3QoKTtcbiAgICBsZXQgaXRlbVZhbHVlcyA9IHNwbGl0SXRlbXNbaV0uc3BsaXQoXCIsXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNzdk9iamVjdFtpdGVtS2V5c1tqXV0gPSBpdGVtVmFsdWVzW2pdO1xuICAgIH1cbiAgICBqc29uRGF0YXMucHVzaChjc3ZPYmplY3QpO1xuICB9XG4gIGNvbnN0IHByb2R1Y3RzID0gcHJvZHVjdHNSZXMuZGF0YS5jb250ZW50cztcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpdGVtczoganNvbkRhdGFzLFxuICAgICAgcHJvZHVjdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4vLyAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2VFBJRDBPeWVvOEZ3Tk42bERQRVRncmhkOE9zbXJSSjZSWnk1RU84MEc0dUdna2o3WlJoQ1o5T1hzVU5ERkYwYzVZV2Z3U3JCYUVoOV9QL3B1Yj9naWQ9MTM5OTIzOTk1OCZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2XCJcbi8vICAgKTtcbi8vICAgY29uc3Qgc3BsaXRJdGVtcyA9IGF3YWl0IHJlcy5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuLy8gICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KFwiLFwiKTtcbi8vICAgbGV0IGpzb25EYXRhcyA9IFtdO1xuLy8gICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuLy8gICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdChcIixcIik7XG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtS2V5cy5sZW5ndGg7IGorKykge1xuLy8gICAgICAgY3N2T2JqZWN0W2l0ZW1LZXlzW2pdXSA9IGl0ZW1WYWx1ZXNbal07XG4vLyAgICAgfVxuLy8gICAgIGpzb25EYXRhcy5wdXNoKGNzdk9iamVjdCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBpdGVtczoganNvbkRhdGFzLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgXCJodHRwczovL2RhaW1hcnUtaGFrdWkubWljcm9jbXMuaW8vYXBpL3YxL2NhdGFsb2c/bGltaXQ9MjAwXCIsXG4vLyAgICAge1xuLy8gICAgICAgaGVhZGVyczogeyBcIlgtQVBJLUtFWVwiOiBwcm9jZXNzLmVudi5BUElfS0VZIH0sXG4vLyAgICAgfVxuLy8gICApO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgY2F0YWxvZ3M6IGRhdGEuY29udGVudHMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZhZGVcIjogXCJTZWFyY2hMaXN0X2ZhZGVfXzJGSGVzXCIsXG5cdFwiZmFkZTFcIjogXCJTZWFyY2hMaXN0X2ZhZGUxX18yWmJMalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNzdlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9