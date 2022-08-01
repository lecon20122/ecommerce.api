(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/Pages/Auth/login.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/login.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

function AdminLogin() {
  var _this = this;

  var _ref = (0, inertia_react_1.useForm)({
    email: "",
    password: ""
  }),
      data = _ref.data,
      setData = _ref.setData,
      post = _ref.post;

  var handleChange = function handleChange(event) {
    if (data) {
      setData(Object.assign(Object.assign({}, data), _defineProperty({}, event.currentTarget.name, event.currentTarget.value)));
    }
  };

  var handleSubmit = function handleSubmit(event) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              post((0, ziggy_js_1["default"])('admin.postLogin'), {
                data: data
              });
              setData({
                email: "",
                password: ""
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  return react_1["default"].createElement("div", null, react_1["default"].createElement("section", {
    className: "bg-gray-100 py-10 min-h-[86vh]"
  }, react_1["default"].createElement("div", {
    className: "container max-w-screen-xl mx-auto px-4"
  }, react_1["default"].createElement("div", {
    className: "mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[500px]"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit
  }, react_1["default"].createElement("h2", {
    className: "mb-5 text-2xl font-semibold"
  }, "Sign in"), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "block mb-1"
  }, " Email "), react_1["default"].createElement("input", {
    onChange: handleChange,
    value: data.email,
    name: "email",
    className: "appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",
    type: "text",
    placeholder: "Type here"
  })), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "block mb-1"
  }, " Password "), react_1["default"].createElement("input", {
    onChange: handleChange,
    value: data.password,
    name: "password",
    className: "appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",
    type: "password",
    placeholder: "Type here"
  })), react_1["default"].createElement("label", {
    className: "flex items-center w-max mb-5"
  }, react_1["default"].createElement("input", {
    name: "",
    type: "checkbox",
    className: "h-4 w-4"
  }), react_1["default"].createElement("span", {
    className: "ml-2 inline-block text-gray-500"
  }, "Remember me")), react_1["default"].createElement("button", {
    type: "submit",
    className: "px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
  }, "Sign in"), react_1["default"].createElement("div", {
    className: "text-center border-b my-5 leading-[0.1rem]"
  }, react_1["default"].createElement("span", {
    className: "px-3 bg-white text-gray-400"
  }, "or")), react_1["default"].createElement("a", {
    href: "#",
    className: "mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
  }, react_1["default"].createElement("img", {
    src: "images/icons/social/google.svg",
    className: "mr-3",
    width: "20",
    height: "20"
  }), "Continue with Google"), react_1["default"].createElement("a", {
    href: "#",
    className: "mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
  }, react_1["default"].createElement("img", {
    src: "images/icons/social/facebook.svg",
    className: "mr-3",
    width: "20",
    height: "20"
  }), "Continue with Facebook"), react_1["default"].createElement("p", {
    className: "text-center mt-5"
  }, "Don\u2019t have an account?", react_1["default"].createElement("a", {
    className: "text-blue-500",
    href: "#"
  }, "Sign up")))))));
}

exports["default"] = AdminLogin;

/***/ }),

/***/ "./resources/js/Pages/Client/auth/login.tsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Client/auth/login.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function login() {
  var Footer = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! ../../../components/client/includes/footer */ "./resources/js/components/client/includes/footer.tsx"));
    });
  });

  var _ref = (0, react_1.useState)({
    email: '',
    password: ''
  }),
      _ref2 = _slicedToArray(_ref, 2),
      formData = _ref2[0],
      setFormData = _ref2[1];

  var handleChange = function handleChange(event) {
    if (formData) {
      setFormData(Object.assign(Object.assign({}, formData), _defineProperty({}, event.currentTarget.name, event.currentTarget.value)));
    }
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setFormData({
      email: '',
      password: ''
    });
  };

  return react_1["default"].createElement("section", {
    className: "bg-gray-100 py-10 min-h-[86vh]"
  }, react_1["default"].createElement("div", {
    className: "container max-w-screen-xl mx-auto px-4"
  }, react_1["default"].createElement("div", {
    className: "mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[500px]"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit
  }, react_1["default"].createElement("h2", {
    className: "mb-5 text-2xl font-semibold"
  }, "Sign in"), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "block mb-1"
  }, " Email "), react_1["default"].createElement("input", {
    onChange: handleChange,
    value: formData.email,
    name: "email",
    className: "appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",
    type: "text",
    placeholder: "Type here"
  })), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "block mb-1"
  }, " Password "), react_1["default"].createElement("input", {
    onChange: handleChange,
    value: formData.password,
    name: "password",
    className: "appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",
    type: "password",
    placeholder: "Type here"
  })), react_1["default"].createElement("label", {
    className: "flex items-center w-max mb-5"
  }, react_1["default"].createElement("input", {
    name: "",
    type: "checkbox",
    className: "h-4 w-4"
  }), react_1["default"].createElement("span", {
    className: "ml-2 inline-block text-gray-500"
  }, " Remember me ")), react_1["default"].createElement("button", {
    type: "submit",
    className: "px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
  }, "  Sign in "), react_1["default"].createElement("div", {
    className: "text-center border-b my-5 leading-[0.1rem]"
  }, react_1["default"].createElement("span", {
    className: "px-3 bg-white text-gray-400"
  }, "or")), react_1["default"].createElement("p", {
    className: "text-center mt-5"
  }, "Don\u2019t have an account?  ", react_1["default"].createElement("a", {
    className: "text-blue-500",
    href: "#"
  }, "Sign up"))))), react_1["default"].createElement(react_1.Suspense, {
    fallback: react_1["default"].createElement("div", null, "loading")
  }, react_1["default"].createElement(Footer, null)));
}

exports["default"] = login;

/***/ }),

/***/ "./resources/js/Pages/Client/index.tsx":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Client/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function HomePage() {
  var AppLayout = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! ../../layouts/client */ "./resources/js/layouts/client.tsx"));
    });
  });
  var CategoriesNavigation = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! ../../components/client/includes/categoriesNavigation */ "./resources/js/components/client/includes/categoriesNavigation.tsx"));
    });
  });
  var Hero = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! ../../components/client/includes/hero */ "./resources/js/components/client/includes/hero.tsx"));
    });
  });
  var HomePageCategories = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! ../../components/client/shards/homePageCategories */ "./resources/js/components/client/shards/homePageCategories.tsx"));
    });
  });
  return react_1["default"].createElement("div", {
    className: 'bg-[#EAEDED]'
  }, react_1["default"].createElement(react_1.Suspense, {
    fallback: react_1["default"].createElement("div", null, react_1["default"].createElement("h1", null, "loading..."))
  }, react_1["default"].createElement(AppLayout, null, react_1["default"].createElement(Hero, null), react_1["default"].createElement(CategoriesNavigation, null), react_1["default"].createElement(HomePageCategories, null))));
}

exports["default"] = HomePage;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/categories/index.tsx":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/categories/index.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var formDialog_1 = __importDefault(__webpack_require__(/*! ../../shards/formDialog */ "./resources/js/Pages/shards/formDialog.tsx"));

var dashboard_1 = __importDefault(__webpack_require__(/*! ../../../layouts/dashboard */ "./resources/js/layouts/dashboard.tsx"));

var DataGrid_1 = __importDefault(__webpack_require__(/*! ../../../components/DataTables/DataGrid */ "./resources/js/components/DataTables/DataGrid.tsx"));

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var free_regular_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.js");

function index(_ref) {
  var categories = _ref.categories,
      locale = _ref.locale;

  var _ref2 = (0, react_hook_form_1.useForm)(),
      register = _ref2.register,
      handleSubmit = _ref2.handleSubmit,
      watch = _ref2.watch,
      errors = _ref2.formState.errors,
      reset = _ref2.reset,
      setValue = _ref2.setValue,
      control = _ref2.control;

  var _ref3 = (0, react_1.useState)(false),
      _ref4 = _slicedToArray(_ref3, 2),
      openAddDialog = _ref4[0],
      setOpenAddDialog = _ref4[1];

  var _ref5 = (0, react_1.useState)(false),
      _ref6 = _slicedToArray(_ref5, 2),
      openUpdateDialog = _ref6[0],
      setOpenUpdateDialog = _ref6[1];

  var _ref7 = (0, react_1.useState)(false),
      _ref8 = _slicedToArray(_ref7, 2),
      openDeleteDialog = _ref8[0],
      setOpenDeleteDialog = _ref8[1];

  var _ref9 = (0, react_1.useState)(),
      _ref10 = _slicedToArray(_ref9, 2),
      dataWillBeUpdated = _ref10[0],
      setDataWillBeUpdated = _ref10[1];

  var handleAddDialog = function handleAddDialog() {
    setOpenAddDialog(!openAddDialog);
  };

  var handleUpdateDialog = function handleUpdateDialog(event, params) {
    setOpenUpdateDialog(!openUpdateDialog);
    setDataWillBeUpdated(Object.assign({}, params.data));
    console.log('====================================');
    console.log(params);
    console.log(dataWillBeUpdated);
    console.log('====================================');
  };

  var handleDeleteDialog = function handleDeleteDialog() {
    setOpenDeleteDialog(!openDeleteDialog);
  };

  var columns = [{
    field: 'id',
    headerName: 'ID'
  }, {
    field: "title.".concat(locale),
    headerName: 'Title',
    floatingFilter: true,
    flex: 1,
    cellClass: 'font-bold'
  }, {
    field: "parent.title.".concat(locale),
    headerName: 'Parent',
    floatingFilter: true,
    cellClass: 'font-bold'
  }, {
    field: 'created_at',
    headerName: 'Created At',
    filter: 'agDateColumnFilter',
    floatingFilter: true
  }, {
    headerName: 'Actions',
    cellRenderer: function cellRenderer(params) {
      return react_1["default"].createElement("div", null, react_1["default"].createElement(material_1.Button, {
        onClick: function onClick(event) {
          return handleUpdateDialog(event, params);
        }
      }, "UPDATE"));
    }
  }];

  var formSubmitHandler = function formSubmitHandler(data) {
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.categories.store'), resolveData);
    reset();
  };

  var selectParentMenuItems = categories.map(function (category) {
    return react_1["default"].createElement(material_1.MenuItem, {
      value: category.id,
      key: category.id
    }, category.title.en);
  });
  return react_1["default"].createElement(dashboard_1["default"], null, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    id: 'update'
  }, react_1["default"].createElement(formDialog_1["default"], {
    btnLabel: 'Update Category',
    header: 'Update Category',
    handleClose: function handleClose() {
      return setOpenUpdateDialog(!openUpdateDialog);
    },
    open: openUpdateDialog
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit(formSubmitHandler)
  }, react_1["default"].createElement(material_1.InputLabel, {
    id: "demo-simple-select-standard-label",
    margin: 'dense'
  }, "Choose Parent ", react_1["default"].createElement("small", null, "optional")), react_1["default"].createElement(react_hook_form_1.Controller, {
    control: control,
    name: 'parent_id',
    render: function render() {
      return react_1["default"].createElement(material_1.Select, {
        labelId: "demo-simple-select-standard-label",
        id: "demo-simple-select-standard",
        label: "Select Parent Category",
        margin: "dense",
        fullWidth: true,
        defaultValue: '',
        autoFocus: true
      }, selectParentMenuItems);
    }
  }), react_1["default"].createElement(material_1.TextField, Object.assign({}, register('title'), {
    autoFocus: true,
    margin: "dense",
    id: "title",
    name: 'title',
    label: "Category Title",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.Button, {
    variant: "outlined",
    component: "label"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: free_regular_svg_icons_1.faFileImage
  }), " ", react_1["default"].createElement("span", {
    className: 'ml-2'
  }, "add Image"), react_1["default"].createElement("input", Object.assign({}, register('images'), {
    type: "file",
    name: 'images',
    hidden: true
  }))), react_1["default"].createElement(material_1.DialogActions, null, react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "Submit"))))), react_1["default"].createElement("div", {
    id: 'add'
  }, react_1["default"].createElement(material_1.Button, {
    className: "absolute top-3 lg:left-24",
    variant: 'contained',
    onClick: handleAddDialog
  }, "Add Category"), react_1["default"].createElement(formDialog_1["default"], {
    btnLabel: 'Add Category',
    header: 'Create New Category',
    handleClose: handleAddDialog,
    open: openAddDialog
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit(formSubmitHandler)
  }, react_1["default"].createElement(material_1.InputLabel, {
    id: "demo-simple-select-standard-label",
    margin: 'dense'
  }, "Choose Parent ", react_1["default"].createElement("small", null, "optional")), react_1["default"].createElement(material_1.Select, Object.assign({}, register('parent_id'), {
    labelId: "demo-simple-select-standard-label",
    id: "demo-simple-select-standard",
    label: "Select Parent Category",
    margin: "dense",
    name: 'parent_id',
    fullWidth: true,
    autoFocus: true
  }), react_1["default"].createElement(material_1.MenuItem, {
    value: ''
  }, "No Parent"), selectParentMenuItems), react_1["default"].createElement(material_1.TextField, Object.assign({}, register('title'), {
    autoFocus: true,
    margin: "dense",
    id: "title",
    name: 'title',
    label: "Category Title",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.Button, {
    variant: "outlined",
    component: "label"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: free_regular_svg_icons_1.faFileImage
  }), " ", react_1["default"].createElement("span", {
    className: 'ml-2'
  }, "add Image"), react_1["default"].createElement("input", Object.assign({}, register('images'), {
    type: "file",
    name: 'images',
    hidden: true
  }))), react_1["default"].createElement(material_1.DialogActions, null, react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "Submit"))))), react_1["default"].createElement(DataGrid_1["default"], {
    gridData: categories,
    colDef: columns,
    size: {
      height: '90vh',
      width: 'auto'
    }
  })));
}

exports["default"] = index;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/customers/index.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/customers/index.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function index(_ref) {
  var users = _ref.users;
  var DataGrid = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! ../../../components/DataTables/DataGrid */ "./resources/js/components/DataTables/DataGrid.tsx"));
    });
  });
  var DashboardLayout = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! ../../../layouts/dashboard */ "./resources/js/layouts/dashboard.tsx"));
    });
  });
  var filterParams = {
    // provide comparator function
    comparator: function comparator(filterLocalDateAtMidnight, cellValue) {
      var dateAsString = cellValue;

      if (dateAsString == null) {
        return 0;
      } // In the example application, dates are stored as dd/mm/yyyy
      // We create a Date object for comparison against the filter date


      var dateParts = dateAsString.split('/');
      var year = Number(dateParts[2]);
      var month = Number(dateParts[1]) - 1;
      var day = Number(dateParts[0]);
      var cellDate = new Date(year, month, day); // Now that both parameters are Date objects, we can compare

      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      } else if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }

      return 0;
    }
  };
  var columns = [{
    field: 'id',
    headerName: 'ID'
  }, {
    field: 'name',
    headerName: 'Name',
    floatingFilter: true,
    flex: 1,
    cellClass: 'font-bold text-lg'
  }, {
    field: 'created_at',
    headerName: 'Join Date',
    filter: 'agDateColumnFilter',
    floatingFilter: true,
    filterParams: filterParams
  }, {
    field: 'status',
    headerName: 'Status'
  }];
  return react_1["default"].createElement(react_1.Suspense, {
    fallback: react_1["default"].createElement("div", null, "Loading...")
  }, react_1["default"].createElement(DashboardLayout, null, react_1["default"].createElement(DataGrid, {
    gridData: users,
    colDef: columns,
    size: {
      height: '90vh',
      width: 'auto'
    }
  })));
}

exports["default"] = index;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/index.tsx":
/*!************************************************!*\
  !*** ./resources/js/Pages/Dashboard/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function index() {
  var DashboardLayout = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! ../../layouts/dashboard */ "./resources/js/layouts/dashboard.tsx"));
    });
  });
  return react_1["default"].createElement(react_2.Suspense, {
    fallback: react_1["default"].createElement("div", null, "Loading...")
  }, react_1["default"].createElement(DashboardLayout, null, react_1["default"].createElement("div", null, "'Home Page'")));
}

exports["default"] = index;

/***/ }),

/***/ "./resources/js/Pages/shards/formDialog.tsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/shards/formDialog.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Button_1 = __importDefault(__webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js"));

var Dialog_1 = __importDefault(__webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/index.js"));

var DialogActions_1 = __importDefault(__webpack_require__(/*! @mui/material/DialogActions */ "./node_modules/@mui/material/DialogActions/index.js"));

var DialogContent_1 = __importDefault(__webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/DialogContent/index.js"));

var DialogContentText_1 = __importDefault(__webpack_require__(/*! @mui/material/DialogContentText */ "./node_modules/@mui/material/DialogContentText/index.js"));

var DialogTitle_1 = __importDefault(__webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/index.js"));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var progress_1 = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");

function FormDialog(_ref) {
  var children = _ref.children,
      header = _ref.header,
      content = _ref.content,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      handleClose = _ref.handleClose;
  progress_1.InertiaProgress.init({
    showSpinner: true,
    delay: 250
  });
  return react_1["default"].createElement("div", {
    className: 'relative'
  }, react_1["default"].createElement(Dialog_1["default"], {
    open: open,
    onClose: handleClose,
    fullWidth: true
  }, react_1["default"].createElement(DialogActions_1["default"], null, react_1["default"].createElement(Button_1["default"], {
    onClick: handleClose,
    color: "secondary",
    variant: 'text'
  }, "X")), react_1["default"].createElement(DialogTitle_1["default"], null, header), react_1["default"].createElement(DialogContent_1["default"], null, react_1["default"].createElement(DialogContentText_1["default"], null, content), children)));
}

exports["default"] = FormDialog;

/***/ }),

/***/ "./resources/js/components/DataTables/DataGrid.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/DataTables/DataGrid.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ag_grid_react_1 = __webpack_require__(/*! ag-grid-react */ "./node_modules/ag-grid-react/main.js");

function DataGrid(_ref) {
  var size = _ref.size,
      showNoRowsOverlay = _ref.showNoRowsOverlay,
      gridData = _ref.gridData,
      colDef = _ref.colDef,
      _ref$rowClickHandler = _ref.rowClickHandler,
      rowClickHandler = _ref$rowClickHandler === void 0 ? undefined : _ref$rowClickHandler;
  var gridOptions = {
    rowData: gridData,
    columnDefs: colDef,
    colResizeDefault: 'shift' // onGridReady: (event) => event.columnApi.sizeColumnsToFit(1486),

  };
  return react_1["default"].createElement("div", {
    className: 'container p-6 mx-auto ag-theme-material',
    style: size
  }, react_1["default"].createElement(ag_grid_react_1.AgGridReact, {
    rowSelection: 'multiple',
    defaultColDef: {
      resizable: true,
      filter: true
    },
    onRowClicked: rowClickHandler,
    gridOptions: gridOptions,
    pagination: true,
    paginationAutoPageSize: true,
    animateRows: true
  }));
}

exports["default"] = DataGrid;

/***/ }),

/***/ "./resources/js/components/client/includes/categoriesNavigation.tsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/client/includes/categoriesNavigation.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function CategoriesNavigation() {
  return react_1["default"].createElement("nav", {
    className: "border-b bg-[#4E4E50]"
  }, react_1["default"].createElement("div", {
    className: "container max-w-screen-xl mx-auto px-4"
  }, react_1["default"].createElement("div", {
    className: "hidden lg:flex flex-1 items-center py-1 text-white"
  }, react_1["default"].createElement("a", {
    className: "px-3 py-2 rounded-md hover:bg-gray-200",
    href: "#"
  }, " Category "), react_1["default"].createElement("a", {
    className: "px-3 py-2 rounded-md hover:bg-gray-200",
    href: "#"
  }, " About "), react_1["default"].createElement("a", {
    className: "px-3 py-2 rounded-md hover:bg-gray-200",
    href: "#"
  }, " Services "), react_1["default"].createElement("a", {
    className: "px-3 py-2 rounded-md hover:bg-gray-200",
    href: "#"
  }, " Projects "), react_1["default"].createElement("a", {
    className: "px-3 py-2 rounded-md hover:bg-gray-200",
    href: "#"
  }, " Offers "), react_1["default"].createElement("a", {
    className: "px-3 py-2 rounded-md hover:bg-gray-200",
    href: "#"
  }, " Others "))));
}

exports["default"] = CategoriesNavigation;

/***/ }),

/***/ "./resources/js/components/client/includes/footer.tsx":
/*!************************************************************!*\
  !*** ./resources/js/components/client/includes/footer.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Footer() {
  return react_1["default"].createElement("footer", {
    className: "bg-blue-600"
  }, react_1["default"].createElement("section", {
    className: "py-10 text-white"
  }, react_1["default"].createElement("div", {
    className: "container max-w-screen-xl mx-auto px-4"
  }, react_1["default"].createElement("div", {
    className: "flex flex-wrap"
  }, react_1["default"].createElement("aside", {
    className: "w-full md:w-1/3 lg:w-1/4 mb-5"
  }, react_1["default"].createElement("p", {
    className: "my-4"
  }, "Company name. ", react_1["default"].createElement("br", null), "\xA9 2018- 2021 Templatemount. ", react_1["default"].createElement("br", null), "All rights reserved.")), react_1["default"].createElement("aside", {
    className: "w-1/2 sm:w-auto flex-auto mb-5"
  }, react_1["default"].createElement("h3", {
    className: "font-semibold"
  }, "Store"), react_1["default"].createElement("ul", {
    className: "mt-2 space-y-1"
  }, react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Join us ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Find store ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Categories ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Partnership ")))), react_1["default"].createElement("aside", {
    className: "w-1/2 sm:w-auto flex-auto mb-5"
  }, react_1["default"].createElement("h3", {
    className: "font-semibold"
  }, "About"), react_1["default"].createElement("ul", {
    className: "mt-2 space-y-1"
  }, react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " About us ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Our history ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Our team ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Offices ")))), react_1["default"].createElement("aside", {
    className: "w-1/2 sm:w-auto flex-auto mb-5"
  }, react_1["default"].createElement("h3", {
    className: "font-semibold"
  }, "Help"), react_1["default"].createElement("ul", {
    className: "mt-2 space-y-1"
  }, react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Contact us ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Submit ticket ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " FAQs ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Refunds ")))), react_1["default"].createElement("aside", {
    className: "w-1/2 sm:w-auto flex-auto mb-5"
  }, react_1["default"].createElement("h3", {
    className: "font-semibold"
  }, "Links"), react_1["default"].createElement("ul", {
    className: "mt-2 space-y-1"
  }, react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Our terms ")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Privacy setting")), react_1["default"].createElement("li", null, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, " Sign up ")))), react_1["default"].createElement("aside", {
    className: "w-1/2 sm:w-auto lg:w-40 mb-5"
  }, react_1["default"].createElement("h3", {
    className: "font-semibold"
  }, "Apps"), react_1["default"].createElement("a", {
    href: "#",
    className: "mt-3 inline-block"
  }), react_1["default"].createElement("a", {
    href: "#",
    className: "inline-block"
  }))))), react_1["default"].createElement("section", {
    className: "bg-blue-700 py-6 text-white"
  }, react_1["default"].createElement("div", {
    className: "container max-w-screen-xl mx-auto px-4"
  }, react_1["default"].createElement("div", {
    className: "lg:flex justify-between"
  }, react_1["default"].createElement("div", {
    className: "mb-3"
  }), react_1["default"].createElement("div", {
    className: "space-x-6"
  }, react_1["default"].createElement("nav", {
    className: "text-sm space-x-4"
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, "Support"), react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, "Privacy & Cookies"), react_1["default"].createElement("a", {
    href: "#",
    className: "opacity-70 hover:opacity-100"
  }, "Accessibility")))))));
}

exports["default"] = Footer;

/***/ }),

/***/ "./resources/js/components/client/includes/header.tsx":
/*!************************************************************!*\
  !*** ./resources/js/components/client/includes/header.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var NavBarLinks_1 = __importDefault(__webpack_require__(/*! ../shards/NavBarLinks */ "./resources/js/components/client/shards/NavBarLinks.tsx"));

function Header() {
  return react_1["default"].createElement("div", null, react_1["default"].createElement("header", {
    className: "bg-white py-3"
  }, react_1["default"].createElement("div", {
    className: "px-4"
  }, react_1["default"].createElement("div", {
    className: "flex flex-wrap items-center"
  }, react_1["default"].createElement("div", {
    className: "flex-shrink-0 mr-auto ml-5"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('home')
  }, react_1["default"].createElement("img", {
    src: "https://freepngclipart.com/download/clothing/13219-clothing-baby-clothes-2-image-png-image.png",
    height: 38,
    width: 38,
    alt: "Brand"
  }))), react_1["default"].createElement("div", {
    className: "flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-[60%]"
  }, react_1["default"].createElement("input", {
    className: "flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400",
    type: "text",
    placeholder: "Search"
  }), react_1["default"].createElement("button", {
    type: "button",
    className: "px-4 py-2 inline-block text-white border border-transparent bg-blue-600 rounded-md hover:bg-blue-700"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: free_solid_svg_icons_1.faSearch
  }))), react_1["default"].createElement("div", {
    className: "flex items-start space-x-2 ml-auto xl:ml-11"
  }, react_1["default"].createElement(NavBarLinks_1["default"], null)), react_1["default"].createElement("div", {
    className: "lg:hidden ml-2"
  }, react_1["default"].createElement("button", {
    type: "button",
    className: "bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
  }, react_1["default"].createElement("span", {
    className: "sr-only"
  }, "Open menu"), react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: free_solid_svg_icons_1.faBars
  }))))), "  "));
}

exports["default"] = Header;

/***/ }),

/***/ "./resources/js/components/client/includes/hero.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/client/includes/hero.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_2 = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");

var swiper_1 = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

__webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");

__webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");

var heroCoursel_1 = __importDefault(__webpack_require__(/*! ../shards/heroCoursel */ "./resources/js/components/client/shards/heroCoursel.tsx"));

function Hero() {
  return react_1["default"].createElement("div", null, react_1["default"].createElement("section", {
    className: "py-5"
  }, react_1["default"].createElement("div", {
    className: "mx-auto px-4"
  }, react_1["default"].createElement("div", {
    className: "grid md:grid-cols-4 gap-5 mx-auto"
  }, react_1["default"].createElement(react_2.Swiper, {
    navigation: true,
    pagination: true,
    modules: [swiper_1.Navigation, swiper_1.Pagination],
    className: "md:col-span-4",
    style: {
      width: 1500
    },
    loop: true
  }, react_1["default"].createElement(react_2.SwiperSlide, null, react_1["default"].createElement(heroCoursel_1["default"], null)), react_1["default"].createElement(react_2.SwiperSlide, null, react_1["default"].createElement(heroCoursel_1["default"], null)), react_1["default"].createElement(react_2.SwiperSlide, null, react_1["default"].createElement(heroCoursel_1["default"], null)))))));
}

exports["default"] = Hero;

/***/ }),

/***/ "./resources/js/components/client/shards/NavBarLinks.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/client/shards/NavBarLinks.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var notLoggedIn_1 = __importDefault(__webpack_require__(/*! ./notLoggedIn */ "./resources/js/components/client/shards/notLoggedIn.tsx"));

function NavBarLinks() {
  // if (user !== null) {
  //   return <LoggedInNav user={user} />
  // }
  return react_1["default"].createElement(notLoggedIn_1["default"], null);
}

exports["default"] = NavBarLinks;

/***/ }),

/***/ "./resources/js/components/client/shards/categoryCard.tsx":
/*!****************************************************************!*\
  !*** ./resources/js/components/client/shards/categoryCard.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function CategoryCard(_ref) {
  var imageUrl = _ref.imageUrl,
      header = _ref.header;
  return react_1["default"].createElement("div", {
    className: "bg-white flex justify-center w-[350px] h-[385px] rounded-lg shadow-lg"
  }, react_1["default"].createElement("div", {
    className: "block w-full text-center"
  }, react_1["default"].createElement("div", {
    className: "py-2 h-[10%] font-bold"
  }, header), react_1["default"].createElement("div", {
    className: ""
  }), react_1["default"].createElement("a", {
    href: "",
    className: ''
  }, "see more")));
}

exports["default"] = CategoryCard;

/***/ }),

/***/ "./resources/js/components/client/shards/heroCoursel.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/client/shards/heroCoursel.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function HeroCoursel() {
  return react_1["default"].createElement("div", null, react_1["default"].createElement("article", {
    className: "h-[300px] w-100"
  }, react_1["default"].createElement("div", {
    className: 'p-10 absolute top-4 left-0'
  }, react_1["default"].createElement("h1", {
    className: "text-3xl md:text-4xl text-white font-semibold"
  }, "Best products & ", react_1["default"].createElement("br", null), "brands in our store"), react_1["default"].createElement("p", {
    className: "text-lg text-white font-normal mt-4 mb-6"
  }, "Trendy Products, Factory Prices, Excellent Service"), react_1["default"].createElement("div", {
    className: 'grid md:grid-cols-4 gap-2 text-center'
  }, react_1["default"].createElement("a", {
    className: "md:col-span-2 px-2 py-2 inline-block font-semibold bg-yellow-500 text-white border border-transparent rounded-md hover:bg-yellow-600",
    href: "#"
  }, "Discover"), react_1["default"].createElement("a", {
    className: "md:col-span-2 px-2 py-2 inline-block font-semibold text-blue-600 border border-transparent rounded-md hover:bg-gray-100 bg-white",
    href: "#"
  }, "Learn more")))));
}

exports["default"] = HeroCoursel;

/***/ }),

/***/ "./resources/js/components/client/shards/homePageCategories.tsx":
/*!**********************************************************************!*\
  !*** ./resources/js/components/client/shards/homePageCategories.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var categoryCard_1 = __importDefault(__webpack_require__(/*! ./categoryCard */ "./resources/js/components/client/shards/categoryCard.tsx"));

function HomePageCategories() {
  return react_1["default"].createElement("section", {
    className: "py-5 mx-auto",
    style: {
      width: 1480
    }
  }, react_1["default"].createElement("div", {
    className: "px-4"
  }, react_1["default"].createElement("nav", {
    className: "grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-x-3 gap-y-6"
  }, react_1["default"].createElement(categoryCard_1["default"], {
    header: 'WOMEN'
  }), react_1["default"].createElement(categoryCard_1["default"], {
    header: 'MEN'
  }), react_1["default"].createElement(categoryCard_1["default"], {
    header: 'KIDS'
  }), react_1["default"].createElement(categoryCard_1["default"], {
    header: 'SPORTS'
  }))));
}

exports["default"] = HomePageCategories;

/***/ }),

/***/ "./resources/js/components/client/shards/notLoggedIn.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/client/shards/notLoggedIn.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

function NotLoggedIn() {
  return react_1["default"].createElement("div", null, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('client.login'),
    className: "px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    className: "text-gray-400 w-5",
    icon: free_solid_svg_icons_1.faUser
  }), react_1["default"].createElement("span", {
    className: "hidden lg:inline ml-1"
  }, "Sign in")), react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('client.login'),
    className: "px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    className: "text-gray-400 w-5",
    icon: free_solid_svg_icons_1.faUser
  }), react_1["default"].createElement("span", {
    className: "hidden lg:inline ml-1"
  }, "Register")), react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('client.login'),
    className: "px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    className: "text-gray-400 w-5",
    icon: free_solid_svg_icons_1.faUser
  }), react_1["default"].createElement("span", {
    className: "hidden lg:inline ml-1"
  }, "Sell with us")));
}

exports["default"] = NotLoggedIn;

/***/ }),

/***/ "./resources/js/includes/aside.tsx":
/*!*****************************************!*\
  !*** ./resources/js/includes/aside.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

function Aside() {
  var auth = (0, inertia_react_1.usePage)().props.auth;
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");

  var hide_sidebar = function hide_sidebar() {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.add("-left-full");
    backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.add("hidden");
  };

  return react_1["default"].createElement("aside", {
    id: "sidebar",
    className: "fixed -left-full top-0 bottom-0 md:static z-40 w-60 overflow-y-auto bg-blue-800 flex-shrink-0 h-[113vh]"
  }, react_1["default"].createElement("header", {
    className: "flex items-center h-14 px-4 py-2 mb-2 border-b border-blue-700"
  }, react_1["default"].createElement("a", {
    className: "inline-block",
    href: "https://tailwind-ecommerce.com"
  }), react_1["default"].createElement("h3", {
    className: "text-white text-left"
  }, " ", react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: free_solid_svg_icons_1.faUserAlt
  }), " ", auth.user.name), react_1["default"].createElement("button", {
    onClick: function onClick() {
      return hide_sidebar();
    },
    className: "md:hidden float-right appearance-none border border-transparent bg-transparent text-white"
  }, react_1["default"].createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-x"
  }, react_1["default"].createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), react_1["default"].createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), react_1["default"].createElement("ul", null, react_1["default"].createElement("li", {
    className: "hover:bg-blue-100 relative"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('dashboard.index'),
    className: "flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
  }, react_1["default"].createElement("span", {
    "aria-hidden": "true"
  }, react_1["default"].createElement("svg", {
    className: "text-white opacity-50",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, react_1["default"].createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), react_1["default"].createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }))), react_1["default"].createElement("span", {
    className: "ml-3"
  }, "Dashboard"))), react_1["default"].createElement("li", {
    className: "hover:bg-blue-100 relative"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('admin.categories.index'),
    className: "flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
  }, react_1["default"].createElement("span", {
    "aria-hidden": "true"
  }, react_1["default"].createElement("svg", {
    className: "text-white opacity-50",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, react_1["default"].createElement("path", {
    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), react_1["default"].createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), react_1["default"].createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }))), react_1["default"].createElement("span", {
    className: "ml-3"
  }, "Categories"))), react_1["default"].createElement("li", {
    className: "hover:bg-blue-100 relative"
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
  }, react_1["default"].createElement("span", {
    "aria-hidden": "true"
  }, react_1["default"].createElement("svg", {
    className: "text-white opacity-50",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, react_1["default"].createElement("circle", {
    cx: "9",
    cy: "21",
    r: "1"
  }), react_1["default"].createElement("circle", {
    cx: "20",
    cy: "21",
    r: "1"
  }), react_1["default"].createElement("path", {
    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
  }))), react_1["default"].createElement("span", {
    className: "ml-3"
  }, "Orders"))), react_1["default"].createElement("li", {
    className: "hover:bg-blue-100 relative"
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('admin.users'),
    className: "flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
  }, react_1["default"].createElement("span", {
    "aria-hidden": "true"
  }, react_1["default"].createElement("svg", {
    className: "text-white opacity-50",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, react_1["default"].createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), react_1["default"].createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), react_1["default"].createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), react_1["default"].createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }))), react_1["default"].createElement("span", {
    className: "ml-3"
  }, "Customers"))), react_1["default"].createElement("li", {
    className: "hover:bg-blue-100 relative"
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
  }, react_1["default"].createElement("span", {
    "aria-hidden": "true"
  }, react_1["default"].createElement("svg", {
    className: "text-white opacity-50",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, react_1["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), react_1["default"].createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  }))), react_1["default"].createElement("span", {
    className: "ml-3"
  }, "Settings"))), react_1["default"].createElement("li", {
    className: "relative"
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700"
  }, react_1["default"].createElement("span", {
    "aria-hidden": "true"
  }, react_1["default"].createElement("svg", {
    className: "text-white opacity-50",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, react_1["default"].createElement("path", {
    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
  }), react_1["default"].createElement("polyline", {
    points: "13 2 13 9 20 9"
  }))), react_1["default"].createElement("span", {
    className: "ml-3"
  }, "More pages"), react_1["default"].createElement("span", null, react_1["default"].createElement("svg", {
    className: "text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24"
  }, " ", react_1["default"].createElement("path", {
    fill: "currentColor",
    d: "M7 10l5 5 5-5H7z"
  })))), react_1["default"].createElement("div", {
    className: "submenu pb-3"
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "pl-14 py-1 block text-white hover:bg-blue-700"
  }, "Submenu one"), react_1["default"].createElement("a", {
    href: "#",
    className: "pl-14 py-1 block text-white hover:bg-blue-700"
  }, "Submenu two")))), react_1["default"].createElement("hr", {
    className: "border-blue-600"
  }), react_1["default"].createElement("div", {
    className: "px-5 my-6"
  }, react_1["default"].createElement("button", {
    className: "inline-block w-full text-left px-4 py-2 text-black bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500"
  }, "Create account", react_1["default"].createElement("span", {
    className: "float-right",
    "aria-hidden": "true"
  }, "+"))));
}

exports["default"] = Aside;

/***/ }),

/***/ "./resources/js/includes/navbar.tsx":
/*!******************************************!*\
  !*** ./resources/js/includes/navbar.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

function Navbar() {
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('backdrop');

  var open_sidebar = function open_sidebar() {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.remove('-left-full');
    backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.remove('hidden');
  };

  return react_1["default"].createElement("header", {
    className: "h-14 z-10 py-3 bg-white shadow-sm border-b border-gray-200"
  }, react_1["default"].createElement("div", {
    className: "container h-full flex items-center justify-between px-6 mx-auto"
  }, react_1["default"].createElement("button", {
    onClick: function onClick() {
      return open_sidebar();
    },
    className: "p-1 mr-5  md:hidden focus:outline-none focus:shadow-outline-purple"
  }, react_1["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "28",
    width: "28",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, react_1["default"].createElement("path", {
    fill: "currentColor",
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }))), react_1["default"].createElement("form", null, react_1["default"].createElement("div", {
    className: "relative"
  }, react_1["default"].createElement("input", {
    className: "appearance-none border border-transparent bg-transparent rounded-md py-1 px-2 focus:outline-none focus:border-gray-400 w-full",
    type: "text",
    placeholder: "Search for ",
    "aria-label": "Search"
  }))), react_1["default"].createElement("ul", {
    className: "flex items-center flex-shrink-0 space-x-2"
  }, react_1["default"].createElement("li", null, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('admin.logout'),
    className: "w-10 h-10 flex items-center justify-center bg-gray-200 border border-transparent rounded-full hover:border-blue-400 overflow-hidden",
    "aria-label": "Button name"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: free_solid_svg_icons_1.faSignOutAlt
  }))))));
}

exports["default"] = Navbar;

/***/ }),

/***/ "./resources/js/layouts/client.tsx":
/*!*****************************************!*\
  !*** ./resources/js/layouts/client.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var footer_1 = __importDefault(__webpack_require__(/*! ../components/client/includes/footer */ "./resources/js/components/client/includes/footer.tsx"));

var header_1 = __importDefault(__webpack_require__(/*! ../components/client/includes/header */ "./resources/js/components/client/includes/header.tsx"));

function AppLayout(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement("div", null, react_1["default"].createElement(header_1["default"], null), children, react_1["default"].createElement(footer_1["default"], null));
}

exports["default"] = AppLayout;

/***/ }),

/***/ "./resources/js/layouts/dashboard.tsx":
/*!********************************************!*\
  !*** ./resources/js/layouts/dashboard.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var aside_1 = __importDefault(__webpack_require__(/*! ../includes/aside */ "./resources/js/includes/aside.tsx"));

var navbar_1 = __importDefault(__webpack_require__(/*! ../includes/navbar */ "./resources/js/includes/navbar.tsx"));

function DashboardLayout(_ref) {
  var children = _ref.children;
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");

  var _ref2 = (0, react_1.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      openFlashMessage = _ref3[0],
      setOpenFlashMessage = _ref3[1];

  var flash = (0, inertia_react_1.usePage)().props.flash;

  var hide_sidebar = function hide_sidebar() {
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.add("-left-full");
    backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.add("hidden");
  };

  return react_1["default"].createElement("div", {
    className: 'bg-gray-100 text-gray-600'
  }, react_1["default"].createElement("b", {
    id: "backdrop",
    onClick: function onClick() {
      return hide_sidebar();
    },
    className: "fixed hidden md:hidden bg-black opacity-60 top-0 left-0 right-0 bottom-0 z-30"
  }), react_1["default"].createElement("div", {
    className: 'flex min-h-screen dark:bg-gray-900'
  }, react_1["default"].createElement(aside_1["default"], null), react_1["default"].createElement("main", {
    className: 'w-full'
  }, react_1["default"].createElement(navbar_1["default"], null), flash.message && react_1["default"].createElement(material_1.Snackbar, {
    open: true,
    autoHideDuration: 6000,
    onClose: function onClose() {
      return setOpenFlashMessage(false);
    }
  }, react_1["default"].createElement(material_1.Alert, {
    onClose: function onClose() {
      return setOpenFlashMessage(false);
    },
    severity: flash.message,
    sx: {
      width: '100%'
    }
  }, flash.message)), children)));
}

exports["default"] = DashboardLayout;

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");




(0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props;
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(el).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, props));
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/login": "./resources/js/Pages/Auth/login.tsx",
	"./Auth/login.tsx": "./resources/js/Pages/Auth/login.tsx",
	"./Client": "./resources/js/Pages/Client/index.tsx",
	"./Client/": "./resources/js/Pages/Client/index.tsx",
	"./Client/auth/login": "./resources/js/Pages/Client/auth/login.tsx",
	"./Client/auth/login.tsx": "./resources/js/Pages/Client/auth/login.tsx",
	"./Client/index": "./resources/js/Pages/Client/index.tsx",
	"./Client/index.tsx": "./resources/js/Pages/Client/index.tsx",
	"./Dashboard": "./resources/js/Pages/Dashboard/index.tsx",
	"./Dashboard/": "./resources/js/Pages/Dashboard/index.tsx",
	"./Dashboard/categories": "./resources/js/Pages/Dashboard/categories/index.tsx",
	"./Dashboard/categories/": "./resources/js/Pages/Dashboard/categories/index.tsx",
	"./Dashboard/categories/index": "./resources/js/Pages/Dashboard/categories/index.tsx",
	"./Dashboard/categories/index.tsx": "./resources/js/Pages/Dashboard/categories/index.tsx",
	"./Dashboard/customers": "./resources/js/Pages/Dashboard/customers/index.tsx",
	"./Dashboard/customers/": "./resources/js/Pages/Dashboard/customers/index.tsx",
	"./Dashboard/customers/index": "./resources/js/Pages/Dashboard/customers/index.tsx",
	"./Dashboard/customers/index.tsx": "./resources/js/Pages/Dashboard/customers/index.tsx",
	"./Dashboard/index": "./resources/js/Pages/Dashboard/index.tsx",
	"./Dashboard/index.tsx": "./resources/js/Pages/Dashboard/index.tsx",
	"./shards/formDialog": "./resources/js/Pages/shards/formDialog.tsx",
	"./shards/formDialog.tsx": "./resources/js/Pages/shards/formDialog.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);