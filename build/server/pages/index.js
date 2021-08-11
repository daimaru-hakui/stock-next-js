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
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("datalist", {
        id: "search",
        children: filterItems.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: item["number"],
          children: item["name"]
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
          lineNumber: 57,
          columnNumber: 11
        }, undefined), "\u691C\u7D22"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: onClickReset,
        colorScheme: "red",
        px: 5,
        py: 6,
        children: "RESET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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

  const onClickModal = data => setShowItem(data);

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
                  lineNumber: 63,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  mr: 2,
                  children: filterItems.map(item => item["number"] == data && item["name"])
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  children: filterItems.map(item => item["number"] == data && item["price"] && "￥" + item["price"])
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                children: [products.map((product, index) => product["model"] == data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: () => {
                    onClickModal(data);
                    onOpen();
                  },
                  variant: "outline",
                  colorScheme: "gray",
                  mr: 2,
                  children: "\u8A73\u7D30"
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 27
                }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "outline",
                  colorScheme: "gray",
                  onClick: e => onClickDelete(e, index),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.DeleteIcon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Thead, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u30B5\u30A4\u30BA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u5728\u5EAB\u6570"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u5916\u90E8\u5728\u5EAB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "TOTAL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u4ED5\u639B\u7D0D\u671F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Th, {
                textAlign: "center",
                children: "\u4ED5\u639B\u6570\u91CF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tbody, {
            children: items.map((item, index) => {
              if (item["number"] == data) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["size"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["stock1"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["stock2"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["total"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["schedule"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item["quantity"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 25
                  }, undefined)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 23
                }, undefined);
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      isOpen: isOpen,
      onClose: onClose,
      size: "xl",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined), products.map((product, index) => {
        if (product["model"] == showItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
              children: [product["model"], product["category"]]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                dangerouslySetInnerHTML: {
                  __html: product["size_spec"]
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                colorScheme: "blue",
                mr: 3,
                onClick: onClose,
                children: "Close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 17
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, undefined);
        }
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
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
  //numberの重複削除

  const filterItems = items.filter((item, index, self) => self.findIndex(e => e["number"] === item["number"]) === index); //CSVファイルに変換

  const onClickCsv = () => {
    const csvData = items.filter(item => selectData.includes(item["number"])); //特定のkeyを削除したい時
    // delete items[0]["number"];

    csvData.filter(data => {
      delete data["id"];
    }); // const header = Object.keys(items[0]).join(",") + "\n";

    const header = "商品コード,品番,商品名,上代,サイズ,在庫数,外部在庫,TOTAL,仕掛,数量\n";
    const body = csvData.map(d => {
      return Object.keys(d).map(key => d[key]).join(",");
    }).join("\n");
    const csvFile = header + body;
    setCsvData(csvFile);
  }; //INPUTの入力値を取得


  const handleChangeText = e => setInputValue(e.target.value); //検索絞り込み


  const onClickSearch = e => {
    e.preventDefault();
    let filterItem = filterItems.filter(item => item["number"] == inputValue); //Input入力値と同じオブジェクトを取り出す。

    let newData = filterItem.map(item => item["number"]); //オブジェクトから品番だけを取り出す

    if (newData.length === 0) return; //データ空白であればリターンで返す。

    !selectData.includes(newData[0]) && setSelectData([...selectData, newData[0]]);
    setInputValue(""); // let filterItem = filterItems.filter((item) => {
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
  }; //選択している全てのnumberを削除


  const onClickReset = () => {
    setInputValue("");
    setSelectData([]);
  }; //選択したnumberの削除


  const onClickDelete = (e, index) => {
    let deleteNumber = index;
    setSelectData([...selectData].filter((v, index) => index !== Number(deleteNumber)));
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
      lineNumber: 106,
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
            lineNumber: 122,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchList__WEBPACK_IMPORTED_MODULE_6__.default, {
      items: items,
      products: products,
      selectData: selectData,
      filterItems: filterItems,
      onClickDelete: onClickDelete
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_StockContext__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadMeta__WEBPACK_IMPORTED_MODULE_5__.default, {
        title: "大丸白衣 在庫表",
        description: "マイユニフォームクラブとセレナーデの商品在庫を検索することができるWEBアプリです。"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainTitle__WEBPACK_IMPORTED_MODULE_6__.default, {
        h2Title: "在庫検索",
        h3Title: "品番を入力して在庫検索ができます。"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stock__WEBPACK_IMPORTED_MODULE_2__.Stock, {
        items: items,
        products: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
  let items = [];

  for (let i = 1; i < splitItems.length; i++) {
    let csvObject = new Object();
    let itemValues = splitItems[i].split(",");

    for (let j = 0; j < itemKeys.length; j++) {
      csvObject[itemKeys[j]] = itemValues[j];
    }

    items.push(csvObject);
  }

  items = items.map((item, index) => {
    return {
      id: index,
      code: item["商品コード"],
      number: item["品番"],
      name: item["商品名"],
      price: item["上代"],
      size: item["サイズ"],
      stock1: item["在庫数"],
      stock2: item["外部在庫"],
      total: item["TOTAL"],
      schedule: item["仕掛"],
      quantity: item["数量"]
    };
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0Zvcm1BcmVhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRNZXRhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9NYWluVGl0bGUudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9TdG9jay50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29udGV4dHMvU3RvY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0b2NrLWFwcC8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL1NlYXJjaExpc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1jc3ZcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb3JtQXJlYSIsInByb3BzIiwiaW5wdXRWYWx1ZSIsImZpbHRlckl0ZW1zIiwic2VsZWN0RGF0YSIsImhhbmRsZUNoYW5nZVRleHQiLCJvbkNsaWNrU2VhcmNoIiwib25DbGlja1Jlc2V0IiwibGVuZ3RoIiwibWFwIiwiZGF0YSIsImJhc2UiLCJtZCIsImUiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJTZWFyY2gySWNvbiIsIkhlYWRNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhlYWRlciIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VEaXNjbG9zdXJlIiwiaGFuZGxlVG9nZ2xlIiwiTWFpblRpdGxlIiwiaDJUaXRsZSIsImgzVGl0bGUiLCJTZWFyY2hMaXN0IiwiaXRlbXMiLCJwcm9kdWN0cyIsIm9uQ2xpY2tEZWxldGUiLCJzaG93SXRlbSIsInNldFNob3dJdGVtIiwidXNlU3RhdGUiLCJvbkNsaWNrTW9kYWwiLCJTdHlsZXMiLCJwcm9kdWN0IiwiRGVsZXRlSWNvbiIsIl9faHRtbCIsIlN0b2NrIiwic2V0U2VsZWN0RGF0YSIsInNldElucHV0VmFsdWUiLCJjc3ZEYXRhIiwic2V0Q3N2RGF0YSIsImZpbHRlciIsInNlbGYiLCJmaW5kSW5kZXgiLCJvbkNsaWNrQ3N2IiwiaW5jbHVkZXMiLCJoZWFkZXIiLCJib2R5IiwiZCIsIk9iamVjdCIsImtleXMiLCJqb2luIiwiY3N2RmlsZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXJJdGVtIiwibmV3RGF0YSIsImRlbGV0ZU51bWJlciIsInYiLCJOdW1iZXIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJEb3dubG9hZEljb24iLCJTdG9ja0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3RvY2tDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldEl0ZW1zIiwiSG9tZSIsImdldFN0YXRpY1Byb3BzIiwiaXRlbXNSZXMiLCJwcm9kdWN0c1JlcyIsIlByb21pc2UiLCJhbGwiLCJheGlvcyIsImhlYWRlcnMiLCJzcGxpdEl0ZW1zIiwic3BsaXQiLCJpdGVtS2V5cyIsInRyaW0iLCJpIiwiY3N2T2JqZWN0IiwiaXRlbVZhbHVlcyIsImoiLCJwdXNoIiwiaWQiLCJjb2RlIiwibnVtYmVyIiwibmFtZSIsInByaWNlIiwic2l6ZSIsInN0b2NrMSIsInN0b2NrMiIsInRvdGFsIiwic2NoZWR1bGUiLCJxdWFudGl0eSIsImNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBV0EsTUFBTUEsUUFBeUIsR0FBSUMsS0FBRCxJQUFXO0FBQzNDLFFBQU07QUFDSkMsY0FESTtBQUVKQyxlQUZJO0FBR0pDLGNBSEk7QUFJSkMsb0JBSkk7QUFLSkMsaUJBTEk7QUFNSkM7QUFOSSxNQU9GTixLQVBKO0FBU0Esc0JBQ0U7QUFBTSxZQUFRLEVBQUVLLGFBQWhCO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxPQUFDLEVBQUMsTUFESjtBQUVFLG9CQUFjLEVBQUMsUUFGakI7QUFHRSxnQkFBVSxFQUFDLFFBSGI7QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxFQUxOO0FBQUEsOEJBT0UsOERBQUMsbURBQUQ7QUFDRSxnQkFBUSxFQUFFRCxnQkFEWjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsYUFBSyxFQUFFSCxVQUhUO0FBSUUsZUFBTyxFQUFDLFNBSlY7QUFLRSxtQkFBVyxFQUNURSxVQUFVLENBQUNJLE1BQVgsR0FBb0IsQ0FBcEIsR0FDSUosVUFBVSxDQUFDSyxHQUFYLENBQWdCQyxJQUFELElBQVcsSUFBR0EsSUFBSyxHQUFsQyxDQURKLEdBRUksU0FSUjtBQVVFLFlBQUksRUFBQyxRQVZQO0FBV0UsU0FBQyxFQUFFO0FBQUVDLGNBQUksRUFBRSxNQUFSO0FBQWdCQyxZQUFFLEVBQUU7QUFBcEIsU0FYTDtBQVlFLFVBQUUsRUFBRSxDQVpOO0FBYUUsVUFBRSxFQUFFLENBYk47QUFjRSxrQkFBVSxFQUFHQyxDQUFELElBQVFBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQVQsR0FBbUJSLGFBQWEsQ0FBQ08sQ0FBRCxDQUFoQyxHQUFzQztBQWQ1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBdUJFO0FBQVUs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Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2gySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgSW5wdXQsIElucHV0R3JvdXAgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBmaWx0ZXJJdGVtczogW107XHJcbiAgc2VsZWN0RGF0YTogYW55O1xyXG4gIGhhbmRsZUNoYW5nZVRleHQ6IGFueTtcclxuICBvbkNsaWNrU2VhcmNoOiBhbnk7XHJcbiAgb25DbGlja1Jlc2V0OiBWb2lkRnVuY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBGb3JtQXJlYTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW5wdXRWYWx1ZSxcclxuICAgIGZpbHRlckl0ZW1zLFxyXG4gICAgc2VsZWN0RGF0YSxcclxuICAgIGhhbmRsZUNoYW5nZVRleHQsXHJcbiAgICBvbkNsaWNrU2VhcmNoLFxyXG4gICAgb25DbGlja1Jlc2V0LFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtvbkNsaWNrU2VhcmNofT5cclxuICAgICAgPElucHV0R3JvdXBcclxuICAgICAgICB3PVwiYXV0b1wiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHB5PXs2fVxyXG4gICAgICAgIHB4PXsxMH1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgc2VsZWN0RGF0YS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyBzZWxlY3REYXRhLm1hcCgoZGF0YSkgPT4gYCAke2RhdGF9IGApXHJcbiAgICAgICAgICAgICAgOiBcIuS+iylTUDEyNVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaXN0PVwic2VhcmNoXCJcclxuICAgICAgICAgIHc9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjQ1MHB4XCIgfX1cclxuICAgICAgICAgIG1yPXsxfVxyXG4gICAgICAgICAgcHk9ezZ9XHJcbiAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gKGUua2V5ID09IFwiRW50ZXJcIiA/IG9uQ2xpY2tTZWFyY2goZSkgOiBmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW1bXCJudW1iZXJcIl19PlxyXG4gICAgICAgICAgICAgIHtpdGVtW1wibmFtZVwiXX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yU2NoZW1lPVwidGVhbFwiIHB4PXs1fSBweT17Nn0gbXI9ezF9PlxyXG4gICAgICAgICAgPEljb24gYXM9e1NlYXJjaDJJY29ufSBtcj17MX0gLz5cclxuICAgICAgICAgIOaknOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja1Jlc2V0fSBjb2xvclNjaGVtZT1cInJlZFwiIHB4PXs1fSBweT17Nn0+XHJcbiAgICAgICAgICBSRVNFVFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1BcmVhO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IEhlYWRNZXRhID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+ICovfVxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+ICovfVxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e1wiL2Zhdmljb24ucG5nXCJ9IC8+ICovfVxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICB7LyogPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17a2V5d29yZH0gLz4gKi99XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj17XCIvZmF2aWNvbi5wbmdcIn0gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkTWV0YTtcclxuIiwiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEZsZXgsXHJcbiAgSGVhZGluZyxcclxuICBMaW5rLFxyXG4gIFN0YWNrLFxyXG4gIFRleHQsXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiAoaXNPcGVuID8gb25DbG9zZSgpIDogb25PcGVuKCkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBhcz1cIm5hdlwiXHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgIHBhZGRpbmc9ezR9XHJcbiAgICAgIGJnPVwidGVhbC41MDBcIlxyXG4gICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgID5cclxuICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9e1widGlnaHRlclwifT5cclxuICAgICAgICAgIERBSU1BUlUgSEFLVUlcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgPEhhbWJ1cmdlckljb24gLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8U3RhY2tcclxuICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cclxuICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfX1cclxuICAgICAgICB3aWR0aD17eyBiYXNlOiBcImZ1bGxcIiwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgZmxleEdyb3c9ezF9XHJcbiAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5kYWltYXJ1LWhha3VpLmNvLmpwL1wiPldFQuOCteOCpOODiDwvTGluaz5cclxuICAgICAgPC9TdGFjaz5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9e3sgYmFzZTogaXNPcGVuID8gXCJibG9ja1wiIDogXCJub25lXCIsIG1kOiBcImJsb2NrXCIgfX1cclxuICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICA+PC9Cb3g+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGgyVGl0bGUsIGgzVGl0bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgc3BhY2luZz17M30gZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG10PXsxNn0+XHJcbiAgICAgIDxUZXh0IGZvbnRTaXplPVwiM3hsXCIgYXM9XCJoMlwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAge2gyVGl0bGV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIGFzPVwiaDNcIiBweD17M30+XHJcbiAgICAgICAge2gzVGl0bGV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvU3RhY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5UaXRsZTtcclxuIiwiaW1wb3J0IHsgRGVsZXRlSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGbGV4LFxyXG4gIEljb24sXHJcbiAgTW9kYWwsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgTW9kYWxDb250ZW50LFxyXG4gIE1vZGFsRm9vdGVyLFxyXG4gIE1vZGFsSGVhZGVyLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBUYWJsZSxcclxuICBUYWJsZUNhcHRpb24sXHJcbiAgVGJvZHksXHJcbiAgVGQsXHJcbiAgVGgsXHJcbiAgVGhlYWQsXHJcbiAgVHIsXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1NlYXJjaExpc3QubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2VhcmNoTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzLCBzZWxlY3REYXRhLCBmaWx0ZXJJdGVtcywgb25DbGlja0RlbGV0ZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IFtzaG93SXRlbSwgc2V0U2hvd0l0ZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgb25DbGlja01vZGFsID0gKGRhdGEpID0+IHNldFNob3dJdGVtKGRhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uLXJldmVyc2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3NlbGVjdERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBweD17NX1cclxuICAgICAgICAgICAgbWI9ezV9XHJcbiAgICAgICAgICAgIG14PXsyfVxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezV9XHJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cImJhc2VcIlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5mYWRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICB3PXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCI2MDBweFwiIH19XHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwic3RyaXBlZFwiXHJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICBtYj17Nn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNhcHRpb24gcGxhY2VtZW50PVwidG9wXCIgcHg9ezB9IG1iPXsyfSBmb250U2l6ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwieHNcIiwgbWQ6IFwibWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT57ZGF0YX08L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtW1wibnVtYmVyXCJdID09IGRhdGEgJiYgaXRlbVtcIm5hbWVcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJudW1iZXJcIl0gPT0gZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJwcmljZVwiXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwi77+lXCIgKyBpdGVtW1wicHJpY2VcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9kdWN0LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFtcIm1vZGVsXCJdID09IGRhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tNb2RhbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOips+e0sFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrRGVsZXRlKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17RGVsZXRlSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDYXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxUaGVhZD5cclxuICAgICAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuOCteOCpOOCujwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7lnKjluqvmlbA8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+5aSW6YOo5Zyo5bqrPC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPlRPVEFMPC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuS7leaOm+e0jeacnzwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7ku5XmjpvmlbDph488L1RoPlxyXG4gICAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgICA8L1RoZWFkPlxyXG4gICAgICAgICAgICAgIDxUYm9keT5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtW1wibnVtYmVyXCJdID09IGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCJzaXplXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInN0b2NrMVwiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCJzdG9jazJcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1widG90YWxcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic2NoZWR1bGVcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wicXVhbnRpdHlcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9UYm9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gc2l6ZT1cInhsXCI+XHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJvZHVjdFtcIm1vZGVsXCJdID09IHNob3dJdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsQ29udGVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RbXCJtb2RlbFwiXX1cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RbXCJjYXRlZ29yeVwiXX1cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3RbXCJzaXplX3NwZWNcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRG93bmxvYWRJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXgsIEljb24sIFdyYXBJdGVtIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gXCJyZWFjdC1jc3ZcIjtcclxuaW1wb3J0IEZvcm1BcmVhIGZyb20gXCIuL0Zvcm1BcmVhXCI7XHJcbmltcG9ydCBTZWFyY2hMaXN0IGZyb20gXCIuL1NlYXJjaExpc3RcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaWNlOiBzdHJpbmc7XHJcbiAgc2l6ZTogc3RyaW5nO1xyXG4gIHN0b2NrMTogbnVtYmVyO1xyXG4gIHN0b2NrMjogbnVtYmVyO1xyXG4gIHRvdGFsOiBudW1iZXI7XHJcbiAgc2NoZWR1bGU6IHN0cmluZztcclxuICBxdWFudGl0eTogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b2NrOiBSZWFjdC5GQzxhbnk+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpdGVtcywgcHJvZHVjdHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3REYXRhLCBzZXRTZWxlY3REYXRhXSA9IHVzZVN0YXRlKFtdKTsgLy/mpJzntKLmmYLjgavjgqTjg7Pjg5fjg4Pjg4jlhaXlipvjgZfjgZ/phY3liJfjg6rjgrnjg4hcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy/jgqTjg7Pjg5fjg4Pjg4jlhaXlipvlgKRcclxuICBjb25zdCBbY3N2RGF0YSwgc2V0Q3N2RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTsgLy9DU1bjg4fjg7zjgr9cclxuXHJcbiAgLy9udW1iZXLjga7ph43opIfliYrpmaRcclxuICBjb25zdCBmaWx0ZXJJdGVtcyA9IGl0ZW1zLmZpbHRlcihcclxuICAgIChpdGVtLCBpbmRleCwgc2VsZikgPT5cclxuICAgICAgc2VsZi5maW5kSW5kZXgoKGUpID0+IGVbXCJudW1iZXJcIl0gPT09IGl0ZW1bXCJudW1iZXJcIl0pID09PSBpbmRleFxyXG4gICk7XHJcblxyXG4gIC8vQ1NW44OV44Kh44Kk44Or44Gr5aSJ5o+bXHJcbiAgY29uc3Qgb25DbGlja0NzdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNzdkRhdGEgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHNlbGVjdERhdGEuaW5jbHVkZXMoaXRlbVtcIm51bWJlclwiXSkpO1xyXG5cclxuICAgIC8v54m55a6a44Gua2V544KS5YmK6Zmk44GX44Gf44GE5pmCXHJcbiAgICAvLyBkZWxldGUgaXRlbXNbMF1bXCJudW1iZXJcIl07XHJcbiAgICBjc3ZEYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICBkZWxldGUgZGF0YVtcImlkXCJdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgaGVhZGVyID0gT2JqZWN0LmtleXMoaXRlbXNbMF0pLmpvaW4oXCIsXCIpICsgXCJcXG5cIjtcclxuICAgIGNvbnN0IGhlYWRlciA9XHJcbiAgICAgIFwi5ZWG5ZOB44Kz44O844OJLOWTgeeVqizllYblk4HlkI0s5LiK5LujLOOCteOCpOOCuizlnKjluqvmlbAs5aSW6YOo5Zyo5bqrLFRPVEFMLOS7leaOmyzmlbDph49cXG5cIjtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gY3N2RGF0YVxyXG4gICAgICAubWFwKChkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGQpXHJcbiAgICAgICAgICAubWFwKChrZXkpID0+IGRba2V5XSlcclxuICAgICAgICAgIC5qb2luKFwiLFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oXCJcXG5cIik7XHJcbiAgICBjb25zdCBjc3ZGaWxlID0gaGVhZGVyICsgYm9keTtcclxuICAgIHNldENzdkRhdGEoY3N2RmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgLy9JTlBVVOOBruWFpeWKm+WApOOCkuWPluW+l1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIC8v5qSc57Si57We44KK6L6844G/XHJcbiAgY29uc3Qgb25DbGlja1NlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZmlsdGVySXRlbSA9IGZpbHRlckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbVtcIm51bWJlclwiXSA9PSBpbnB1dFZhbHVlKTsgLy9JbnB1dOWFpeWKm+WApOOBqOWQjOOBmOOCquODluOCuOOCp+OCr+ODiOOCkuWPluOCiuWHuuOBmeOAglxyXG4gICAgbGV0IG5ld0RhdGEgPSBmaWx0ZXJJdGVtLm1hcCgoaXRlbSkgPT4gaXRlbVtcIm51bWJlclwiXSk7IC8v44Kq44OW44K444Kn44Kv44OI44GL44KJ5ZOB55Wq44Gg44GR44KS5Y+W44KK5Ye644GZXHJcbiAgICBpZiAobmV3RGF0YS5sZW5ndGggPT09IDApIHJldHVybjsgLy/jg4fjg7zjgr/nqbrnmb3jgafjgYLjgozjgbDjg6rjgr/jg7zjg7Pjgafov5TjgZnjgIJcclxuXHJcbiAgICAhc2VsZWN0RGF0YS5pbmNsdWRlcyhuZXdEYXRhWzBdKSAmJlxyXG4gICAgICBzZXRTZWxlY3REYXRhKFsuLi5zZWxlY3REYXRhLCBuZXdEYXRhWzBdXSk7XHJcblxyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuXHJcbiAgICAvLyBsZXQgZmlsdGVySXRlbSA9IGZpbHRlckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gaXRlbVtcIm51bWJlclwiXS5pbmNsdWRlcyhpbnB1dFZhbHVlKTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gbGV0IG5ld0RhdGEgPSBmaWx0ZXJJdGVtLm1hcCgodikgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gdltcIm51bWJlclwiXTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGlmIChuZXdEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgLy8gbmV3RGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgIC8vICAgaWYgKCFzZWxlY3REYXRhLmluY2x1ZGVzKGRhdGEpKSB7XHJcbiAgICAvLyAgICAgc2V0U2VsZWN0RGF0YSgocHJldikgPT4gWy4uLnByZXYsIGRhdGFdKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8v6YG45oqe44GX44Gm44GE44KL5YWo44Gm44GubnVtYmVy44KS5YmK6ZmkXHJcbiAgY29uc3Qgb25DbGlja1Jlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICAgIHNldFNlbGVjdERhdGEoW10pO1xyXG4gIH07XHJcblxyXG4gIC8v6YG45oqe44GX44GfbnVtYmVy44Gu5YmK6ZmkXHJcbiAgY29uc3Qgb25DbGlja0RlbGV0ZSA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IGRlbGV0ZU51bWJlciA9IGluZGV4O1xyXG4gICAgc2V0U2VsZWN0RGF0YShcclxuICAgICAgWy4uLnNlbGVjdERhdGFdLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICE9PSBOdW1iZXIoZGVsZXRlTnVtYmVyKSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtQXJlYVxyXG4gICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgZmlsdGVySXRlbXM9e2ZpbHRlckl0ZW1zfVxyXG4gICAgICAgIHNlbGVjdERhdGE9e3NlbGVjdERhdGF9XHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlVGV4dD17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICBvbkNsaWNrU2VhcmNoPXtvbkNsaWNrU2VhcmNofVxyXG4gICAgICAgIG9uQ2xpY2tSZXNldD17b25DbGlja1Jlc2V0fVxyXG4gICAgICAvPlxyXG4gICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG1iPXs2fT5cclxuICAgICAgICB7c2VsZWN0RGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxDU1ZMaW5rXHJcbiAgICAgICAgICAgIGRhdGE9e2NzdkRhdGF9XHJcbiAgICAgICAgICAgIGZpbGVuYW1lPXtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIl96YWlrby5jc3ZcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQ3N2fT5cclxuICAgICAgICAgICAgICBDU1bjg4Djgqbjg7Pjg63jg7zjg4lcclxuICAgICAgICAgICAgICA8SWNvbiBhcz17RG93bmxvYWRJY29ufSAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ1NWTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxTZWFyY2hMaXN0XHJcbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cclxuICAgICAgICBzZWxlY3REYXRhPXtzZWxlY3REYXRhfVxyXG4gICAgICAgIGZpbHRlckl0ZW1zPXtmaWx0ZXJJdGVtc31cclxuICAgICAgICBvbkNsaWNrRGVsZXRlPXtvbkNsaWNrRGVsZXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9ja0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IFN0b2NrQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShcInphaWtvXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0b2NrQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17aXRlbXN9PntjaGlsZHJlbn08L1N0b2NrQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0NvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgU3RvY2sgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9ja1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU3RvY2tDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHRzL1N0b2NrQ29udGV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZE1ldGFcIjtcbmltcG9ydCBNYWluVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblRpdGxlXCI7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpdGVtcywgcHJvZHVjdHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RvY2tDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxIZWFkXG4gICAgICAgICAgdGl0bGU9e1wi5aSn5Li455m96KGjIOWcqOW6q+ihqFwifVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgIFwi44Oe44Kk44Om44OL44OV44Kp44O844Og44Kv44Op44OW44Go44K744Os44OK44O844OH44Gu5ZWG5ZOB5Zyo5bqr44KS5qSc57Si44GZ44KL44GT44Go44GM44Gn44GN44KLV0VC44Ki44OX44Oq44Gn44GZ44CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1haW5UaXRsZVxuICAgICAgICAgIGgyVGl0bGU9e1wi5Zyo5bqr5qSc57SiXCJ9XG4gICAgICAgICAgaDNUaXRsZT17XCLlk4HnlarjgpLlhaXlipvjgZfjgablnKjluqvmpJzntKLjgYzjgafjgY3jgb7jgZnjgIJcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFN0b2NrIGl0ZW1zPXtpdGVtc30gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgPC9TdG9ja0NvbnRleHRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IFtpdGVtc1JlcywgcHJvZHVjdHNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGF4aW9zLmdldChcbiAgICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlRQSUQwT3llbzhGd05ONmxEUEVUZ3JoZDhPc21yUko2Ulp5NUVPODBHNHVHZ2tqN1pSaENaOU9Yc1VOREZGMGM1WVdmd1NyQmFFaDlfUC9wdWI/Z2lkPTEzOTkyMzk5NTgmc2luZ2xlPXRydWUmb3V0cHV0PWNzdlwiXG4gICAgKSxcbiAgICBheGlvcy5nZXQoXCJodHRwczovL2NhdGFsb2ctaW5mb3JtYXRpb24ubWljcm9jbXMuaW8vYXBpL3YxL3Byb2R1Y3RzXCIsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLUFQSS1LRVlcIjogXCI2YWRhNmVhMi05MWE3LTQ5MTQtYWZmNy0wODAzZWY2ZGI0YmJcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIF0pO1xuICBjb25zdCBzcGxpdEl0ZW1zID0gYXdhaXQgaXRlbXNSZXMuZGF0YS5zcGxpdChcIlxcblwiKTtcbiAgY29uc3QgaXRlbUtleXMgPSBhd2FpdCBzcGxpdEl0ZW1zWzBdLnRyaW0oKS5zcGxpdChcIixcIik7XG4gIGxldCBpdGVtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdChcIixcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgY3N2T2JqZWN0W2l0ZW1LZXlzW2pdXSA9IGl0ZW1WYWx1ZXNbal07XG4gICAgfVxuICAgIGl0ZW1zLnB1c2goY3N2T2JqZWN0KTtcbiAgfVxuICBpdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGluZGV4LFxuICAgICAgY29kZTogaXRlbVtcIuWVhuWTgeOCs+ODvOODiVwiXSxcbiAgICAgIG51bWJlcjogaXRlbVtcIuWTgeeVqlwiXSxcbiAgICAgIG5hbWU6IGl0ZW1bXCLllYblk4HlkI1cIl0sXG4gICAgICBwcmljZTogaXRlbVtcIuS4iuS7o1wiXSxcbiAgICAgIHNpemU6IGl0ZW1bXCLjgrXjgqTjgrpcIl0sXG4gICAgICBzdG9jazE6IGl0ZW1bXCLlnKjluqvmlbBcIl0sXG4gICAgICBzdG9jazI6IGl0ZW1bXCLlpJbpg6jlnKjluqtcIl0sXG4gICAgICB0b3RhbDogaXRlbVtcIlRPVEFMXCJdLFxuICAgICAgc2NoZWR1bGU6IGl0ZW1bXCLku5XmjptcIl0sXG4gICAgICBxdWFudGl0eTogaXRlbVtcIuaVsOmHj1wiXSxcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0c1Jlcy5kYXRhLmNvbnRlbnRzO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgcHJvZHVjdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4vLyAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2VFBJRDBPeWVvOEZ3Tk42bERQRVRncmhkOE9zbXJSSjZSWnk1RU84MEc0dUdna2o3WlJoQ1o5T1hzVU5ERkYwYzVZV2Z3U3JCYUVoOV9QL3B1Yj9naWQ9MTM5OTIzOTk1OCZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2XCJcbi8vICAgKTtcbi8vICAgY29uc3Qgc3BsaXRJdGVtcyA9IGF3YWl0IHJlcy5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuLy8gICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KFwiLFwiKTtcbi8vICAgbGV0IGpzb25EYXRhcyA9IFtdO1xuLy8gICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuLy8gICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdChcIixcIik7XG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtS2V5cy5sZW5ndGg7IGorKykge1xuLy8gICAgICAgY3N2T2JqZWN0W2l0ZW1LZXlzW2pdXSA9IGl0ZW1WYWx1ZXNbal07XG4vLyAgICAgfVxuLy8gICAgIGpzb25EYXRhcy5wdXNoKGNzdk9iamVjdCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBpdGVtczoganNvbkRhdGFzLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgXCJodHRwczovL2RhaW1hcnUtaGFrdWkubWljcm9jbXMuaW8vYXBpL3YxL2NhdGFsb2c/bGltaXQ9MjAwXCIsXG4vLyAgICAge1xuLy8gICAgICAgaGVhZGVyczogeyBcIlgtQVBJLUtFWVwiOiBwcm9jZXNzLmVudi5BUElfS0VZIH0sXG4vLyAgICAgfVxuLy8gICApO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgY2F0YWxvZ3M6IGRhdGEuY29udGVudHMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZhZGVcIjogXCJTZWFyY2hMaXN0X2ZhZGVfXzJGSGVzXCIsXG5cdFwiZmFkZTFcIjogXCJTZWFyY2hMaXN0X2ZhZGUxX18yWmJMalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNzdlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9