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

var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\components\\FormArea.tsx";




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

var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\components\\HeadMeta.tsx";


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
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/auth */ "./firebase/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\components\\Header.tsx";




const Header = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)();

  const handleToggle = () => isOpen ? onClose() : onOpen();

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const logout = event => {
    event.preventDefault();
    _firebase_auth__WEBPACK_IMPORTED_MODULE_1__.auth.signOut();
    router.push('login');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    as: "nav",
    align: "center",
    justify: "space-between",
    wrap: "wrap",
    padding: 4,
    bg: "teal.500",
    color: "white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
      align: "center",
      mr: 5,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
        as: "h1",
        size: "lg",
        letterSpacing: "tighter",
        children: "DAIMARU HAKUI"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
      display: {
        base: "block",
        md: "none"
      },
      onClick: handleToggle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.HamburgerIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
        href: "https://www.daimaru-hakui.co.jp/",
        children: "WEB\u30B5\u30A4\u30C8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
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
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
      color: "blue",
      onClick: logout,
      children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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

var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\components\\MainTitle.tsx";



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


var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\components\\SearchList.tsx";





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


var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\components\\Stock.tsx";






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

var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\contexts\\StockContext.js";


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

/***/ "./firebase/auth.js":
/*!**************************!*\
  !*** ./firebase/auth.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": function() { return /* binding */ auth; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);

 // TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyATfUAWiAAxU6DG8lSQK-EX2gupAK3shSY",
  authDomain: "daimaru-zaiko.firebaseapp.com",
  projectId: "daimaru-zaiko",
  storageBucket: "daimaru-zaiko.appspot.com",
  messagingSenderId: "357276759173",
  appId: "1:357276759173:web:a1c087155c53fcc1c325ec"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);

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


var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\pages\\index.tsx";







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

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0Zvcm1BcmVhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRNZXRhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9NYWluVGl0bGUudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9TdG9jay50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29udGV4dHMvU3RvY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0b2NrLWFwcC8uL2ZpcmViYXNlL2F1dGguanMiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWNzdlwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkZvcm1BcmVhIiwicHJvcHMiLCJpbnB1dFZhbHVlIiwiZmlsdGVySXRlbXMiLCJzZWxlY3REYXRhIiwiaGFuZGxlQ2hhbmdlVGV4dCIsIm9uQ2xpY2tTZWFyY2giLCJvbkNsaWNrUmVzZXQiLCJsZW5ndGgiLCJtYXAiLCJkYXRhIiwiYmFzZSIsIm1kIiwiZSIsImtleSIsIml0ZW0iLCJpbmRleCIsIlNlYXJjaDJJY29uIiwiSGVhZE1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiSGVhZGVyIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVzZURpc2Nsb3N1cmUiLCJoYW5kbGVUb2dnbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dvdXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsInB1c2giLCJNYWluVGl0bGUiLCJoMlRpdGxlIiwiaDNUaXRsZSIsIlNlYXJjaExpc3QiLCJpdGVtcyIsInByb2R1Y3RzIiwib25DbGlja0RlbGV0ZSIsInNob3dJdGVtIiwic2V0U2hvd0l0ZW0iLCJ1c2VTdGF0ZSIsIm9uQ2xpY2tNb2RhbCIsIlN0eWxlcyIsInByb2R1Y3QiLCJEZWxldGVJY29uIiwiX19odG1sIiwiU3RvY2siLCJzZXRTZWxlY3REYXRhIiwic2V0SW5wdXRWYWx1ZSIsImNzdkRhdGEiLCJzZXRDc3ZEYXRhIiwiZmlsdGVyIiwic2VsZiIsImZpbmRJbmRleCIsIm9uQ2xpY2tDc3YiLCJpbmNsdWRlcyIsImhlYWRlciIsImJvZHkiLCJkIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJjc3ZGaWxlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJJdGVtIiwibmV3RGF0YSIsImRlbGV0ZU51bWJlciIsInYiLCJOdW1iZXIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJEb3dubG9hZEljb24iLCJTdG9ja0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3RvY2tDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldEl0ZW1zIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkhvbWUiLCJnZXRTdGF0aWNQcm9wcyIsIml0ZW1zUmVzIiwicHJvZHVjdHNSZXMiLCJQcm9taXNlIiwiYWxsIiwiYXhpb3MiLCJoZWFkZXJzIiwic3BsaXRJdGVtcyIsInNwbGl0IiwiaXRlbUtleXMiLCJ0cmltIiwiaSIsImNzdk9iamVjdCIsIml0ZW1WYWx1ZXMiLCJqIiwiaWQiLCJjb2RlIiwibnVtYmVyIiwibmFtZSIsInByaWNlIiwic2l6ZSIsInN0b2NrMSIsInN0b2NrMiIsInRvdGFsIiwic2NoZWR1bGUiLCJxdWFudGl0eSIsImNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBV0EsTUFBTUEsUUFBeUIsR0FBSUMsS0FBRCxJQUFXO0FBQzNDLFFBQU07QUFDSkMsY0FESTtBQUVKQyxlQUZJO0FBR0pDLGNBSEk7QUFJSkMsb0JBSkk7QUFLSkMsaUJBTEk7QUFNSkM7QUFOSSxNQU9GTixLQVBKO0FBU0Esc0JBQ0U7QUFBTSxZQUFRLEVBQUVLLGFBQWhCO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxPQUFDLEVBQUMsTUFESjtBQUVFLG9CQUFjLEVBQUMsUUFGakI7QUFHRSxnQkFBVSxFQUFDLFFBSGI7QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxFQUxOO0FBQUEsOEJBT0UsOERBQUMsbURBQUQ7QUFDRSxnQkFBUSxFQUFFRCxnQkFEWjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsYUFBSyxFQUFFSCxVQUhUO0FBSUUsZUFBTyxFQUFDLFNBSlY7QUFLRSxtQkFBVyxFQUNU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QUNBLEk7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2gySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgSW5wdXQsIElucHV0R3JvdXAgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBmaWx0ZXJJdGVtczogW107XHJcbiAgc2VsZWN0RGF0YTogYW55O1xyXG4gIGhhbmRsZUNoYW5nZVRleHQ6IGFueTtcclxuICBvbkNsaWNrU2VhcmNoOiBhbnk7XHJcbiAgb25DbGlja1Jlc2V0OiBWb2lkRnVuY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBGb3JtQXJlYTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW5wdXRWYWx1ZSxcclxuICAgIGZpbHRlckl0ZW1zLFxyXG4gICAgc2VsZWN0RGF0YSxcclxuICAgIGhhbmRsZUNoYW5nZVRleHQsXHJcbiAgICBvbkNsaWNrU2VhcmNoLFxyXG4gICAgb25DbGlja1Jlc2V0LFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtvbkNsaWNrU2VhcmNofT5cclxuICAgICAgPElucHV0R3JvdXBcclxuICAgICAgICB3PVwiYXV0b1wiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHB5PXs2fVxyXG4gICAgICAgIHB4PXsxMH1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgc2VsZWN0RGF0YS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyBzZWxlY3REYXRhLm1hcCgoZGF0YSkgPT4gYCAke2RhdGF9IGApXHJcbiAgICAgICAgICAgICAgOiBcIuS+iylTUDEyNVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaXN0PVwic2VhcmNoXCJcclxuICAgICAgICAgIHc9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjQ1MHB4XCIgfX1cclxuICAgICAgICAgIG1yPXsxfVxyXG4gICAgICAgICAgcHk9ezZ9XHJcbiAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gKGUua2V5ID09IFwiRW50ZXJcIiA/IG9uQ2xpY2tTZWFyY2goZSkgOiBmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW1bXCJudW1iZXJcIl19PlxyXG4gICAgICAgICAgICAgIHtpdGVtW1wibmFtZVwiXX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yU2NoZW1lPVwidGVhbFwiIHB4PXs1fSBweT17Nn0gbXI9ezF9PlxyXG4gICAgICAgICAgPEljb24gYXM9e1NlYXJjaDJJY29ufSBtcj17MX0gLz5cclxuICAgICAgICAgIOaknOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja1Jlc2V0fSBjb2xvclNjaGVtZT1cInJlZFwiIHB4PXs1fSBweT17Nn0+XHJcbiAgICAgICAgICBSRVNFVFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1BcmVhO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IEhlYWRNZXRhID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+ICovfVxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+ICovfVxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e1wiL2Zhdmljb24ucG5nXCJ9IC8+ICovfVxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICB7LyogPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17a2V5d29yZH0gLz4gKi99XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj17XCIvZmF2aWNvbi5wbmdcIn0gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkTWV0YTtcclxuIiwiaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEZsZXgsXHJcbiAgSGVhZGluZyxcclxuICBMaW5rLFxyXG4gIFN0YWNrLFxyXG4gIFRleHQsXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiAoaXNPcGVuID8gb25DbG9zZSgpIDogb25PcGVuKCkpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGxvZ291dCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF1dGguc2lnbk91dCgpO1xyXG4gICAgcm91dGVyLnB1c2goJ2xvZ2luJyk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBhcz1cIm5hdlwiXHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgIHBhZGRpbmc9ezR9XHJcbiAgICAgIGJnPVwidGVhbC41MDBcIlxyXG4gICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgID5cclxuICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9e1widGlnaHRlclwifT5cclxuICAgICAgICAgIERBSU1BUlUgSEFLVUlcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgPEhhbWJ1cmdlckljb24gLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8U3RhY2tcclxuICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cclxuICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfX1cclxuICAgICAgICB3aWR0aD17eyBiYXNlOiBcImZ1bGxcIiwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgZmxleEdyb3c9ezF9XHJcbiAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5kYWltYXJ1LWhha3VpLmNvLmpwL1wiPldFQuOCteOCpOODiDwvTGluaz5cclxuICAgICAgPC9TdGFjaz5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9e3sgYmFzZTogaXNPcGVuID8gXCJibG9ja1wiIDogXCJub25lXCIsIG1kOiBcImJsb2NrXCIgfX1cclxuICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICA+PC9Cb3g+XHJcbiAgICAgIDxCdXR0b24gY29sb3I9XCJibHVlXCIgb25DbGljaz17bG9nb3V0fT7jg63jgrDjgqLjgqbjg4g8L0J1dHRvbj5cclxuICAgIDwvRmxleD5cclxuICAgIFxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoMlRpdGxlLCBoM1RpdGxlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFN0YWNrIHNwYWNpbmc9ezN9IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtdD17MTZ9PlxyXG4gICAgICA8VGV4dCBmb250U2l6ZT1cIjN4bFwiIGFzPVwiaDJcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgIHtoMlRpdGxlfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBhcz1cImgzXCIgcHg9ezN9PlxyXG4gICAgICAgIHtoM1RpdGxlfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluVGl0bGU7XHJcbiIsImltcG9ydCB7IERlbGV0ZUljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRmxleCxcclxuICBJY29uLFxyXG4gIE1vZGFsLFxyXG4gIE1vZGFsQm9keSxcclxuICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gIE1vZGFsQ29udGVudCxcclxuICBNb2RhbEZvb3RlcixcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbE92ZXJsYXksXHJcbiAgVGFibGUsXHJcbiAgVGFibGVDYXB0aW9uLFxyXG4gIFRib2R5LFxyXG4gIFRkLFxyXG4gIFRoLFxyXG4gIFRoZWFkLFxyXG4gIFRyLFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TZWFyY2hMaXN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFNlYXJjaExpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGl0ZW1zLCBwcm9kdWN0cywgc2VsZWN0RGF0YSwgZmlsdGVySXRlbXMsIG9uQ2xpY2tEZWxldGUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBbc2hvd0l0ZW0sIHNldFNob3dJdGVtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG9uQ2xpY2tNb2RhbCA9IChkYXRhKSA9PiBzZXRTaG93SXRlbShkYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIGRpcmVjdGlvbj1cImNvbHVtbi1yZXZlcnNlXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtzZWxlY3REYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgcHg9ezV9XHJcbiAgICAgICAgICAgIG1iPXs1fVxyXG4gICAgICAgICAgICBteD17Mn1cclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs1fVxyXG4gICAgICAgICAgICBib3hTaGFkb3c9XCJiYXNlXCJcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZXMuZmFkZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgdz17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiNjAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN0cmlwZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JheVwiXHJcbiAgICAgICAgICAgICAgbWI9ezZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGFibGVDYXB0aW9uIHBsYWNlbWVudD1cInRvcFwiIHB4PXswfSBtYj17Mn0gZm9udFNpemU9XCJtZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiBcInhzXCIsIG1kOiBcIm1kXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtcj17Mn0+e2RhdGF9PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtcj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVySXRlbXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbVtcIm51bWJlclwiXSA9PSBkYXRhICYmIGl0ZW1bXCJuYW1lXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVySXRlbXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1wibnVtYmVyXCJdID09IGRhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1wicHJpY2VcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIu+/pVwiICsgaXRlbVtcInByaWNlXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAocHJvZHVjdCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RbXCJtb2RlbFwiXSA9PSBkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrTW9kYWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcj17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDoqbPntLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0RlbGV0ZShlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb24gYXM9e0RlbGV0ZUljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2FwdGlvbj5cclxuICAgICAgICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7jgrXjgqTjgro8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+5Zyo5bqr5pWwPC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuWklumDqOWcqOW6qzwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5UT1RBTDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7ku5XmjpvntI3mnJ88L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+5LuV5o6b5pWw6YePPC9UaD5cclxuICAgICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgICAgPC9UaGVhZD5cclxuICAgICAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbVtcIm51bWJlclwiXSA9PSBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic2l6ZVwiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCJzdG9jazFcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic3RvY2syXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInRvdGFsXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInNjaGVkdWxlXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInF1YW50aXR5XCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvVGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9IHNpemU9XCJ4bFwiPlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2R1Y3RbXCJtb2RlbFwiXSA9PSBzaG93SXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb2RhbENvbnRlbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0W1wibW9kZWxcIl19XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0W1wiY2F0ZWdvcnlcIl19XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwcm9kdWN0W1wic2l6ZV9zcGVjXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERvd25sb2FkSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBJY29uLCBXcmFwSXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tIFwicmVhY3QtY3N2XCI7XHJcbmltcG9ydCBGb3JtQXJlYSBmcm9tIFwiLi9Gb3JtQXJlYVwiO1xyXG5pbXBvcnQgU2VhcmNoTGlzdCBmcm9tIFwiLi9TZWFyY2hMaXN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIHNpemU6IHN0cmluZztcclxuICBzdG9jazE6IG51bWJlcjtcclxuICBzdG9jazI6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG4gIHNjaGVkdWxlOiBzdHJpbmc7XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9jazogUmVhY3QuRkM8YW55PiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0RGF0YSwgc2V0U2VsZWN0RGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8v5qSc57Si5pmC44Gr44Kk44Oz44OX44OD44OI5YWl5Yqb44GX44Gf6YWN5YiX44Oq44K544OIXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7IC8v44Kk44Oz44OX44OD44OI5YWl5Yqb5YCkXHJcbiAgY29uc3QgW2NzdkRhdGEsIHNldENzdkRhdGFdID0gdXNlU3RhdGUoXCJcIik7IC8vQ1NW44OH44O844K/XHJcblxyXG4gIC8vbnVtYmVy44Gu6YeN6KSH5YmK6ZmkXHJcbiAgY29uc3QgZmlsdGVySXRlbXMgPSBpdGVtcy5maWx0ZXIoXHJcbiAgICAoaXRlbSwgaW5kZXgsIHNlbGYpID0+XHJcbiAgICAgIHNlbGYuZmluZEluZGV4KChlKSA9PiBlW1wibnVtYmVyXCJdID09PSBpdGVtW1wibnVtYmVyXCJdKSA9PT0gaW5kZXhcclxuICApO1xyXG5cclxuICAvL0NTVuODleOCoeOCpOODq+OBq+WkieaPm1xyXG4gIGNvbnN0IG9uQ2xpY2tDc3YgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjc3ZEYXRhID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBzZWxlY3REYXRhLmluY2x1ZGVzKGl0ZW1bXCJudW1iZXJcIl0pKTtcclxuXHJcbiAgICAvL+eJueWumuOBrmtleeOCkuWJiumZpOOBl+OBn+OBhOaZglxyXG4gICAgLy8gZGVsZXRlIGl0ZW1zWzBdW1wibnVtYmVyXCJdO1xyXG4gICAgY3N2RGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgZGVsZXRlIGRhdGFbXCJpZFwiXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGhlYWRlciA9IE9iamVjdC5rZXlzKGl0ZW1zWzBdKS5qb2luKFwiLFwiKSArIFwiXFxuXCI7XHJcbiAgICBjb25zdCBoZWFkZXIgPVxyXG4gICAgICBcIuWVhuWTgeOCs+ODvOODiSzlk4Hnlaos5ZWG5ZOB5ZCNLOS4iuS7oyzjgrXjgqTjgros5Zyo5bqr5pWwLOWklumDqOWcqOW6qyxUT1RBTCzku5Xmjpss5pWw6YePXFxuXCI7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGNzdkRhdGFcclxuICAgICAgLm1hcCgoZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkKVxyXG4gICAgICAgICAgLm1hcCgoa2V5KSA9PiBkW2tleV0pXHJcbiAgICAgICAgICAuam9pbihcIixcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKFwiXFxuXCIpO1xyXG4gICAgY29uc3QgY3N2RmlsZSA9IGhlYWRlciArIGJvZHk7XHJcbiAgICBzZXRDc3ZEYXRhKGNzdkZpbGUpO1xyXG4gIH07XHJcblxyXG4gIC8vSU5QVVTjga7lhaXlipvlgKTjgpLlj5blvpdcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICAvL+aknOe0oue1nuOCiui+vOOBv1xyXG4gIGNvbnN0IG9uQ2xpY2tTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZpbHRlckl0ZW0gPSBmaWx0ZXJJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bXCJudW1iZXJcIl0gPT0gaW5wdXRWYWx1ZSk7IC8vSW5wdXTlhaXlipvlgKTjgajlkIzjgZjjgqrjg5bjgrjjgqfjgq/jg4jjgpLlj5bjgorlh7rjgZnjgIJcclxuICAgIGxldCBuZXdEYXRhID0gZmlsdGVySXRlbS5tYXAoKGl0ZW0pID0+IGl0ZW1bXCJudW1iZXJcIl0pOyAvL+OCquODluOCuOOCp+OCr+ODiOOBi+OCieWTgeeVquOBoOOBkeOCkuWPluOCiuWHuuOBmVxyXG4gICAgaWYgKG5ld0RhdGEubGVuZ3RoID09PSAwKSByZXR1cm47IC8v44OH44O844K/56m655m944Gn44GC44KM44Gw44Oq44K/44O844Oz44Gn6L+U44GZ44CCXHJcblxyXG4gICAgIXNlbGVjdERhdGEuaW5jbHVkZXMobmV3RGF0YVswXSkgJiZcclxuICAgICAgc2V0U2VsZWN0RGF0YShbLi4uc2VsZWN0RGF0YSwgbmV3RGF0YVswXV0pO1xyXG5cclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcblxyXG4gICAgLy8gbGV0IGZpbHRlckl0ZW0gPSBmaWx0ZXJJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIC8vICAgcmV0dXJuIGl0ZW1bXCJudW1iZXJcIl0uaW5jbHVkZXMoaW5wdXRWYWx1ZSk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBuZXdEYXRhID0gZmlsdGVySXRlbS5tYXAoKHYpID0+IHtcclxuICAgIC8vICAgcmV0dXJuIHZbXCJudW1iZXJcIl07XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBpZiAobmV3RGF0YS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgIC8vIG5ld0RhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgIGlmICghc2VsZWN0RGF0YS5pbmNsdWRlcyhkYXRhKSkge1xyXG4gICAgLy8gICAgIHNldFNlbGVjdERhdGEoKHByZXYpID0+IFsuLi5wcmV2LCBkYXRhXSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8gc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICAvL+mBuOaKnuOBl+OBpuOBhOOCi+WFqOOBpuOBrm51bWJlcuOCkuWJiumZpFxyXG4gIGNvbnN0IG9uQ2xpY2tSZXNldCA9ICgpID0+IHtcclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgICBzZXRTZWxlY3REYXRhKFtdKTtcclxuICB9O1xyXG5cclxuICAvL+mBuOaKnuOBl+OBn251bWJlcuOBruWJiumZpFxyXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgIGxldCBkZWxldGVOdW1iZXIgPSBpbmRleDtcclxuICAgIHNldFNlbGVjdERhdGEoXHJcbiAgICAgIFsuLi5zZWxlY3REYXRhXS5maWx0ZXIoKHYsIGluZGV4KSA9PiBpbmRleCAhPT0gTnVtYmVyKGRlbGV0ZU51bWJlcikpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybUFyZWFcclxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgIGZpbHRlckl0ZW1zPXtmaWx0ZXJJdGVtc31cclxuICAgICAgICBzZWxlY3REYXRhPXtzZWxlY3REYXRhfVxyXG4gICAgICAgIGhhbmRsZUNoYW5nZVRleHQ9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgb25DbGlja1NlYXJjaD17b25DbGlja1NlYXJjaH1cclxuICAgICAgICBvbkNsaWNrUmVzZXQ9e29uQ2xpY2tSZXNldH1cclxuICAgICAgLz5cclxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtYj17Nn0+XHJcbiAgICAgICAge3NlbGVjdERhdGEubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Q1NWTGlua1xyXG4gICAgICAgICAgICBkYXRhPXtjc3ZEYXRhfVxyXG4gICAgICAgICAgICBmaWxlbmFtZT17bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCJfemFpa28uY3N2XCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0Nzdn0+XHJcbiAgICAgICAgICAgICAgQ1NW44OA44Km44Oz44Ot44O844OJXHJcbiAgICAgICAgICAgICAgPEljb24gYXM9e0Rvd25sb2FkSWNvbn0gLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NTVkxpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8U2VhcmNoTGlzdFxyXG4gICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XHJcbiAgICAgICAgc2VsZWN0RGF0YT17c2VsZWN0RGF0YX1cclxuICAgICAgICBmaWx0ZXJJdGVtcz17ZmlsdGVySXRlbXN9XHJcbiAgICAgICAgb25DbGlja0RlbGV0ZT17b25DbGlja0RlbGV0ZX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3RvY2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCBTdG9ja0NvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJ6YWlrb1wiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9ja0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2l0ZW1zfT57Y2hpbGRyZW59PC9TdG9ja0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbi8vIFRPRE86IFJlcGxhY2UgdGhlIGZvbGxvd2luZyB3aXRoIHlvdXIgYXBwJ3MgRmlyZWJhc2UgcHJvamVjdCBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBVGZVQVdpQUF4VTZERzhsU1FLLUVYMmd1cEFLM3NoU1lcIixcclxuICBhdXRoRG9tYWluOiBcImRhaW1hcnUtemFpa28uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImRhaW1hcnUtemFpa29cIixcclxuICBzdG9yYWdlQnVja2V0OiBcImRhaW1hcnUtemFpa28uYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzNTcyNzY3NTkxNzNcIixcclxuICBhcHBJZDogXCIxOjM1NzI3Njc1OTE3Mzp3ZWI6YTFjMDg3MTU1YzUzZmNjMWMzMjVlY1wiXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBTdG9jayB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0b2NrXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBTdG9ja0NvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvU3RvY2tDb250ZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkTWV0YVwiO1xuaW1wb3J0IE1haW5UaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluVGl0bGVcIjtcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGl0ZW1zLCBwcm9kdWN0cyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdG9ja0NvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPEhlYWRcbiAgICAgICAgICB0aXRsZT17XCLlpKfkuLjnmb3ooaMg5Zyo5bqr6KGoXCJ9XG4gICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgXCLjg57jgqTjg6bjg4vjg5Xjgqnjg7zjg6Djgq/jg6njg5bjgajjgrvjg6zjg4rjg7zjg4fjga7llYblk4HlnKjluqvjgpLmpJzntKLjgZnjgovjgZPjgajjgYzjgafjgY3jgotXRULjgqLjg5fjg6rjgafjgZnjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TWFpblRpdGxlXG4gICAgICAgICAgaDJUaXRsZT17XCLlnKjluqvmpJzntKJcIn1cbiAgICAgICAgICBoM1RpdGxlPXtcIuWTgeeVquOCkuWFpeWKm+OBl+OBpuWcqOW6q+aknOe0ouOBjOOBp+OBjeOBvuOBmeOAglwifVxuICAgICAgICAvPlxuICAgICAgICA8U3RvY2sgaXRlbXM9e2l0ZW1zfSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICA8L1N0b2NrQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgW2l0ZW1zUmVzLCBwcm9kdWN0c1Jlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgYXhpb3MuZ2V0KFxuICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2VFBJRDBPeWVvOEZ3Tk42bERQRVRncmhkOE9zbXJSSjZSWnk1RU84MEc0dUdna2o3WlJoQ1o5T1hzVU5ERkYwYzVZV2Z3U3JCYUVoOV9QL3B1Yj9naWQ9MTM5OTIzOTk1OCZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2XCJcbiAgICApLFxuICAgIGF4aW9zLmdldChcImh0dHBzOi8vY2F0YWxvZy1pbmZvcm1hdGlvbi5taWNyb2Ntcy5pby9hcGkvdjEvcHJvZHVjdHNcIiwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtQVBJLUtFWVwiOiBcIjZhZGE2ZWEyLTkxYTctNDkxNC1hZmY3LTA4MDNlZjZkYjRiYlwiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSk7XG4gIGNvbnN0IHNwbGl0SXRlbXMgPSBhd2FpdCBpdGVtc1Jlcy5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KFwiLFwiKTtcbiAgbGV0IGl0ZW1zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjc3ZPYmplY3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgbGV0IGl0ZW1WYWx1ZXMgPSBzcGxpdEl0ZW1zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1LZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjc3ZPYmplY3RbaXRlbUtleXNbal1dID0gaXRlbVZhbHVlc1tqXTtcbiAgICB9XG4gICAgaXRlbXMucHVzaChjc3ZPYmplY3QpO1xuICB9XG4gIGl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogaW5kZXgsXG4gICAgICBjb2RlOiBpdGVtW1wi5ZWG5ZOB44Kz44O844OJXCJdLFxuICAgICAgbnVtYmVyOiBpdGVtW1wi5ZOB55WqXCJdLFxuICAgICAgbmFtZTogaXRlbVtcIuWVhuWTgeWQjVwiXSxcbiAgICAgIHByaWNlOiBpdGVtW1wi5LiK5LujXCJdLFxuICAgICAgc2l6ZTogaXRlbVtcIuOCteOCpOOCulwiXSxcbiAgICAgIHN0b2NrMTogaXRlbVtcIuWcqOW6q+aVsFwiXSxcbiAgICAgIHN0b2NrMjogaXRlbVtcIuWklumDqOWcqOW6q1wiXSxcbiAgICAgIHRvdGFsOiBpdGVtW1wiVE9UQUxcIl0sXG4gICAgICBzY2hlZHVsZTogaXRlbVtcIuS7leaOm1wiXSxcbiAgICAgIHF1YW50aXR5OiBpdGVtW1wi5pWw6YePXCJdLFxuICAgIH07XG4gIH0pO1xuICBjb25zdCBwcm9kdWN0cyA9IHByb2R1Y3RzUmVzLmRhdGEuY29udGVudHM7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbXMsXG4gICAgICBwcm9kdWN0cyxcbiAgICB9LFxuICB9O1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbi8vICAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL2UvMlBBQ1gtMXZUUElEME95ZW84RndOTjZsRFBFVGdyaGQ4T3NtclJKNlJaeTVFTzgwRzR1R2drajdaUmhDWjlPWHNVTkRGRjBjNVlXZndTckJhRWg5X1AvcHViP2dpZD0xMzk5MjM5OTU4JnNpbmdsZT10cnVlJm91dHB1dD1jc3ZcIlxuLy8gICApO1xuLy8gICBjb25zdCBzcGxpdEl0ZW1zID0gYXdhaXQgcmVzLmRhdGEuc3BsaXQoXCJcXG5cIik7XG4vLyAgIGNvbnN0IGl0ZW1LZXlzID0gYXdhaXQgc3BsaXRJdGVtc1swXS50cmltKCkuc3BsaXQoXCIsXCIpO1xuLy8gICBsZXQganNvbkRhdGFzID0gW107XG4vLyAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXRJdGVtcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGxldCBjc3ZPYmplY3QgPSBuZXcgT2JqZWN0KCk7XG4vLyAgICAgbGV0IGl0ZW1WYWx1ZXMgPSBzcGxpdEl0ZW1zW2ldLnNwbGl0KFwiLFwiKTtcbi8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1LZXlzLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICBjc3ZPYmplY3RbaXRlbUtleXNbal1dID0gaXRlbVZhbHVlc1tqXTtcbi8vICAgICB9XG4vLyAgICAganNvbkRhdGFzLnB1c2goY3N2T2JqZWN0KTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIGl0ZW1zOiBqc29uRGF0YXMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbi8vICAgICBcImh0dHBzOi8vZGFpbWFydS1oYWt1aS5taWNyb2Ntcy5pby9hcGkvdjEvY2F0YWxvZz9saW1pdD0yMDBcIixcbi8vICAgICB7XG4vLyAgICAgICBoZWFkZXJzOiB7IFwiWC1BUEktS0VZXCI6IHByb2Nlc3MuZW52LkFQSV9LRVkgfSxcbi8vICAgICB9XG4vLyAgICk7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBjYXRhbG9nczogZGF0YS5jb250ZW50cyxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmFkZVwiOiBcIlNlYXJjaExpc3RfZmFkZV9fMkZIZXNcIixcblx0XCJmYWRlMVwiOiBcIlNlYXJjaExpc3RfZmFkZTFfXzJaYkxqXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3N2XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=