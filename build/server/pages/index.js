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
    children: user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_StockContext__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeadMeta__WEBPACK_IMPORTED_MODULE_9__.default, {
        title: '大丸白衣 在庫表',
        description: 'マイユニフォームクラブとセレナーデの商品在庫を検索することができるWEBアプリです。'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__.Header, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainTitle__WEBPACK_IMPORTED_MODULE_10__.default, {
        h2Title: '在庫検索',
        h3Title: '品番を入力して在庫検索ができます。'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stock__WEBPACK_IMPORTED_MODULE_6__.Stock, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0Zvcm1BcmVhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRNZXRhLnRzeCIsIndlYnBhY2s6Ly9zdG9jay1hcHAvLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9NYWluVGl0bGUudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29tcG9uZW50cy9TdG9jay50c3giLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vY29udGV4dHMvU3RvY2tDb250ZXh0LmpzIiwid2VicGFjazovL3N0b2NrLWFwcC8uL2ZpcmViYXNlL2F1dGguanMiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3N0b2NrLWFwcC8uL2NvbXBvbmVudHMvU2VhcmNoTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vc3RvY2stYXBwL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWNzdlwiIiwid2VicGFjazovL3N0b2NrLWFwcC9leHRlcm5hbCBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIiIsIndlYnBhY2s6Ly9zdG9jay1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb3JtQXJlYSIsInByb3BzIiwiaW5wdXRWYWx1ZSIsImZpbHRlckl0ZW1zIiwic2VsZWN0RGF0YSIsImhhbmRsZUNoYW5nZVRleHQiLCJvbkNsaWNrU2VhcmNoIiwib25DbGlja1Jlc2V0IiwibGVuZ3RoIiwibWFwIiwiZGF0YSIsImJhc2UiLCJtZCIsImUiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJTZWFyY2gySWNvbiIsIkhlYWRNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhlYWRlciIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VEaXNjbG9zdXJlIiwiaGFuZGxlVG9nZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9nb3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJwdXNoIiwiTWFpblRpdGxlIiwiaDJUaXRsZSIsImgzVGl0bGUiLCJTZWFyY2hMaXN0IiwiaXRlbXMiLCJwcm9kdWN0cyIsIm9uQ2xpY2tEZWxldGUiLCJzaG93SXRlbSIsInNldFNob3dJdGVtIiwidXNlU3RhdGUiLCJvbkNsaWNrTW9kYWwiLCJTdHlsZXMiLCJEZWxldGVJY29uIiwiU3RvY2siLCJzZXRTZWxlY3REYXRhIiwic2V0SW5wdXRWYWx1ZSIsImNzdkRhdGEiLCJzZXRDc3ZEYXRhIiwiZmlsdGVyIiwic2VsZiIsImZpbmRJbmRleCIsIm9uQ2xpY2tDc3YiLCJpbmNsdWRlcyIsImhlYWRlciIsImJvZHkiLCJkIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJjc3ZGaWxlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJJdGVtIiwibmV3RGF0YSIsImRlbGV0ZU51bWJlciIsInYiLCJOdW1iZXIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJEb3dubG9hZEljb24iLCJTdG9ja0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU3RvY2tDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldEl0ZW1zIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIkhvbWUiLCJ1c2VyIiwidXNlQXV0aFN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U3RhdGljUHJvcHMiLCJpdGVtc1JlcyIsIlByb21pc2UiLCJhbGwiLCJheGlvcyIsInNwbGl0SXRlbXMiLCJzcGxpdCIsIml0ZW1LZXlzIiwidHJpbSIsImkiLCJjc3ZPYmplY3QiLCJpdGVtVmFsdWVzIiwiaiIsImlkIiwiY29kZSIsIm51bWJlciIsIm5hbWUiLCJwcmljZSIsInNpemUiLCJzdG9jazEiLCJzdG9jazIiLCJ0b3RhbCIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBV0EsTUFBTUEsUUFBeUIsR0FBSUMsS0FBRCxJQUFXO0FBQzNDLFFBQU07QUFDSkMsY0FESTtBQUVKQyxlQUZJO0FBR0pDLGNBSEk7QUFJSkMsb0JBSkk7QUFLSkMsaUJBTEk7QUFNSkM7QUFOSSxNQU9GTixLQVBKO0FBU0Esc0JBQ0U7QUFBTSxZQUFRLEVBQUVLLGFBQWhCO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxPQUFDLEVBQUMsTUFESjtBQUVFLG9CQUFjLEVBQUMsUUFGakI7QUFHRSxnQkFBVSxFQUFDLFFBSGI7QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxFQUxOO0FBQUEsOEJBT0UsOERBQUMsbURBQUQ7QUFDRSxnQkFBUSxFQUFFRCxnQkFEWjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsYUFBSyxFQUFFSCxVQUhUO0FBSUUs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LEVBQUVoRyxJQUFJLENBQUMsS0FBRCxDQU5MO0FBT0xpRyxZQUFNLEVBQUVqRyxJQUFJLENBQUMsS0FBRCxDQVBQO0FBUUxrRyxZQUFNLEVBQUVsRyxJQUFJLENBQUMsTUFBRCxDQVJQO0FBU0xtRyxXQUFLLEVBQUVuRyxJQUFJLENBQUMsT0FBRCxDQVROO0FBVUw7QUFDQW9HLGNBQVEsRUFBRXBHLElBQUksQ0FBQyxJQUFEO0FBWFQsS0FBUDtBQWFELEdBZE8sQ0FBUjtBQWdCQSxTQUFPO0FBQ0xkLFNBQUssRUFBRTtBQUNMcUM7QUFESztBQURGLEdBQVA7QUFLRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLDhDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoMkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIElucHV0LCBJbnB1dEdyb3VwIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgZmlsdGVySXRlbXM6IFtdO1xyXG4gIHNlbGVjdERhdGE6IGFueTtcclxuICBoYW5kbGVDaGFuZ2VUZXh0OiBhbnk7XHJcbiAgb25DbGlja1NlYXJjaDogYW55O1xyXG4gIG9uQ2xpY2tSZXNldDogVm9pZEZ1bmN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgRm9ybUFyZWE6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlucHV0VmFsdWUsXHJcbiAgICBmaWx0ZXJJdGVtcyxcclxuICAgIHNlbGVjdERhdGEsXHJcbiAgICBoYW5kbGVDaGFuZ2VUZXh0LFxyXG4gICAgb25DbGlja1NlYXJjaCxcclxuICAgIG9uQ2xpY2tSZXNldCxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25DbGlja1NlYXJjaH0+XHJcbiAgICAgIDxJbnB1dEdyb3VwXHJcbiAgICAgICAgdz1cImF1dG9cIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBweT17Nn1cclxuICAgICAgICBweD17MTB9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgIHNlbGVjdERhdGEubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8gc2VsZWN0RGF0YS5tYXAoKGRhdGEpID0+IGAgJHtkYXRhfSBgKVxyXG4gICAgICAgICAgICAgIDogXCLkvospU1AxMjVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGlzdD1cInNlYXJjaFwiXHJcbiAgICAgICAgICB3PXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCI0NTBweFwiIH19XHJcbiAgICAgICAgICBtcj17MX1cclxuICAgICAgICAgIHB5PXs2fVxyXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IChlLmtleSA9PSBcIkVudGVyXCIgPyBvbkNsaWNrU2VhcmNoKGUpIDogZmFsc2UpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICB7ZmlsdGVySXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtW1wibnVtYmVyXCJdfT5cclxuICAgICAgICAgICAgICB7aXRlbVtcIm5hbWVcIl19XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvclNjaGVtZT1cInRlYWxcIiBweD17NX0gcHk9ezZ9IG1yPXsxfT5cclxuICAgICAgICAgIDxJY29uIGFzPXtTZWFyY2gySWNvbn0gbXI9ezF9IC8+XHJcbiAgICAgICAgICDmpJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tSZXNldH0gY29sb3JTY2hlbWU9XCJyZWRcIiBweD17NX0gcHk9ezZ9PlxyXG4gICAgICAgICAgUkVTRVRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQXJlYTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5jb25zdCBIZWFkTWV0YSA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfSAvPiAqL31cclxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtcIi9mYXZpY29uLnBuZ1wifSAvPiAqL31cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgey8qIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmR9IC8+ICovfVxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9e1wiL2Zhdmljb24ucG5nXCJ9IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZE1ldGE7XHJcbiIsImltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBGbGV4LFxyXG4gIEhlYWRpbmcsXHJcbiAgTGluayxcclxuICBTdGFjayxcclxuICBUZXh0LFxyXG4gIFNwYWNlcixcclxuICB1c2VEaXNjbG9zdXJlLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IChpc09wZW4gPyBvbkNsb3NlKCkgOiBvbk9wZW4oKSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nb3V0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXV0aC5zaWduT3V0KCk7XHJcbiAgICByb3V0ZXIucHVzaCgnbG9naW4nKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIGFzPVwibmF2XCJcclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgcGFkZGluZz17NH1cclxuICAgICAgYmc9XCJ0ZWFsLjUwMFwiXHJcbiAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgPlxyXG4gICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17XCJ0aWdodGVyXCJ9PlxyXG4gICAgICAgICAgREFJTUFSVSBIQUtVSVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgPEhhbWJ1cmdlckljb24gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIFxyXG4gICAgICA8U3RhY2tcclxuICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cclxuICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IGlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfX1cclxuICAgICAgICB3aWR0aD17eyBiYXNlOiBcImZ1bGxcIiwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cInJpZ2h0XCJcclxuICAgICAgICAvLyBmbGV4R3Jvdz17MX1cclxuICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPExpbmsgdGV4dENvbG9yPXtcIndoaXRlXCJ9IG9uQ2xpY2s9e2xvZ291dH0gPuODreOCsOOCouOCpuODiDwvTGluaz5cclxuICAgICAgPC9TdGFjaz5cclxuey8qIFxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT17eyBiYXNlOiBpc09wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgID48L0JveD4gKi99XHJcbiAgIFxyXG4gICAgPC9GbGV4PlxyXG4gICAgXHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGgyVGl0bGUsIGgzVGl0bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgc3BhY2luZz17M30gZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG10PXsxNn0+XHJcbiAgICAgIDxUZXh0IGZvbnRTaXplPVwiM3hsXCIgYXM9XCJoMlwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAge2gyVGl0bGV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIGFzPVwiaDNcIiBweD17M30+XHJcbiAgICAgICAge2gzVGl0bGV9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvU3RhY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5UaXRsZTtcclxuIiwiaW1wb3J0IHsgRGVsZXRlSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRmxleCxcclxuICBJY29uLFxyXG4gIE1vZGFsLFxyXG4gIE1vZGFsQm9keSxcclxuICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gIE1vZGFsQ29udGVudCxcclxuICBNb2RhbEZvb3RlcixcclxuICBNb2RhbEhlYWRlcixcclxuICBNb2RhbE92ZXJsYXksXHJcbiAgVGFibGUsXHJcbiAgVGFibGVDYXB0aW9uLFxyXG4gIFRib2R5LFxyXG4gIFRkLFxyXG4gIFRoLFxyXG4gIFRoZWFkLFxyXG4gIFRyLFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vU2VhcmNoTGlzdC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFNlYXJjaExpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGl0ZW1zLCBwcm9kdWN0cywgc2VsZWN0RGF0YSwgZmlsdGVySXRlbXMsIG9uQ2xpY2tEZWxldGUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBbc2hvd0l0ZW0sIHNldFNob3dJdGVtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNsaWNrTW9kYWwgPSAoZGF0YSkgPT4gc2V0U2hvd0l0ZW0oZGF0YSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgIGRpcmVjdGlvbj0nY29sdW1uLXJldmVyc2UnXHJcbiAgICAgID5cclxuICAgICAgICB7c2VsZWN0RGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHB4PXs1fVxyXG4gICAgICAgICAgICBtYj17NX1cclxuICAgICAgICAgICAgbXg9ezJ9XHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17NX1cclxuICAgICAgICAgICAgYm94U2hhZG93PSdiYXNlJ1xyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5mYWRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICB3PXt7IGJhc2U6ICcxMDAlJywgbWQ6ICc2MDBweCcgfX1cclxuICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICB2YXJpYW50PSdzdHJpcGVkJ1xyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPSdncmF5J1xyXG4gICAgICAgICAgICAgIG1iPXs2fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2FwdGlvbiBwbGFjZW1lbnQ9J3RvcCcgcHg9ezB9IG1iPXsyfSBmb250U2l6ZT0nbWVkaXVtJz5cclxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJyBhbGlnbkl0ZW1zPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6ICd4cycsIG1kOiAnbWQnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPSdzdGFydCdcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXI9ezJ9PntkYXRhfTwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXI9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW1bJ251bWJlciddID09IGRhdGEgJiYgaXRlbVsnbmFtZSddXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVySXRlbXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWydudW1iZXInXSA9PSBkYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVsncHJpY2UnXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICfvv6UnICsgaXRlbVsncHJpY2UnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICB7Lyoge3Byb2R1Y3RzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChwcm9kdWN0LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFtcIm1vZGVsXCJdID09IGRhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tNb2RhbChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOips+e0sFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT0nZ3JheSdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrRGVsZXRlKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17RGVsZXRlSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDYXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxUaGVhZD5cclxuICAgICAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj0nY2VudGVyJz7jgrXjgqTjgro8L1RoPlxyXG4gICAgICAgICAgICAgICAgICA8VGggdGV4dEFsaWduPSdjZW50ZXInPuWcqOW6q+aVsDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249J2NlbnRlcic+5aSW6YOo5Zyo5bqrPC9UaD5cclxuICAgICAgICAgICAgICAgICAgPFRoIHRleHRBbGlnbj0nY2VudGVyJz5UT1RBTDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8VGggdGV4dEFsaWduPVwiY2VudGVyXCI+5LuV5o6b57SN5pyfPC9UaD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxUaCB0ZXh0QWxpZ249J2NlbnRlcic+5LuV5o6b5pWw6YePPC9UaD5cclxuICAgICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgICAgPC9UaGVhZD5cclxuICAgICAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbVsnbnVtYmVyJ10gPT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZCB0ZXh0QWxpZ249J2NlbnRlcic+e2l0ZW1bJ3NpemUnXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPSdjZW50ZXInPntpdGVtWydzdG9jazEnXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPSdjZW50ZXInPntpdGVtWydzdG9jazInXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQgdGV4dEFsaWduPSdjZW50ZXInPntpdGVtWyd0b3RhbCddfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGQgdGV4dEFsaWduPVwiY2VudGVyXCI+e2l0ZW1bXCJzY2hlZHVsZVwiXX08L1RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHRleHRBbGlnbj0nY2VudGVyJz57aXRlbVsncXVhbnRpdHknXX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L1Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBzaXplPSd4bCc+XHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxyXG4gICAgICAgIHsvKiB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb2R1Y3RbJ21vZGVsJ10gPT0gc2hvd0l0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW9kYWxDb250ZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdFsnbW9kZWwnXX1cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RbJ2NhdGVnb3J5J119XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwcm9kdWN0WydzaXplX3NwZWMnXSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9J2JsdWUnIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9ICovfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoTGlzdDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRmxleCwgSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gJ3JlYWN0LWNzdic7XHJcbmltcG9ydCBGb3JtQXJlYSBmcm9tICcuL0Zvcm1BcmVhJztcclxuaW1wb3J0IFNlYXJjaExpc3QgZnJvbSAnLi9TZWFyY2hMaXN0JztcclxuaW1wb3J0IHsgRG93bmxvYWRJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIHNpemU6IHN0cmluZztcclxuICBzdG9jazE6IG51bWJlcjtcclxuICBzdG9jazI6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG4gIC8vIHNjaGVkdWxlOiBzdHJpbmc7XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9jazogUmVhY3QuRkM8YW55PiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXRlbXMsIHByb2R1Y3RzIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0RGF0YSwgc2V0U2VsZWN0RGF0YV0gPSB1c2VTdGF0ZShbXSk7IC8v5qSc57Si5pmC44Gr44Kk44Oz44OX44OD44OI5YWl5Yqb44GX44Gf6YWN5YiX44Oq44K544OIXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpOyAvL+OCpOODs+ODl+ODg+ODiOWFpeWKm+WApFxyXG4gIGNvbnN0IFtjc3ZEYXRhLCBzZXRDc3ZEYXRhXSA9IHVzZVN0YXRlKCcnKTsgLy9DU1bjg4fjg7zjgr9cclxuXHJcbiAgLy9udW1iZXLjga7ph43opIfliYrpmaRcclxuICBjb25zdCBmaWx0ZXJJdGVtcyA9IGl0ZW1zLmZpbHRlcihcclxuICAgIChpdGVtLCBpbmRleCwgc2VsZikgPT5cclxuICAgICAgc2VsZi5maW5kSW5kZXgoKGUpID0+IGVbJ251bWJlciddID09PSBpdGVtWydudW1iZXInXSkgPT09IGluZGV4XHJcbiAgKTtcclxuXHJcbiAgLy9DU1bjg5XjgqHjgqTjg6vjgavlpInmj5tcclxuICBjb25zdCBvbkNsaWNrQ3N2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3N2RGF0YSA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gc2VsZWN0RGF0YS5pbmNsdWRlcyhpdGVtWydudW1iZXInXSkpO1xyXG5cclxuICAgIC8v54m55a6a44Gua2V544KS5YmK6Zmk44GX44Gf44GE5pmCXHJcbiAgICAvLyBkZWxldGUgaXRlbXNbMF1bXCJudW1iZXJcIl07XHJcbiAgICBjc3ZEYXRhLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICBkZWxldGUgZGF0YVsnaWQnXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGhlYWRlciA9IE9iamVjdC5rZXlzKGl0ZW1zWzBdKS5qb2luKFwiLFwiKSArIFwiXFxuXCI7XHJcbiAgICBjb25zdCBoZWFkZXIgPVxyXG4gICAgICAn5ZWG5ZOB44Kz44O844OJLOWTgeeVqizllYblk4HlkI0s5LiK5LujLOOCteOCpOOCuizlnKjluqvmlbAs5aSW6YOo5Zyo5bqrLFRPVEFMLOS7leaOm+aVsOmHj1xcbic7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGNzdkRhdGFcclxuICAgICAgLm1hcCgoZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkKVxyXG4gICAgICAgICAgLm1hcCgoa2V5KSA9PiBkW2tleV0pXHJcbiAgICAgICAgICAuam9pbignLCcpO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbignXFxuJyk7XHJcbiAgICBjb25zdCBjc3ZGaWxlID0gaGVhZGVyICsgYm9keTtcclxuICAgIHNldENzdkRhdGEoY3N2RmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgLy9JTlBVVOOBruWFpeWKm+WApOOCkuWPluW+l1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRleHQgPSAoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gIC8v5qSc57Si57We44KK6L6844G/XHJcbiAgY29uc3Qgb25DbGlja1NlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZmlsdGVySXRlbSA9IGZpbHRlckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbVsnbnVtYmVyJ10gPT0gaW5wdXRWYWx1ZSk7IC8vSW5wdXTlhaXlipvlgKTjgajlkIzjgZjjgqrjg5bjgrjjgqfjgq/jg4jjgpLlj5bjgorlh7rjgZnjgIJcclxuICAgIGxldCBuZXdEYXRhID0gZmlsdGVySXRlbS5tYXAoKGl0ZW0pID0+IGl0ZW1bJ251bWJlciddKTsgLy/jgqrjg5bjgrjjgqfjgq/jg4jjgYvjgonlk4HnlarjgaDjgZHjgpLlj5bjgorlh7rjgZlcclxuICAgIGlmIChuZXdEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvL+ODh+ODvOOCv+epuueZveOBp+OBguOCjOOBsOODquOCv+ODvOODs+OBp+i/lOOBmeOAglxyXG5cclxuICAgICFzZWxlY3REYXRhLmluY2x1ZGVzKG5ld0RhdGFbMF0pICYmXHJcbiAgICAgIHNldFNlbGVjdERhdGEoWy4uLnNlbGVjdERhdGEsIG5ld0RhdGFbMF1dKTtcclxuXHJcbiAgICBzZXRJbnB1dFZhbHVlKCcnKTtcclxuXHJcbiAgICAvLyBsZXQgZmlsdGVySXRlbSA9IGZpbHRlckl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gaXRlbVtcIm51bWJlclwiXS5pbmNsdWRlcyhpbnB1dFZhbHVlKTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gbGV0IG5ld0RhdGEgPSBmaWx0ZXJJdGVtLm1hcCgodikgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gdltcIm51bWJlclwiXTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGlmIChuZXdEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgLy8gbmV3RGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgIC8vICAgaWYgKCFzZWxlY3REYXRhLmluY2x1ZGVzKGRhdGEpKSB7XHJcbiAgICAvLyAgICAgc2V0U2VsZWN0RGF0YSgocHJldikgPT4gWy4uLnByZXYsIGRhdGFdKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8v6YG45oqe44GX44Gm44GE44KL5YWo44Gm44GubnVtYmVy44KS5YmK6ZmkXHJcbiAgY29uc3Qgb25DbGlja1Jlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XHJcbiAgICBzZXRTZWxlY3REYXRhKFtdKTtcclxuICB9O1xyXG5cclxuICAvL+mBuOaKnuOBl+OBn251bWJlcuOBruWJiumZpFxyXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoZSwgaW5kZXgpID0+IHtcclxuICAgIGxldCBkZWxldGVOdW1iZXIgPSBpbmRleDtcclxuICAgIHNldFNlbGVjdERhdGEoXHJcbiAgICAgIFsuLi5zZWxlY3REYXRhXS5maWx0ZXIoKHYsIGluZGV4KSA9PiBpbmRleCAhPT0gTnVtYmVyKGRlbGV0ZU51bWJlcikpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybUFyZWFcclxuICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgIGZpbHRlckl0ZW1zPXtmaWx0ZXJJdGVtc31cclxuICAgICAgICBzZWxlY3REYXRhPXtzZWxlY3REYXRhfVxyXG4gICAgICAgIGhhbmRsZUNoYW5nZVRleHQ9e2hhbmRsZUNoYW5nZVRleHR9XHJcbiAgICAgICAgb25DbGlja1NlYXJjaD17b25DbGlja1NlYXJjaH1cclxuICAgICAgICBvbkNsaWNrUmVzZXQ9e29uQ2xpY2tSZXNldH1cclxuICAgICAgLz5cclxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgbWI9ezZ9PlxyXG4gICAgICAgIHtzZWxlY3REYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPENTVkxpbmtcclxuICAgICAgICAgICAgZGF0YT17Y3N2RGF0YX1cclxuICAgICAgICAgICAgZmlsZW5hbWU9e25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArICdfemFpa28uY3N2J31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQ3N2fT5cclxuICAgICAgICAgICAgICBDU1bjg4Djgqbjg7Pjg63jg7zjg4lcclxuICAgICAgICAgICAgICA8SWNvbiBhcz17RG93bmxvYWRJY29ufSAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ1NWTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxTZWFyY2hMaXN0XHJcbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cclxuICAgICAgICBzZWxlY3REYXRhPXtzZWxlY3REYXRhfVxyXG4gICAgICAgIGZpbHRlckl0ZW1zPXtmaWx0ZXJJdGVtc31cclxuICAgICAgICBvbkNsaWNrRGVsZXRlPXtvbkNsaWNrRGVsZXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9ja0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IFN0b2NrQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShcInphaWtvXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0b2NrQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17aXRlbXN9PntjaGlsZHJlbn08L1N0b2NrQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0NvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuLy8gVE9ETzogUmVwbGFjZSB0aGUgZm9sbG93aW5nIHdpdGggeW91ciBhcHAncyBGaXJlYmFzZSBwcm9qZWN0IGNvbmZpZ3VyYXRpb25cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUFUZlVBV2lBQXhVNkRHOGxTUUstRVgyZ3VwQUszc2hTWVwiLFxyXG4gIGF1dGhEb21haW46IFwiZGFpbWFydS16YWlrby5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZGFpbWFydS16YWlrb1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZGFpbWFydS16YWlrby5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM1NzI3Njc1OTE3M1wiLFxyXG4gIGFwcElkOiBcIjE6MzU3Mjc2NzU5MTczOndlYjphMWMwODcxNTVjNTNmY2MxYzMyNWVjXCJcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFN0b2NrIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdG9jayc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgU3RvY2tDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dHMvU3RvY2tDb250ZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZE1ldGEnO1xuaW1wb3J0IE1haW5UaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL01haW5UaXRsZSc7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIgPT09IG51bGwpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIHVzZXJdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXIgJiYgKFxuICAgICAgICA8U3RvY2tDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPEhlYWRcbiAgICAgICAgICAgIHRpdGxlPXsn5aSn5Li455m96KGjIOWcqOW6q+ihqCd9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICfjg57jgqTjg6bjg4vjg5Xjgqnjg7zjg6Djgq/jg6njg5bjgajjgrvjg6zjg4rjg7zjg4fjga7llYblk4HlnKjluqvjgpLmpJzntKLjgZnjgovjgZPjgajjgYzjgafjgY3jgotXRULjgqLjg5fjg6rjgafjgZnjgIInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPE1haW5UaXRsZVxuICAgICAgICAgICAgaDJUaXRsZT17J+WcqOW6q+aknOe0oid9XG4gICAgICAgICAgICBoM1RpdGxlPXsn5ZOB55Wq44KS5YWl5Yqb44GX44Gm5Zyo5bqr5qSc57Si44GM44Gn44GN44G+44GZ44CCJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTdG9jayBpdGVtcz17aXRlbXN9IC8+XG4gICAgICAgIDwvU3RvY2tDb250ZXh0UHJvdmlkZXI+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgW2l0ZW1zUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBheGlvcy5nZXQoXG4gICAgICAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlRQSUQwT3llbzhGd05ONmxEUEVUZ3JoZDhPc21yUko2Ulp5NUVPODBHNHVHZ2tqN1pSaENaOU9Yc1VOREZGMGM1WVdmd1NyQmFFaDlfUC9wdWI/Z2lkPTEzOTkyMzk5NTgmc2luZ2xlPXRydWUmb3V0cHV0PWNzdidcbiAgICApLFxuICBdKTtcbiAgY29uc3Qgc3BsaXRJdGVtcyA9IGF3YWl0IGl0ZW1zUmVzLmRhdGEuc3BsaXQoJ1xcbicpO1xuICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KCcsJyk7XG4gIGxldCBpdGVtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdCgnLCcpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNzdk9iamVjdFtpdGVtS2V5c1tqXV0gPSBpdGVtVmFsdWVzW2pdO1xuICAgIH1cbiAgICBpdGVtcy5wdXNoKGNzdk9iamVjdCk7XG4gIH1cbiAgaXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpbmRleCxcbiAgICAgIGNvZGU6IGl0ZW1bJ+WVhuWTgeOCs+ODvOODiSddLFxuICAgICAgbnVtYmVyOiBpdGVtWyflk4HnlaonXSxcbiAgICAgIG5hbWU6IGl0ZW1bJ+WVhuWTgeWQjSddLFxuICAgICAgcHJpY2U6IGl0ZW1bJ+S4iuS7oyddLFxuICAgICAgc2l6ZTogaXRlbVsn44K144Kk44K6J10sXG4gICAgICBzdG9jazE6IGl0ZW1bJ+WcqOW6q+aVsCddLFxuICAgICAgc3RvY2syOiBpdGVtWyflpJbpg6jlnKjluqsnXSxcbiAgICAgIHRvdGFsOiBpdGVtWydUT1RBTCddLFxuICAgICAgLy8gc2NoZWR1bGU6IGl0ZW1bXCLku5XmjptcIl0sXG4gICAgICBxdWFudGl0eTogaXRlbVsn5pWw6YePJ10sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaXRlbXMsXG4gICAgfSxcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4vLyAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2VFBJRDBPeWVvOEZ3Tk42bERQRVRncmhkOE9zbXJSSjZSWnk1RU84MEc0dUdna2o3WlJoQ1o5T1hzVU5ERkYwYzVZV2Z3U3JCYUVoOV9QL3B1Yj9naWQ9MTM5OTIzOTk1OCZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2XCJcbi8vICAgKTtcbi8vICAgY29uc3Qgc3BsaXRJdGVtcyA9IGF3YWl0IHJlcy5kYXRhLnNwbGl0KFwiXFxuXCIpO1xuLy8gICBjb25zdCBpdGVtS2V5cyA9IGF3YWl0IHNwbGl0SXRlbXNbMF0udHJpbSgpLnNwbGl0KFwiLFwiKTtcbi8vICAgbGV0IGpzb25EYXRhcyA9IFtdO1xuLy8gICBmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0SXRlbXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICBsZXQgY3N2T2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuLy8gICAgIGxldCBpdGVtVmFsdWVzID0gc3BsaXRJdGVtc1tpXS5zcGxpdChcIixcIik7XG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtS2V5cy5sZW5ndGg7IGorKykge1xuLy8gICAgICAgY3N2T2JqZWN0W2l0ZW1LZXlzW2pdXSA9IGl0ZW1WYWx1ZXNbal07XG4vLyAgICAgfVxuLy8gICAgIGpzb25EYXRhcy5wdXNoKGNzdk9iamVjdCk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBpdGVtczoganNvbkRhdGFzLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgXCJodHRwczovL2RhaW1hcnUtaGFrdWkubWljcm9jbXMuaW8vYXBpL3YxL2NhdGFsb2c/bGltaXQ9MjAwXCIsXG4vLyAgICAge1xuLy8gICAgICAgaGVhZGVyczogeyBcIlgtQVBJLUtFWVwiOiBwcm9jZXNzLmVudi5BUElfS0VZIH0sXG4vLyAgICAgfVxuLy8gICApO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgY2F0YWxvZ3M6IGRhdGEuY29udGVudHMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZhZGVcIjogXCJTZWFyY2hMaXN0X2ZhZGVfXzJGSGVzXCIsXG5cdFwiZmFkZTFcIjogXCJTZWFyY2hMaXN0X2ZhZGUxX18yWmJMalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNzdlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9