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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-csv */ "react-csv");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormArea */ "./components/FormArea.tsx");
/* harmony import */ var _SearchList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchList */ "./components/SearchList.tsx");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__);


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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); //インプット入力値

  const {
    0: csvData,
    1: setCsvData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); //CSVデータ
  //numberの重複削除

  const filterItems = items.filter((item, index, self) => self.findIndex(e => e['number'] === item['number']) === index); //CSVファイルに変換

  const onClickCsv = () => {
    const csvData = items.filter(item => selectData.includes(item['number'])); //特定のkeyを削除したい時
    // delete items[0]["number"];

    csvData.filter(data => {
      delete data['id'];
    }); // const header = Object.keys(items[0]).join(",") + "\n";

    const header = '商品コード,品番,商品名,上代,サイズ,在庫数,外部在庫,TOTAL,仕掛数量\n';
    const body = csvData.map(d => {
      return Object.keys(d).map(key => d[key]).join(',');
    }).join('\n');
    const csvFile = header + body;
    setCsvData(csvFile);
  }; //INPUTの入力値を取得


  const handleChangeText = e => setInputValue(e.target.value); //検索絞り込み


  const onClickSearch = e => {
    e.preventDefault();
    let filterItem = filterItems.filter(item => item['number'] == inputValue); //Input入力値と同じオブジェクトを取り出す。

    let newData = filterItem.map(item => item['number']); //オブジェクトから品番だけを取り出す

    if (newData.length === 0) return; //データ空白であればリターンで返す。

    !selectData.includes(newData[0]) && setSelectData([...selectData, newData[0]]);
    setInputValue(''); // let filterItem = filterItems.filter((item) => {
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
    setInputValue('');
    setSelectData([]);
  }; //選択したnumberの削除


  const onClickDelete = (e, index) => {
    let deleteNumber = index;
    setSelectData([...selectData].filter((v, index) => index !== Number(deleteNumber)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormArea__WEBPACK_IMPORTED_MODULE_4__.default, {
      inputValue: inputValue,
      filterItems: filterItems,
      selectData: selectData,
      handleChangeText: handleChangeText,
      onClickSearch: onClickSearch,
      onClickReset: onClickReset
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      justifyContent: "center",
      mb: 6,
      children: selectData.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_csv__WEBPACK_IMPORTED_MODULE_3__.CSVLink, {
        data: csvData,
        filename: new Date().toLocaleString() + '_zaiko.csv',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: onClickCsv,
          children: ["CSV\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.DownloadIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchList__WEBPACK_IMPORTED_MODULE_5__.default, {
      items: items,
      products: products,
      selectData: selectData,
      filterItems: filterItems,
      onClickDelete: onClickDelete
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
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
    items
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
        title: '大丸白衣 在庫表',
        description: 'マイユニフォームクラブとセレナーデの商品在庫を検索することができるWEBアプリです。'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainTitle__WEBPACK_IMPORTED_MODULE_10__.default, {
        h2Title: '在庫検索',
        h3Title: '品番を入力して在庫検索ができます。'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stock__WEBPACK_IMPORTED_MODULE_6__.Stock, {
        items: items
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
  const [itemsRes] = await Promise.all([axios__WEBPACK_IMPORTED_MODULE_5___default().get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTPID0Oyeo8FwNN6lDPETgrhd8OsmrRJ6RZy5EO80G4uGgkj7ZRhCZ9OXsUNDFF0c5YWfwSrBaEh9_P/pub?gid=1399239958&single=true&output=csv')]);
  const splitItems = await itemsRes.data.split('\n');
  const itemKeys = await splitItems[0].trim().split(',');
  let items = [];

  for (let i = 1; i < splitItems.length; i++) {
    let csvObject = new Object();
    let itemValues = splitItems[i].split(',');

    for (let j = 0; j < itemKeys.length; j++) {
      csvObject[itemKeys[j]] = itemValues[j];
    }

    items.push(csvObject);
  }

  items = items.map((item, index) => {
    return {
      id: index,
      code: item['商品コード'],
      number: item['品番'],
      name: item['商品名'],
      price: item['上代'],
      size: item['サイズ'],
      stock1: item['在庫数'],
      stock2: item['外部在庫'],
      total: item['TOTAL'],
      // schedule: item["仕掛"],
      quantity: item['数量']
    };
  });
  return {
    props: {
      items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0Zvcm1BcmVhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRNZXRhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9NYWluVGl0bGUudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9TdG9jay50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29udGV4dHMvU3RvY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0b2NrLWFwcC8uL2ZpcmViYXNlL2F1dGguanMiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWNzdlwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb3JtQXJlYSIsInByb3BzIiwiaW5wdXRWYWx1ZSIsImZpbHRlckl0ZW1zIiwic2VsZWN0RGF0YSIsImhhbmRsZUNoYW5nZVRleHQiLCJvbkNsaWNrU2VhcmNoIiwib25DbGlja1Jlc2V0IiwibGVuZ3RoIiwibWFwIiwiZGF0YSIsImJhc2UiLCJtZCIsImUiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJTZWFyY2gySWNvbiIsIkhlYWRNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhlYWRlciIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VEaXNjbG9zdXJlIiwiaGFuZGxlVG9nZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nb3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJwdXNoIiwiTWFpblRpdGxlIiwiaDJUaXRsZSIsImgzVGl0bGUiLCJTZWFyY2hMaXN0IiwiaXRlbXMiLCJwcm9kdWN0cyIsIm9uQ2xpY2tEZWxldGUiLCJzaG93SXRlbSIsInNldFNob3dJdGVtIiwidXNlU3RhdGUiLCJvbkNsaWNrTW9kYWwiLCJTdHlsZXMiLCJwcm9kdWN0IiwiRGVsZXRlSWNvbiIsIl9faHRtbCIsIlN0b2NrIiwic2V0U2VsZWN0RGF0YSIsInNldElucHV0VmFsdWUiLCJjc3ZEYXRhIiwic2V0Q3N2RGF0YSIsImZpbHRlciIsInNlbGYiLCJmaW5kSW5kZXgiLCJvbkNsaWNrQ3N2IiwiaW5jbHVkZXMiLCJoZWFkZXIiLCJib2R5IiwiZCIsIk9iamVjdCIsImtleXMiLCJqb2luIiwiY3N2RmlsZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVySXRlbSIsIm5ld0RhdGEiLCJkZWxldGVOdW1iZXIiLCJ2IiwiTnVtYmVyIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiRG93bmxvYWRJY29uIiwiU3RvY2tDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlN0b2NrQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRJdGVtcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJIb21lIiwidXNlciIsInVzZUF1dGhTdGF0ZSIsInVzZUVmZmVjdCIsImdldFN0YXRpY1Byb3BzIiwiaXRlbXNSZXMiLCJQcm9taXNlIiwiYWxsIiwiYXhpb3MiLCJzcGxpdEl0ZW1zIiwic3BsaXQiLCJpdGVtS2V5cyIsInRyaW0iLCJpIiwiY3N2T2JqZWN0IiwiaXRlbVZhbHVlcyIsImoiLCJpZCIsImNvZGUiLCJudW1iZXIiLCJuYW1lIiwicHJpY2UiLCJzaXplIiwic3RvY2sxIiwic3RvY2syIiwidG90YWwiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVdBLE1BQU1BLFFBQXlCLEdBQUlDLEtBQUQsSUFBVztBQUMzQyxRQUFNO0FBQ0pDLGNBREk7QUFFSkMsZUFGSTtBQUdKQyxjQUhJO0FBSUpDLG9CQUpJO0FBS0pDLGlCQUxJO0FBTUpDO0FBTkksTUFPRk4sS0FQSjtBQVNBLHNCQUNFO0FBQU0sWUFBUSxFQUFFSyxhQUFoQjtBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQ0UsT0FBQyxFQUFDLE1BREo7QUFFRSxvQkFBYyxFQUFDLFFBRmpCO0FBR0UsZ0JBQVUsRUFBQyxRQUhiO0FBSUUsUUFBRSxFQUFFLENBSk47QUFLRSxRQUFFLEVBQUUsRUFMTjtBQUFBLDhCQU9FLDhEQUFDLG1EQUFEO0FBQ0UsZ0JBQVEsRUFBRUQsZ0JBRFo7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLGFB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SFA7QUFJTGdHLFVBQUksRUFBRWhHLElBQUksQ0FBQyxLQUFELENBSkw7QUFLTGlHLFdBQUssRUFBRWpHLElBQUksQ0FBQyxJQUFELENBTE47QUFNTGtHLFVBQUksRUFBRWxHLElBQUksQ0FBQyxLQUFELENBTkw7QUFPTG1HLFlBQU0sRUFBRW5HLElBQUksQ0FBQyxLQUFELENBUFA7QUFRTG9HLFlBQU0sRUFBRXBHLElBQUksQ0FBQyxNQUFELENBUlA7QUFTTHFHLFdBQUssRUFBRXJHLElBQUksQ0FBQyxPQUFELENBVE47QUFVTDtBQUNBc0csY0FBUSxFQUFFdEcsSUFBSSxDQUFDLElBQUQ7QUFYVCxLQUFQO0FBYUQsR0FkTyxDQUFSO0FBZ0JBLFNBQU87QUFDTGQsU0FBSyxFQUFFO0FBQ0xxQztBQURLO0FBREYsR0FBUDtBQUtELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2gySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgSW5wdXQsIElucHV0R3JvdXAgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBmaWx0ZXJJdGVtczogW107XHJcbiAgc2VsZWN0RGF0YTogYW55O1xyXG4gIGhhbmRsZUNoYW5nZVRleHQ6IGFueTtcclxuICBvbkNsaWNrU2VhcmNoOiBhbnk7XHJcbiAgb25DbGlja1Jlc2V0OiBWb2lkRnVuY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBGb3JtQXJlYTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW5wdXRWYWx1ZSxcclxuICAgIGZpbHRlckl0ZW1zLFxyXG4gICAgc2VsZWN0RGF0YSxcclxuICAgIGhhbmRsZUNoYW5nZVRleHQsXHJcbiAgICBvbkNsaWNrU2VhcmNoLFxyXG4gICAgb25DbGlja1Jlc2V0LFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtvbkNsaWNrU2VhcmNofT5cclxuICAgICAgPElucHV0R3JvdXBcclxuICAgICAgICB3PVwiYXV0b1wiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHB5PXs2fVxyXG4gICAgICAgIHB4PXsxMH1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgc2VsZWN0RGF0YS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyBzZWxlY3REYXRhLm1hcCgoZGF0YSkgPT4gYCAke2RhdGF9IGApXHJcbiAgICAgICAgICAgICAgOiBcIuS+iylTUDEyNVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaXN0PVwic2VhcmNoXCJcclxuICAgICAgICAgIHc9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjQ1MHB4XCIgfX1cclxuICAgICAgICAgIG1yPXsxfVxyXG4gICAgICAgICAgcHk9ezZ9XHJcbiAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gKGUua2V5ID09IFwiRW50ZXJcIiA/IG9uQ2xpY2tTZWFyY2goZSkgOiBmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJzZWFyY2hcIj5cclxuICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW1bXCJudW1iZXJcIl19PlxyXG4gICAgICAgICAgICAgIHtpdGVtW1wibmFtZVwiXX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yU2NoZW1lPVwidGVhbFwiIHB4PXs1fSBweT17Nn0gbXI9ezF9PlxyXG4gICAgICAgICAgPEljb24gYXM9e1NlYXJjaDJJY29ufSBtcj17MX0gLz5cclxuICAgICAgICAgIOaknOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja1Jlc2V0fSBjb2xvclNjaGVtZT1cInJlZFwiIHB4PXs1fSBweT17Nn0+XHJcbiAgICAgICAgICBSRVNFVFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1BcmVhO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IEhlYWRNZXRhID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+ICovfVxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9IC8+ICovfVxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e1wiL2Zhdmljb24ucG5nXCJ9IC8+ICovfVxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICB7LyogPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17a2V5d29yZH0gLz4gKi99XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj17XCIvZmF2aWNvbi5wbmdcIn0gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkTWV0YTtcclxuIiwiaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEZsZXgsXHJcbiAgSGVhZGluZyxcclxuICBMaW5rLFxyXG4gIFN0YWNrLFxyXG4gIFRleHQsXHJcbiAgU3BhY2VyLFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4gKGlzT3BlbiA/IG9uQ2xvc2UoKSA6IG9uT3BlbigpKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBsb2dvdXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhdXRoLnNpZ25PdXQoKTtcclxuICAgIHJvdXRlci5wdXNoKCdsb2dpbicpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgd3JhcD1cIndyYXBcIlxyXG4gICAgICBwYWRkaW5nPXs0fVxyXG4gICAgICBiZz1cInRlYWwuNTAwXCJcclxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBsZXR0ZXJTcGFjaW5nPXtcInRpZ2h0ZXJcIn0+XHJcbiAgICAgICAgICBEQUlNQVJVIEhBS1VJXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICA8Qm94IGRpc3BsYXk9e3sgYmFzZTogXCJibG9ja1wiLCBtZDogXCJub25lXCIgfX0gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICA8SGFtYnVyZ2VySWNvbiAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgXHJcbiAgICAgIDxTdGFja1xyXG4gICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxyXG4gICAgICAgIGRpc3BsYXk9e3sgYmFzZTogaXNPcGVuID8gXCJibG9ja1wiIDogXCJub25lXCIsIG1kOiBcImZsZXhcIiB9fVxyXG4gICAgICAgIHdpZHRoPXt7IGJhc2U6IFwiZnVsbFwiLCBtZDogXCJhdXRvXCIgfX1cclxuICAgICAgICBhbGlnbkl0ZW1zPVwicmlnaHRcIlxyXG4gICAgICAgIC8vIGZsZXhHcm93PXsxfVxyXG4gICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgID5cclxuICAgICAgICBcclxuICAgICAgICA8TGluayB0ZXh0Q29sb3I9e1wid2hpdGVcIn0gb25DbGljaz17bG9nb3V0fSA+44Ot44Kw44Ki44Km44OIPC9MaW5rPlxyXG4gICAgICA8L1N0YWNrPlxyXG57LyogXHJcbiAgICAgIDxCb3hcclxuICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJibG9ja1wiIH19XHJcbiAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgPjwvQm94PiAqL31cclxuICAgXHJcbiAgICA8L0ZsZXg+XHJcbiAgICBcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTdGFjaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1haW5UaXRsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaDJUaXRsZSwgaDNUaXRsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGFjayBzcGFjaW5nPXszfSBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbXQ9ezE2fT5cclxuICAgICAgPFRleHQgZm9udFNpemU9XCIzeGxcIiBhcz1cImgyXCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICB7aDJUaXRsZX1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgYXM9XCJoM1wiIHB4PXszfT5cclxuICAgICAgICB7aDNUaXRsZX1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9TdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblRpdGxlO1xyXG4iLCJpbXBvcnQgeyBEZWxldGVJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEZsZXgsXHJcbiAgSWNvbixcclxuICBNb2RhbCxcclxuICBNb2RhbEJvZHksXHJcbiAgTW9kYWxDbG9zZUJ1dHRvbixcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxGb290ZXIsXHJcbiAgTW9kYWxIZWFkZXIsXHJcbiAgTW9kYWxPdmVybGF5LFxyXG4gIFRhYmxlLFxyXG4gIFRhYmxlQ2FwdGlvbixcclxuICBUYm9keSxcclxuICBUZCxcclxuICBUaCxcclxuICBUaGVhZCxcclxuICBUcixcclxuICB1c2VEaXNjbG9zdXJlLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vU2VhcmNoTGlzdC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBTZWFyY2hMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpdGVtcywgcHJvZHVjdHMsIHNlbGVjdERhdGEsIGZpbHRlckl0ZW1zLCBvbkNsaWNrRGVsZXRlIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3QgW3Nob3dJdGVtLCBzZXRTaG93SXRlbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBvbkNsaWNrTW9kYWwgPSAoZGF0YSkgPT4gc2V0U2hvd0l0ZW0oZGF0YSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW4tcmV2ZXJzZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7c2VsZWN0RGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHB4PXs1fVxyXG4gICAgICAgICAgICBtYj17NX1cclxuICAgICAgICAgICAgbXg9ezJ9XHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17NX1cclxuICAgICAgICAgICAgYm94U2hhZG93PVwiYmFzZVwiXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLmZhZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgIHc9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjYwMHB4XCIgfX1cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdHJpcGVkXCJcclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyYXlcIlxyXG4gICAgICAgICAgICAgIG1iPXs2fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2FwdGlvbiBwbGFjZW1lbnQ9XCJ0b3BcIiBweD17MH0gbWI9ezJ9IGZvbnRTaXplPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCJ4c1wiLCBtZDogXCJtZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXI9ezJ9PntkYXRhfTwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXI9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW1bXCJudW1iZXJcIl0gPT0gZGF0YSAmJiBpdGVtW1wibmFtZVwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtcIm51bWJlclwiXSA9PSBkYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtcInByaWNlXCJdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCLvv6VcIiArIGl0ZW1bXCJwcmljZVwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHByb2R1Y3QsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0W1wibW9kZWxcIl0gPT0gZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja01vZGFsKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6Kmz57SwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tEZWxldGUoZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtEZWxldGVJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNhcHRpb24+XHJcbiAgICAgICAgICAgICAgPFRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+44K144Kk44K6PC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuWcqOW6q+aVsDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249XCJjZW50ZXJcIj7lpJbpg6jlnKjluqs8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+VE9UQUw8L1RoPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuS7leaOm+e0jeacnzwvVGg+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+5LuV5o6b5pWw6YePPC9UaD5cclxuICAgICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgICAgPC9UaGVhZD5cclxuICAgICAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbVtcIm51bWJlclwiXSA9PSBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic2l6ZVwiXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCJzdG9jazFcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic3RvY2syXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249XCJjZW50ZXJcIj57aXRlbVtcInRvdGFsXCJdfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCJzY2hlZHVsZVwiXX08L1RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wicXVhbnRpdHlcIl19PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9UYm9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gc2l6ZT1cInhsXCI+XHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJvZHVjdFtcIm1vZGVsXCJdID09IHNob3dJdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsQ29udGVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RbXCJtb2RlbFwiXX1cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RbXCJjYXRlZ29yeVwiXX1cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHByb2R1Y3RbXCJzaXplX3NwZWNcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hMaXN0O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGbGV4LCBJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDU1ZMaW5rIH0gZnJvbSAncmVhY3QtY3N2JztcclxuaW1wb3J0IEZvcm1BcmVhIGZyb20gJy4vRm9ybUFyZWEnO1xyXG5pbXBvcnQgU2VhcmNoTGlzdCBmcm9tICcuL1NlYXJjaExpc3QnO1xyXG5pbXBvcnQgeyBEb3dubG9hZEljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaWNlOiBzdHJpbmc7XHJcbiAgc2l6ZTogc3RyaW5nO1xyXG4gIHN0b2NrMTogbnVtYmVyO1xyXG4gIHN0b2NrMjogbnVtYmVyO1xyXG4gIHRvdGFsOiBudW1iZXI7XHJcbiAgLy8gc2NoZWR1bGU6IHN0cmluZztcclxuICBxdWFudGl0eTogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b2NrOiBSZWFjdC5GQzxhbnk+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpdGVtcywgcHJvZHVjdHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3REYXRhLCBzZXRTZWxlY3REYXRhXSA9IHVzZVN0YXRlKFtdKTsgLy/mpJzntKLmmYLjgavjgqTjg7Pjg5fjg4Pjg4jlhaXlipvjgZfjgZ/phY3liJfjg6rjgrnjg4hcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7IC8v44Kk44Oz44OX44OD44OI5YWl5Yqb5YCkXHJcbiAgY29uc3QgW2NzdkRhdGEsIHNldENzdkRhdGFdID0gdXNlU3RhdGUoJycpOyAvL0NTVuODh+ODvOOCv1xyXG5cclxuICAvL251bWJlcuOBrumHjeikh+WJiumZpFxyXG4gIGNvbnN0IGZpbHRlckl0ZW1zID0gaXRlbXMuZmlsdGVyKFxyXG4gICAgKGl0ZW0sIGluZGV4LCBzZWxmKSA9PlxyXG4gICAgICBzZWxmLmZpbmRJbmRleCgoZSkgPT4gZVsnbnVtYmVyJ10gPT09IGl0ZW1bJ251bWJlciddKSA9PT0gaW5kZXhcclxuICApO1xyXG5cclxuICAvL0NTVuODleOCoeOCpOODq+OBq+WkieaPm1xyXG4gIGNvbnN0IG9uQ2xpY2tDc3YgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjc3ZEYXRhID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBzZWxlY3REYXRhLmluY2x1ZGVzKGl0ZW1bJ251bWJlciddKSk7XHJcblxyXG4gICAgLy/nibnlrprjga5rZXnjgpLliYrpmaTjgZfjgZ/jgYTmmYJcclxuICAgIC8vIGRlbGV0ZSBpdGVtc1swXVtcIm51bWJlclwiXTtcclxuICAgIGNzdkRhdGEuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgIGRlbGV0ZSBkYXRhWydpZCddO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgaGVhZGVyID0gT2JqZWN0LmtleXMoaXRlbXNbMF0pLmpvaW4oXCIsXCIpICsgXCJcXG5cIjtcclxuICAgIGNvbnN0IGhlYWRlciA9XHJcbiAgICAgICfllYblk4HjgrPjg7zjg4ks5ZOB55WqLOWVhuWTgeWQjSzkuIrku6Ms44K144Kk44K6LOWcqOW6q+aVsCzlpJbpg6jlnKjluqssVE9UQUws5LuV5o6b5pWw6YePXFxuJztcclxuXHJcbiAgICBjb25zdCBib2R5ID0gY3N2RGF0YVxyXG4gICAgICAubWFwKChkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGQpXHJcbiAgICAgICAgICAubWFwKChrZXkpID0+IGRba2V5XSlcclxuICAgICAgICAgIC5qb2luKCcsJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCdcXG4nKTtcclxuICAgIGNvbnN0IGNzdkZpbGUgPSBoZWFkZXIgKyBib2R5O1xyXG4gICAgc2V0Q3N2RGF0YShjc3ZGaWxlKTtcclxuICB9O1xyXG5cclxuICAvL0lOUFVU44Gu5YWl5Yqb5YCk44KS5Y+W5b6XXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGV4dCA9IChlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgLy/mpJzntKLntZ7jgorovrzjgb9cclxuICBjb25zdCBvbkNsaWNrU2VhcmNoID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmaWx0ZXJJdGVtID0gZmlsdGVySXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtWydudW1iZXInXSA9PSBpbnB1dFZhbHVlKTsgLy9JbnB1dOWFpeWKm+WApOOBqOWQjOOBmOOCquODluOCuOOCp+OCr+ODiOOCkuWPluOCiuWHuuOBmeOAglxyXG4gICAgbGV0IG5ld0RhdGEgPSBmaWx0ZXJJdGVtLm1hcCgoaXRlbSkgPT4gaXRlbVsnbnVtYmVyJ10pOyAvL+OCquODluOCuOOCp+OCr+ODiOOBi+OCieWTgeeVquOBoOOBkeOCkuWPluOCiuWHuuOBmVxyXG4gICAgaWYgKG5ld0RhdGEubGVuZ3RoID09PSAwKSByZXR1cm47IC8v44OH44O844K/56m655m944Gn44GC44KM44Gw44Oq44K/44O844Oz44Gn6L+U44GZ44CCXHJcblxyXG4gICAgIXNlbGVjdERhdGEuaW5jbHVkZXMobmV3RGF0YVswXSkgJiZcclxuICAgICAgc2V0U2VsZWN0RGF0YShbLi4uc2VsZWN0RGF0YSwgbmV3RGF0YVswXV0pO1xyXG5cclxuICAgIHNldElucHV0VmFsdWUoJycpO1xyXG5cclxuICAgIC8vIGxldCBmaWx0ZXJJdGVtID0gZmlsdGVySXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiBpdGVtW1wibnVtYmVyXCJdLmluY2x1ZGVzKGlucHV0VmFsdWUpO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBsZXQgbmV3RGF0YSA9IGZpbHRlckl0ZW0ubWFwKCh2KSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiB2W1wibnVtYmVyXCJdO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gaWYgKG5ld0RhdGEubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAvLyBuZXdEYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgLy8gICBpZiAoIXNlbGVjdERhdGEuaW5jbHVkZXMoZGF0YSkpIHtcclxuICAgIC8vICAgICBzZXRTZWxlY3REYXRhKChwcmV2KSA9PiBbLi4ucHJldiwgZGF0YV0pO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy/pgbjmip7jgZfjgabjgYTjgovlhajjgabjga5udW1iZXLjgpLliYrpmaRcclxuICBjb25zdCBvbkNsaWNrUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnB1dFZhbHVlKCcnKTtcclxuICAgIHNldFNlbGVjdERhdGEoW10pO1xyXG4gIH07XHJcblxyXG4gIC8v6YG45oqe44GX44GfbnVtYmVy44Gu5YmK6ZmkXHJcbiAgY29uc3Qgb25DbGlja0RlbGV0ZSA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IGRlbGV0ZU51bWJlciA9IGluZGV4O1xyXG4gICAgc2V0U2VsZWN0RGF0YShcclxuICAgICAgWy4uLnNlbGVjdERhdGFdLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICE9PSBOdW1iZXIoZGVsZXRlTnVtYmVyKSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtQXJlYVxyXG4gICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgZmlsdGVySXRlbXM9e2ZpbHRlckl0ZW1zfVxyXG4gICAgICAgIHNlbGVjdERhdGE9e3NlbGVjdERhdGF9XHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlVGV4dD17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICBvbkNsaWNrU2VhcmNoPXtvbkNsaWNrU2VhcmNofVxyXG4gICAgICAgIG9uQ2xpY2tSZXNldD17b25DbGlja1Jlc2V0fVxyXG4gICAgICAvPlxyXG4gICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBtYj17Nn0+XHJcbiAgICAgICAge3NlbGVjdERhdGEubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8Q1NWTGlua1xyXG4gICAgICAgICAgICBkYXRhPXtjc3ZEYXRhfVxyXG4gICAgICAgICAgICBmaWxlbmFtZT17bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpICsgJ196YWlrby5jc3YnfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDc3Z9PlxyXG4gICAgICAgICAgICAgIENTVuODgOOCpuODs+ODreODvOODiVxyXG4gICAgICAgICAgICAgIDxJY29uIGFzPXtEb3dubG9hZEljb259IC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9DU1ZMaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPFNlYXJjaExpc3RcclxuICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzfVxyXG4gICAgICAgIHNlbGVjdERhdGE9e3NlbGVjdERhdGF9XHJcbiAgICAgICAgZmlsdGVySXRlbXM9e2ZpbHRlckl0ZW1zfVxyXG4gICAgICAgIG9uQ2xpY2tEZWxldGU9e29uQ2xpY2tEZWxldGV9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b2NrQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuY29uc3QgU3RvY2tDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFwiemFpa29cIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvY2tDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpdGVtc30+e2NoaWxkcmVufTwvU3RvY2tDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0b2NrQ29udGV4dFByb3ZpZGVyO1xyXG4iLCJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG4vLyBUT0RPOiBSZXBsYWNlIHRoZSBmb2xsb3dpbmcgd2l0aCB5b3VyIGFwcCdzIEZpcmViYXNlIHByb2plY3QgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QVRmVUFXaUFBeFU2REc4bFNRSy1FWDJndXBBSzNzaFNZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJkYWltYXJ1LXphaWtvLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJkYWltYXJ1LXphaWtvXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJkYWltYXJ1LXphaWtvLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzU3Mjc2NzU5MTczXCIsXHJcbiAgYXBwSWQ6IFwiMTozNTcyNzY3NTkxNzM6d2ViOmExYzA4NzE1NWM1M2ZjYzFjMzI1ZWNcIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgU3RvY2sgfSBmcm9tICcuLi9jb21wb25lbnRzL1N0b2NrJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBTdG9ja0NvbnRleHRQcm92aWRlciBmcm9tICcuLi9jb250ZXh0cy9TdG9ja0NvbnRleHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkTWV0YSc7XG5pbXBvcnQgTWFpblRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpblRpdGxlJztcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBwcm9wcztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt1c2VyXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlciA9PT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgIH1cbiAgfSwgW3JvdXRlciwgdXNlcl0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RvY2tDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxIZWFkXG4gICAgICAgICAgdGl0bGU9eyflpKfkuLjnmb3ooaMg5Zyo5bqr6KGoJ31cbiAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAn44Oe44Kk44Om44OL44OV44Kp44O844Og44Kv44Op44OW44Go44K744Os44OK44O844OH44Gu5ZWG5ZOB5Zyo5bqr44KS5qSc57Si44GZ44KL44GT44Go44GM44Gn44GN44KLV0VC44Ki44OX44Oq44Gn44GZ44CCJ1xuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TWFpblRpdGxlXG4gICAgICAgICAgaDJUaXRsZT17J+WcqOW6q+aknOe0oid9XG4gICAgICAgICAgaDNUaXRsZT17J+WTgeeVquOCkuWFpeWKm+OBl+OBpuWcqOW6q+aknOe0ouOBjOOBp+OBjeOBvuOBmeOAgid9XG4gICAgICAgIC8+XG4gICAgICAgIDxTdG9jayBpdGVtcz17aXRlbXN9IC8+XG4gICAgICA8L1N0b2NrQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgW2l0ZW1zUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBheGlvcy5nZXQoXG4gICAgICAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlRQSUQwT3llbzhGd05ONmxEUEVUZ3JoZDhPc21yUko2Ulp5NUVPODBHNHVHZ2tqN1pSaENaOU9Yc1VOREZGMGM1WVdmd1NyQmFFaDlfUC9wdWI/Z2lkPTEzOTkyMzk5NTgmc2luZ2xlPXRydWUmb3V0cHV0PWNzdidcbiAgICApLFxuICBdKTtcbiAgY29uc3Qgc3BsaXRJdGVtcyA9IGF3YWl0IGl0ZW1zUmVzLmRhdGEuc3BsaXQoJ1xcbicpO1xuICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KCcsJyk7XG4gIGxldCBpdGVtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdCgnLCcpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNzdk9iamVjdFtpdGVtS2V5c1tqXV0gPSBpdGVtVmFsdWVzW2pdO1xuICAgIH1cbiAgICBpdGVtcy5wdXNoKGNzdk9iamVjdCk7XG4gIH1cbiAgaXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpbmRleCxcbiAgICAgIGNvZGU6IGl0ZW1bJ+WVhuWTgeOCs+ODvOODiSddLFxuICAgICAgbnVtYmVyOiBpdGVtWyflk4HnlaonXSxcbiAgICAgIG5hbWU6IGl0ZW1bJ+WVhuWTgeWQjSddLFxuICAgICAgcHJpY2U6IGl0ZW1bJ+S4iuS7oyddLFxuICAgICAgc2l6ZTogaXRlbVsn44K144Kk44K6J10sXG4gICAgICBzdG9jazE6IGl0ZW1bJ+WcqOW6q+aVsCddLFxuICAgICAgc3RvY2syOiBpdGVtWyflpJbpg6jlnKjluqsnXSxcbiAgICAgIHRvdGFsOiBpdGVtWydUT1RBTCddLFxuICAgICAgLy8gc2NoZWR1bGU6IGl0ZW1bXCLku5XmjptcIl0sXG4gICAgICBxdWFudGl0eTogaXRlbVsn5pWw6YePJ10sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbXMsXG4gICAgfSxcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4vLyAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2VFBJRDBPeWVvOEZ3Tk42bERQRVRncmhkOE9zbXJSSjZSWnk1RU84MEc0dUdna2o3WlJoQ1o5T1hzVU5ERkYwYzVZV2Z3U3JCYUVoOV9QL3B1Yj9naWQ9MTM5OTIzOTk1OCZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2XCJcbi8vICAgKTtcbi8vICAgY29uc3Qgc3BsaXRJdGVtcyA9IGF3YWl0IHJlcy5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuLy8gICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KFwiLFwiKTtcbi8vICAgbGV0IGpzb25EYXRhcyA9IFtdO1xuLy8gICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuLy8gICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdChcIixcIik7XG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtS2V5cy5sZW5ndGg7IGorKykge1xuLy8gICAgICAgY3N2T2JqZWN0W2l0ZW1LZXlzW2pdXSA9IGl0ZW1WYWx1ZXNbal07XG4vLyAgICAgfVxuLy8gICAgIGpzb25EYXRhcy5wdXNoKGNzdk9iamVjdCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBpdGVtczoganNvbkRhdGFzLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgXCJodHRwczovL2RhaW1hcnUtaGFrdWkubWljcm9jbXMuaW8vYXBpL3YxL2NhdGFsb2c/bGltaXQ9MjAwXCIsXG4vLyAgICAge1xuLy8gICAgICAgaGVhZGVyczogeyBcIlgtQVBJLUtFWVwiOiBwcm9jZXNzLmVudi5BUElfS0VZIH0sXG4vLyAgICAgfVxuLy8gICApO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgY2F0YWxvZ3M6IGRhdGEuY29udGVudHMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZhZGVcIjogXCJTZWFyY2hMaXN0X2ZhZGVfXzJGSGVzXCIsXG5cdFwiZmFkZTFcIjogXCJTZWFyY2hMaXN0X2ZhZGUxX18yWmJMalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNzdlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9