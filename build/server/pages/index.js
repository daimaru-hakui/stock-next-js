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

    const header = "商品コード,品番,商品名,上代,サイズ,在庫数,外部在庫,TOTAL,仕掛数量\n";
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
      // schedule: item["仕掛"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0Zvcm1BcmVhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRNZXRhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9NYWluVGl0bGUudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9TdG9jay50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29udGV4dHMvU3RvY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0b2NrLWFwcC8uL2ZpcmViYXNlL2F1dGguanMiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWNzdlwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb3JtQXJlYSIsInByb3BzIiwiaW5wdXRWYWx1ZSIsImZpbHRlckl0ZW1zIiwic2VsZWN0RGF0YSIsImhhbmRsZUNoYW5nZVRleHQiLCJvbkNsaWNrU2VhcmNoIiwib25DbGlja1Jlc2V0IiwibGVuZ3RoIiwibWFwIiwiZGF0YSIsImJhc2UiLCJtZCIsImUiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJTZWFyY2gySWNvbiIsIkhlYWRNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhlYWRlciIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VEaXNjbG9zdXJlIiwiaGFuZGxlVG9nZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nb3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJwdXNoIiwiTWFpblRpdGxlIiwiaDJUaXRsZSIsImgzVGl0bGUiLCJTZWFyY2hMaXN0IiwiaXRlbXMiLCJwcm9kdWN0cyIsIm9uQ2xpY2tEZWxldGUiLCJzaG93SXRlbSIsInNldFNob3dJdGVtIiwidXNlU3RhdGUiLCJvbkNsaWNrTW9kYWwiLCJTdHlsZXMiLCJwcm9kdWN0IiwiRGVsZXRlSWNvbiIsIl9faHRtbCIsIlN0b2NrIiwic2V0U2VsZWN0RGF0YSIsInNldElucHV0VmFsdWUiLCJjc3ZEYXRhIiwic2V0Q3N2RGF0YSIsImZpbHRlciIsInNlbGYiLCJmaW5kSW5kZXgiLCJvbkNsaWNrQ3N2IiwiaW5jbHVkZXMiLCJoZWFkZXIiLCJib2R5IiwiZCIsIk9iamVjdCIsImtleXMiLCJqb2luIiwiY3N2RmlsZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVySXRlbSIsIm5ld0RhdGEiLCJkZWxldGVOdW1iZXIiLCJ2IiwiTnVtYmVyIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiRG93bmxvYWRJY29uIiwiU3RvY2tDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlN0b2NrQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRJdGVtcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJIb21lIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsInVzZUVmZmVjdCIsImdldFN0YXRpY1Byb3BzIiwiaXRlbXNSZXMiLCJwcm9kdWN0c1JlcyIsIlByb21pc2UiLCJhbGwiLCJheGlvcyIsImhlYWRlcnMiLCJzcGxpdEl0ZW1zIiwic3BsaXQiLCJpdGVtS2V5cyIsInRyaW0iLCJpIiwiY3N2T2JqZWN0IiwiaXRlbVZhbHVlcyIsImoiLCJpZCIsImNvZGUiLCJudW1iZXIiLCJuYW1lIiwicHJpY2UiLCJzaXplIiwic3RvY2sxIiwic3RvY2syIiwidG90YWwiLCJxdWFudGl0eSIsImNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBV0EsTUFBTUEsUUFBeUIsR0FBSUMsS0FBRCxJQUFXO0FBQzNDLFFBQU07QUFDSkMsY0FESTtBQUVKQyxlQUZJO0FBR0pDLGNBSEk7QUFJSkMsb0JBSkk7QUFLSkMsaUJBTEk7QUFNSkM7QUFOSSxNQU9GTixLQVBKO0FBU0Esc0JBQ0U7QUFBTSxZQUFRLEVBQUVLLGFBQWhCO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxPQUFDLEVBQUMsTUFESjtBQUVFLG9CQUFjLEVBQUMsUUFGakI7QUFHRSxnQkFBVSxFQUFDLFFBSGI7QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxFQUxOO0FBQUEsOEJBT0UsOERBQUMsbURBQUQ7QUFDRSxnQkFBUSxFQUFF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Q0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoMkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIElucHV0LCBJbnB1dEdyb3VwIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgZmlsdGVySXRlbXM6IFtdO1xyXG4gIHNlbGVjdERhdGE6IGFueTtcclxuICBoYW5kbGVDaGFuZ2VUZXh0OiBhbnk7XHJcbiAgb25DbGlja1NlYXJjaDogYW55O1xyXG4gIG9uQ2xpY2tSZXNldDogVm9pZEZ1bmN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgRm9ybUFyZWE6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlucHV0VmFsdWUsXHJcbiAgICBmaWx0ZXJJdGVtcyxcclxuICAgIHNlbGVjdERhdGEsXHJcbiAgICBoYW5kbGVDaGFuZ2VUZXh0LFxyXG4gICAgb25DbGlja1NlYXJjaCxcclxuICAgIG9uQ2xpY2tSZXNldCxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25DbGlja1NlYXJjaH0+XHJcbiAgICAgIDxJbnB1dEdyb3VwXHJcbiAgICAgICAgdz1cImF1dG9cIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBweT17Nn1cclxuICAgICAgICBweD17MTB9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgIHNlbGVjdERhdGEubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8gc2VsZWN0RGF0YS5tYXAoKGRhdGEpID0+IGAgJHtkYXRhfSBgKVxyXG4gICAgICAgICAgICAgIDogXCLkvospU1AxMjVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGlzdD1cInNlYXJjaFwiXHJcbiAgICAgICAgICB3PXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCI0NTBweFwiIH19XHJcbiAgICAgICAgICBtcj17MX1cclxuICAgICAgICAgIHB5PXs2fVxyXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IChlLmtleSA9PSBcIkVudGVyXCIgPyBvbkNsaWNrU2VhcmNoKGUpIDogZmFsc2UpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICB7ZmlsdGVySXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtW1wibnVtYmVyXCJdfT5cclxuICAgICAgICAgICAgICB7aXRlbVtcIm5hbWVcIl19XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvclNjaGVtZT1cInRlYWxcIiBweD17NX0gcHk9ezZ9IG1yPXsxfT5cclxuICAgICAgICAgIDxJY29uIGFzPXtTZWFyY2gySWNvbn0gbXI9ezF9IC8+XHJcbiAgICAgICAgICDmpJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tSZXNldH0gY29sb3JTY2hlbWU9XCJyZWRcIiBweD17NX0gcHk9ezZ9PlxyXG4gICAgICAgICAgUkVTRVRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQXJlYTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5jb25zdCBIZWFkTWV0YSA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfSAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtcIi9mYXZpY29uLnBuZ1wifSAvPiAqL31cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgey8qIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmR9IC8+ICovfVxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9e1wiL2Zhdmljb24ucG5nXCJ9IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZE1ldGE7XHJcbiIsImltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGbGV4LFxyXG4gIEhlYWRpbmcsXHJcbiAgTGluayxcclxuICBTdGFjayxcclxuICBUZXh0LFxyXG4gIFNwYWNlcixcclxuICB1c2VEaXNjbG9zdXJlLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IChpc09wZW4gPyBvbkNsb3NlKCkgOiBvbk9wZW4oKSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nb3V0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXV0aC5zaWduT3V0KCk7XHJcbiAgICByb3V0ZXIucHVzaCgnbG9naW4nKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIGFzPVwibmF2XCJcclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgcGFkZGluZz17NH1cclxuICAgICAgYmc9XCJ0ZWFsLjUwMFwiXHJcbiAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgPlxyXG4gICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17XCJ0aWdodGVyXCJ9PlxyXG4gICAgICAgICAgREFJTUFSVSBIQUtVSVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgPEhhbWJ1cmdlckljb24gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIFxyXG4gICAgICA8U3RhY2tcclxuICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cclxuICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfX1cclxuICAgICAgICB3aWR0aD17eyBiYXNlOiBcImZ1bGxcIiwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cInJpZ2h0XCJcclxuICAgICAgICAvLyBmbGV4R3Jvdz17MX1cclxuICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPExpbmsgdGV4dENvbG9yPXtcIndoaXRlXCJ9IG9uQ2xpY2s9e2xvZ291dH0gPuODreOCsOOCouOCpuODiDwvTGluaz5cclxuICAgICAgPC9TdGFjaz5cclxuey8qIFxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT17eyBiYXNlOiBpc09wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgID48L0JveD4gKi99XHJcbiAgIFxyXG4gICAgPC9GbGV4PlxyXG4gICAgXHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGgyVGl0bGUsIGgzVGl0bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgc3BhY2luZz17M30gZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG10PXsxNn0+XHJcbiAgICAgIDxUZXh0IGZvbnRTaXplPVwiM3hsXCIgYXM9XCJoMlwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAge2gyVGl0bGV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIGFzPVwiaDNcIiBweD17M30+XHJcbiAgICAgICAge2gzVGl0bGV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvU3RhY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5UaXRsZTtcclxuIiwiaW1wb3J0IHsgRGVsZXRlSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGbGV4LFxyXG4gIEljb24sXHJcbiAgTW9kYWwsXHJcbiAgTW9kYWxCb2R5LFxyXG4gIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgTW9kYWxDb250ZW50LFxyXG4gIE1vZGFsRm9vdGVyLFxyXG4gIE1vZGFsSGVhZGVyLFxyXG4gIE1vZGFsT3ZlcmxheSxcclxuICBUYWJsZSxcclxuICBUYWJsZUNhcHRpb24sXHJcbiAgVGJvZHksXHJcbiAgVGQsXHJcbiAgVGgsXHJcbiAgVGhlYWQsXHJcbiAgVHIsXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1NlYXJjaExpc3QubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU2VhcmNoTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzLCBzZWxlY3REYXRhLCBmaWx0ZXJJdGVtcywgb25DbGlja0RlbGV0ZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IFtzaG93SXRlbSwgc2V0U2hvd0l0ZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgb25DbGlja01vZGFsID0gKGRhdGEpID0+IHNldFNob3dJdGVtKGRhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uLXJldmVyc2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3NlbGVjdERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBweD17NX1cclxuICAgICAgICAgICAgbWI9ezV9XHJcbiAgICAgICAgICAgIG14PXsyfVxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezV9XHJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cImJhc2VcIlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5mYWRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICB3PXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCI2MDBweFwiIH19XHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwic3RyaXBlZFwiXHJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICBtYj17Nn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNhcHRpb24gcGxhY2VtZW50PVwidG9wXCIgcHg9ezB9IG1iPXsyfSBmb250U2l6ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwieHNcIiwgbWQ6IFwibWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT57ZGF0YX08L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtW1wibnVtYmVyXCJdID09IGRhdGEgJiYgaXRlbVtcIm5hbWVcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJudW1iZXJcIl0gPT0gZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXCJwcmljZVwiXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwi77+lXCIgKyBpdGVtW1wicHJpY2VcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9kdWN0LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFtcIm1vZGVsXCJdID09IGRhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tNb2RhbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOips+e0sFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrRGVsZXRlKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17RGVsZXRlSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDYXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxUaGVhZD5cclxuICAgICAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuOCteOCpOOCujwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7lnKjluqvmlbA8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+5aSW6YOo5Zyo5bqrPC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPlRPVEFMPC9UaD5cclxuICAgICAgICAgICAgICAgICAgey8qIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7ku5XmjpvntI3mnJ88L1RoPiAqL31cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuS7leaOm+aVsOmHjzwvVGg+XHJcbiAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAgICAgICAgPFRib2R5PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bXCJudW1iZXJcIl0gPT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInNpemVcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic3RvY2sxXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInN0b2NrMlwiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCJ0b3RhbFwiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic2NoZWR1bGVcIl19PC9UZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInF1YW50aXR5XCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvVGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9IHNpemU9XCJ4bFwiPlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2R1Y3RbXCJtb2RlbFwiXSA9PSBzaG93SXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb2RhbENvbnRlbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0W1wibW9kZWxcIl19XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0W1wiY2F0ZWdvcnlcIl19XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwcm9kdWN0W1wic2l6ZV9zcGVjXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERvd25sb2FkSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBJY29uLCBXcmFwSXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tIFwicmVhY3QtY3N2XCI7XHJcbmltcG9ydCBGb3JtQXJlYSBmcm9tIFwiLi9Gb3JtQXJlYVwiO1xyXG5pbXBvcnQgU2VhcmNoTGlzdCBmcm9tIFwiLi9TZWFyY2hMaXN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIHNpemU6IHN0cmluZztcclxuICBzdG9jazE6IG51bWJlcjtcclxuICBzdG9jazI6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG4gIC8vIHNjaGVkdWxlOiBzdHJpbmc7XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9jazogUmVhY3QuRkM8YW55PiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0RGF0YSwgc2V0U2VsZWN0RGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8v5qSc57Si5pmC44Gr44Kk44Oz44OX44OD44OI5YWl5Yqb44GX44Gf6YWN5YiX44Oq44K544OIXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7IC8v44Kk44Oz44OX44OD44OI5YWl5Yqb5YCkXHJcbiAgY29uc3QgW2NzdkRhdGEsIHNldENzdkRhdGFdID0gdXNlU3RhdGUoXCJcIik7IC8vQ1NW44OH44O844K/XHJcblxyXG4gIC8vbnVtYmVy44Gu6YeN6KSH5YmK6ZmkXHJcbiAgY29uc3QgZmlsdGVySXRlbXMgPSBpdGVtcy5maWx0ZXIoXHJcbiAgICAoaXRlbSwgaW5kZXgsIHNlbGYpID0+XHJcbiAgICAgIHNlbGYuZmluZEluZGV4KChlKSA9PiBlW1wibnVtYmVyXCJdID09PSBpdGVtW1wibnVtYmVyXCJdKSA9PT0gaW5kZXhcclxuICApO1xyXG5cclxuICAvL0NTVuODleOCoeOCpOODq+OBq+WkieaPm1xyXG4gIGNvbnN0IG9uQ2xpY2tDc3YgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjc3ZEYXRhID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBzZWxlY3REYXRhLmluY2x1ZGVzKGl0ZW1bXCJudW1iZXJcIl0pKTtcclxuXHJcbiAgICAvL+eJueWumuOBrmtleeOCkuWJiumZpOOBl+OBn+OBhOaZglxyXG4gICAgLy8gZGVsZXRlIGl0ZW1zWzBdW1wibnVtYmVyXCJdO1xyXG4gICAgY3N2RGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgZGVsZXRlIGRhdGFbXCJpZFwiXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGhlYWRlciA9IE9iamVjdC5rZXlzKGl0ZW1zWzBdKS5qb2luKFwiLFwiKSArIFwiXFxuXCI7XHJcbiAgICBjb25zdCBoZWFkZXIgPVxyXG4gICAgICBcIuWVhuWTgeOCs+ODvOODiSzlk4Hnlaos5ZWG5ZOB5ZCNLOS4iuS7oyzjgrXjgqTjgros5Zyo5bqr5pWwLOWklumDqOWcqOW6qyxUT1RBTCzku5XmjpvmlbDph49cXG5cIjtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gY3N2RGF0YVxyXG4gICAgICAubWFwKChkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGQpXHJcbiAgICAgICAgICAubWFwKChrZXkpID0+IGRba2V5XSlcclxuICAgICAgICAgIC5qb2luKFwiLFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oXCJcXG5cIik7XHJcbiAgICBjb25zdCBjc3ZGaWxlID0gaGVhZGVyICsgYm9keTtcclxuICAgIHNldENzdkRhdGEoY3N2RmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgLy9JTlBVVOOBruWFpeWKm+WApOOCkuWPluW+l1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIC8v5qSc57Si57We44KK6L6844G/XHJcbiAgY29uc3Qgb25DbGlja1NlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZmlsdGVySXRlbSA9IGZpbHRlckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbVtcIm51bWJlclwiXSA9PSBpbnB1dFZhbHVlKTsgLy9JbnB1dOWFpeWKm+WApOOBqOWQjOOBmOOCquODluOCuOOCp+OCr+ODiOOCkuWPluOCiuWHuuOBmeOAglxyXG4gICAgbGV0IG5ld0RhdGEgPSBmaWx0ZXJJdGVtLm1hcCgoaXRlbSkgPT4gaXRlbVtcIm51bWJlclwiXSk7IC8v44Kq44OW44K444Kn44Kv44OI44GL44KJ5ZOB55Wq44Gg44GR44KS5Y+W44KK5Ye644GZXHJcbiAgICBpZiAobmV3RGF0YS5sZW5ndGggPT09IDApIHJldHVybjsgLy/jg4fjg7zjgr/nqbrnmb3jgafjgYLjgozjgbDjg6rjgr/jg7zjg7Pjgafov5TjgZnjgIJcclxuXHJcbiAgICAhc2VsZWN0RGF0YS5pbmNsdWRlcyhuZXdEYXRhWzBdKSAmJlxyXG4gICAgICBzZXRTZWxlY3REYXRhKFsuLi5zZWxlY3REYXRhLCBuZXdEYXRhWzBdXSk7XHJcblxyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuXHJcbiAgICAvLyBsZXQgZmlsdGVySXRlbSA9IGZpbHRlckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gaXRlbVtcIm51bWJlclwiXS5pbmNsdWRlcyhpbnB1dFZhbHVlKTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gbGV0IG5ld0RhdGEgPSBmaWx0ZXJJdGVtLm1hcCgodikgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gdltcIm51bWJlclwiXTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGlmIChuZXdEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgLy8gbmV3RGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgIC8vICAgaWYgKCFzZWxlY3REYXRhLmluY2x1ZGVzKGRhdGEpKSB7XHJcbiAgICAvLyAgICAgc2V0U2VsZWN0RGF0YSgocHJldikgPT4gWy4uLnByZXYsIGRhdGFdKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8v6YG45oqe44GX44Gm44GE44KL5YWo44Gm44GubnVtYmVy44KS5YmK6ZmkXHJcbiAgY29uc3Qgb25DbGlja1Jlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICAgIHNldFNlbGVjdERhdGEoW10pO1xyXG4gIH07XHJcblxyXG4gIC8v6YG45oqe44GX44GfbnVtYmVy44Gu5YmK6ZmkXHJcbiAgY29uc3Qgb25DbGlja0RlbGV0ZSA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IGRlbGV0ZU51bWJlciA9IGluZGV4O1xyXG4gICAgc2V0U2VsZWN0RGF0YShcclxuICAgICAgWy4uLnNlbGVjdERhdGFdLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICE9PSBOdW1iZXIoZGVsZXRlTnVtYmVyKSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtQXJlYVxyXG4gICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgZmlsdGVySXRlbXM9e2ZpbHRlckl0ZW1zfVxyXG4gICAgICAgIHNlbGVjdERhdGE9e3NlbGVjdERhdGF9XHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlVGV4dD17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICBvbkNsaWNrU2VhcmNoPXtvbkNsaWNrU2VhcmNofVxyXG4gICAgICAgIG9uQ2xpY2tSZXNldD17b25DbGlja1Jlc2V0fVxyXG4gICAgICAvPlxyXG4gICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG1iPXs2fT5cclxuICAgICAgICB7c2VsZWN0RGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxDU1ZMaW5rXHJcbiAgICAgICAgICAgIGRhdGE9e2NzdkRhdGF9XHJcbiAgICAgICAgICAgIGZpbGVuYW1lPXtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyBcIl96YWlrby5jc3ZcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQ3N2fT5cclxuICAgICAgICAgICAgICBDU1bjg4Djgqbjg7Pjg63jg7zjg4lcclxuICAgICAgICAgICAgICA8SWNvbiBhcz17RG93bmxvYWRJY29ufSAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ1NWTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxTZWFyY2hMaXN0XHJcbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cclxuICAgICAgICBzZWxlY3REYXRhPXtzZWxlY3REYXRhfVxyXG4gICAgICAgIGZpbHRlckl0ZW1zPXtmaWx0ZXJJdGVtc31cclxuICAgICAgICBvbkNsaWNrRGVsZXRlPXtvbkNsaWNrRGVsZXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9ja0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IFN0b2NrQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShcInphaWtvXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0b2NrQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17aXRlbXN9PntjaGlsZHJlbn08L1N0b2NrQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0NvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuLy8gVE9ETzogUmVwbGFjZSB0aGUgZm9sbG93aW5nIHdpdGggeW91ciBhcHAncyBGaXJlYmFzZSBwcm9qZWN0IGNvbmZpZ3VyYXRpb25cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUFUZlVBV2lBQXhVNkRHOGxTUUstRVgyZ3VwQUszc2hTWVwiLFxyXG4gIGF1dGhEb21haW46IFwiZGFpbWFydS16YWlrby5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZGFpbWFydS16YWlrb1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZGFpbWFydS16YWlrby5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM1NzI3Njc1OTE3M1wiLFxyXG4gIGFwcElkOiBcIjE6MzU3Mjc2NzU5MTczOndlYjphMWMwODcxNTVjNTNmY2MxYzMyNWVjXCJcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgU3RvY2sgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9ja1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgU3RvY2tDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHRzL1N0b2NrQ29udGV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZE1ldGFcIjtcbmltcG9ydCBNYWluVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblRpdGxlXCI7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpdGVtcywgcHJvZHVjdHMgfSA9IHByb3BzO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZih1c2VyPT09bnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgIH1cbiAgfSxbcm91dGVyLCB1c2VyXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdG9ja0NvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPEhlYWRcbiAgICAgICAgICB0aXRsZT17XCLlpKfkuLjnmb3ooaMg5Zyo5bqr6KGoXCJ9XG4gICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgXCLjg57jgqTjg6bjg4vjg5Xjgqnjg7zjg6Djgq/jg6njg5bjgajjgrvjg6zjg4rjg7zjg4fjga7llYblk4HlnKjluqvjgpLmpJzntKLjgZnjgovjgZPjgajjgYzjgafjgY3jgotXRULjgqLjg5fjg6rjgafjgZnjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TWFpblRpdGxlXG4gICAgICAgICAgaDJUaXRsZT17XCLlnKjluqvmpJzntKJcIn1cbiAgICAgICAgICBoM1RpdGxlPXtcIuWTgeeVquOCkuWFpeWKm+OBl+OBpuWcqOW6q+aknOe0ouOBjOOBp+OBjeOBvuOBmeOAglwifVxuICAgICAgICAvPlxuICAgICAgICA8U3RvY2sgaXRlbXM9e2l0ZW1zfSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICA8L1N0b2NrQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgW2l0ZW1zUmVzLCBwcm9kdWN0c1Jlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgYXhpb3MuZ2V0KFxuICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2VFBJRDBPeWVvOEZ3Tk42bERQRVRncmhkOE9zbXJSSjZSWnk1RU84MEc0dUdna2o3WlJoQ1o5T1hzVU5ERkYwYzVZV2Z3U3JCYUVoOV9QL3B1Yj9naWQ9MTM5OTIzOTk1OCZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2XCJcbiAgICApLFxuICAgIGF4aW9zLmdldChcImh0dHBzOi8vY2F0YWxvZy1pbmZvcm1hdGlvbi5taWNyb2Ntcy5pby9hcGkvdjEvcHJvZHVjdHNcIiwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtQVBJLUtFWVwiOiBcIjZhZGE2ZWEyLTkxYTctNDkxNC1hZmY3LTA4MDNlZjZkYjRiYlwiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSk7XG4gIGNvbnN0IHNwbGl0SXRlbXMgPSBhd2FpdCBpdGVtc1Jlcy5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KFwiLFwiKTtcbiAgbGV0IGl0ZW1zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjc3ZPYmplY3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgbGV0IGl0ZW1WYWx1ZXMgPSBzcGxpdEl0ZW1zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1LZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjc3ZPYmplY3RbaXRlbUtleXNbal1dID0gaXRlbVZhbHVlc1tqXTtcbiAgICB9XG4gICAgaXRlbXMucHVzaChjc3ZPYmplY3QpO1xuICB9XG4gIGl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogaW5kZXgsXG4gICAgICBjb2RlOiBpdGVtW1wi5ZWG5ZOB44Kz44O844OJXCJdLFxuICAgICAgbnVtYmVyOiBpdGVtW1wi5ZOB55WqXCJdLFxuICAgICAgbmFtZTogaXRlbVtcIuWVhuWTgeWQjVwiXSxcbiAgICAgIHByaWNlOiBpdGVtW1wi5LiK5LujXCJdLFxuICAgICAgc2l6ZTogaXRlbVtcIuOCteOCpOOCulwiXSxcbiAgICAgIHN0b2NrMTogaXRlbVtcIuWcqOW6q+aVsFwiXSxcbiAgICAgIHN0b2NrMjogaXRlbVtcIuWklumDqOWcqOW6q1wiXSxcbiAgICAgIHRvdGFsOiBpdGVtW1wiVE9UQUxcIl0sXG4gICAgICAvLyBzY2hlZHVsZTogaXRlbVtcIuS7leaOm1wiXSxcbiAgICAgIHF1YW50aXR5OiBpdGVtW1wi5pWw6YePXCJdLFxuICAgIH07XG4gIH0pO1xuICBjb25zdCBwcm9kdWN0cyA9IHByb2R1Y3RzUmVzLmRhdGEuY29udGVudHM7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbXMsXG4gICAgICBwcm9kdWN0cyxcbiAgICB9LFxuICB9O1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbi8vICAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL2UvMlBBQ1gtMXZUUElEME95ZW84RndOTjZsRFBFVGdyaGQ4T3NtclJKNlJaeTVFTzgwRzR1R2drajdaUmhDWjlPWHNVTkRGRjBjNVlXZndTckJhRWg5X1AvcHViP2dpZD0xMzk5MjM5OTU4JnNpbmdsZT10cnVlJm91dHB1dD1jc3ZcIlxuLy8gICApO1xuLy8gICBjb25zdCBzcGxpdEl0ZW1zID0gYXdhaXQgcmVzLmRhdGEuc3BsaXQoXCJcXG5cIik7XG4vLyAgIGNvbnN0IGl0ZW1LZXlzID0gYXdhaXQgc3BsaXRJdGVtc1swXS50cmltKCkuc3BsaXQoXCIsXCIpO1xuLy8gICBsZXQganNvbkRhdGFzID0gW107XG4vLyAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXRJdGVtcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGxldCBjc3ZPYmplY3QgPSBuZXcgT2JqZWN0KCk7XG4vLyAgICAgbGV0IGl0ZW1WYWx1ZXMgPSBzcGxpdEl0ZW1zW2ldLnNwbGl0KFwiLFwiKTtcbi8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1LZXlzLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICBjc3ZPYmplY3RbaXRlbUtleXNbal1dID0gaXRlbVZhbHVlc1tqXTtcbi8vICAgICB9XG4vLyAgICAganNvbkRhdGFzLnB1c2goY3N2T2JqZWN0KTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIGl0ZW1zOiBqc29uRGF0YXMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbi8vICAgICBcImh0dHBzOi8vZGFpbWFydS1oYWt1aS5taWNyb2Ntcy5pby9hcGkvdjEvY2F0YWxvZz9saW1pdD0yMDBcIixcbi8vICAgICB7XG4vLyAgICAgICBoZWFkZXJzOiB7IFwiWC1BUEktS0VZXCI6IHByb2Nlc3MuZW52LkFQSV9LRVkgfSxcbi8vICAgICB9XG4vLyAgICk7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBjYXRhbG9nczogZGF0YS5jb250ZW50cyxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmFkZVwiOiBcIlNlYXJjaExpc3RfZmFkZV9fMkZIZXNcIixcblx0XCJmYWRlMVwiOiBcIlNlYXJjaExpc3RfZmFkZTFfXzJaYkxqXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3N2XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=