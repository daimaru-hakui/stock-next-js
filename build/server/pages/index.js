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
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      alignItems: "right" // flexGrow={1}
      ,
      mt: {
        base: 4,
        md: 0
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
        textColor: "white",
        onClick: logout,
        children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/auth */ "./firebase/auth.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ "react-firebase-hooks/auth");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Stock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Stock */ "./components/Stock.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _contexts_StockContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/StockContext */ "./contexts/StockContext.js");
/* harmony import */ var _components_HeadMeta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HeadMeta */ "./components/HeadMeta.tsx");
/* harmony import */ var _components_MainTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MainTitle */ "./components/MainTitle.tsx");


var _jsxFileName = "C:\\Users\\sukebon\\Documents\\stock-next-js\\pages\\index.tsx";











const Home = props => {
  const {
    items,
    products
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.auth);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [router, user]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_StockContext__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadMeta__WEBPACK_IMPORTED_MODULE_9__.default, {
        title: "大丸白衣 在庫表",
        description: "マイユニフォームクラブとセレナーデの商品在庫を検索することができるWEBアプリです。"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainTitle__WEBPACK_IMPORTED_MODULE_10__.default, {
        h2Title: "在庫検索",
        h3Title: "品番を入力して在庫検索ができます。"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stock__WEBPACK_IMPORTED_MODULE_6__.Stock, {
        items: items,
        products: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
async function getStaticProps() {
  const [itemsRes, productsRes] = await Promise.all([axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv"), axios__WEBPACK_IMPORTED_MODULE_5___default().get("https://catalog-information.microcms.io/api/v1/products", {
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

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-firebase-hooks/auth");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0Zvcm1BcmVhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRNZXRhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9NYWluVGl0bGUudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9TdG9jay50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29udGV4dHMvU3RvY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0b2NrLWFwcC8uL2ZpcmViYXNlL2F1dGguanMiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWNzdlwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb3JtQXJlYSIsInByb3BzIiwiaW5wdXRWYWx1ZSIsImZpbHRlckl0ZW1zIiwic2VsZWN0RGF0YSIsImhhbmRsZUNoYW5nZVRleHQiLCJvbkNsaWNrU2VhcmNoIiwib25DbGlja1Jlc2V0IiwibGVuZ3RoIiwibWFwIiwiZGF0YSIsImJhc2UiLCJtZCIsImUiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJTZWFyY2gySWNvbiIsIkhlYWRNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhlYWRlciIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VEaXNjbG9zdXJlIiwiaGFuZGxlVG9nZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nb3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJwdXNoIiwiTWFpblRpdGxlIiwiaDJUaXRsZSIsImgzVGl0bGUiLCJTZWFyY2hMaXN0IiwiaXRlbXMiLCJwcm9kdWN0cyIsIm9uQ2xpY2tEZWxldGUiLCJzaG93SXRlbSIsInNldFNob3dJdGVtIiwidXNlU3RhdGUiLCJvbkNsaWNrTW9kYWwiLCJTdHlsZXMiLCJwcm9kdWN0IiwiRGVsZXRlSWNvbiIsIl9faHRtbCIsIlN0b2NrIiwic2V0U2VsZWN0RGF0YSIsInNldElucHV0VmFsdWUiLCJjc3ZEYXRhIiwic2V0Q3N2RGF0YSIsImZpbHRlciIsInNlbGYiLCJmaW5kSW5kZXgiLCJvbkNsaWNrQ3N2IiwiaW5jbHVkZXMiLCJoZWFkZXIiLCJib2R5IiwiZCIsIk9iamVjdCIsImtleXMiLCJqb2luIiwiY3N2RmlsZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVySXRlbSIsIm5ld0RhdGEiLCJkZWxldGVOdW1iZXIiLCJ2IiwiTnVtYmVyIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiRG93bmxvYWRJY29uIiwiU3RvY2tDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlN0b2NrQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRJdGVtcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJIb21lIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsInVzZUVmZmVjdCIsImdldFN0YXRpY1Byb3BzIiwiaXRlbXNSZXMiLCJwcm9kdWN0c1JlcyIsIlByb21pc2UiLCJhbGwiLCJheGlvcyIsImhlYWRlcnMiLCJzcGxpdEl0ZW1zIiwic3BsaXQiLCJpdGVtS2V5cyIsInRyaW0iLCJpIiwiY3N2T2JqZWN0IiwiaXRlbVZhbHVlcyIsImoiLCJpZCIsImNvZGUiLCJudW1iZXIiLCJuYW1lIiwicHJpY2UiLCJzaXplIiwic3RvY2sxIiwic3RvY2syIiwidG90YWwiLCJzY2hlZHVsZSIsInF1YW50aXR5IiwiY29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFXQSxNQUFNQSxRQUF5QixHQUFJQyxLQUFELElBQVc7QUFDM0MsUUFBTTtBQUNKQyxjQURJO0FBRUpDLGVBRkk7QUFHSkMsY0FISTtBQUlKQyxvQkFKSTtBQUtKQyxpQkFMSTtBQU1KQztBQU5JLE1BT0ZOLEtBUEo7QUFTQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUssYUFBaEI7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUNFLE9BQUMsRUFBQyxNQURKO0FBRUUsb0JBQWMsRUFBQyxRQUZqQjtBQUdFLGdCQUFVLEVBQUMsUUFIYjtBQUlFLFFBQUUsRUFBRSxDQUpOO0FBS0UsUUFBRSxFQUFFLEVBTE47QUFBQSw4QkFPRSw4REFBQyxtREFBRDtBQUNF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Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoMkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIElucHV0LCBJbnB1dEdyb3VwIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgZmlsdGVySXRlbXM6IFtdO1xyXG4gIHNlbGVjdERhdGE6IGFueTtcclxuICBoYW5kbGVDaGFuZ2VUZXh0OiBhbnk7XHJcbiAgb25DbGlja1NlYXJjaDogYW55O1xyXG4gIG9uQ2xpY2tSZXNldDogVm9pZEZ1bmN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgRm9ybUFyZWE6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlucHV0VmFsdWUsXHJcbiAgICBmaWx0ZXJJdGVtcyxcclxuICAgIHNlbGVjdERhdGEsXHJcbiAgICBoYW5kbGVDaGFuZ2VUZXh0LFxyXG4gICAgb25DbGlja1NlYXJjaCxcclxuICAgIG9uQ2xpY2tSZXNldCxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25DbGlja1NlYXJjaH0+XHJcbiAgICAgIDxJbnB1dEdyb3VwXHJcbiAgICAgICAgdz1cImF1dG9cIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBweT17Nn1cclxuICAgICAgICBweD17MTB9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgIHNlbGVjdERhdGEubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8gc2VsZWN0RGF0YS5tYXAoKGRhdGEpID0+IGAgJHtkYXRhfSBgKVxyXG4gICAgICAgICAgICAgIDogXCLkvospU1AxMjVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGlzdD1cInNlYXJjaFwiXHJcbiAgICAgICAgICB3PXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCI0NTBweFwiIH19XHJcbiAgICAgICAgICBtcj17MX1cclxuICAgICAgICAgIHB5PXs2fVxyXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IChlLmtleSA9PSBcIkVudGVyXCIgPyBvbkNsaWNrU2VhcmNoKGUpIDogZmFsc2UpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICB7ZmlsdGVySXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtW1wibnVtYmVyXCJdfT5cclxuICAgICAgICAgICAgICB7aXRlbVtcIm5hbWVcIl19XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvclNjaGVtZT1cInRlYWxcIiBweD17NX0gcHk9ezZ9IG1yPXsxfT5cclxuICAgICAgICAgIDxJY29uIGFzPXtTZWFyY2gySWNvbn0gbXI9ezF9IC8+XHJcbiAgICAgICAgICDmpJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tSZXNldH0gY29sb3JTY2hlbWU9XCJyZWRcIiBweD17NX0gcHk9ezZ9PlxyXG4gICAgICAgICAgUkVTRVRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQXJlYTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5jb25zdCBIZWFkTWV0YSA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfSAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtcIi9mYXZpY29uLnBuZ1wifSAvPiAqL31cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgey8qIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmR9IC8+ICovfVxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9e1wiL2Zhdmljb24ucG5nXCJ9IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZE1ldGE7XHJcbiIsImltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGbGV4LFxyXG4gIEhlYWRpbmcsXHJcbiAgTGluayxcclxuICBTdGFjayxcclxuICBUZXh0LFxyXG4gIFNwYWNlcixcclxuICB1c2VEaXNjbG9zdXJlLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IChpc09wZW4gPyBvbkNsb3NlKCkgOiBvbk9wZW4oKSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nb3V0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXV0aC5zaWduT3V0KCk7XHJcbiAgICByb3V0ZXIucHVzaCgnbG9naW4nKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIGFzPVwibmF2XCJcclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgcGFkZGluZz17NH1cclxuICAgICAgYmc9XCJ0ZWFsLjUwMFwiXHJcbiAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgPlxyXG4gICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17XCJ0aWdodGVyXCJ9PlxyXG4gICAgICAgICAgREFJTUFSVSBIQUtVSVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgPEhhbWJ1cmdlckljb24gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIFxyXG4gICAgICA8U3RhY2tcclxuICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cclxuICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfX1cclxuICAgICAgICB3aWR0aD17eyBiYXNlOiBcImZ1bGxcIiwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cInJpZ2h0XCJcclxuICAgICAgICAvLyBmbGV4R3Jvdz17MX1cclxuICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPExpbmsgdGV4dENvbG9yPXtcIndoaXRlXCJ9IG9uQ2xpY2s9e2xvZ291dH0gPuODreOCsOOCouOCpuODiDwvTGluaz5cclxuICAgICAgPC9TdGFjaz5cclxuey8qIFxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT17eyBiYXNlOiBpc09wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgID48L0JveD4gKi99XHJcbiAgIFxyXG4gICAgPC9GbGV4PlxyXG4gICAgXHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGgyVGl0bGUsIGgzVGl0bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgc3BhY2luZz17M30gZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG10PXsxNn0+XHJcbiAgICAgIDxUZXh0IGZvbnRTaXplPVwiM3hsXCIgYXM9XCJoMlwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAge2gyVGl0bGV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIGFzPVwiaDNcIiBweD17M30+XHJcbiAgICAgICAge2gzVGl0bGV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvU3RhY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5UaXRsZTtcclxuIiwiaW1wb3J0IHsgRGVsZXRlSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGbGV4LFxyXG4gIEljb24sXHJcbiAgTW9kYWwsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgTW9kYWxDb250ZW50LFxyXG4gIE1vZGFsRm9vdGVyLFxyXG4gIE1vZGFsSGVhZGVyLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBUYWJsZSxcclxuICBUYWJsZUNhcHRpb24sXHJcbiAgVGJvZHksXHJcbiAgVGQsXHJcbiAgVGgsXHJcbiAgVGhlYWQsXHJcbiAgVHIsXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1NlYXJjaExpc3QubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2VhcmNoTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzLCBzZWxlY3REYXRhLCBmaWx0ZXJJdGVtcywgb25DbGlja0RlbGV0ZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IFtzaG93SXRlbSwgc2V0U2hvd0l0ZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgb25DbGlja01vZGFsID0gKGRhdGEpID0+IHNldFNob3dJdGVtKGRhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uLXJldmVyc2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3NlbGVjdERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBweD17NX1cclxuICAgICAgICAgICAgbWI9ezV9XHJcbiAgICAgICAgICAgIG14PXsyfVxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezV9XHJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cImJhc2VcIlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5mYWRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICB3PXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCI2MDBweFwiIH19XHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwic3RyaXBlZFwiXHJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICBtYj17Nn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNhcHRpb24gcGxhY2VtZW50PVwidG9wXCIgcHg9ezB9IG1iPXsyfSBmb250U2l6ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwieHNcIiwgbWQ6IFwibWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT57ZGF0YX08L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtW1wibnVtYmVyXCJdID09IGRhdGEgJiYgaXRlbVtcIm5hbWVcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJudW1iZXJcIl0gPT0gZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJwcmljZVwiXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwi77+lXCIgKyBpdGVtW1wicHJpY2VcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9kdWN0LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFtcIm1vZGVsXCJdID09IGRhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tNb2RhbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOips+e0sFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrRGVsZXRlKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17RGVsZXRlSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDYXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxUaGVhZD5cclxuICAgICAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuOCteOCpOOCujwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7lnKjluqvmlbA8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+5aSW6YOo5Zyo5bqrPC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPlRPVEFMPC9UaD5cclxuICAgICAgICAgICAgICAgICAgey8qIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7ku5XmjpvntI3mnJ88L1RoPiAqL31cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuS7leaOm+aVsOmHjzwvVGg+XHJcbiAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAgICAgICAgPFRib2R5PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJudW1iZXJcIl0gPT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInNpemVcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic3RvY2sxXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInN0b2NrMlwiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCJ0b3RhbFwiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic2NoZWR1bGVcIl19PC9UZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInF1YW50aXR5XCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvVGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9IHNpemU9XCJ4bFwiPlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2R1Y3RbXCJtb2RlbFwiXSA9PSBzaG93SXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb2RhbENvbnRlbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0W1wibW9kZWxcIl19XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0W1wiY2F0ZWdvcnlcIl19XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwcm9kdWN0W1wic2l6ZV9zcGVjXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERvd25sb2FkSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBJY29uLCBXcmFwSXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tIFwicmVhY3QtY3N2XCI7XHJcbmltcG9ydCBGb3JtQXJlYSBmcm9tIFwiLi9Gb3JtQXJlYVwiO1xyXG5pbXBvcnQgU2VhcmNoTGlzdCBmcm9tIFwiLi9TZWFyY2hMaXN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIHNpemU6IHN0cmluZztcclxuICBzdG9jazE6IG51bWJlcjtcclxuICBzdG9jazI6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG4gIC8vIHNjaGVkdWxlOiBzdHJpbmc7XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9jazogUmVhY3QuRkM8YW55PiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0RGF0YSwgc2V0U2VsZWN0RGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8v5qSc57Si5pmC44Gr44Kk44Oz44OX44OD44OI5YWl5Yqb44GX44Gf6YWN5YiX44Oq44K544OIXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7IC8v44Kk44Oz44OX44OD44OI5YWl5Yqb5YCkXHJcbiAgY29uc3QgW2NzdkRhdGEsIHNldENzdkRhdGFdID0gdXNlU3RhdGUoXCJcIik7IC8vQ1NW44OH44O844K/XHJcblxyXG4gIC8vbnVtYmVy44Gu6YeN6KSH5YmK6ZmkXHJcbiAgY29uc3QgZmlsdGVySXRlbXMgPSBpdGVtcy5maWx0ZXIoXHJcbiAgICAoaXRlbSwgaW5kZXgsIHNlbGYpID0+XHJcbiAgICAgIHNlbGYuZmluZEluZGV4KChlKSA9PiBlW1wibnVtYmVyXCJdID09PSBpdGVtW1wibnVtYmVyXCJdKSA9PT0gaW5kZXhcclxuICApO1xyXG5cclxuICAvL0NTVuODleOCoeOCpOODq+OBq+WkieaPm1xyXG4gIGNvbnN0IG9uQ2xpY2tDc3YgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjc3ZEYXRhID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBzZWxlY3REYXRhLmluY2x1ZGVzKGl0ZW1bXCJudW1iZXJcIl0pKTtcclxuXHJcbiAgICAvL+eJueWumuOBrmtleeOCkuWJiumZpOOBl+OBn+OBhOaZglxyXG4gICAgLy8gZGVsZXRlIGl0ZW1zWzBdW1wibnVtYmVyXCJdO1xyXG4gICAgY3N2RGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgZGVsZXRlIGRhdGFbXCJpZFwiXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGhlYWRlciA9IE9iamVjdC5rZXlzKGl0ZW1zWzBdKS5qb2luKFwiLFwiKSArIFwiXFxuXCI7XHJcbiAgICBjb25zdCBoZWFkZXIgPVxyXG4gICAgICBcIuWVhuWTgeOCs+ODvOODiSzlk4Hnlaos5ZWG5ZOB5ZCNLOS4iuS7oyzjgrXjgqTjgros5Zyo5bqr5pWwLOWklumDqOWcqOW6qyxUT1RBTCzku5Xmjpss5pWw6YePXFxuXCI7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGNzdkRhdGFcclxuICAgICAgLm1hcCgoZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkKVxyXG4gICAgICAgICAgLm1hcCgoa2V5KSA9PiBkW2tleV0pXHJcbiAgICAgICAgICAuam9pbihcIixcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKFwiXFxuXCIpO1xyXG4gICAgY29uc3QgY3N2RmlsZSA9IGhlYWRlciArIGJvZHk7XHJcbiAgICBzZXRDc3ZEYXRhKGNzdkZpbGUpO1xyXG4gIH07XHJcblxyXG4gIC8vSU5QVVTjga7lhaXlipvlgKTjgpLlj5blvpdcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICAvL+aknOe0oue1nuOCiui+vOOBv1xyXG4gIGNvbnN0IG9uQ2xpY2tTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZpbHRlckl0ZW0gPSBmaWx0ZXJJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bXCJudW1iZXJcIl0gPT0gaW5wdXRWYWx1ZSk7IC8vSW5wdXTlhaXlipvlgKTjgajlkIzjgZjjgqrjg5bjgrjjgqfjgq/jg4jjgpLlj5bjgorlh7rjgZnjgIJcclxuICAgIGxldCBuZXdEYXRhID0gZmlsdGVySXRlbS5tYXAoKGl0ZW0pID0+IGl0ZW1bXCJudW1iZXJcIl0pOyAvL+OCquODluOCuOOCp+OCr+ODiOOBi+OCieWTgeeVquOBoOOBkeOCkuWPluOCiuWHuuOBmVxyXG4gICAgaWYgKG5ld0RhdGEubGVuZ3RoID09PSAwKSByZXR1cm47IC8v44OH44O844K/56m655m944Gn44GC44KM44Gw44Oq44K/44O844Oz44Gn6L+U44GZ44CCXHJcblxyXG4gICAgIXNlbGVjdERhdGEuaW5jbHVkZXMobmV3RGF0YVswXSkgJiZcclxuICAgICAgc2V0U2VsZWN0RGF0YShbLi4uc2VsZWN0RGF0YSwgbmV3RGF0YVswXV0pO1xyXG5cclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcblxyXG4gICAgLy8gbGV0IGZpbHRlckl0ZW0gPSBmaWx0ZXJJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIC8vICAgcmV0dXJuIGl0ZW1bXCJudW1iZXJcIl0uaW5jbHVkZXMoaW5wdXRWYWx1ZSk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBuZXdEYXRhID0gZmlsdGVySXRlbS5tYXAoKHYpID0+IHtcclxuICAgIC8vICAgcmV0dXJuIHZbXCJudW1iZXJcIl07XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBpZiAobmV3RGF0YS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgIC8vIG5ld0RhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgIGlmICghc2VsZWN0RGF0YS5pbmNsdWRlcyhkYXRhKSkge1xyXG4gICAgLy8gICAgIHNldFNlbGVjdERhdGEoKHByZXYpID0+IFsuLi5wcmV2LCBkYXRhXSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8gc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICAvL+mBuOaKnuOBl+OBpuOBhOOCi+WFqOOBpuOBrm51bWJlcuOCkuWJiumZpFxyXG4gIGNvbnN0IG9uQ2xpY2tSZXNldCA9ICgpID0+IHtcclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgICBzZXRTZWxlY3REYXRhKFtdKTtcclxuICB9O1xyXG5cclxuICAvL+mBuOaKnuOBl+OBn251bWJlcuOBruWJiumZpFxyXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgIGxldCBkZWxldGVOdW1iZXIgPSBpbmRleDtcclxuICAgIHNldFNlbGVjdERhdGEoXHJcbiAgICAgIFsuLi5zZWxlY3REYXRhXS5maWx0ZXIoKHYsIGluZGV4KSA9PiBpbmRleCAhPT0gTnVtYmVyKGRlbGV0ZU51bWJlcikpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybUFyZWFcclxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgIGZpbHRlckl0ZW1zPXtmaWx0ZXJJdGVtc31cclxuICAgICAgICBzZWxlY3REYXRhPXtzZWxlY3REYXRhfVxyXG4gICAgICAgIGhhbmRsZUNoYW5nZVRleHQ9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgb25DbGlja1NlYXJjaD17b25DbGlja1NlYXJjaH1cclxuICAgICAgICBvbkNsaWNrUmVzZXQ9e29uQ2xpY2tSZXNldH1cclxuICAgICAgLz5cclxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtYj17Nn0+XHJcbiAgICAgICAge3NlbGVjdERhdGEubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Q1NWTGlua1xyXG4gICAgICAgICAgICBkYXRhPXtjc3ZEYXRhfVxyXG4gICAgICAgICAgICBmaWxlbmFtZT17bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgXCJfemFpa28uY3N2XCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0Nzdn0+XHJcbiAgICAgICAgICAgICAgQ1NW44OA44Km44Oz44Ot44O844OJXHJcbiAgICAgICAgICAgICAgPEljb24gYXM9e0Rvd25sb2FkSWNvbn0gLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NTVkxpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8U2VhcmNoTGlzdFxyXG4gICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XHJcbiAgICAgICAgc2VsZWN0RGF0YT17c2VsZWN0RGF0YX1cclxuICAgICAgICBmaWx0ZXJJdGVtcz17ZmlsdGVySXRlbXN9XHJcbiAgICAgICAgb25DbGlja0RlbGV0ZT17b25DbGlja0RlbGV0ZX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3RvY2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCBTdG9ja0NvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJ6YWlrb1wiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9ja0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2l0ZW1zfT57Y2hpbGRyZW59PC9TdG9ja0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbi8vIFRPRE86IFJlcGxhY2UgdGhlIGZvbGxvd2luZyB3aXRoIHlvdXIgYXBwJ3MgRmlyZWJhc2UgcHJvamVjdCBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBVGZVQVdpQUF4VTZERzhsU1FLLUVYMmd1cEFLM3NoU1lcIixcclxuICBhdXRoRG9tYWluOiBcImRhaW1hcnUtemFpa28uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImRhaW1hcnUtemFpa29cIixcclxuICBzdG9yYWdlQnVja2V0OiBcImRhaW1hcnUtemFpa28uYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzNTcyNzY3NTkxNzNcIixcclxuICBhcHBJZDogXCIxOjM1NzI3Njc1OTE3Mzp3ZWI6YTFjMDg3MTU1YzUzZmNjMWMzMjVlY1wiXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFN0b2NrIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RvY2tcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFN0b2NrQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9TdG9ja0NvbnRleHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRNZXRhXCI7XG5pbXBvcnQgTWFpblRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5UaXRsZVwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzIH0gPSBwcm9wcztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYodXNlcj09PW51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sW3JvdXRlciwgdXNlcl0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RvY2tDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxIZWFkXG4gICAgICAgICAgdGl0bGU9e1wi5aSn5Li455m96KGjIOWcqOW6q+ihqFwifVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgIFwi44Oe44Kk44Om44OL44OV44Kp44O844Og44Kv44Op44OW44Go44K744Os44OK44O844OH44Gu5ZWG5ZOB5Zyo5bqr44KS5qSc57Si44GZ44KL44GT44Go44GM44Gn44GN44KLV0VC44Ki44OX44Oq44Gn44GZ44CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1haW5UaXRsZVxuICAgICAgICAgIGgyVGl0bGU9e1wi5Zyo5bqr5qSc57SiXCJ9XG4gICAgICAgICAgaDNUaXRsZT17XCLlk4HnlarjgpLlhaXlipvjgZfjgablnKjluqvmpJzntKLjgYzjgafjgY3jgb7jgZnjgIJcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFN0b2NrIGl0ZW1zPXtpdGVtc30gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgPC9TdG9ja0NvbnRleHRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IFtpdGVtc1JlcywgcHJvZHVjdHNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGF4aW9zLmdldChcbiAgICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlRQSUQwT3llbzhGd05ONmxEUEVUZ3JoZDhPc21yUko2Ulp5NUVPODBHNHVHZ2tqN1pSaENaOU9Yc1VOREZGMGM1WVdmd1NyQmFFaDlfUC9wdWI/Z2lkPTEzOTkyMzk5NTgmc2luZ2xlPXRydWUmb3V0cHV0PWNzdlwiXG4gICAgKSxcbiAgICBheGlvcy5nZXQoXCJodHRwczovL2NhdGFsb2ctaW5mb3JtYXRpb24ubWljcm9jbXMuaW8vYXBpL3YxL3Byb2R1Y3RzXCIsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLUFQSS1LRVlcIjogXCI2YWRhNmVhMi05MWE3LTQ5MTQtYWZmNy0wODAzZWY2ZGI0YmJcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIF0pO1xuICBjb25zdCBzcGxpdEl0ZW1zID0gYXdhaXQgaXRlbXNSZXMuZGF0YS5zcGxpdChcIlxcblwiKTtcbiAgY29uc3QgaXRlbUtleXMgPSBhd2FpdCBzcGxpdEl0ZW1zWzBdLnRyaW0oKS5zcGxpdChcIixcIik7XG4gIGxldCBpdGVtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdChcIixcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgY3N2T2JqZWN0W2l0ZW1LZXlzW2pdXSA9IGl0ZW1WYWx1ZXNbal07XG4gICAgfVxuICAgIGl0ZW1zLnB1c2goY3N2T2JqZWN0KTtcbiAgfVxuICBpdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGluZGV4LFxuICAgICAgY29kZTogaXRlbVtcIuWVhuWTgeOCs+ODvOODiVwiXSxcbiAgICAgIG51bWJlcjogaXRlbVtcIuWTgeeVqlwiXSxcbiAgICAgIG5hbWU6IGl0ZW1bXCLllYblk4HlkI1cIl0sXG4gICAgICBwcmljZTogaXRlbVtcIuS4iuS7o1wiXSxcbiAgICAgIHNpemU6IGl0ZW1bXCLjgrXjgqTjgrpcIl0sXG4gICAgICBzdG9jazE6IGl0ZW1bXCLlnKjluqvmlbBcIl0sXG4gICAgICBzdG9jazI6IGl0ZW1bXCLlpJbpg6jlnKjluqtcIl0sXG4gICAgICB0b3RhbDogaXRlbVtcIlRPVEFMXCJdLFxuICAgICAgc2NoZWR1bGU6IGl0ZW1bXCLku5XmjptcIl0sXG4gICAgICBxdWFudGl0eTogaXRlbVtcIuaVsOmHj1wiXSxcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0c1Jlcy5kYXRhLmNvbnRlbnRzO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgcHJvZHVjdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4vLyAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2VFBJRDBPeWVvOEZ3Tk42bERQRVRncmhkOE9zbXJSSjZSWnk1RU84MEc0dUdna2o3WlJoQ1o5T1hzVU5ERkYwYzVZV2Z3U3JCYUVoOV9QL3B1Yj9naWQ9MTM5OTIzOTk1OCZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2XCJcbi8vICAgKTtcbi8vICAgY29uc3Qgc3BsaXRJdGVtcyA9IGF3YWl0IHJlcy5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuLy8gICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KFwiLFwiKTtcbi8vICAgbGV0IGpzb25EYXRhcyA9IFtdO1xuLy8gICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuLy8gICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdChcIixcIik7XG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtS2V5cy5sZW5ndGg7IGorKykge1xuLy8gICAgICAgY3N2T2JqZWN0W2l0ZW1LZXlzW2pdXSA9IGl0ZW1WYWx1ZXNbal07XG4vLyAgICAgfVxuLy8gICAgIGpzb25EYXRhcy5wdXNoKGNzdk9iamVjdCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBpdGVtczoganNvbkRhdGFzLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgXCJodHRwczovL2RhaW1hcnUtaGFrdWkubWljcm9jbXMuaW8vYXBpL3YxL2NhdGFsb2c/bGltaXQ9MjAwXCIsXG4vLyAgICAge1xuLy8gICAgICAgaGVhZGVyczogeyBcIlgtQVBJLUtFWVwiOiBwcm9jZXNzLmVudi5BUElfS0VZIH0sXG4vLyAgICAgfVxuLy8gICApO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgY2F0YWxvZ3M6IGRhdGEuY29udGVudHMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZhZGVcIjogXCJTZWFyY2hMaXN0X2ZhZGVfXzJGSGVzXCIsXG5cdFwiZmFkZTFcIjogXCJTZWFyY2hMaXN0X2ZhZGUxX18yWmJMalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNzdlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9