(function() {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "node-fetch"
var external_node_fetch_namespaceObject = require("node-fetch");;
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./pages/products/[id].tsx



const getStaticPaths = async () => {
  const res = await external_node_fetch_default()("https://daimaru-hakui.microcms.io/api/v1/catalog?limit=200", {
    headers: {
      "X-API-KEY": process.env.API_KEY
    }
  });
  const data = await res.json();
  const datas = data.contents;
  const paths = datas.map(data => {
    return {
      params: {
        id: data.id.toString()
      }
    };
  });
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const id = context.params.id;
  const res = await external_node_fetch_default()("https://daimaru-hakui.microcms.io/api/v1/catalog/" + id, {
    headers: {
      "X-API-KEY": process.env.API_KEY
    }
  });
  const data = await res.json();
  return {
    props: {
      product: data
    }
  };
};

const ProductsId = ({
  product
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: product.title
      })
    })
  });
};

/* harmony default export */ var _id_ = (ProductsId);

/***/ }),

/***/ 417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ }),

/***/ 453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(144); });
module.exports = __webpack_exports__;

})();