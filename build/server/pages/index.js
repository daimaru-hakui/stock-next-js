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
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');

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
            base: '100%',
            md: '600px'
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
                  base: 'xs',
                  md: 'md'
                },
                direction: {
                  base: 'column',
                  md: 'row'
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
                  children: filterItems.map(item => item['number'] == data && item['name'])
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                  children: filterItems.map(item => item['number'] == data && item['price'] && '￥' + item['price'])
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
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
                }, undefined)
              }, void 0, false, {
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
              if (item['number'] == data) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tr, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item['size']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item['stock1']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item['stock2']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item['total']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Td, {
                    textAlign: "center",
                    children: item['quantity']
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0Zvcm1BcmVhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRNZXRhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9NYWluVGl0bGUudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9TdG9jay50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29udGV4dHMvU3RvY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0b2NrLWFwcC8uL2ZpcmViYXNlL2F1dGguanMiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWNzdlwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb3JtQXJlYSIsInByb3BzIiwiaW5wdXRWYWx1ZSIsImZpbHRlckl0ZW1zIiwic2VsZWN0RGF0YSIsImhhbmRsZUNoYW5nZVRleHQiLCJvbkNsaWNrU2VhcmNoIiwib25DbGlja1Jlc2V0IiwibGVuZ3RoIiwibWFwIiwiZGF0YSIsImJhc2UiLCJtZCIsImUiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJTZWFyY2gySWNvbiIsIkhlYWRNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhlYWRlciIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VEaXNjbG9zdXJlIiwiaGFuZGxlVG9nZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nb3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJwdXNoIiwiTWFpblRpdGxlIiwiaDJUaXRsZSIsImgzVGl0bGUiLCJTZWFyY2hMaXN0IiwiaXRlbXMiLCJwcm9kdWN0cyIsIm9uQ2xpY2tEZWxldGUiLCJzaG93SXRlbSIsInNldFNob3dJdGVtIiwidXNlU3RhdGUiLCJvbkNsaWNrTW9kYWwiLCJTdHlsZXMiLCJEZWxldGVJY29uIiwiU3RvY2siLCJzZXRTZWxlY3REYXRhIiwic2V0SW5wdXRWYWx1ZSIsImNzdkRhdGEiLCJzZXRDc3ZEYXRhIiwiZmlsdGVyIiwic2VsZiIsImZpbmRJbmRleCIsIm9uQ2xpY2tDc3YiLCJpbmNsdWRlcyIsImhlYWRlciIsImJvZHkiLCJkIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJjc3ZGaWxlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJJdGVtIiwibmV3RGF0YSIsImRlbGV0ZU51bWJlciIsInYiLCJOdW1iZXIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJEb3dubG9hZEljb24iLCJTdG9ja0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3RvY2tDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldEl0ZW1zIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkhvbWUiLCJ1c2VyIiwidXNlQXV0aFN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U3RhdGljUHJvcHMiLCJpdGVtc1JlcyIsIlByb21pc2UiLCJhbGwiLCJheGlvcyIsInNwbGl0SXRlbXMiLCJzcGxpdCIsIml0ZW1LZXlzIiwidHJpbSIsImkiLCJjc3ZPYmplY3QiLCJpdGVtVmFsdWVzIiwiaiIsImlkIiwiY29kZSIsIm51bWJlciIsIm5hbWUiLCJwcmljZSIsInNpemUiLCJzdG9jazEiLCJzdG9jazIiLCJ0b3RhbCIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBV0EsTUFBTUEsUUFBeUIsR0FBSUMsS0FBRCxJQUFXO0FBQzNDLFFBQU07QUFDSkMsY0FESTtBQUVKQyxlQUZJO0FBR0pDLGNBSEk7QUFJSkMsb0JBSkk7QUFLSkMsaUJBTEk7QUFNSkM7QUFOSSxNQU9GTixLQVBKO0FBU0Esc0JBQ0U7QUFBTSxZQUFRLEVBQUVLLGFBQWhCO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxPQUFDLEVBQUMsTUFESjtBQUVFLG9CQUFjLEVBQUMsUUFGakI7QUFHRSxnQkFBVSxFQUFDLFFBSGI7QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxFQUxOO0FBQUEsOEJBT0UsOERBQUMsbURBQUQ7QUFDRSxnQkFBUSxFQUFFRCxnQkFEWjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsYUFBSyxFQUFFSCxVQUhUO0FBSUUs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SSxDQUFDLEtBQUQsQ0FOTDtBQU9MaUcsWUFBTSxFQUFFakcsSUFBSSxDQUFDLEtBQUQsQ0FQUDtBQVFMa0csWUFBTSxFQUFFbEcsSUFBSSxDQUFDLE1BQUQsQ0FSUDtBQVNMbUcsV0FBSyxFQUFFbkcsSUFBSSxDQUFDLE9BQUQsQ0FUTjtBQVVMO0FBQ0FvRyxjQUFRLEVBQUVwRyxJQUFJLENBQUMsSUFBRDtBQVhULEtBQVA7QUFhRCxHQWRPLENBQVI7QUFnQkEsU0FBTztBQUNMZCxTQUFLLEVBQUU7QUFDTHFDO0FBREs7QUFERixHQUFQO0FBS0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaDJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBJbnB1dCwgSW5wdXRHcm91cCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIGZpbHRlckl0ZW1zOiBbXTtcclxuICBzZWxlY3REYXRhOiBhbnk7XHJcbiAgaGFuZGxlQ2hhbmdlVGV4dDogYW55O1xyXG4gIG9uQ2xpY2tTZWFyY2g6IGFueTtcclxuICBvbkNsaWNrUmVzZXQ6IFZvaWRGdW5jdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IEZvcm1BcmVhOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbnB1dFZhbHVlLFxyXG4gICAgZmlsdGVySXRlbXMsXHJcbiAgICBzZWxlY3REYXRhLFxyXG4gICAgaGFuZGxlQ2hhbmdlVGV4dCxcclxuICAgIG9uQ2xpY2tTZWFyY2gsXHJcbiAgICBvbkNsaWNrUmVzZXQsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uQ2xpY2tTZWFyY2h9PlxyXG4gICAgICA8SW5wdXRHcm91cFxyXG4gICAgICAgIHc9XCJhdXRvXCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgcHk9ezZ9XHJcbiAgICAgICAgcHg9ezEwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVGV4dH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICAgICBzZWxlY3REYXRhLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IHNlbGVjdERhdGEubWFwKChkYXRhKSA9PiBgICR7ZGF0YX0gYClcclxuICAgICAgICAgICAgICA6IFwi5L6LKVNQMTI1XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpc3Q9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgdz17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiNDUwcHhcIiB9fVxyXG4gICAgICAgICAgbXI9ezF9XHJcbiAgICAgICAgICBweT17Nn1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiAoZS5rZXkgPT0gXCJFbnRlclwiID8gb25DbGlja1NlYXJjaChlKSA6IGZhbHNlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cInNlYXJjaFwiPlxyXG4gICAgICAgICAge2ZpbHRlckl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbVtcIm51bWJlclwiXX0+XHJcbiAgICAgICAgICAgICAge2l0ZW1bXCJuYW1lXCJdfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3JTY2hlbWU9XCJ0ZWFsXCIgcHg9ezV9IHB5PXs2fSBtcj17MX0+XHJcbiAgICAgICAgICA8SWNvbiBhcz17U2VhcmNoMkljb259IG1yPXsxfSAvPlxyXG4gICAgICAgICAg5qSc57SiXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrUmVzZXR9IGNvbG9yU2NoZW1lPVwicmVkXCIgcHg9ezV9IHB5PXs2fT5cclxuICAgICAgICAgIFJFU0VUXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUFyZWE7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuY29uc3QgSGVhZE1ldGEgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz4gKi99XHJcbiAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0gLz4gKi99XHJcbiAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17XCIvZmF2aWNvbi5wbmdcIn0gLz4gKi99XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgIHsvKiA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtrZXl3b3JkfSAvPiAqL31cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPXtcIi9mYXZpY29uLnBuZ1wifSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRNZXRhO1xyXG4iLCJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRmxleCxcclxuICBIZWFkaW5nLFxyXG4gIExpbmssXHJcbiAgU3RhY2ssXHJcbiAgVGV4dCxcclxuICBTcGFjZXIsXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiAoaXNPcGVuID8gb25DbG9zZSgpIDogb25PcGVuKCkpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGxvZ291dCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF1dGguc2lnbk91dCgpO1xyXG4gICAgcm91dGVyLnB1c2goJ2xvZ2luJyk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBhcz1cIm5hdlwiXHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgIHBhZGRpbmc9ezR9XHJcbiAgICAgIGJnPVwidGVhbC41MDBcIlxyXG4gICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgID5cclxuICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9e1widGlnaHRlclwifT5cclxuICAgICAgICAgIERBSU1BUlUgSEFLVUlcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgIDxCb3ggZGlzcGxheT17eyBiYXNlOiBcImJsb2NrXCIsIG1kOiBcIm5vbmVcIiB9fSBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgIDxIYW1idXJnZXJJY29uIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICBcclxuICAgICAgPFN0YWNrXHJcbiAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XHJcbiAgICAgICAgZGlzcGxheT17eyBiYXNlOiBpc09wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiZmxleFwiIH19XHJcbiAgICAgICAgd2lkdGg9e3sgYmFzZTogXCJmdWxsXCIsIG1kOiBcImF1dG9cIiB9fVxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJyaWdodFwiXHJcbiAgICAgICAgLy8gZmxleEdyb3c9ezF9XHJcbiAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxMaW5rIHRleHRDb2xvcj17XCJ3aGl0ZVwifSBvbkNsaWNrPXtsb2dvdXR9ID7jg63jgrDjgqLjgqbjg4g8L0xpbms+XHJcbiAgICAgIDwvU3RhY2s+XHJcbnsvKiBcclxuICAgICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9e3sgYmFzZTogaXNPcGVuID8gXCJibG9ja1wiIDogXCJub25lXCIsIG1kOiBcImJsb2NrXCIgfX1cclxuICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICA+PC9Cb3g+ICovfVxyXG4gICBcclxuICAgIDwvRmxleD5cclxuICAgIFxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoMlRpdGxlLCBoM1RpdGxlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFN0YWNrIHNwYWNpbmc9ezN9IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtdD17MTZ9PlxyXG4gICAgICA8VGV4dCBmb250U2l6ZT1cIjN4bFwiIGFzPVwiaDJcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgIHtoMlRpdGxlfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBhcz1cImgzXCIgcHg9ezN9PlxyXG4gICAgICAgIHtoM1RpdGxlfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L1N0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluVGl0bGU7XHJcbiIsImltcG9ydCB7IERlbGV0ZUljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEZsZXgsXHJcbiAgSWNvbixcclxuICBNb2RhbCxcclxuICBNb2RhbEJvZHksXHJcbiAgTW9kYWxDbG9zZUJ1dHRvbixcclxuICBNb2RhbENvbnRlbnQsXHJcbiAgTW9kYWxGb290ZXIsXHJcbiAgTW9kYWxIZWFkZXIsXHJcbiAgTW9kYWxPdmVybGF5LFxyXG4gIFRhYmxlLFxyXG4gIFRhYmxlQ2FwdGlvbixcclxuICBUYm9keSxcclxuICBUZCxcclxuICBUaCxcclxuICBUaGVhZCxcclxuICBUcixcclxuICB1c2VEaXNjbG9zdXJlLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL1NlYXJjaExpc3QubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBTZWFyY2hMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpdGVtcywgcHJvZHVjdHMsIHNlbGVjdERhdGEsIGZpbHRlckl0ZW1zLCBvbkNsaWNrRGVsZXRlIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3QgW3Nob3dJdGVtLCBzZXRTaG93SXRlbV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DbGlja01vZGFsID0gKGRhdGEpID0+IHNldFNob3dJdGVtKGRhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD0nY2VudGVyJ1xyXG4gICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICBkaXJlY3Rpb249J2NvbHVtbi1yZXZlcnNlJ1xyXG4gICAgICA+XHJcbiAgICAgICAge3NlbGVjdERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBweD17NX1cclxuICAgICAgICAgICAgbWI9ezV9XHJcbiAgICAgICAgICAgIG14PXsyfVxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezV9XHJcbiAgICAgICAgICAgIGJveFNoYWRvdz0nYmFzZSdcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZXMuZmFkZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgdz17eyBiYXNlOiAnMTAwJScsIG1kOiAnNjAwcHgnIH19XHJcbiAgICAgICAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0nc3RyaXBlZCdcclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT0nZ3JheSdcclxuICAgICAgICAgICAgICBtYj17Nn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNhcHRpb24gcGxhY2VtZW50PSd0b3AnIHB4PXswfSBtYj17Mn0gZm9udFNpemU9J21lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nc3BhY2UtYmV0d2VlbicgYWxpZ25JdGVtcz0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAneHMnLCBtZDogJ21kJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nc3RhcnQnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT57ZGF0YX08L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtWydudW1iZXInXSA9PSBkYXRhICYmIGl0ZW1bJ25hbWUnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVsnbnVtYmVyJ10gPT0gZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bJ3ByaWNlJ10gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAn77+lJyArIGl0ZW1bJ3ByaWNlJ11cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtwcm9kdWN0cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAocHJvZHVjdCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RbXCJtb2RlbFwiXSA9PSBkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrTW9kYWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZ3JheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcj17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDoqbPntLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9J2dyYXknXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0RlbGV0ZShlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb24gYXM9e0RlbGV0ZUljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2FwdGlvbj5cclxuICAgICAgICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249J2NlbnRlcic+44K144Kk44K6PC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj0nY2VudGVyJz7lnKjluqvmlbA8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPSdjZW50ZXInPuWklumDqOWcqOW6qzwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249J2NlbnRlcic+VE9UQUw8L1RoPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPFRoIHRleHRBbGlnbj1cImNlbnRlclwiPuS7leaOm+e0jeacnzwvVGg+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPSdjZW50ZXInPuS7leaOm+aVsOmHjzwvVGg+XHJcbiAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAgICAgICAgPFRib2R5PlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bJ251bWJlciddID09IGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPSdjZW50ZXInPntpdGVtWydzaXplJ119PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj0nY2VudGVyJz57aXRlbVsnc3RvY2sxJ119PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj0nY2VudGVyJz57aXRlbVsnc3RvY2syJ119PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj0nY2VudGVyJz57aXRlbVsndG90YWwnXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFRkIHRleHRBbGlnbj1cImNlbnRlclwiPntpdGVtW1wic2NoZWR1bGVcIl19PC9UZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249J2NlbnRlcic+e2l0ZW1bJ3F1YW50aXR5J119PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9UYm9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0gc2l6ZT0neGwnPlxyXG4gICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cclxuICAgICAgICB7Lyoge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChwcm9kdWN0Wydtb2RlbCddID09IHNob3dJdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsQ29udGVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RbJ21vZGVsJ119XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0WydjYXRlZ29yeSddfVxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogcHJvZHVjdFsnc2l6ZV9zcGVjJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPSdibHVlJyBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfSAqL31cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaExpc3Q7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZsZXgsIEljb24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tICdyZWFjdC1jc3YnO1xyXG5pbXBvcnQgRm9ybUFyZWEgZnJvbSAnLi9Gb3JtQXJlYSc7XHJcbmltcG9ydCBTZWFyY2hMaXN0IGZyb20gJy4vU2VhcmNoTGlzdCc7XHJcbmltcG9ydCB7IERvd25sb2FkSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBudW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcHJpY2U6IHN0cmluZztcclxuICBzaXplOiBzdHJpbmc7XHJcbiAgc3RvY2sxOiBudW1iZXI7XHJcbiAgc3RvY2syOiBudW1iZXI7XHJcbiAgdG90YWw6IG51bWJlcjtcclxuICAvLyBzY2hlZHVsZTogc3RyaW5nO1xyXG4gIHF1YW50aXR5OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU3RvY2s6IFJlYWN0LkZDPGFueT4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGl0ZW1zLCBwcm9kdWN0cyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3NlbGVjdERhdGEsIHNldFNlbGVjdERhdGFdID0gdXNlU3RhdGUoW10pOyAvL+aknOe0ouaZguOBq+OCpOODs+ODl+ODg+ODiOWFpeWKm+OBl+OBn+mFjeWIl+ODquOCueODiFxyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTsgLy/jgqTjg7Pjg5fjg4Pjg4jlhaXlipvlgKRcclxuICBjb25zdCBbY3N2RGF0YSwgc2V0Q3N2RGF0YV0gPSB1c2VTdGF0ZSgnJyk7IC8vQ1NW44OH44O844K/XHJcblxyXG4gIC8vbnVtYmVy44Gu6YeN6KSH5YmK6ZmkXHJcbiAgY29uc3QgZmlsdGVySXRlbXMgPSBpdGVtcy5maWx0ZXIoXHJcbiAgICAoaXRlbSwgaW5kZXgsIHNlbGYpID0+XHJcbiAgICAgIHNlbGYuZmluZEluZGV4KChlKSA9PiBlWydudW1iZXInXSA9PT0gaXRlbVsnbnVtYmVyJ10pID09PSBpbmRleFxyXG4gICk7XHJcblxyXG4gIC8vQ1NW44OV44Kh44Kk44Or44Gr5aSJ5o+bXHJcbiAgY29uc3Qgb25DbGlja0NzdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNzdkRhdGEgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHNlbGVjdERhdGEuaW5jbHVkZXMoaXRlbVsnbnVtYmVyJ10pKTtcclxuXHJcbiAgICAvL+eJueWumuOBrmtleeOCkuWJiumZpOOBl+OBn+OBhOaZglxyXG4gICAgLy8gZGVsZXRlIGl0ZW1zWzBdW1wibnVtYmVyXCJdO1xyXG4gICAgY3N2RGF0YS5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgZGVsZXRlIGRhdGFbJ2lkJ107XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25zdCBoZWFkZXIgPSBPYmplY3Qua2V5cyhpdGVtc1swXSkuam9pbihcIixcIikgKyBcIlxcblwiO1xyXG4gICAgY29uc3QgaGVhZGVyID1cclxuICAgICAgJ+WVhuWTgeOCs+ODvOODiSzlk4Hnlaos5ZWG5ZOB5ZCNLOS4iuS7oyzjgrXjgqTjgros5Zyo5bqr5pWwLOWklumDqOWcqOW6qyxUT1RBTCzku5XmjpvmlbDph49cXG4nO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBjc3ZEYXRhXHJcbiAgICAgIC5tYXAoKGQpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZClcclxuICAgICAgICAgIC5tYXAoKGtleSkgPT4gZFtrZXldKVxyXG4gICAgICAgICAgLmpvaW4oJywnKTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJ1xcbicpO1xyXG4gICAgY29uc3QgY3N2RmlsZSA9IGhlYWRlciArIGJvZHk7XHJcbiAgICBzZXRDc3ZEYXRhKGNzdkZpbGUpO1xyXG4gIH07XHJcblxyXG4gIC8vSU5QVVTjga7lhaXlipvlgKTjgpLlj5blvpdcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0ID0gKGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICAvL+aknOe0oue1nuOCiui+vOOBv1xyXG4gIGNvbnN0IG9uQ2xpY2tTZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZpbHRlckl0ZW0gPSBmaWx0ZXJJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bJ251bWJlciddID09IGlucHV0VmFsdWUpOyAvL0lucHV05YWl5Yqb5YCk44Go5ZCM44GY44Kq44OW44K444Kn44Kv44OI44KS5Y+W44KK5Ye644GZ44CCXHJcbiAgICBsZXQgbmV3RGF0YSA9IGZpbHRlckl0ZW0ubWFwKChpdGVtKSA9PiBpdGVtWydudW1iZXInXSk7IC8v44Kq44OW44K444Kn44Kv44OI44GL44KJ5ZOB55Wq44Gg44GR44KS5Y+W44KK5Ye644GZXHJcbiAgICBpZiAobmV3RGF0YS5sZW5ndGggPT09IDApIHJldHVybjsgLy/jg4fjg7zjgr/nqbrnmb3jgafjgYLjgozjgbDjg6rjgr/jg7zjg7Pjgafov5TjgZnjgIJcclxuXHJcbiAgICAhc2VsZWN0RGF0YS5pbmNsdWRlcyhuZXdEYXRhWzBdKSAmJlxyXG4gICAgICBzZXRTZWxlY3REYXRhKFsuLi5zZWxlY3REYXRhLCBuZXdEYXRhWzBdXSk7XHJcblxyXG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XHJcblxyXG4gICAgLy8gbGV0IGZpbHRlckl0ZW0gPSBmaWx0ZXJJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIC8vICAgcmV0dXJuIGl0ZW1bXCJudW1iZXJcIl0uaW5jbHVkZXMoaW5wdXRWYWx1ZSk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGxldCBuZXdEYXRhID0gZmlsdGVySXRlbS5tYXAoKHYpID0+IHtcclxuICAgIC8vICAgcmV0dXJuIHZbXCJudW1iZXJcIl07XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBpZiAobmV3RGF0YS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgIC8vIG5ld0RhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgIGlmICghc2VsZWN0RGF0YS5pbmNsdWRlcyhkYXRhKSkge1xyXG4gICAgLy8gICAgIHNldFNlbGVjdERhdGEoKHByZXYpID0+IFsuLi5wcmV2LCBkYXRhXSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8gc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICAvL+mBuOaKnuOBl+OBpuOBhOOCi+WFqOOBpuOBrm51bWJlcuOCkuWJiumZpFxyXG4gIGNvbnN0IG9uQ2xpY2tSZXNldCA9ICgpID0+IHtcclxuICAgIHNldElucHV0VmFsdWUoJycpO1xyXG4gICAgc2V0U2VsZWN0RGF0YShbXSk7XHJcbiAgfTtcclxuXHJcbiAgLy/pgbjmip7jgZfjgZ9udW1iZXLjga7liYrpmaRcclxuICBjb25zdCBvbkNsaWNrRGVsZXRlID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgZGVsZXRlTnVtYmVyID0gaW5kZXg7XHJcbiAgICBzZXRTZWxlY3REYXRhKFxyXG4gICAgICBbLi4uc2VsZWN0RGF0YV0uZmlsdGVyKCh2LCBpbmRleCkgPT4gaW5kZXggIT09IE51bWJlcihkZWxldGVOdW1iZXIpKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1BcmVhXHJcbiAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICBmaWx0ZXJJdGVtcz17ZmlsdGVySXRlbXN9XHJcbiAgICAgICAgc2VsZWN0RGF0YT17c2VsZWN0RGF0YX1cclxuICAgICAgICBoYW5kbGVDaGFuZ2VUZXh0PXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgIG9uQ2xpY2tTZWFyY2g9e29uQ2xpY2tTZWFyY2h9XHJcbiAgICAgICAgb25DbGlja1Jlc2V0PXtvbkNsaWNrUmVzZXR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIG1iPXs2fT5cclxuICAgICAgICB7c2VsZWN0RGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgIDxDU1ZMaW5rXHJcbiAgICAgICAgICAgIGRhdGE9e2NzdkRhdGF9XHJcbiAgICAgICAgICAgIGZpbGVuYW1lPXtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyAnX3phaWtvLmNzdid9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0Nzdn0+XHJcbiAgICAgICAgICAgICAgQ1NW44OA44Km44Oz44Ot44O844OJXHJcbiAgICAgICAgICAgICAgPEljb24gYXM9e0Rvd25sb2FkSWNvbn0gLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NTVkxpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8U2VhcmNoTGlzdFxyXG4gICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XHJcbiAgICAgICAgc2VsZWN0RGF0YT17c2VsZWN0RGF0YX1cclxuICAgICAgICBmaWx0ZXJJdGVtcz17ZmlsdGVySXRlbXN9XHJcbiAgICAgICAgb25DbGlja0RlbGV0ZT17b25DbGlja0RlbGV0ZX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3RvY2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCBTdG9ja0NvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoXCJ6YWlrb1wiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9ja0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2l0ZW1zfT57Y2hpbGRyZW59PC9TdG9ja0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbi8vIFRPRE86IFJlcGxhY2UgdGhlIGZvbGxvd2luZyB3aXRoIHlvdXIgYXBwJ3MgRmlyZWJhc2UgcHJvamVjdCBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBVGZVQVdpQUF4VTZERzhsU1FLLUVYMmd1cEFLM3NoU1lcIixcclxuICBhdXRoRG9tYWluOiBcImRhaW1hcnUtemFpa28uZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImRhaW1hcnUtemFpa29cIixcclxuICBzdG9yYWdlQnVja2V0OiBcImRhaW1hcnUtemFpa28uYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzNTcyNzY3NTkxNzNcIixcclxuICBhcHBJZDogXCIxOjM1NzI3Njc1OTE3Mzp3ZWI6YTFjMDg3MTU1YzUzZmNjMWMzMjVlY1wiXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBTdG9jayB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3RvY2snO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFN0b2NrQ29udGV4dFByb3ZpZGVyIGZyb20gJy4uL2NvbnRleHRzL1N0b2NrQ29udGV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRNZXRhJztcbmltcG9ydCBNYWluVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluVGl0bGUnO1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHByb3BzO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyID09PSBudWxsKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgfVxuICB9LCBbcm91dGVyLCB1c2VyXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdG9ja0NvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPEhlYWRcbiAgICAgICAgICB0aXRsZT17J+Wkp+S4uOeZveihoyDlnKjluqvooagnfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICfjg57jgqTjg6bjg4vjg5Xjgqnjg7zjg6Djgq/jg6njg5bjgajjgrvjg6zjg4rjg7zjg4fjga7llYblk4HlnKjluqvjgpLmpJzntKLjgZnjgovjgZPjgajjgYzjgafjgY3jgotXRULjgqLjg5fjg6rjgafjgZnjgIInXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxNYWluVGl0bGVcbiAgICAgICAgICBoMlRpdGxlPXsn5Zyo5bqr5qSc57SiJ31cbiAgICAgICAgICBoM1RpdGxlPXsn5ZOB55Wq44KS5YWl5Yqb44GX44Gm5Zyo5bqr5qSc57Si44GM44Gn44GN44G+44GZ44CCJ31cbiAgICAgICAgLz5cbiAgICAgICAgPFN0b2NrIGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgIDwvU3RvY2tDb250ZXh0UHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBbaXRlbXNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGF4aW9zLmdldChcbiAgICAgICdodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2VFBJRDBPeWVvOEZ3Tk42bERQRVRncmhkOE9zbXJSSjZSWnk1RU84MEc0dUdna2o3WlJoQ1o5T1hzVU5ERkYwYzVZV2Z3U3JCYUVoOV9QL3B1Yj9naWQ9MTM5OTIzOTk1OCZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2J1xuICAgICksXG4gIF0pO1xuICBjb25zdCBzcGxpdEl0ZW1zID0gYXdhaXQgaXRlbXNSZXMuZGF0YS5zcGxpdCgnXFxuJyk7XG4gIGNvbnN0IGl0ZW1LZXlzID0gYXdhaXQgc3BsaXRJdGVtc1swXS50cmltKCkuc3BsaXQoJywnKTtcbiAgbGV0IGl0ZW1zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjc3ZPYmplY3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgbGV0IGl0ZW1WYWx1ZXMgPSBzcGxpdEl0ZW1zW2ldLnNwbGl0KCcsJyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgY3N2T2JqZWN0W2l0ZW1LZXlzW2pdXSA9IGl0ZW1WYWx1ZXNbal07XG4gICAgfVxuICAgIGl0ZW1zLnB1c2goY3N2T2JqZWN0KTtcbiAgfVxuICBpdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGluZGV4LFxuICAgICAgY29kZTogaXRlbVsn5ZWG5ZOB44Kz44O844OJJ10sXG4gICAgICBudW1iZXI6IGl0ZW1bJ+WTgeeVqiddLFxuICAgICAgbmFtZTogaXRlbVsn5ZWG5ZOB5ZCNJ10sXG4gICAgICBwcmljZTogaXRlbVsn5LiK5LujJ10sXG4gICAgICBzaXplOiBpdGVtWyfjgrXjgqTjgronXSxcbiAgICAgIHN0b2NrMTogaXRlbVsn5Zyo5bqr5pWwJ10sXG4gICAgICBzdG9jazI6IGl0ZW1bJ+WklumDqOWcqOW6qyddLFxuICAgICAgdG90YWw6IGl0ZW1bJ1RPVEFMJ10sXG4gICAgICAvLyBzY2hlZHVsZTogaXRlbVtcIuS7leaOm1wiXSxcbiAgICAgIHF1YW50aXR5OiBpdGVtWyfmlbDph48nXSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpdGVtcyxcbiAgICB9LFxuICB9O1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbi8vICAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL2UvMlBBQ1gtMXZUUElEME95ZW84RndOTjZsRFBFVGdyaGQ4T3NtclJKNlJaeTVFTzgwRzR1R2drajdaUmhDWjlPWHNVTkRGRjBjNVlXZndTckJhRWg5X1AvcHViP2dpZD0xMzk5MjM5OTU4JnNpbmdsZT10cnVlJm91dHB1dD1jc3ZcIlxuLy8gICApO1xuLy8gICBjb25zdCBzcGxpdEl0ZW1zID0gYXdhaXQgcmVzLmRhdGEuc3BsaXQoXCJcXG5cIik7XG4vLyAgIGNvbnN0IGl0ZW1LZXlzID0gYXdhaXQgc3BsaXRJdGVtc1swXS50cmltKCkuc3BsaXQoXCIsXCIpO1xuLy8gICBsZXQganNvbkRhdGFzID0gW107XG4vLyAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXRJdGVtcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGxldCBjc3ZPYmplY3QgPSBuZXcgT2JqZWN0KCk7XG4vLyAgICAgbGV0IGl0ZW1WYWx1ZXMgPSBzcGxpdEl0ZW1zW2ldLnNwbGl0KFwiLFwiKTtcbi8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1LZXlzLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICBjc3ZPYmplY3RbaXRlbUtleXNbal1dID0gaXRlbVZhbHVlc1tqXTtcbi8vICAgICB9XG4vLyAgICAganNvbkRhdGFzLnB1c2goY3N2T2JqZWN0KTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIGl0ZW1zOiBqc29uRGF0YXMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbi8vICAgICBcImh0dHBzOi8vZGFpbWFydS1oYWt1aS5taWNyb2Ntcy5pby9hcGkvdjEvY2F0YWxvZz9saW1pdD0yMDBcIixcbi8vICAgICB7XG4vLyAgICAgICBoZWFkZXJzOiB7IFwiWC1BUEktS0VZXCI6IHByb2Nlc3MuZW52LkFQSV9LRVkgfSxcbi8vICAgICB9XG4vLyAgICk7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBjYXRhbG9nczogZGF0YS5jb250ZW50cyxcbi8vICAgICB9LFxuLy8gICB9O1xuLy8gfVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmFkZVwiOiBcIlNlYXJjaExpc3RfZmFkZV9fMkZIZXNcIixcblx0XCJmYWRlMVwiOiBcIlNlYXJjaExpc3RfZmFkZTFfXzJaYkxqXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3N2XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=