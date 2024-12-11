/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_WeatherApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/WeatherApp */ \"./src/pages/api/WeatherApp.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_ArrowUpwardOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowUpwardOutlined */ \"./node_modules/@mui/icons-material/esm/ArrowUpwardOutlined.js\");\n/* harmony import */ var _mui_icons_material_ArrowDownwardOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ArrowDownwardOutlined */ \"./node_modules/@mui/icons-material/esm/ArrowDownwardOutlined.js\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/esm/Search.js\");\n\n\n\n\n\n\n\n\nfunction App() {\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [citySuggestions, setCitySuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCity, setSelectedCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        country: \"\"\n    });\n    const handleFetchCitySuggestions = async (query)=>{\n        const suggestions = await (0,_pages_api_WeatherApp__WEBPACK_IMPORTED_MODULE_2__.fetchCitySuggestions)(query);\n        setCitySuggestions(suggestions);\n    };\n    const handleFetchWeather = async ()=>{\n        if (!selectedCity || !selectedCity.name) {\n            setError(\"Por favor, selecione ou insira o nome de uma cidade válida.\");\n            return;\n        }\n        try {\n            const weatherData = await (0,_pages_api_WeatherApp__WEBPACK_IMPORTED_MODULE_2__.fetchWeather)(selectedCity.name);\n            setWeather(weatherData);\n            setError(\"\");\n        } catch (err) {\n            setError(\"Cidade não encontrada. Tente novamente.\");\n            setWeather(null);\n        }\n    };\n    const weatherTranslations = {\n        Clear: {\n            text: \"Céu limpo\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/sunny.svg\",\n                alt: \"C\\xe9u limpo\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        },\n        Clouds: {\n            text: \"Nuvens\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/cloudy.svg\",\n                alt: \"Nuvens\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        },\n        Rain: {\n            text: \"Chuva\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/rain.svg\",\n                alt: \"Chuva\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        },\n        Drizzle: {\n            text: \"Garoa\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/rain.svg\",\n                alt: \"Garoa\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this)\n        },\n        Thunderstorm: {\n            text: \"Trovoada\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/thunderstorm.svg\",\n                alt: \"C\\xe9u limpo\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, this)\n        },\n        Snow: {\n            text: \"Neve\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/snow.svg\",\n                alt: \"C\\xe9u limpo\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this)\n        },\n        Mist: {\n            text: \"Névoa\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"N\\xe9voa\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this)\n        },\n        Smoke: {\n            text: \"Fumaça\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"Fuma\\xe7a\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, this)\n        },\n        Haze: {\n            text: \"Neblina\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"Neblina\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this)\n        },\n        Dust: {\n            text: \"Poeira\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"Poeira\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        },\n        Fog: {\n            text: \"Nevoeiro\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"Nevoeiro\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this)\n        },\n        Sand: {\n            text: \"Areia\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"Areia\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, this)\n        },\n        Ash: {\n            text: \"Cinzas\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"Cinzas\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 144,\n                columnNumber: 9\n            }, this)\n        },\n        Squall: {\n            text: \"Rajada\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"Rajada\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 150,\n                columnNumber: 9\n            }, this)\n        },\n        Tornado: {\n            text: \"Tornado\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/mist.svg\",\n                alt: \"Tornado\",\n                width: 180,\n                height: 38,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, this)\n        }\n    };\n    const getTranslatedWeather = (weatherMain)=>{\n        return weatherTranslations[weatherMain] || {\n            text: weatherMain,\n            icon: null\n        };\n    };\n    const handleCityInputChange = (event)=>{\n        const query = event.target.value;\n        setCity(query);\n        handleFetchCitySuggestions(query);\n    };\n    const handleCitySelect = async (cityName, country)=>{\n        setCity(cityName);\n        setSelectedCity({\n            name: cityName,\n            country\n        });\n        setCitySuggestions([]);\n        try {\n            const weatherData = await (0,_pages_api_WeatherApp__WEBPACK_IMPORTED_MODULE_2__.fetchWeather)(cityName);\n            setWeather(weatherData);\n            setError(\"\");\n        } catch (err) {\n            setError(\"Cidade não encontrada. Tente novamente.\");\n            setWeather(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center text-center flex flex-col items-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-8\",\n                children: \"Manchester Weather\"\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 190,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: city || \"\",\n                        onChange: handleCityInputChange,\n                        placeholder: \"Digite o nome da cidade\",\n                        className: \"border rounded-3xl border-black p-4 pl-8 w-full\"\n                    }, void 0, false, {\n                        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 192,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"absolute right-4 top-1/2 transform -translate-y-1/2\"\n                    }, void 0, false, {\n                        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 199,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, this),\n            citySuggestions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"bg-white border rounded p-2 mt-2 w-1/3 max-h-40 overflow-auto\",\n                children: citySuggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"cursor-pointer hover:bg-gray-200 p-2\",\n                        onClick: ()=>handleCitySelect(suggestion.name, suggestion.country),\n                        children: [\n                            suggestion.name,\n                            \", \",\n                            suggestion.country\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 205,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 203,\n                columnNumber: 9\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 mt-2\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 217,\n                columnNumber: 17\n            }, this),\n            weather && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-col text-center justify-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"flex justify-center items-center text-5xl\",\n                                children: getTranslatedWeather(weather.weather[0].main).icon\n                            }, void 0, false, {\n                                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 222,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 mt-6\",\n                                children: getTranslatedWeather(weather.weather[0].main).text\n                            }, void 0, false, {\n                                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 225,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-5xl mt-6\",\n                                children: [\n                                    weather.main.temp.toFixed(0),\n                                    \"\\xb0C\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 228,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 221,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-5xl\",\n                        children: [\n                            selectedCity.name,\n                            \" \",\n                            selectedCity.country && `(${selectedCity.country})`\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 230,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-6 gap-6 flex items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2 text-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowUpwardOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                        lineNumber: 236,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    weather.main.temp_max.toFixed(0),\n                                    \"\\xb0C\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 235,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2 text-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowDownwardOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                        lineNumber: 239,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    weather.main.temp_min.toFixed(0),\n                                    \"\\xb0C\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 238,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 234,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 220,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/155010@univille.br/projetos/desafio-dev-frontend/src/pages/_app.js\",\n        lineNumber: 189,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDOEQsSUFBSSxFQUFFM0MsSUFBSTs7Ozs7OzBDQUVyRCw4REFBQzBDO2dDQUFFYixXQUFVOzBDQUNWVCxxQkFBcUJ2QyxRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDOEQsSUFBSSxFQUFFNUMsSUFBSTs7Ozs7OzBDQUVyRCw4REFBQzJDO2dDQUFFYixXQUFVOztvQ0FBaUJoRCxRQUFROEQsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztvQ0FBRzs7Ozs7Ozs7Ozs7OztrQ0FFN0QsOERBQUNDO3dCQUFHakIsV0FBVTs7NEJBQ1gxQyxhQUFhRSxJQUFJOzRCQUFFOzRCQUNuQkYsYUFBYUcsT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFSCxhQUFhRyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O2tDQUV0RCw4REFBQ3NDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDdEQsK0VBQXVCQTs7Ozs7b0NBQUc7b0NBQUVNLFFBQVE4RCxJQUFJLENBQUNJLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDO29DQUFHOzs7Ozs7OzBDQUVoRSw4REFBQ2pCO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ3JELGlGQUF5QkE7Ozs7O29DQUFHO29DQUFFSyxRQUFROEQsSUFBSSxDQUFDSyxRQUFRLENBQUNILE9BQU8sQ0FBQztvQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU85RSIsInNvdXJjZXMiOlsiL2hvbWUvMTU1MDEwQHVuaXZpbGxlLmJyL3Byb2pldG9zL2Rlc2FmaW8tZGV2LWZyb250ZW5kL3NyYy9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmV0Y2hXZWF0aGVyLCBmZXRjaENpdHlTdWdnZXN0aW9ucyB9IGZyb20gXCJAL3BhZ2VzL2FwaS9XZWF0aGVyQXBwXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBBcnJvd1Vwd2FyZE91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd1Vwd2FyZE91dGxpbmVkXCI7XG5pbXBvcnQgQXJyb3dEb3dud2FyZE91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0Rvd253YXJkT3V0bGluZWRcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NpdHlTdWdnZXN0aW9ucywgc2V0Q2l0eVN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2l0eSwgc2V0U2VsZWN0ZWRDaXR5XSA9IHVzZVN0YXRlKHsgbmFtZTogXCJcIiwgY291bnRyeTogXCJcIiB9KTtcblxuICBjb25zdCBoYW5kbGVGZXRjaENpdHlTdWdnZXN0aW9ucyA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gYXdhaXQgZmV0Y2hDaXR5U3VnZ2VzdGlvbnMocXVlcnkpO1xuICAgIHNldENpdHlTdWdnZXN0aW9ucyhzdWdnZXN0aW9ucyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmV0Y2hXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRDaXR5IHx8ICFzZWxlY3RlZENpdHkubmFtZSkge1xuICAgICAgc2V0RXJyb3IoXCJQb3IgZmF2b3IsIHNlbGVjaW9uZSBvdSBpbnNpcmEgbyBub21lIGRlIHVtYSBjaWRhZGUgdsOhbGlkYS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyKHNlbGVjdGVkQ2l0eS5uYW1lKTtcbiAgICAgIHNldFdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihcIkNpZGFkZSBuw6NvIGVuY29udHJhZGEuIFRlbnRlIG5vdmFtZW50ZS5cIik7XG4gICAgICBzZXRXZWF0aGVyKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB3ZWF0aGVyVHJhbnNsYXRpb25zID0ge1xuICAgIENsZWFyOiB7XG4gICAgICB0ZXh0OiBcIkPDqXUgbGltcG9cIixcbiAgICAgIGljb246IChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL3N1bm55LnN2Z1wiXG4gICAgICAgICAgYWx0PVwiQ8OpdSBsaW1wb1wiXG4gICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICBoZWlnaHQ9ezM4fVxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIH0sXG4gICAgQ2xvdWRzOiB7XG4gICAgICB0ZXh0OiBcIk51dmVuc1wiLFxuICAgICAgaWNvbjogKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvY2xvdWR5LnN2Z1wiXG4gICAgICAgICAgYWx0PVwiTnV2ZW5zXCJcbiAgICAgICAgICB3aWR0aD17MTgwfVxuICAgICAgICAgIGhlaWdodD17Mzh9XG4gICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgLz5cbiAgICAgICksXG4gICAgfSxcbiAgICBSYWluOiB7XG4gICAgICB0ZXh0OiBcIkNodXZhXCIsXG4gICAgICBpY29uOiAoXG4gICAgICAgIDxJbWFnZSBzcmM9XCIvcmFpbi5zdmdcIiBhbHQ9XCJDaHV2YVwiIHdpZHRoPXsxODB9IGhlaWdodD17Mzh9IHByaW9yaXR5IC8+XG4gICAgICApLFxuICAgIH0sXG4gICAgRHJpenpsZToge1xuICAgICAgdGV4dDogXCJHYXJvYVwiLFxuICAgICAgaWNvbjogKFxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3JhaW4uc3ZnXCIgYWx0PVwiR2Fyb2FcIiB3aWR0aD17MTgwfSBoZWlnaHQ9ezM4fSBwcmlvcml0eSAvPlxuICAgICAgKSxcbiAgICB9LFxuICAgIFRodW5kZXJzdG9ybToge1xuICAgICAgdGV4dDogXCJUcm92b2FkYVwiLFxuICAgICAgaWNvbjogKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvdGh1bmRlcnN0b3JtLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiQ8OpdSBsaW1wb1wiXG4gICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICBoZWlnaHQ9ezM4fVxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIH0sXG4gICAgU25vdzoge1xuICAgICAgdGV4dDogXCJOZXZlXCIsXG4gICAgICBpY29uOiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9zbm93LnN2Z1wiXG4gICAgICAgICAgYWx0PVwiQ8OpdSBsaW1wb1wiXG4gICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICBoZWlnaHQ9ezM4fVxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIH0sXG4gICAgTWlzdDoge1xuICAgICAgdGV4dDogXCJOw6l2b2FcIixcbiAgICAgIGljb246IChcbiAgICAgICAgPEltYWdlIHNyYz1cIi9taXN0LnN2Z1wiIGFsdD1cIk7DqXZvYVwiIHdpZHRoPXsxODB9IGhlaWdodD17Mzh9IHByaW9yaXR5IC8+XG4gICAgICApLFxuICAgIH0sXG4gICAgU21va2U6IHtcbiAgICAgIHRleHQ6IFwiRnVtYcOnYVwiLFxuICAgICAgaWNvbjogKFxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL21pc3Quc3ZnXCIgYWx0PVwiRnVtYcOnYVwiIHdpZHRoPXsxODB9IGhlaWdodD17Mzh9IHByaW9yaXR5IC8+XG4gICAgICApLFxuICAgIH0sXG4gICAgSGF6ZToge1xuICAgICAgdGV4dDogXCJOZWJsaW5hXCIsXG4gICAgICBpY29uOiAoXG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbWlzdC5zdmdcIiBhbHQ9XCJOZWJsaW5hXCIgd2lkdGg9ezE4MH0gaGVpZ2h0PXszOH0gcHJpb3JpdHkgLz5cbiAgICAgICksXG4gICAgfSxcbiAgICBEdXN0OiB7XG4gICAgICB0ZXh0OiBcIlBvZWlyYVwiLFxuICAgICAgaWNvbjogKFxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL21pc3Quc3ZnXCIgYWx0PVwiUG9laXJhXCIgd2lkdGg9ezE4MH0gaGVpZ2h0PXszOH0gcHJpb3JpdHkgLz5cbiAgICAgICksXG4gICAgfSxcbiAgICBGb2c6IHtcbiAgICAgIHRleHQ6IFwiTmV2b2Vpcm9cIixcbiAgICAgIGljb246IChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL21pc3Quc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJOZXZvZWlyb1wiXG4gICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICBoZWlnaHQ9ezM4fVxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIH0sXG4gICAgU2FuZDoge1xuICAgICAgdGV4dDogXCJBcmVpYVwiLFxuICAgICAgaWNvbjogKFxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL21pc3Quc3ZnXCIgYWx0PVwiQXJlaWFcIiB3aWR0aD17MTgwfSBoZWlnaHQ9ezM4fSBwcmlvcml0eSAvPlxuICAgICAgKSxcbiAgICB9LFxuICAgIEFzaDoge1xuICAgICAgdGV4dDogXCJDaW56YXNcIixcbiAgICAgIGljb246IChcbiAgICAgICAgPEltYWdlIHNyYz1cIi9taXN0LnN2Z1wiIGFsdD1cIkNpbnphc1wiIHdpZHRoPXsxODB9IGhlaWdodD17Mzh9IHByaW9yaXR5IC8+XG4gICAgICApLFxuICAgIH0sXG4gICAgU3F1YWxsOiB7XG4gICAgICB0ZXh0OiBcIlJhamFkYVwiLFxuICAgICAgaWNvbjogKFxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL21pc3Quc3ZnXCIgYWx0PVwiUmFqYWRhXCIgd2lkdGg9ezE4MH0gaGVpZ2h0PXszOH0gcHJpb3JpdHkgLz5cbiAgICAgICksXG4gICAgfSxcbiAgICBUb3JuYWRvOiB7XG4gICAgICB0ZXh0OiBcIlRvcm5hZG9cIixcbiAgICAgIGljb246IChcbiAgICAgICAgPEltYWdlIHNyYz1cIi9taXN0LnN2Z1wiIGFsdD1cIlRvcm5hZG9cIiB3aWR0aD17MTgwfSBoZWlnaHQ9ezM4fSBwcmlvcml0eSAvPlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGdldFRyYW5zbGF0ZWRXZWF0aGVyID0gKHdlYXRoZXJNYWluKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHdlYXRoZXJUcmFuc2xhdGlvbnNbd2VhdGhlck1haW5dIHx8IHsgdGV4dDogd2VhdGhlck1haW4sIGljb246IG51bGwgfVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2l0eUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgc2V0Q2l0eShxdWVyeSk7XG4gICAgaGFuZGxlRmV0Y2hDaXR5U3VnZ2VzdGlvbnMocXVlcnkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNpdHlTZWxlY3QgPSBhc3luYyAoY2l0eU5hbWUsIGNvdW50cnkpID0+IHtcbiAgICBzZXRDaXR5KGNpdHlOYW1lKTtcbiAgICBzZXRTZWxlY3RlZENpdHkoeyBuYW1lOiBjaXR5TmFtZSwgY291bnRyeSB9KTtcbiAgICBzZXRDaXR5U3VnZ2VzdGlvbnMoW10pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGNpdHlOYW1lKTtcbiAgICAgIHNldFdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihcIkNpZGFkZSBuw6NvIGVuY29udHJhZGEuIFRlbnRlIG5vdmFtZW50ZS5cIik7XG4gICAgICBzZXRXZWF0aGVyKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItOFwiPk1hbmNoZXN0ZXIgV2VhdGhlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBzbTp3LTExLzEyIG1kOnctMi8zIGxnOnctMS8yIG14LWF1dG9cIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtjaXR5IHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNpdHlJbnB1dENoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgZGEgY2lkYWRlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC0zeGwgYm9yZGVyLWJsYWNrIHAtNCBwbC04IHctZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2NpdHlTdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciByb3VuZGVkIHAtMiBtdC0yIHctMS8zIG1heC1oLTQwIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICB7Y2l0eVN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBwLTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZUNpdHlTZWxlY3Qoc3VnZ2VzdGlvbi5uYW1lLCBzdWdnZXN0aW9uLmNvdW50cnkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N1Z2dlc3Rpb24ubmFtZX0sIHtzdWdnZXN0aW9uLmNvdW50cnl9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbXQtMlwiPntlcnJvcn08L3A+fVxuXG4gICAgICB7d2VhdGhlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsXCI+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGVkV2VhdGhlcih3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbikuaWNvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbXQtNlwiPlxuICAgICAgICAgICAgICB7Z2V0VHJhbnNsYXRlZFdlYXRoZXIod2VhdGhlci53ZWF0aGVyWzBdLm1haW4pLnRleHR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtdC02XCI+e3dlYXRoZXIubWFpbi50ZW1wLnRvRml4ZWQoMCl9wrBDPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bFwiPlxuICAgICAgICAgICAge3NlbGVjdGVkQ2l0eS5uYW1lfXtcIiBcIn1cbiAgICAgICAgICAgIHtzZWxlY3RlZENpdHkuY291bnRyeSAmJiBgKCR7c2VsZWN0ZWRDaXR5LmNvdW50cnl9KWB9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNiBnYXAtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICA8QXJyb3dVcHdhcmRPdXRsaW5lZEljb24gLz4ge3dlYXRoZXIubWFpbi50ZW1wX21heC50b0ZpeGVkKDApfcKwQ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgIDxBcnJvd0Rvd253YXJkT3V0bGluZWRJY29uIC8+IHt3ZWF0aGVyLm1haW4udGVtcF9taW4udG9GaXhlZCgwKX3CsENcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZldGNoV2VhdGhlciIsImZldGNoQ2l0eVN1Z2dlc3Rpb25zIiwiSW1hZ2UiLCJBcnJvd1Vwd2FyZE91dGxpbmVkSWNvbiIsIkFycm93RG93bndhcmRPdXRsaW5lZEljb24iLCJTZWFyY2hJY29uIiwiQXBwIiwiY2l0eSIsInNldENpdHkiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImVycm9yIiwic2V0RXJyb3IiLCJjaXR5U3VnZ2VzdGlvbnMiLCJzZXRDaXR5U3VnZ2VzdGlvbnMiLCJzZWxlY3RlZENpdHkiLCJzZXRTZWxlY3RlZENpdHkiLCJuYW1lIiwiY291bnRyeSIsImhhbmRsZUZldGNoQ2l0eVN1Z2dlc3Rpb25zIiwicXVlcnkiLCJzdWdnZXN0aW9ucyIsImhhbmRsZUZldGNoV2VhdGhlciIsIndlYXRoZXJEYXRhIiwiZXJyIiwid2VhdGhlclRyYW5zbGF0aW9ucyIsIkNsZWFyIiwidGV4dCIsImljb24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwiQ2xvdWRzIiwiUmFpbiIsIkRyaXp6bGUiLCJUaHVuZGVyc3Rvcm0iLCJTbm93IiwiTWlzdCIsIlNtb2tlIiwiSGF6ZSIsIkR1c3QiLCJGb2ciLCJTYW5kIiwiQXNoIiwiU3F1YWxsIiwiVG9ybmFkbyIsImdldFRyYW5zbGF0ZWRXZWF0aGVyIiwid2VhdGhlck1haW4iLCJoYW5kbGVDaXR5SW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2l0eVNlbGVjdCIsImNpdHlOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJzdWdnZXN0aW9uIiwiaW5kZXgiLCJsaSIsIm9uQ2xpY2siLCJwIiwibWFpbiIsInRlbXAiLCJ0b0ZpeGVkIiwiaDIiLCJ0ZW1wX21heCIsInRlbXBfbWluIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/pages/api/WeatherApp.js":
/*!*************************************!*\
  !*** ./src/pages/api/WeatherApp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCitySuggestions: () => (/* binding */ fetchCitySuggestions),\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)\n/* harmony export */ });\nconst fetchWeather = async (city)=>{\n    console.log(\"Buscando clima para:\", city);\n    const apiKey = \"3b160403fab665468371376faad5d880\";\n    try {\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);\n        if (!response.ok) {\n            throw new Error(\"Cidade não encontrada\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Erro ao buscar os dados do clima:\", error);\n        throw error;\n    }\n};\nconst fetchCitySuggestions = async (query)=>{\n    const apiKey = \"3b160403fab665468371376faad5d880\";\n    try {\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&limit=5`);\n        const data = await response.json();\n        if (data.cod === \"200\") {\n            const uniqueCities = data.list.map((city)=>({\n                    name: city.name,\n                    country: city.sys.country\n                }));\n            const filteredCities = Array.from(new Set(uniqueCities.map((city)=>`${city.name}, ${city.country}`))).map((cityString)=>{\n                const [name, country] = cityString.split(\", \");\n                return {\n                    name,\n                    country\n                };\n            });\n            return filteredCities;\n        } else {\n            return [];\n        }\n    } catch (error) {\n        console.error(\"Erro ao buscar cidades:\", error);\n        return [];\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL1dlYXRoZXJBcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxlQUFlLE9BQU9DO0lBQ2pDQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRjtJQUNwQyxNQUFNRyxTQUFTO0lBQ2YsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLGtEQUFrRCxFQUFFTCxLQUFLLE9BQU8sRUFBRUcsT0FBTyxhQUFhLENBQUM7UUFDckgsSUFBSSxDQUFDQyxTQUFTRSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO0lBQzVCLEVBQUUsT0FBT0MsT0FBTztRQUNkUixRQUFRUSxLQUFLLENBQUMscUNBQXFDQTtRQUNuRCxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUdPLE1BQU1DLHVCQUF1QixPQUFPQztJQUN6QyxNQUFNUixTQUFTO0lBRWYsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsQ0FBQywrQ0FBK0MsRUFBRU0sTUFBTSxPQUFPLEVBQUVSLE9BQU8sUUFBUSxDQUFDO1FBRW5GLE1BQU1TLE9BQU8sTUFBTVIsU0FBU0ksSUFBSTtRQUNoQyxJQUFJSSxLQUFLQyxHQUFHLEtBQUssT0FBTztZQUN0QixNQUFNQyxlQUFlRixLQUFLRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDaEIsT0FBVTtvQkFDNUNpQixNQUFNakIsS0FBS2lCLElBQUk7b0JBQ2ZDLFNBQVNsQixLQUFLbUIsR0FBRyxDQUFDRCxPQUFPO2dCQUMzQjtZQUNBLE1BQU1FLGlCQUFpQkMsTUFBTUMsSUFBSSxDQUMvQixJQUFJQyxJQUFJVCxhQUFhRSxHQUFHLENBQUMsQ0FBQ2hCLE9BQVMsR0FBR0EsS0FBS2lCLElBQUksQ0FBQyxFQUFFLEVBQUVqQixLQUFLa0IsT0FBTyxFQUFFLElBQ2xFRixHQUFHLENBQUMsQ0FBQ1E7Z0JBQ0wsTUFBTSxDQUFDUCxNQUFNQyxRQUFRLEdBQUdNLFdBQVdDLEtBQUssQ0FBQztnQkFDekMsT0FBTztvQkFBRVI7b0JBQU1DO2dCQUFRO1lBQ3pCO1lBQ0EsT0FBT0U7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFO1FBQ1g7SUFDRixFQUFFLE9BQU9YLE9BQU87UUFDZFIsUUFBUVEsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBTyxFQUFFO0lBQ1g7QUFDRixFQUFFIiwic291cmNlcyI6WyIvaG9tZS8xNTUwMTBAdW5pdmlsbGUuYnIvcHJvamV0b3MvZGVzYWZpby1kZXYtZnJvbnRlbmQvc3JjL3BhZ2VzL2FwaS9XZWF0aGVyQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaFdlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkJ1c2NhbmRvIGNsaW1hIHBhcmE6XCIsIGNpdHkpO1xuICBjb25zdCBhcGlLZXkgPSBcIjNiMTYwNDAzZmFiNjY1NDY4MzcxMzc2ZmFhZDVkODgwXCI7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1tZXRyaWNgKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaWRhZGUgbsOjbyBlbmNvbnRyYWRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciBvcyBkYWRvcyBkbyBjbGltYTpcIiwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5cbiAgZXhwb3J0IGNvbnN0IGZldGNoQ2l0eVN1Z2dlc3Rpb25zID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gXCIzYjE2MDQwM2ZhYjY2NTQ2ODM3MTM3NmZhYWQ1ZDg4MFwiO1xuICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9maW5kP3E9JHtxdWVyeX0mYXBwaWQ9JHthcGlLZXl9JmxpbWl0PTVgXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChkYXRhLmNvZCA9PT0gXCIyMDBcIikge1xuICAgICAgICBjb25zdCB1bmlxdWVDaXRpZXMgPSBkYXRhLmxpc3QubWFwKChjaXR5KSA9PiAoe1xuICAgICAgICAgIG5hbWU6IGNpdHkubmFtZSxcbiAgICAgICAgICBjb3VudHJ5OiBjaXR5LnN5cy5jb3VudHJ5LFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQ2l0aWVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICBuZXcgU2V0KHVuaXF1ZUNpdGllcy5tYXAoKGNpdHkpID0+IGAke2NpdHkubmFtZX0sICR7Y2l0eS5jb3VudHJ5fWApKVxuICAgICAgICApLm1hcCgoY2l0eVN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IFtuYW1lLCBjb3VudHJ5XSA9IGNpdHlTdHJpbmcuc3BsaXQoXCIsIFwiKTtcbiAgICAgICAgICByZXR1cm4geyBuYW1lLCBjb3VudHJ5IH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRDaXRpZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciBjaWRhZGVzOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuICBcbiAgXG4gICJdLCJuYW1lcyI6WyJmZXRjaFdlYXRoZXIiLCJjaXR5IiwiY29uc29sZSIsImxvZyIsImFwaUtleSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsImVycm9yIiwiZmV0Y2hDaXR5U3VnZ2VzdGlvbnMiLCJxdWVyeSIsImRhdGEiLCJjb2QiLCJ1bmlxdWVDaXRpZXMiLCJsaXN0IiwibWFwIiwibmFtZSIsImNvdW50cnkiLCJzeXMiLCJmaWx0ZXJlZENpdGllcyIsIkFycmF5IiwiZnJvbSIsIlNldCIsImNpdHlTdHJpbmciLCJzcGxpdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/WeatherApp.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();