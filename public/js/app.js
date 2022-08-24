(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/Pages/Auth/login.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/login.tsx ***!
  \*******************************************/
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var yup = __importStar(__webpack_require__(/*! yup */ "./node_modules/yup/es/index.js"));

var yup_1 = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var alert_1 = __importDefault(__webpack_require__(/*! ../../components/shards/alert */ "./resources/js/components/shards/alert.tsx"));

function AdminLogin() {
  var _a, _b;

  var schema = yup.object({
    email: yup.string().required().email().max(200),
    password: yup.string().required()
  });

  var _ref = (0, react_hook_form_1.useForm)({
    resolver: (0, yup_1.yupResolver)(schema)
  }),
      register = _ref.register,
      handleSubmit = _ref.handleSubmit,
      errors = _ref.formState.errors,
      reset = _ref.reset;

  var serverSideErrors = (0, inertia_react_1.usePage)().props.errors;
  console.log('====================================');
  console.log(serverSideErrors);
  console.log('====================================');

  var formAddSubmitHandler = function formAddSubmitHandler(data, e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.postLogin'), resolveData);
    reset();
  };

  return react_1["default"].createElement("div", null, react_1["default"].createElement("section", {
    className: "bg-gray-100 py-10 min-h-[86vh]"
  }, react_1["default"].createElement("div", {
    className: "container max-w-screen-xl mx-auto px-4"
  }, react_1["default"].createElement("div", {
    className: "mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg max-w-[500px]"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit(formAddSubmitHandler)
  }, react_1["default"].createElement("h2", {
    className: "mb-5 text-2xl font-semibold"
  }, "Sign in"), serverSideErrors.email && react_1["default"].createElement(alert_1["default"], {
    text: serverSideErrors.email,
    type: "red"
  }), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "block mb-1"
  }, " Email "), react_1["default"].createElement("input", Object.assign({}, register('email'), {
    name: "email",
    className: "appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",
    type: "text",
    placeholder: "Type here"
  })), react_1["default"].createElement("span", null, (_a = errors.email) === null || _a === void 0 ? void 0 : _a.message)), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "block mb-1"
  }, " Password "), react_1["default"].createElement("input", Object.assign({}, register('password'), {
    name: "password",
    className: "appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",
    type: "password",
    placeholder: "Type here"
  })), react_1["default"].createElement("span", null, (_b = errors.password) === null || _b === void 0 ? void 0 : _b.message)), react_1["default"].createElement("button", {
    type: "submit",
    className: "px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
  }, "Login"))))));
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PrimeHero_1 = __importDefault(__webpack_require__(/*! ../../components/client/includes/PrimeHero */ "./resources/js/components/client/includes/PrimeHero.tsx"));

var PrimeCategoriesCarousel_1 = __importDefault(__webpack_require__(/*! ../../components/client/includes/PrimeCategoriesCarousel */ "./resources/js/components/client/includes/PrimeCategoriesCarousel.tsx"));

function HomePage(props) {
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
  console.log(props);
  return react_1["default"].createElement("div", {
    className: 'bg-white'
  }, react_1["default"].createElement(react_1.Suspense, {
    fallback: react_1["default"].createElement("div", null, react_1["default"].createElement("h1", null, "loading..."))
  }, react_1["default"].createElement(CategoriesNavigation, null), react_1["default"].createElement(AppLayout, null, react_1["default"].createElement(PrimeHero_1["default"], null), react_1["default"].createElement(PrimeCategoriesCarousel_1["default"], Object.assign({}, props)))));
}

exports["default"] = HomePage;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/categories/edit.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/categories/edit.tsx ***!
  \**********************************************************/
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

var system_1 = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var dashboard_1 = __importDefault(__webpack_require__(/*! ../../../layouts/dashboard */ "./resources/js/layouts/dashboard.tsx"));

var TextField_1 = __importDefault(__webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js"));

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

var renderMediaListForForm_1 = __importDefault(__webpack_require__(/*! ../../../components/shards/renderMediaListForForm */ "./resources/js/components/shards/renderMediaListForForm.tsx"));

function CategoryEdit(_ref) {
  var currentCategory = _ref.currentCategory,
      locale = _ref.locale,
      categories = _ref.categories;

  var _a;

  console.log(currentCategory);
  var form = (0, react_hook_form_1.useForm)({
    mode: "onChange"
  });
  var register = form.register,
      handleSubmit = form.handleSubmit,
      _form$formState = form.formState,
      errors = _form$formState.errors,
      isDirty = _form$formState.isDirty,
      isValid = _form$formState.isValid,
      getValues = form.getValues,
      reset = form.reset;

  var _ref2 = (0, react_1.useState)(true),
      _ref3 = _slicedToArray(_ref2, 2),
      disabled = _ref3[0],
      setDisabled = _ref3[1];

  var selectParentMenuItems = categories.map(function (category) {
    return react_1["default"].createElement(material_1.MenuItem, {
      value: category.id,
      key: category.id
    }, category.title[locale]);
  });

  var handleUpdateCategory = function handleUpdateCategory(data) {
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.categories.update', currentCategory), resolveData, {
      preserveState: false
    });
    reset(getValues());
  };

  return react_1["default"].createElement(dashboard_1["default"], null, react_1["default"].createElement(system_1.Container, {
    fixed: true
  }, react_1["default"].createElement("div", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
  }, react_1["default"].createElement(react_hook_form_1.FormProvider, Object.assign({}, form), react_1["default"].createElement("form", {
    onSubmit: handleSubmit(handleUpdateCategory),
    encType: 'multipart/form-data'
  }, react_1["default"].createElement("div", {
    className: "-mx-3 md:flex mb-6"
  }, react_1["default"].createElement("div", {
    className: "md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement(TextField_1["default"], Object.assign({}, register('ar'), {
    name: 'ar',
    fullWidth: true,
    label: "Category Title AR",
    defaultValue: currentCategory.title.ar
  }))), react_1["default"].createElement("div", {
    className: "md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement(TextField_1["default"], Object.assign({}, register('en'), {
    name: 'en',
    fullWidth: true,
    label: "Category Title EN",
    defaultValue: currentCategory.title.en,
    placeholder: currentCategory.title.en
  }))), react_1["default"].createElement("div", {
    className: "md:w-1/3 px-3"
  }, react_1["default"].createElement(material_1.Select, Object.assign({
    margin: "dense"
  }, register('parent_id'), {
    name: 'parent_id',
    fullWidth: true,
    autoFocus: true,
    onChange: function onChange(e) {
      return setDisabled(true);
    },
    defaultValue: (_a = currentCategory.parent_id) !== null && _a !== void 0 ? _a : ''
  }), selectParentMenuItems))), react_1["default"].createElement("div", {
    className: "-mx-3 md:flex mb-6"
  }, react_1["default"].createElement(renderMediaListForForm_1["default"], {
    currentCategory: currentCategory
  })), react_1["default"].createElement("div", {
    className: 'flex gap-2'
  }, react_1["default"].createElement(material_1.Button, {
    disabled: !isDirty || !isValid,
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "save changes")))))));
}

exports["default"] = CategoryEdit;

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

var confimationDialog_1 = __importDefault(__webpack_require__(/*! ../../../components/shards/confimationDialog */ "./resources/js/components/shards/confimationDialog.tsx"));

function CategoryIndex(_ref) {
  var categories = _ref.categories,
      locale = _ref.locale;

  var _ref2 = (0, react_hook_form_1.useForm)(),
      register = _ref2.register,
      handleSubmit = _ref2.handleSubmit,
      errors = _ref2.formState.errors,
      reset = _ref2.reset;

  var _ref3 = (0, react_1.useState)(false),
      _ref4 = _slicedToArray(_ref3, 2),
      openAddDialog = _ref4[0],
      setOpenAddDialog = _ref4[1];

  var _ref5 = (0, react_1.useState)(false),
      _ref6 = _slicedToArray(_ref5, 2),
      openDeleteDialog = _ref6[0],
      setOpenDeleteDialog = _ref6[1];

  var _ref7 = (0, react_1.useState)(0),
      _ref8 = _slicedToArray(_ref7, 2),
      currentCategoryId = _ref8[0],
      setCurrentCategoryId = _ref8[1];

  var handleAddDialog = function handleAddDialog() {
    setOpenAddDialog(!openAddDialog);
  };

  var handleOnClickUpdateDialog = function handleOnClickUpdateDialog(event, _ref9) {
    var data = _ref9.data;
    inertia_1.Inertia.get((0, ziggy_js_1["default"])('admin.categories.edit', data.id));
  };

  var handleOnClickDelete = function handleOnClickDelete(event, _ref10) {
    var data = _ref10.data;
    setCurrentCategoryId(data.id);
    setOpenDeleteDialog(true);
  };

  var handleDeleteClose = function handleDeleteClose(e) {
    setOpenDeleteDialog(false);
  };

  var handleAgreeDelete = function handleAgreeDelete(e) {
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.categories.destroy', currentCategoryId), undefined, {
      preserveState: false
    });
    setOpenDeleteDialog(false);
  };

  var columns = [{
    field: 'id',
    headerName: 'ID'
  }, {
    field: "title.ar",
    headerName: 'Title AR',
    floatingFilter: true,
    flex: 1,
    cellClass: 'font-bold'
  }, {
    field: "title.en",
    headerName: 'Title EN',
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
          return handleOnClickUpdateDialog(event, params);
        }
      }, "UPDATE"), react_1["default"].createElement(material_1.Button, {
        color: 'error',
        onClick: function onClick(event) {
          return handleOnClickDelete(event, params);
        }
      }, "delete"));
    }
  }];

  var formAddSubmitHandler = function formAddSubmitHandler(data) {
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.categories.store'), resolveData, {
      preserveState: false
    });
    reset();
  };

  var selectParentMenuItems = categories.map(function (category) {
    return react_1["default"].createElement(material_1.MenuItem, {
      value: category.id,
      key: category.id
    }, category.title.en);
  });
  return react_1["default"].createElement(dashboard_1["default"], null, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
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
    onSubmit: handleSubmit(formAddSubmitHandler)
  }, react_1["default"].createElement(material_1.InputLabel, {
    id: "demo-simple-select-standard-label",
    margin: 'dense'
  }, "Choose Parent ", react_1["default"].createElement("small", null, "(optional)")), react_1["default"].createElement(material_1.Select, Object.assign({}, register('parent_id'), {
    labelId: "demo-simple-select-standard-label",
    id: "demo-simple-select-standard",
    label: "Select Parent Category",
    margin: "dense",
    name: 'parent_id',
    fullWidth: true,
    autoFocus: true
  }), react_1["default"].createElement(material_1.MenuItem, {
    value: ''
  }, "No Parent"), selectParentMenuItems), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("en"), {
    autoFocus: true,
    margin: "dense",
    id: "en",
    name: 'en',
    label: "Category Title EN",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("ar"), {
    autoFocus: true,
    margin: "dense",
    id: "ar",
    name: 'ar',
    label: "Category Title AR",
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
    multiple: true,
    name: 'images',
    hidden: true
  }))), react_1["default"].createElement(material_1.DialogActions, null, react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "Submit"))))), react_1["default"].createElement(confimationDialog_1["default"], {
    open: openDeleteDialog,
    handleClose: handleDeleteClose,
    handleAgree: handleAgreeDelete
  }), react_1["default"].createElement(DataGrid_1["default"], {
    gridData: categories,
    colDef: columns,
    size: {
      height: '90vh',
      width: 'auto'
    }
  })));
}

exports["default"] = CategoryIndex;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/customers/index.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/customers/index.tsx ***!
  \**********************************************************/
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

var DataGrid_1 = __importDefault(__webpack_require__(/*! ../../../components/DataTables/DataGrid */ "./resources/js/components/DataTables/DataGrid.tsx"));

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var create_1 = __importDefault(__webpack_require__(/*! ../stores/create */ "./resources/js/Pages/Dashboard/stores/create.tsx"));

var dashboard_1 = __importDefault(__webpack_require__(/*! ../../../layouts/dashboard */ "./resources/js/layouts/dashboard.tsx"));

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

function index(_ref) {
  var users = _ref.users;
  var form = (0, react_hook_form_1.useForm)();
  var register = form.register,
      handleSubmit = form.handleSubmit,
      errors = form.formState.errors,
      setValue = form.setValue,
      reset = form.reset;

  var _ref2 = (0, react_1.useState)(0),
      _ref3 = _slicedToArray(_ref2, 2),
      userId = _ref3[0],
      setUserId = _ref3[1];

  var _ref4 = (0, react_1.useState)(false),
      _ref5 = _slicedToArray(_ref4, 2),
      openAddDialog = _ref5[0],
      setOpenAddDialog = _ref5[1];

  var handleAddDialog = function handleAddDialog() {
    setOpenAddDialog(!openAddDialog);
  };

  var handleOnClickAddStoreDialog = function handleOnClickAddStoreDialog(event, _ref6) {
    var data = _ref6.data;
    setValue('user_id', data.id);
    handleAddDialog();
  };

  var formAddSubmitHandler = function formAddSubmitHandler(data) {
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.stores.store'), resolveData, {
      preserveState: false
    });
    reset();
  };

  var columns = [{
    field: 'id',
    headerName: 'ID'
  }, {
    field: 'name',
    headerName: 'Name',
    floatingFilter: true,
    flex: 1
  }, {
    field: 'created_at',
    headerName: 'Join Date'
  }, {
    field: 'status',
    headerName: 'Status'
  }, {
    headerName: 'Actions',
    cellRenderer: function cellRenderer(params) {
      return react_1["default"].createElement(material_1.Button, {
        color: 'success',
        variant: 'outlined',
        onClick: function onClick(event) {
          return handleOnClickAddStoreDialog(event, params);
        }
      }, "Add Store");
    }
  }];
  return react_1["default"].createElement(dashboard_1["default"], null, react_1["default"].createElement("div", null, react_1["default"].createElement(react_hook_form_1.FormProvider, Object.assign({}, form), react_1["default"].createElement("input", Object.assign({}, register('user_id'), {
    hidden: true
  })), react_1["default"].createElement(create_1["default"], {
    user_id: userId,
    handleAddDialog: handleAddDialog,
    openAddDialog: openAddDialog,
    formAddSubmitHandler: formAddSubmitHandler
  })), react_1["default"].createElement(DataGrid_1["default"], {
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

/***/ "./resources/js/Pages/Dashboard/products/create.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/products/create.tsx ***!
  \**********************************************************/
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

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var free_regular_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.js");

function CreateProduct(_ref) {
  var handleAddDialog = _ref.handleAddDialog,
      openAddDialog = _ref.openAddDialog,
      watch = _ref.watch;

  var _a;

  var _ref2 = (0, react_1.useState)(['fashion']),
      _ref3 = _slicedToArray(_ref2, 2),
      tags = _ref3[0],
      setTags = _ref3[1];

  var _ref4 = (0, react_hook_form_1.useForm)(),
      register = _ref4.register,
      handleSubmit = _ref4.handleSubmit,
      errors = _ref4.formState.errors,
      reset = _ref4.reset,
      setValue = _ref4.setValue;

  var store_id = watch('store_id');

  var formAddSubmitHandler = function formAddSubmitHandler(data) {
    var resolveData = Object.assign({}, data);
    console.log(data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.products.store'), resolveData, {
      preserveState: false
    });
    reset();
  };

  return react_1["default"].createElement("div", {
    id: 'add'
  }, react_1["default"].createElement(formDialog_1["default"], {
    btnLabel: 'Add Product',
    header: 'Create New Product',
    handleClose: handleAddDialog,
    open: openAddDialog
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit(formAddSubmitHandler)
  }, react_1["default"].createElement("input", Object.assign({
    hidden: true
  }, register('store_id'), {
    name: 'store_id',
    value: store_id
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("en"), {
    autoFocus: true,
    margin: "dense",
    id: "en",
    name: 'en',
    label: "Product Name EN",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), " ", react_1["default"].createElement(material_1.TextField, Object.assign({}, register('ar'), {
    autoFocus: true,
    margin: "dense",
    id: "ar",
    name: 'ar',
    label: "Product Name AR",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("description"), {
    autoFocus: true,
    margin: "dense",
    id: "description",
    name: 'description',
    label: "Description",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("price", {
    pattern: /^(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/
  }), {
    autoFocus: true,
    margin: "dense",
    id: "description",
    name: 'price',
    label: "Price",
    type: "number",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement("span", null, (_a = errors.price) === null || _a === void 0 ? void 0 : _a.message), react_1["default"].createElement(material_1.Button, {
    variant: "outlined",
    component: "label"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: free_regular_svg_icons_1.faFileImage
  }), " ", react_1["default"].createElement("span", {
    className: 'ml-2'
  }), react_1["default"].createElement("input", Object.assign({}, register('images'), {
    type: "file",
    multiple: true,
    name: 'images'
  }))), react_1["default"].createElement(material_1.DialogActions, null, react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "Submit")))));
}

exports["default"] = CreateProduct;
;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/products/edit.tsx":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/products/edit.tsx ***!
  \********************************************************/
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

var dashboard_1 = __importDefault(__webpack_require__(/*! ../../../layouts/dashboard */ "./resources/js/layouts/dashboard.tsx"));

var TextField_1 = __importDefault(__webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js"));

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var alert_1 = __importDefault(__webpack_require__(/*! ../../../components/shards/alert */ "./resources/js/components/shards/alert.tsx"));

var MediaProductCollection_1 = __importDefault(__webpack_require__(/*! ../../../components/Lists/MediaProductCollection */ "./resources/js/components/Lists/MediaProductCollection.tsx"));

var variationList_1 = __importDefault(__webpack_require__(/*! ../variations/variationList */ "./resources/js/Pages/Dashboard/variations/variationList.tsx"));

function ProductEdit(_ref) {
  var currentProduct = _ref.currentProduct,
      locale = _ref.locale;
  console.log(currentProduct);
  var form = (0, react_hook_form_1.useForm)({
    mode: "onChange"
  });
  var register = form.register,
      handleSubmit = form.handleSubmit,
      _form$formState = form.formState,
      errors = _form$formState.errors,
      isDirty = _form$formState.isDirty,
      isValid = _form$formState.isValid,
      getValues = form.getValues,
      reset = form.reset;

  var _ref2 = (0, react_hook_form_1.useForm)(),
      register2 = _ref2.register,
      errors2 = _ref2.formState.errors,
      handleSubmit2 = _ref2.handleSubmit;

  var serverSideErrors = (0, inertia_react_1.usePage)().props.errors;

  var handleUpdateProduct = function handleUpdateProduct(data) {
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.products.update', currentProduct), resolveData, {
      preserveState: false
    });
    reset(getValues());
  };

  var handleAddMediaToProduct = function handleAddMediaToProduct(data) {
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.add.media.to.product', currentProduct), resolveData);
    console.log(data);
  };

  return react_1["default"].createElement(dashboard_1["default"], null, react_1["default"].createElement("div", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
  }, react_1["default"].createElement(react_hook_form_1.FormProvider, Object.assign({}, form), react_1["default"].createElement("form", {
    onSubmit: handleSubmit(handleUpdateProduct),
    encType: 'multipart/form-data',
    className: 'mb-3'
  }, react_1["default"].createElement("div", {
    className: "-mx-3 md:flex mb-6"
  }, react_1["default"].createElement("div", {
    className: "md:w-1/4 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement(TextField_1["default"], Object.assign({}, register('ar'), {
    name: 'ar',
    fullWidth: true,
    label: "Product Title AR",
    defaultValue: currentProduct.title.ar
  })), serverSideErrors.title && react_1["default"].createElement(alert_1["default"], {
    text: serverSideErrors.title,
    type: "red"
  })), react_1["default"].createElement("div", {
    className: "md:w-1/4 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement(TextField_1["default"], Object.assign({}, register('en'), {
    name: 'en',
    fullWidth: true,
    label: "Product Title EN",
    defaultValue: currentProduct.title.en,
    placeholder: currentProduct.title.en
  })), serverSideErrors.title && react_1["default"].createElement(alert_1["default"], {
    text: serverSideErrors.title,
    type: "red"
  })), react_1["default"].createElement("div", {
    className: "md:w-1/4 px-3"
  }, react_1["default"].createElement(TextField_1["default"], Object.assign({
    type: 'number'
  }, register('price', {
    valueAsNumber: true
  }), {
    name: 'price',
    fullWidth: true,
    label: "Price",
    defaultValue: currentProduct.price,
    placeholder: currentProduct.price
  })), serverSideErrors.price && react_1["default"].createElement(alert_1["default"], {
    text: serverSideErrors.price,
    type: "red"
  })), react_1["default"].createElement("div", {
    className: "md:w-1/4 px-3"
  }, react_1["default"].createElement(TextField_1["default"], Object.assign({}, register('description'), {
    name: 'description',
    fullWidth: true,
    label: "Description",
    defaultValue: currentProduct.description,
    placeholder: currentProduct.description
  })), serverSideErrors.description && react_1["default"].createElement(alert_1["default"], {
    text: serverSideErrors.description,
    type: "red"
  }))), react_1["default"].createElement("div", {
    className: 'flex gap-2'
  }, react_1["default"].createElement(material_1.Button, {
    disabled: !isDirty || !isValid,
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "save changes")))), react_1["default"].createElement("form", {
    onSubmit: handleSubmit2(handleAddMediaToProduct)
  }, react_1["default"].createElement("input", Object.assign({
    multiple: true,
    type: 'file'
  }, register2('images'))), react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "upload")), react_1["default"].createElement("div", {
    className: "-mx-3 md:flex mb-6 py-3"
  }, react_1["default"].createElement(MediaProductCollection_1["default"], {
    product: currentProduct
  })), react_1["default"].createElement(variationList_1["default"], {
    variations: currentProduct.variations,
    locale: locale,
    productId: currentProduct.id
  })));
}

exports["default"] = ProductEdit;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/products/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/products/index.tsx ***!
  \*********************************************************/
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

var confimationDialog_1 = __importDefault(__webpack_require__(/*! ../../../components/shards/confimationDialog */ "./resources/js/components/shards/confimationDialog.tsx"));

function CategoryIndex(_ref) {
  var products = _ref.products,
      locale = _ref.locale;

  var _ref2 = (0, react_hook_form_1.useForm)(),
      register = _ref2.register,
      handleSubmit = _ref2.handleSubmit,
      errors = _ref2.formState.errors,
      reset = _ref2.reset;

  var _ref3 = (0, react_1.useState)(false),
      _ref4 = _slicedToArray(_ref3, 2),
      openAddDialog = _ref4[0],
      setOpenAddDialog = _ref4[1];

  var _ref5 = (0, react_1.useState)(false),
      _ref6 = _slicedToArray(_ref5, 2),
      openDeleteDialog = _ref6[0],
      setOpenDeleteDialog = _ref6[1];

  var _ref7 = (0, react_1.useState)(0),
      _ref8 = _slicedToArray(_ref7, 2),
      currentCategoryId = _ref8[0],
      setCurrentCategoryId = _ref8[1];

  var handleAddDialog = function handleAddDialog() {
    setOpenAddDialog(!openAddDialog);
  };

  var handleOnClickUpdateDialog = function handleOnClickUpdateDialog(event, _ref9) {
    var data = _ref9.data;
    inertia_1.Inertia.get((0, ziggy_js_1["default"])('admin.products.edit', data.id));
  };

  var handleOnClickDelete = function handleOnClickDelete(event, _ref10) {
    var data = _ref10.data;
    setCurrentCategoryId(data.id);
    setOpenDeleteDialog(true);
  };

  var handleDeleteClose = function handleDeleteClose(e) {
    setOpenDeleteDialog(false);
  };

  var handleAgreeDelete = function handleAgreeDelete(e) {
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.products.destroy', currentCategoryId), {
      preserveState: false
    });
    setOpenDeleteDialog(false);
  };

  var columns = [{
    field: 'id',
    headerName: 'ID'
  }, {
    field: "title.ar",
    headerName: 'Title AR',
    floatingFilter: true,
    flex: 1,
    cellClass: 'font-bold'
  }, {
    field: "title.en",
    headerName: 'Title EN',
    floatingFilter: true,
    flex: 1,
    cellClass: 'font-bold'
  }, // {field: `parent.title.${locale}`, headerName: 'Parent', floatingFilter: true, cellClass: 'font-bold'},
  {
    field: 'created_at',
    headerName: 'Created At',
    filter: 'agDateColumnFilter',
    floatingFilter: true
  }, {
    headerName: 'Actions',
    cellRenderer: function cellRenderer(params) {
      return react_1["default"].createElement("div", null, react_1["default"].createElement(material_1.Button, {
        onClick: function onClick(event) {
          return handleOnClickUpdateDialog(event, params);
        }
      }, "UPDATE"), react_1["default"].createElement(material_1.Button, {
        color: 'error',
        onClick: function onClick(event) {
          return handleOnClickDelete(event, params);
        }
      }, "delete"));
    }
  }];

  var formAddSubmitHandler = function formAddSubmitHandler(data) {
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.products.store'), resolveData, {
      preserveState: false
    });
    reset();
  };

  return react_1["default"].createElement(dashboard_1["default"], null, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
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
    onSubmit: handleSubmit(formAddSubmitHandler)
  }, react_1["default"].createElement(material_1.TextField, Object.assign({}, register("en"), {
    autoFocus: true,
    margin: "dense",
    id: "en",
    name: 'en',
    label: "Category Title EN",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("ar"), {
    autoFocus: true,
    margin: "dense",
    id: "ar",
    name: 'ar',
    label: "Category Title AR",
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
    multiple: true,
    name: 'images',
    hidden: true
  }))), react_1["default"].createElement(material_1.DialogActions, null, react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "Submit"))))), react_1["default"].createElement(confimationDialog_1["default"], {
    open: openDeleteDialog,
    handleClose: handleDeleteClose,
    handleAgree: handleAgreeDelete
  }), react_1["default"].createElement(DataGrid_1["default"], {
    gridData: products,
    colDef: columns,
    size: {
      height: '90vh',
      width: 'auto'
    }
  })));
}

exports["default"] = CategoryIndex;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/stores/create.tsx":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Dashboard/stores/create.tsx ***!
  \********************************************************/
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

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var formDialog_1 = __importDefault(__webpack_require__(/*! ../../shards/formDialog */ "./resources/js/Pages/shards/formDialog.tsx"));

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

function CreateStore(_ref) {
  var user_id = _ref.user_id,
      handleAddDialog = _ref.handleAddDialog,
      openAddDialog = _ref.openAddDialog,
      formAddSubmitHandler = _ref.formAddSubmitHandler;

  var _ref2 = (0, react_hook_form_1.useFormContext)(),
      register = _ref2.register,
      handleSubmit = _ref2.handleSubmit,
      errors = _ref2.formState.errors;

  return react_1["default"].createElement("div", {
    id: 'add'
  }, react_1["default"].createElement(formDialog_1["default"], {
    btnLabel: 'Add Category',
    header: 'Create New Category',
    handleClose: handleAddDialog,
    open: openAddDialog
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit(formAddSubmitHandler)
  }, react_1["default"].createElement(material_1.TextField, Object.assign({}, register("name"), {
    autoFocus: true,
    margin: "dense",
    id: "name",
    name: 'name',
    label: "Store Name",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("description"), {
    autoFocus: true,
    margin: "dense",
    id: "description",
    name: 'description',
    label: "Description",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.DialogActions, null, react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "Submit")))));
}

exports["default"] = CreateStore;
;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/stores/edit.tsx":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Dashboard/stores/edit.tsx ***!
  \******************************************************/
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

var dashboard_1 = __importDefault(__webpack_require__(/*! ../../../layouts/dashboard */ "./resources/js/layouts/dashboard.tsx"));

var TextField_1 = __importDefault(__webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js"));

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

var productList_1 = __importDefault(__webpack_require__(/*! ../../../components/Lists/productList */ "./resources/js/components/Lists/productList.tsx"));

var create_1 = __importDefault(__webpack_require__(/*! ../products/create */ "./resources/js/Pages/Dashboard/products/create.tsx"));

function StoreEdit(_ref) {
  var currentStore = _ref.currentStore,
      locale = _ref.locale;
  var form = (0, react_hook_form_1.useForm)();
  var register = form.register,
      handleSubmit = form.handleSubmit,
      errors = form.formState.errors,
      reset = form.reset,
      setValue = form.setValue,
      watch = form.watch;

  var _ref2 = (0, react_1.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      openAddDialog = _ref3[0],
      setOpenAddDialog = _ref3[1];

  var handleOnClickAddSProductDialog = function handleOnClickAddSProductDialog(event, _ref4) {
    var data = _ref4.data;
    setValue('store_id', currentStore.id);
    handleAddDialog();
  };

  var handleUpdateStore = function handleUpdateStore(data) {
    var resolveData = Object.assign({}, data);
    console.log(data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.stores.update', currentStore), resolveData);
  };

  var handleAddDialog = function handleAddDialog() {
    setOpenAddDialog(!openAddDialog);
  };

  var formAddSubmitHandler = function formAddSubmitHandler(data) {
    var resolveData = Object.assign({}, data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.stores.store'), resolveData, {
      preserveState: false
    });
    reset();
  }; // @ts-ignore


  return react_1["default"].createElement(dashboard_1["default"], null, react_1["default"].createElement("div", {
    className: 'm-2'
  }, react_1["default"].createElement("div", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
  }, react_1["default"].createElement(react_hook_form_1.FormProvider, Object.assign({}, form), react_1["default"].createElement("form", {
    onSubmit: handleSubmit(handleUpdateStore)
  }, react_1["default"].createElement("input", Object.assign({
    hidden: true
  }, register('store_id'), {
    name: 'store_id'
  })), react_1["default"].createElement("div", {
    className: "-mx-3 md:flex mb-6"
  }, react_1["default"].createElement("div", {
    className: "md:w-1/2 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement(TextField_1["default"], Object.assign({}, register('name'), {
    name: 'name',
    fullWidth: true,
    label: "Store Name",
    defaultValue: currentStore.name
  }))), react_1["default"].createElement("div", {
    className: "md:w-1/2 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement(TextField_1["default"], Object.assign({
    multiline: true
  }, register('description'), {
    name: 'description',
    fullWidth: true,
    label: "Store Description",
    defaultValue: currentStore.description,
    placeholder: currentStore.description
  })))), react_1["default"].createElement("div", {
    className: "-mx-3 md:flex mb-6"
  }), react_1["default"].createElement("div", {
    className: 'flex gap-2'
  }, react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "save changes"), react_1["default"].createElement(material_1.Button, {
    color: "success",
    variant: 'contained',
    onClick: function onClick(e) {
      return handleOnClickAddSProductDialog(e, currentStore.id);
    }
  }, "add product"))))), react_1["default"].createElement(productList_1["default"], {
    products: currentStore.products,
    locale: locale
  }), react_1["default"].createElement(create_1["default"], {
    handleAddDialog: handleAddDialog,
    openAddDialog: openAddDialog,
    watch: watch
  })));
}

exports["default"] = StoreEdit;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/stores/index.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Dashboard/stores/index.tsx ***!
  \*******************************************************/
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

var dashboard_1 = __importDefault(__webpack_require__(/*! ../../../layouts/dashboard */ "./resources/js/layouts/dashboard.tsx"));

var DataGrid_1 = __importDefault(__webpack_require__(/*! ../../../components/DataTables/DataGrid */ "./resources/js/components/DataTables/DataGrid.tsx"));

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var confimationDialog_1 = __importDefault(__webpack_require__(/*! ../../../components/shards/confimationDialog */ "./resources/js/components/shards/confimationDialog.tsx"));

function CategoryIndex(_ref) {
  var stores = _ref.stores,
      locale = _ref.locale;

  var _ref2 = (0, react_1.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      openDeleteDialog = _ref3[0],
      setOpenDeleteDialog = _ref3[1];

  var _ref4 = (0, react_1.useState)(0),
      _ref5 = _slicedToArray(_ref4, 2),
      currentStoreId = _ref5[0],
      setCurrentStoreId = _ref5[1];

  var handleOnClickUpdateDialog = function handleOnClickUpdateDialog(event, _ref6) {
    var data = _ref6.data;
    inertia_1.Inertia.get((0, ziggy_js_1["default"])('admin.stores.edit', data.id));
  };

  var handleOnClickDelete = function handleOnClickDelete(event, _ref7) {
    var data = _ref7.data;
    setCurrentStoreId(data.id);
    console.log(data.id);
    setOpenDeleteDialog(true);
  };

  var handleDeleteClose = function handleDeleteClose(e) {
    setOpenDeleteDialog(false);
  };

  var handleAgreeDelete = function handleAgreeDelete(e) {
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.products.destroy', currentStoreId), {
      preserveState: false
    });
    setOpenDeleteDialog(false);
  };

  var columns = [{
    field: 'id',
    headerName: 'ID'
  }, {
    field: "name",
    headerName: 'Name',
    floatingFilter: true,
    flex: 1
  }, {
    field: "description",
    headerName: 'Description'
  }, {
    field: "user.name",
    headerName: 'Owner'
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
          return handleOnClickUpdateDialog(event, params);
        }
      }, "UPDATE"), react_1["default"].createElement(material_1.Button, {
        color: 'error',
        onClick: function onClick(event) {
          return handleOnClickDelete(event, params);
        }
      }, "delete"));
    }
  }];
  return react_1["default"].createElement(dashboard_1["default"], null, react_1["default"].createElement("div", null, react_1["default"].createElement(confimationDialog_1["default"], {
    open: openDeleteDialog,
    handleClose: handleDeleteClose,
    handleAgree: handleAgreeDelete
  }), react_1["default"].createElement(DataGrid_1["default"], {
    gridData: stores,
    colDef: columns,
    size: {
      height: '90vh',
      width: 'auto'
    }
  })));
}

exports["default"] = CategoryIndex;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/variations/create.tsx":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/variations/create.tsx ***!
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

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var formDialog_1 = __importDefault(__webpack_require__(/*! ../../shards/formDialog */ "./resources/js/Pages/shards/formDialog.tsx"));

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var free_regular_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.js");

function CreateProductVariation(_ref) {
  var handleAddDialog = _ref.handleAddDialog,
      openAddDialog = _ref.openAddDialog,
      productId = _ref.productId;

  var _a;

  var _ref2 = (0, react_hook_form_1.useForm)(),
      register = _ref2.register,
      handleSubmit = _ref2.handleSubmit,
      errors = _ref2.formState.errors,
      reset = _ref2.reset,
      setValue = _ref2.setValue;

  var formAddSubmitHandler = function formAddSubmitHandler(data) {
    var resolveData = Object.assign({}, data);
    console.log(data);
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.variations.store'), resolveData, {
      preserveState: false
    });
    reset();
  };

  return react_1["default"].createElement("div", {
    id: 'add'
  }, react_1["default"].createElement(formDialog_1["default"], {
    btnLabel: 'Add Product',
    header: 'Create New Variation',
    handleClose: handleAddDialog,
    open: openAddDialog
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit(formAddSubmitHandler)
  }, react_1["default"].createElement("input", Object.assign({
    hidden: true
  }, register('product_id'), {
    name: 'product_id',
    value: productId
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("en"), {
    autoFocus: true,
    margin: "dense",
    id: "en",
    name: 'en',
    label: "Variation Name EN",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), " ", react_1["default"].createElement(material_1.TextField, Object.assign({}, register('ar'), {
    autoFocus: true,
    margin: "dense",
    id: "ar",
    name: 'ar',
    label: "Variation Name AR",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("type"), {
    autoFocus: true,
    margin: "dense",
    id: "type",
    name: 'type',
    label: "type",
    type: "text",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement(material_1.TextField, Object.assign({}, register("price", {
    pattern: /^(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/
  }), {
    autoFocus: true,
    margin: "dense",
    id: "description",
    name: 'price',
    label: "Price",
    type: "number",
    fullWidth: true,
    variant: "outlined"
  })), react_1["default"].createElement("span", null, (_a = errors.price) === null || _a === void 0 ? void 0 : _a.message), react_1["default"].createElement(material_1.Button, {
    variant: "outlined",
    component: "label"
  }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: free_regular_svg_icons_1.faFileImage
  }), " ", react_1["default"].createElement("span", {
    className: 'ml-2'
  }), react_1["default"].createElement("input", Object.assign({}, register('images'), {
    type: "file",
    multiple: true,
    name: 'images'
  }))), react_1["default"].createElement(material_1.DialogActions, null, react_1["default"].createElement(material_1.Button, {
    type: 'submit',
    color: "primary",
    variant: 'contained'
  }, "Submit")))));
}

exports["default"] = CreateProductVariation;
;

/***/ }),

/***/ "./resources/js/Pages/Dashboard/variations/variationList.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/variations/variationList.tsx ***!
  \*******************************************************************/
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

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var DataGrid_1 = __importDefault(__webpack_require__(/*! ../../../components/DataTables/DataGrid */ "./resources/js/components/DataTables/DataGrid.tsx"));

var create_1 = __importDefault(__webpack_require__(/*! ./create */ "./resources/js/Pages/Dashboard/variations/create.tsx"));

function VariationList(_ref) {
  var variations = _ref.variations,
      locale = _ref.locale,
      productId = _ref.productId;
  console.log(variations);

  var _ref2 = (0, react_1.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      openAddDialog = _ref3[0],
      setOpenAddDialog = _ref3[1];

  var ToggleRestoreDeleteButton = function ToggleRestoreDeleteButton(params) {
    if (params.data.deleted_at) {
      return react_1["default"].createElement(material_1.Button, {
        color: 'success',
        onClick: function onClick(event) {
          return handleOnClickRestore(event, params);
        }
      }, "Restore");
    } else {
      return react_1["default"].createElement(material_1.Button, {
        color: 'secondary',
        onClick: function onClick(event) {
          return handleOnClickDelete(event, params);
        }
      }, "Delete");
    }
  };

  var handleOnClickUpdateDialog = function handleOnClickUpdateDialog(event, _ref4) {
    var data = _ref4.data;
    inertia_1.Inertia.get((0, ziggy_js_1["default"])('admin.variations.edit', data.id));
  };

  var handleOnClickDelete = function handleOnClickDelete(event, _ref5) {
    var data = _ref5.data;
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.variations.destroy', data.id), undefined, {
      preserveState: false
    });
  };

  var handleOnClickRestore = function handleOnClickRestore(event, _ref6) {
    var data = _ref6.data;
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.variations.restore', data.id), undefined, {
      preserveState: false
    });
  };

  var handleOnClickAddSProductDialog = function handleOnClickAddSProductDialog() {
    setOpenAddDialog(!openAddDialog);
  };

  var columns = [{
    field: 'thumbnail',
    headerName: 'Image',
    cellRenderer: function cellRenderer(params) {
      return react_1["default"].createElement("img", {
        className: 'mx-auto mt-[4px]',
        src: params.data.thumbnail,
        alt: params.data.name,
        width: 50,
        height: 50
      });
    }
  }, {
    field: 'id',
    headerName: 'ID'
  }, {
    field: "title.en",
    headerName: 'Title EN',
    floatingFilter: true,
    flex: 0.5,
    cellClass: 'font-bold'
  }, {
    field: "title.ar",
    headerName: 'Title AR',
    floatingFilter: true,
    flex: 0.5,
    cellClass: 'font-bold'
  }, {
    field: "price",
    headerName: 'Price'
  }, {
    field: "deleted_at",
    headerName: 'Deleted at'
  }, {
    field: 'created_at',
    headerName: 'Created At',
    filter: 'agDateColumnFilter',
    floatingFilter: true
  }, {
    headerName: 'Actions',
    cellRenderer: function cellRenderer(params) {
      return react_1["default"].createElement("div", null, ToggleRestoreDeleteButton(params), react_1["default"].createElement(material_1.Button, {
        onClick: function onClick(event) {
          return handleOnClickUpdateDialog(event, params);
        }
      }, "UPDATE"));
    }
  }];
  return react_1["default"].createElement("main", {
    className: "bg-white shadow-md"
  }, react_1["default"].createElement(material_1.Button, {
    color: "success",
    variant: 'contained',
    onClick: handleOnClickAddSProductDialog
  }, "add variation"), react_1["default"].createElement(DataGrid_1["default"], {
    gridData: variations,
    colDef: columns,
    size: {
      height: '90vh',
      width: 'auto'
    },
    rowHeight: 60
  }), react_1["default"].createElement(create_1["default"], {
    handleAddDialog: handleOnClickAddSProductDialog,
    openAddDialog: openAddDialog,
    productId: productId
  }));
}

exports["default"] = VariationList;

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

function FormDialog(_ref) {
  var children = _ref.children,
      header = _ref.header,
      content = _ref.content,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      handleClose = _ref.handleClose;
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
      rowClickHandler = _ref$rowClickHandler === void 0 ? undefined : _ref$rowClickHandler,
      rowHeight = _ref.rowHeight;
  var gridOptions = {
    rowData: gridData,
    columnDefs: colDef,
    colResizeDefault: 'shift' // onGridReady: (event) => event.columnApi.sizeColumnsToFit(1486),

  };
  return react_1["default"].createElement("div", {
    className: 'p-6 mx-auto ag-theme-material',
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
    animateRows: true,
    rowHeight: rowHeight
  }));
}

exports["default"] = DataGrid;

/***/ }),

/***/ "./resources/js/components/DataTables/PrimeDataTable.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/DataTables/PrimeDataTable.tsx ***!
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

var datatable_1 = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");

function PrimeDataTable(_ref) {
  var rowExpansionTemplate = _ref.rowExpansionTemplate,
      data = _ref.data,
      expandedRows = _ref.expandedRows,
      children = _ref.children,
      header = _ref.header,
      onRowToggle = _ref.onRowToggle;
  return react_1["default"].createElement("div", {
    className: "w-full"
  }, react_1["default"].createElement(datatable_1.DataTable, {
    value: data,
    className: 'mx-auto',
    expandedRows: expandedRows,
    onRowToggle: onRowToggle,
    responsiveLayout: "scroll",
    paginator: true,
    currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
    rows: 10,
    rowsPerPageOptions: [10, 20, 50],
    rowExpansionTemplate: rowExpansionTemplate,
    dataKey: "id",
    header: header
  }, children));
}

exports["default"] = PrimeDataTable;

/***/ }),

/***/ "./resources/js/components/Forms/Buttons/ToggleDeleteRestoreButton.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Forms/Buttons/ToggleDeleteRestoreButton.tsx ***!
  \*****************************************************************************/
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

var button_1 = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function ToggleRestoreDeleteButton(_ref) {
  var handleOnClickDelete = _ref.handleOnClickDelete,
      handleOnClickRestore = _ref.handleOnClickRestore,
      params = _ref.params;

  if (params.deleted_at) {
    return react_1["default"].createElement(button_1.Button, {
      icon: "pi pi-undo",
      className: "p-button p-button-info mr-2",
      onClick: function onClick() {
        return handleOnClickRestore(params);
      }
    });
  } else {
    return react_1["default"].createElement(button_1.Button, {
      icon: "pi pi-trash",
      className: "p-button p-button-danger mr-2",
      onClick: function onClick() {
        return handleOnClickDelete(params);
      }
    });
  }
}

exports["default"] = ToggleRestoreDeleteButton;

/***/ }),

/***/ "./resources/js/components/Lists/MediaProductCollection.tsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/Lists/MediaProductCollection.tsx ***!
  \******************************************************************/
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

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ImageList_1 = __importDefault(__webpack_require__(/*! @mui/material/ImageList */ "./node_modules/@mui/material/ImageList/index.js"));

var ImageListItem_1 = __importDefault(__webpack_require__(/*! @mui/material/ImageListItem */ "./node_modules/@mui/material/ImageListItem/index.js"));

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

function MediaProductCollection(_ref) {
  var product = _ref.product;

  var _a;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleToggle = function handleToggle() {
    setOpen(!open);
  };

  var handleMediaDelete = function handleMediaDelete(mediaId) {
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.delete.media.of.product', product), {
      id: mediaId
    });
  };

  return React.createElement(ImageList_1["default"], {
    cols: 6,
    className: 'mx-auto'
  }, (_a = product.media) === null || _a === void 0 ? void 0 : _a.map(function (item, index) {
    return React.createElement(ImageListItem_1["default"], {
      key: item.id,
      sx: {
        height: '100% !important'
      }
    }, React.createElement("img", {
      src: item.thumbnail,
      alt: item.name,
      loading: "lazy",
      onClick: handleToggle
    }), React.createElement(material_1.ImageListItemBar, {
      actionIcon: React.createElement("div", null, React.createElement(material_1.Button, {
        onClick: function onClick(e) {
          return handleMediaDelete(item.id);
        },
        color: 'error'
      }, "delete"))
    }));
  }));
}

exports["default"] = MediaProductCollection;

/***/ }),

/***/ "./resources/js/components/Lists/productList.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/Lists/productList.tsx ***!
  \*******************************************************/
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

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js"));

var PrimeDataTable_1 = __importDefault(__webpack_require__(/*! ../DataTables/PrimeDataTable */ "./resources/js/components/DataTables/PrimeDataTable.tsx"));

var column_1 = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");

var datatable_1 = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");

var button_1 = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");

var ToggleDeleteRestoreButton_1 = __importDefault(__webpack_require__(/*! ../Forms/Buttons/ToggleDeleteRestoreButton */ "./resources/js/components/Forms/Buttons/ToggleDeleteRestoreButton.tsx"));

var create_1 = __importDefault(__webpack_require__(/*! ../../Pages/Dashboard/variations/create */ "./resources/js/Pages/Dashboard/variations/create.tsx"));

function ProductList(_ref) {
  var products = _ref.products,
      locale = _ref.locale;

  var _ref2 = (0, react_1.useState)([]),
      _ref3 = _slicedToArray(_ref2, 2),
      expandedRows = _ref3[0],
      setExpandedRows = _ref3[1];

  var _ref4 = (0, react_1.useState)(false),
      _ref5 = _slicedToArray(_ref4, 2),
      openAddDialog = _ref5[0],
      setOpenAddDialog = _ref5[1];

  var handleOnClickAddSProductDialog = function handleOnClickAddSProductDialog() {
    setOpenAddDialog(!openAddDialog);
  };

  var newHandleUpdate = function newHandleUpdate(data) {
    inertia_1.Inertia.get((0, ziggy_js_1["default"])('admin.products.edit', data.id));
  };

  var handleOnClickVariationDelete = function handleOnClickVariationDelete(data) {
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.variations.destroy', data.id), undefined, {
      preserveState: false
    });
  };

  var handleOnClickVariationRestore = function handleOnClickVariationRestore(data) {
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.variations.restore', data.id), undefined, {
      preserveState: false
    });
  };

  var handleOnClickDelete = function handleOnClickDelete(data) {
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.products.destroy', data.id), undefined, {
      preserveState: false
    });
  };

  var handleOnClickRestore = function handleOnClickRestore(data) {
    inertia_1.Inertia.post((0, ziggy_js_1["default"])('admin.products.restore', data.id), undefined, {
      preserveState: false
    });
  };

  var imageBodyTemplate = function imageBodyTemplate(rowData) {
    return react_1["default"].createElement("img", {
      width: 50,
      height: 50,
      src: rowData.thumbnail
    });
  };

  var rowExpansionTemplate = function rowExpansionTemplate(data) {
    return react_1["default"].createElement("div", null, react_1["default"].createElement(datatable_1.DataTable, {
      value: data.variations,
      responsiveLayout: "scroll",
      header: function header(options) {
        return _header(data.id);
      }
    }, react_1["default"].createElement(column_1.Column, {
      field: "id",
      header: "ID",
      sortable: true
    }), react_1["default"].createElement(column_1.Column, {
      header: "Image",
      body: imageBodyTemplate
    }), react_1["default"].createElement(column_1.Column, {
      field: "title.en",
      header: "Title EN",
      sortable: true
    }), react_1["default"].createElement(column_1.Column, {
      field: "title.ar",
      header: "Title AR",
      sortable: true
    }), react_1["default"].createElement(column_1.Column, {
      field: "price",
      header: "Price",
      sortable: true
    }), react_1["default"].createElement(column_1.Column, {
      field: "type",
      header: "type",
      sortable: true
    }), react_1["default"].createElement(column_1.Column, {
      field: "order",
      header: "Order",
      sortable: true
    }), react_1["default"].createElement(column_1.Column, {
      field: "deleted_at",
      header: "Deleted At",
      sortable: true
    }), react_1["default"].createElement(column_1.Column, {
      body: actionVariationBodyTemplate,
      exportable: false,
      style: {
        minWidth: '8rem'
      }
    })));
  };

  var _header = function _header(value) {
    return react_1["default"].createElement("div", {
      className: 'flex items-center'
    }, react_1["default"].createElement(button_1.Button, {
      className: 'p-button-link',
      onClick: handleOnClickAddSProductDialog
    }, "Add Variation"), react_1["default"].createElement("h1", {
      className: 'font-bold ml-3 text-lg'
    }, "Variations List"), react_1["default"].createElement(create_1["default"], {
      handleAddDialog: handleOnClickAddSProductDialog,
      openAddDialog: openAddDialog,
      productId: value
    }));
  };

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(ToggleDeleteRestoreButton_1["default"], {
      handleOnClickRestore: handleOnClickRestore,
      handleOnClickDelete: handleOnClickDelete,
      params: rowData
    }), react_1["default"].createElement(button_1.Button, {
      icon: "pi pi-pencil",
      className: "p-button p-button-success mr-2",
      onClick: function onClick() {
        return newHandleUpdate(rowData);
      }
    }));
  };

  var actionVariationBodyTemplate = function actionVariationBodyTemplate(rowData) {
    return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(ToggleDeleteRestoreButton_1["default"], {
      handleOnClickRestore: handleOnClickVariationRestore,
      handleOnClickDelete: handleOnClickVariationDelete,
      params: rowData
    }), react_1["default"].createElement(button_1.Button, {
      icon: "pi pi-pencil",
      className: "p-button p-button-success mr-2",
      onClick: function onClick() {
        return newHandleUpdate(rowData);
      }
    }));
  };

  return react_1["default"].createElement("main", {
    className: "bg-white shadow-md rounded"
  }, react_1["default"].createElement(PrimeDataTable_1["default"], {
    data: products,
    rowExpansionTemplate: rowExpansionTemplate,
    expandedRows: expandedRows,
    onRowToggle: function onRowToggle(e) {
      return setExpandedRows(e.data);
    }
  }, react_1["default"].createElement(column_1.Column, {
    expander: true,
    style: {
      width: '3em'
    }
  }), react_1["default"].createElement(column_1.Column, {
    field: "id",
    header: "ID",
    sortable: true
  }), react_1["default"].createElement(column_1.Column, {
    header: "Image",
    body: imageBodyTemplate
  }), react_1["default"].createElement(column_1.Column, {
    field: "title.en",
    header: "Title EN",
    sortable: true
  }), react_1["default"].createElement(column_1.Column, {
    field: "title.ar",
    header: "Title AR",
    sortable: true
  }), react_1["default"].createElement(column_1.Column, {
    field: "price",
    header: "Price",
    sortable: true
  }), react_1["default"].createElement(column_1.Column, {
    field: "deleted_at",
    header: "Deleted At",
    sortable: true
  }), react_1["default"].createElement(column_1.Column, {
    body: actionBodyTemplate,
    exportable: false,
    style: {
      minWidth: '8rem'
    }
  })));
}

exports["default"] = ProductList;

/***/ }),

/***/ "./resources/js/components/client/includes/CategoryCircle.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/components/client/includes/CategoryCircle.tsx ***!
  \********************************************************************/
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

function CategoryCircle(_ref) {
  var category = _ref.category,
      locale = _ref.locale;

  var _a;

  return react_1["default"].createElement("a", {
    href: "#",
    className: "group"
  }, react_1["default"].createElement("div", {
    style: {
      backgroundImage: "url(".concat((_a = category.thumbnail) === null || _a === void 0 ? void 0 : _a.thumbnail, ")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    className: "flex items-center justify-center w-16 h-16 md:w-[175px] md:h-[175px]  mx-auto mb-2 rounded-full bg-blue-100 group-hover:bg-blue-200"
  }), react_1["default"].createElement("p", {
    className: "text-center text-gray-600 group-hover:text-blue-600"
  }, category.title[locale]));
}

exports["default"] = CategoryCircle;

/***/ }),

/***/ "./resources/js/components/client/includes/PrimeCategoriesCarousel.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/client/includes/PrimeCategoriesCarousel.tsx ***!
  \*****************************************************************************/
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

var CategoryCircle_1 = __importDefault(__webpack_require__(/*! ./CategoryCircle */ "./resources/js/components/client/includes/CategoryCircle.tsx"));

function PrimeCategoriesCarousel(_ref) {
  var categories = _ref.categories,
      locale = _ref.locale;
  var responsiveOptions = [{
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3
  }, {
    breakpoint: '600px',
    numVisible: 5,
    numScroll: 2
  }, {
    breakpoint: '480px',
    numVisible: 5,
    numScroll: 2
  }];
  var categoriesItems = categories.map(function (category) {
    return react_1["default"].createElement(CategoryCircle_1["default"], {
      category: category,
      locale: locale
    });
  });
  return react_1["default"].createElement("section", {
    className: "pt-10"
  }, react_1["default"].createElement("div", {
    className: "container max-w-screen-xl mx-auto px-4"
  }, react_1["default"].createElement("h1", {
    className: 'text-center uppercase text-3xl mb-[40px]'
  }, "Shop by category"), react_1["default"].createElement("nav", {
    className: "grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-x-3 gap-y-6"
  }, categoriesItems)));
}

exports["default"] = PrimeCategoriesCarousel;

/***/ }),

/***/ "./resources/js/components/client/includes/PrimeHero.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/client/includes/PrimeHero.tsx ***!
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

var carousel_1 = __webpack_require__(/*! primereact/carousel */ "./node_modules/primereact/carousel/carousel.esm.js");

function PrimeHero() {
  var responsiveOptions = [{
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1
  }, {
    breakpoint: '600px',
    numVisible: 1,
    numScroll: 1
  }, {
    breakpoint: '480px',
    numVisible: 1,
    numScroll: 1
  }];
  var images = [{
    image: 'https://img.ltwebstatic.com/images3_ach/2022/08/19/1660897732282ad9c5a8e608526fd711f82e180162.webp'
  }, {
    image: 'https://img.ltwebstatic.com/images3_ach/2022/08/20/16609632771dbb082916844844a15cbcc6b58f736d.webp'
  }, {
    image: 'https://img.ltwebstatic.com/images3_ach/2022/08/18/166081500939a7633ebf6bbd00f0fcfb59bfb2d426.jpg'
  }];

  var productTemplate = function productTemplate(images) {
    return react_1["default"].createElement("div", null, react_1["default"].createElement("img", {
      className: '',
      src: images.image,
      alt: ""
    }));
  };

  return react_1["default"].createElement(carousel_1.Carousel, {
    value: images,
    numVisible: 1,
    numScroll: 1,
    responsiveOptions: responsiveOptions,
    itemTemplate: productTemplate,
    autoplayInterval: 3000,
    circular: true,
    indicatorsContentClassName: 'hidden'
  });
}

exports["default"] = PrimeHero;

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
    pagination: true,
    modules: [swiper_1.Navigation, swiper_1.Pagination],
    className: "md:col-span-4 w-[470px] sm:w-auto lg:w-[1500px]",
    loop: true
  }, react_1["default"].createElement(react_2.SwiperSlide, null, react_1["default"].createElement(heroCoursel_1["default"], null)), react_1["default"].createElement(react_2.SwiperSlide, null, react_1["default"].createElement(heroCoursel_1["default"], null)), react_1["default"].createElement(react_2.SwiperSlide, null, react_1["default"].createElement(heroCoursel_1["default"], null)))))));
}

exports["default"] = Hero;

/***/ }),

/***/ "./resources/js/components/client/includes/navbar.tsx":
/*!************************************************************!*\
  !*** ./resources/js/components/client/includes/navbar.tsx ***!
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

function Navbar() {
  return react_1["default"].createElement("header", {
    className: "bg-white py-3 border-b"
  }, react_1["default"].createElement("div", {
    className: "container max-w-screen-xl mx-auto px-4"
  }, react_1["default"].createElement("div", {
    className: "flex flex-wrap items-center"
  }, react_1["default"].createElement("div", {
    className: "flex-shrink-0 mr-5"
  }, react_1["default"].createElement("a", {
    href: "#"
  }, " ", react_1["default"].createElement("img", {
    src: "images/logo.svg",
    height: "38",
    alt: "Brand"
  }), " ")), react_1["default"].createElement("div", {
    className: "flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4"
  }, react_1["default"].createElement("input", {
    className: "flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400",
    type: "text",
    placeholder: "Search"
  }), react_1["default"].createElement("button", {
    type: "button",
    className: "px-4 py-2 inline-block text-white border border-transparent bg-blue-600 rounded-md hover:bg-blue-700"
  }, react_1["default"].createElement("i", {
    className: "fa fa-search"
  }))), react_1["default"].createElement("div", {
    className: "flex items-center space-x-2 ml-auto"
  }, react_1["default"].createElement("a", {
    className: "px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300",
    href: "#"
  }, react_1["default"].createElement("i", {
    className: "text-gray-400 w-5 fa fa-user"
  }), react_1["default"].createElement("span", {
    className: "hidden lg:inline ml-1"
  }, "Sign in")), react_1["default"].createElement("a", {
    className: "px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300",
    href: "#"
  }, react_1["default"].createElement("i", {
    className: "text-gray-400 w-5 fa fa-heart"
  }), react_1["default"].createElement("span", {
    className: "hidden lg:inline ml-1"
  }, "Wishlist")), react_1["default"].createElement("a", {
    className: "px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300",
    href: "#"
  }, react_1["default"].createElement("i", {
    className: "text-gray-400 w-5 fa fa-shopping-cart"
  }), react_1["default"].createElement("span", {
    className: "hidden lg:inline ml-1"
  }, "My cart"))), react_1["default"].createElement("div", {
    className: "lg:hidden ml-2"
  }, react_1["default"].createElement("button", {
    type: "button",
    className: "bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
  }, react_1["default"].createElement("span", {
    className: "sr-only"
  }, "Open menu"), react_1["default"].createElement("i", {
    className: "fa fa-bars fa-lg"
  }))))));
}

exports["default"] = Navbar;

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

var categoriesThumbnail_1 = __importDefault(__webpack_require__(/*! ../../shards/categoriesThumbnail */ "./resources/js/components/shards/categoriesThumbnail.tsx"));

function CategoryCard(_ref) {
  var media = _ref.media,
      header = _ref.header;
  return react_1["default"].createElement("div", {
    className: "bg-white flex justify-center  lg:w-[350px] lg:h-[385px]  rounded-lg shadow-lg"
  }, react_1["default"].createElement("div", {
    className: "block w-full text-center"
  }, react_1["default"].createElement("div", {
    className: "py-2 h-[10%] font-bold"
  }, header === null || header === void 0 ? void 0 : header.toUpperCase()), react_1["default"].createElement(categoriesThumbnail_1["default"], {
    thumbnail: media
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

function HomePageCategories(_ref) {
  var locale = _ref.locale,
      categories = _ref.categories;
  console.log(categories);
  var categoriesItems = categories.map(function (category) {
    return react_1["default"].createElement(categoryCard_1["default"], {
      key: category.id,
      header: category.title[locale],
      media: category.thumbnail
    });
  }); // const CategoriesCircle = categories.map((category) => (
  //   <Grid item xs={2} sm={3} md={2} key={category.id}>
  //     <div className='lg:w-[175px] lg:h-[175px] h-[95px] w-[95px]'>
  //       <a href="#" className="group">
  //         <img className='rounded-full w-full h-full mx-auto' src={category.thumbnail.thumbnail}
  //              alt={category.title[locale as keyof typeof category.title]}/>
  //         <p className="text-center text-gray-600 group-hover:text-blue-600"> Interior items </p>
  //       </a>
  //     </div>
  //   </Grid>
  // ))

  return react_1["default"].createElement("section", {
    className: "container py-5 mx-auto w-full"
  }, react_1["default"].createElement("div", {
    className: "px-4"
  }, react_1["default"].createElement("nav", {
    className: "grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 gap-x-3 gap-y-6"
  }, categoriesItems)));
}

exports["default"] = HomePageCategories;

/***/ }),

/***/ "./resources/js/components/shards/alert.tsx":
/*!**************************************************!*\
  !*** ./resources/js/components/shards/alert.tsx ***!
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

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Alert(_ref) {
  var type = _ref.type,
      boldText = _ref.boldText,
      text = _ref.text;
  return react_1["default"].createElement("div", {
    className: "bg-".concat(type, "-100 border border-").concat(type, "-400 text-").concat(type, "-700 px-4 py-3 rounded relative my-4"),
    role: "alert"
  }, react_1["default"].createElement("strong", {
    className: "font-bold"
  }, boldText), react_1["default"].createElement("span", {
    className: "block sm:inline text-center"
  }, text), react_1["default"].createElement("span", {
    className: "absolute top-0 bottom-0 right-0 px-4 py-3"
  }));
}

exports["default"] = Alert;

/***/ }),

/***/ "./resources/js/components/shards/categoriesThumbnail.tsx":
/*!****************************************************************!*\
  !*** ./resources/js/components/shards/categoriesThumbnail.tsx ***!
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

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function CategoriesThumbnail(_ref) {
  var thumbnail = _ref.thumbnail;
  return react_1["default"].createElement(material_1.ImageList, {
    className: 'mx-auto',
    cols: 1,
    sx: {
      height: 310,
      width: 303
    }
  }, react_1["default"].createElement(material_1.ImageListItem, null, react_1["default"].createElement("img", {
    className: 'w-full',
    src: thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.thumbnail,
    alt: thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.name,
    loading: "lazy"
  })));
}

exports["default"] = CategoriesThumbnail;

/***/ }),

/***/ "./resources/js/components/shards/confimationDialog.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/components/shards/confimationDialog.tsx ***!
  \**************************************************************/
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

var Button_1 = __importDefault(__webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js"));

var Dialog_1 = __importDefault(__webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/index.js"));

var DialogActions_1 = __importDefault(__webpack_require__(/*! @mui/material/DialogActions */ "./node_modules/@mui/material/DialogActions/index.js"));

var DialogContent_1 = __importDefault(__webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/DialogContent/index.js"));

var DialogContentText_1 = __importDefault(__webpack_require__(/*! @mui/material/DialogContentText */ "./node_modules/@mui/material/DialogContentText/index.js"));

var DialogTitle_1 = __importDefault(__webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/index.js"));

function ConfirmationAlertDialog(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      handleAgree = _ref.handleAgree;
  return react_1["default"].createElement(Dialog_1["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, react_1["default"].createElement(DialogTitle_1["default"], {
    id: "alert-dialog-title"
  }, "Deleting Confirmation"), react_1["default"].createElement(DialogContent_1["default"], null, react_1["default"].createElement(DialogContentText_1["default"], {
    id: "alert-dialog-description"
  }, "Deleting this record might be risky are you Sure ?")), react_1["default"].createElement(DialogActions_1["default"], null, react_1["default"].createElement(Button_1["default"], {
    color: 'error',
    onClick: function onClick(e) {
      return handleClose(e);
    }
  }, "Disagree"), react_1["default"].createElement(Button_1["default"], {
    onClick: function onClick(e) {
      return handleAgree(e);
    },
    autoFocus: true
  }, "Agree")));
}

exports["default"] = ConfirmationAlertDialog;

/***/ }),

/***/ "./resources/js/components/shards/renderMediaListForForm.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/components/shards/renderMediaListForForm.tsx ***!
  \*******************************************************************/
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

var free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");

var react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var material_1 = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_hook_form_1 = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.cjs.js");

function RenderMediaListForForm(_ref) {
  var currentCategory = _ref.currentCategory;

  var _ref2 = (0, react_hook_form_1.useFormContext)(),
      register = _ref2.register,
      setValue = _ref2.setValue;

  var handleImageClick = function handleImageClick(e, imageID) {
    setValue('image_id', imageID);
  };

  if (currentCategory.thumbnail) {
    return react_1["default"].createElement(material_1.ImageList, {
      className: 'ml-5',
      cols: 1
    }, currentCategory.thumbnail && react_1["default"].createElement(material_1.ImageListItem, null, react_1["default"].createElement("img", {
      src: currentCategory.thumbnail.thumbnail,
      alt: currentCategory.thumbnail.name,
      loading: "lazy"
    }), react_1["default"].createElement(material_1.ImageListItemBar, {
      title: currentCategory.thumbnail.name,
      actionIcon: react_1["default"].createElement("div", null, react_1["default"].createElement(material_1.Button, {
        variant: "contained",
        size: 'small',
        component: "label",
        onClick: function onClick(e) {
          return handleImageClick(e, currentCategory.thumbnail.id);
        }
      }, react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, {
        icon: free_solid_svg_icons_1.faFileImage
      }), " ", react_1["default"].createElement("span", {
        className: 'ml-2'
      }, "Change Image"), react_1["default"].createElement("input", Object.assign({}, register('images'), {
        type: "file",
        name: 'images',
        hidden: true
      }))))
    })));
  } else {
    return react_1["default"].createElement(material_1.Button, {
      variant: "contained",
      component: "label"
    }, react_1["default"].createElement("input", Object.assign({}, register('images'), {
      type: "file",
      name: 'images'
    })));
  }
}

exports["default"] = RenderMediaListForForm;

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
    className: "fixed -left-full top-0 bottom-0 md:static z-40 w-60 overflow-y-auto bg-blue-800 flex-shrink-0 "
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
  }, react_1["default"].createElement(inertia_react_1.InertiaLink, {
    href: (0, ziggy_js_1["default"])('admin.stores.index'),
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
  }, "Stores"))), react_1["default"].createElement("li", {
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
    className: "w-10 h-10 flex items-center justify-center bg-gray-200 border border-transparent rounded-full hover:border-blue-400 overflow-hidden logout",
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

var navbar_1 = __importDefault(__webpack_require__(/*! ../components/client/includes/navbar */ "./resources/js/components/client/includes/navbar.tsx"));

function AppLayout(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement("div", null, react_1["default"].createElement(navbar_1["default"], null), children, react_1["default"].createElement(footer_1["default"], null));
}

exports["default"] = AppLayout;

/***/ }),

/***/ "./resources/js/layouts/dashboard.tsx":
/*!********************************************!*\
  !*** ./resources/js/layouts/dashboard.tsx ***!
  \********************************************/
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var aside_1 = __importDefault(__webpack_require__(/*! ../includes/aside */ "./resources/js/includes/aside.tsx"));

var navbar_1 = __importDefault(__webpack_require__(/*! ../includes/navbar */ "./resources/js/includes/navbar.tsx"));

var toast_1 = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast/toast.esm.js");

function DashboardLayout(_ref) {
  var children = _ref.children;
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("backdrop");
  var toastRef = (0, react_1.useRef)(null);
  var flash = (0, inertia_react_1.usePage)().props.flash;
  (0, react_1.useEffect)(function () {
    var _a;

    if (flash.message) {
      (_a = toastRef.current) === null || _a === void 0 ? void 0 : _a.show({
        severity: 'success',
        summary: flash.message,
        life: 3000
      });
    }
  }, [toastRef]);

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
  }, react_1["default"].createElement(navbar_1["default"], null), react_1["default"].createElement(toast_1.Toast, {
    ref: toastRef
  }), children)));
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
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");


__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





(0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.createInertiaApp)({
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props;
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(el).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, props));
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__.InertiaProgress.init();

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
	"./Dashboard/categories/edit": "./resources/js/Pages/Dashboard/categories/edit.tsx",
	"./Dashboard/categories/edit.tsx": "./resources/js/Pages/Dashboard/categories/edit.tsx",
	"./Dashboard/categories/index": "./resources/js/Pages/Dashboard/categories/index.tsx",
	"./Dashboard/categories/index.tsx": "./resources/js/Pages/Dashboard/categories/index.tsx",
	"./Dashboard/customers": "./resources/js/Pages/Dashboard/customers/index.tsx",
	"./Dashboard/customers/": "./resources/js/Pages/Dashboard/customers/index.tsx",
	"./Dashboard/customers/index": "./resources/js/Pages/Dashboard/customers/index.tsx",
	"./Dashboard/customers/index.tsx": "./resources/js/Pages/Dashboard/customers/index.tsx",
	"./Dashboard/index": "./resources/js/Pages/Dashboard/index.tsx",
	"./Dashboard/index.tsx": "./resources/js/Pages/Dashboard/index.tsx",
	"./Dashboard/products": "./resources/js/Pages/Dashboard/products/index.tsx",
	"./Dashboard/products/": "./resources/js/Pages/Dashboard/products/index.tsx",
	"./Dashboard/products/create": "./resources/js/Pages/Dashboard/products/create.tsx",
	"./Dashboard/products/create.tsx": "./resources/js/Pages/Dashboard/products/create.tsx",
	"./Dashboard/products/edit": "./resources/js/Pages/Dashboard/products/edit.tsx",
	"./Dashboard/products/edit.tsx": "./resources/js/Pages/Dashboard/products/edit.tsx",
	"./Dashboard/products/index": "./resources/js/Pages/Dashboard/products/index.tsx",
	"./Dashboard/products/index.tsx": "./resources/js/Pages/Dashboard/products/index.tsx",
	"./Dashboard/stores": "./resources/js/Pages/Dashboard/stores/index.tsx",
	"./Dashboard/stores/": "./resources/js/Pages/Dashboard/stores/index.tsx",
	"./Dashboard/stores/create": "./resources/js/Pages/Dashboard/stores/create.tsx",
	"./Dashboard/stores/create.tsx": "./resources/js/Pages/Dashboard/stores/create.tsx",
	"./Dashboard/stores/edit": "./resources/js/Pages/Dashboard/stores/edit.tsx",
	"./Dashboard/stores/edit.tsx": "./resources/js/Pages/Dashboard/stores/edit.tsx",
	"./Dashboard/stores/index": "./resources/js/Pages/Dashboard/stores/index.tsx",
	"./Dashboard/stores/index.tsx": "./resources/js/Pages/Dashboard/stores/index.tsx",
	"./Dashboard/variations/create": "./resources/js/Pages/Dashboard/variations/create.tsx",
	"./Dashboard/variations/create.tsx": "./resources/js/Pages/Dashboard/variations/create.tsx",
	"./Dashboard/variations/variationList": "./resources/js/Pages/Dashboard/variations/variationList.tsx",
	"./Dashboard/variations/variationList.tsx": "./resources/js/Pages/Dashboard/variations/variationList.tsx",
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