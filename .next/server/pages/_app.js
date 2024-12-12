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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_WeatherApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/api/WeatherApp */ \"./src/pages/api/WeatherApp.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_ArrowUpwardOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/ArrowUpwardOutlined */ \"./node_modules/@mui/icons-material/esm/ArrowUpwardOutlined.js\");\n/* harmony import */ var _mui_icons_material_ArrowDownwardOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/ArrowDownwardOutlined */ \"./node_modules/@mui/icons-material/esm/ArrowDownwardOutlined.js\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/esm/Search.js\");\n/* harmony import */ var _mui_icons_material_WbSunnyTwoTone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/WbSunnyTwoTone */ \"./node_modules/@mui/icons-material/esm/WbSunnyTwoTone.js\");\n/* harmony import */ var _mui_icons_material_WbCloudyTwoTone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/WbCloudyTwoTone */ \"./node_modules/@mui/icons-material/esm/WbCloudyTwoTone.js\");\n/* harmony import */ var _mui_icons_material_WaterDropTwoTone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/WaterDropTwoTone */ \"./node_modules/@mui/icons-material/esm/WaterDropTwoTone.js\");\n/* harmony import */ var _mui_icons_material_ThunderstormTwoTone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ThunderstormTwoTone */ \"./node_modules/@mui/icons-material/esm/ThunderstormTwoTone.js\");\n/* harmony import */ var _mui_icons_material_AcUnitTwoTone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/AcUnitTwoTone */ \"./node_modules/@mui/icons-material/esm/AcUnitTwoTone.js\");\n/* harmony import */ var _mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/DehazeTwoTone */ \"./node_modules/@mui/icons-material/esm/DehazeTwoTone.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [citySuggestions, setCitySuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCity, setSelectedCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        country: \"\"\n    });\n    const handleFetchCitySuggestions = async (query)=>{\n        const suggestions = await (0,_pages_api_WeatherApp__WEBPACK_IMPORTED_MODULE_2__.fetchCitySuggestions)(query);\n        setCitySuggestions(suggestions);\n    };\n    const handleFetchWeather = async ()=>{\n        if (!selectedCity || !selectedCity.name) {\n            setError(\"Por favor, selecione ou insira o nome de uma cidade válida.\");\n            return;\n        }\n        try {\n            const weatherData = await (0,_pages_api_WeatherApp__WEBPACK_IMPORTED_MODULE_2__.fetchWeather)(selectedCity.name);\n            setWeather(weatherData);\n            setError(\"\");\n        } catch (err) {\n            setError(\"Cidade não encontrada. Tente novamente.\");\n            setWeather(null);\n        }\n    };\n    const weatherTranslations = {\n        Clear: {\n            text: \"Céu limpo\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_WbSunnyTwoTone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 48,\n                columnNumber: 14\n            }, this)\n        },\n        Clouds: {\n            text: \"Nuvens\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_WbCloudyTwoTone__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 52,\n                columnNumber: 14\n            }, this)\n        },\n        Rain: {\n            text: \"Chuva\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_WaterDropTwoTone__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 56,\n                columnNumber: 14\n            }, this)\n        },\n        Drizzle: {\n            text: \"Garoa\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_WaterDropTwoTone__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 60,\n                columnNumber: 14\n            }, this)\n        },\n        Thunderstorm: {\n            text: \"Trovoada\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ThunderstormTwoTone__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 64,\n                columnNumber: 14\n            }, this)\n        },\n        Snow: {\n            text: \"Neve\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AcUnitTwoTone__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 68,\n                columnNumber: 14\n            }, this)\n        },\n        Mist: {\n            text: \"Névoa\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 72,\n                columnNumber: 14\n            }, this)\n        },\n        Smoke: {\n            text: \"Fumaça\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 76,\n                columnNumber: 14\n            }, this)\n        },\n        Haze: {\n            text: \"Neblina\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 80,\n                columnNumber: 14\n            }, this)\n        },\n        Dust: {\n            text: \"Poeira\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 84,\n                columnNumber: 14\n            }, this)\n        },\n        Fog: {\n            text: \"Nevoeiro\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 88,\n                columnNumber: 14\n            }, this)\n        },\n        Sand: {\n            text: \"Areia\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 92,\n                columnNumber: 14\n            }, this)\n        },\n        Ash: {\n            text: \"Cinzas\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 96,\n                columnNumber: 14\n            }, this)\n        },\n        Squall: {\n            text: \"Rajada\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 100,\n                columnNumber: 14\n            }, this)\n        },\n        Tornado: {\n            text: \"Tornado\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_DehazeTwoTone__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                fontSize: \"inherit\",\n                style: {\n                    fontSize: \"120px\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 104,\n                columnNumber: 14\n            }, this)\n        }\n    };\n    const getTranslatedWeather = (weatherMain)=>{\n        return weatherTranslations[weatherMain] || {\n            text: weatherMain,\n            icon: null\n        };\n    };\n    const handleCityInputChange = (event)=>{\n        const query = event.target.value;\n        setCity(query);\n        handleFetchCitySuggestions(query);\n    };\n    const handleCitySelect = async (cityName, country)=>{\n        setCity(cityName);\n        setSelectedCity({\n            name: cityName,\n            country\n        });\n        setCitySuggestions([]);\n        try {\n            const weatherData = await (0,_pages_api_WeatherApp__WEBPACK_IMPORTED_MODULE_2__.fetchWeather)(cityName);\n            setWeather(weatherData);\n            setError(\"\");\n        } catch (err) {\n            setError(\"Cidade não encontrada. Tente novamente.\");\n            setWeather(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center text-center flex flex-col items-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-8\",\n                children: \"Manchester Weather\"\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mx-auto p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: city || \"\",\n                        onChange: handleCityInputChange,\n                        placeholder: \"Digite o nome da cidade\",\n                        className: \"border rounded-3xl border-black p-4 pl-8 w-full\"\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        className: \"absolute right-4 top-1/2 transform -translate-y-1/2\"\n                    }, void 0, false, {\n                        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            citySuggestions.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"bg-white border rounded p-2 mt-2 w-1/3 max-h-40 overflow-auto\",\n                children: citySuggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"cursor-pointer hover:bg-gray-200 p-2\",\n                        onClick: ()=>handleCitySelect(suggestion.name, suggestion.country),\n                        children: [\n                            suggestion.name,\n                            \", \",\n                            suggestion.country\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 152,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 150,\n                columnNumber: 9\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 mt-2\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 164,\n                columnNumber: 17\n            }, this),\n            weather && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-col text-center justify-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"flex justify-center items-center text-5xl\",\n                                children: getTranslatedWeather(weather.weather[0].main).icon\n                            }, void 0, false, {\n                                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 169,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 mt-6\",\n                                children: getTranslatedWeather(weather.weather[0].main).text\n                            }, void 0, false, {\n                                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 172,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-5xl mt-6\",\n                                children: [\n                                    weather.main.temp.toFixed(0),\n                                    \"\\xb0C\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 175,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 168,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-5xl\",\n                        children: [\n                            selectedCity.name,\n                            \" \",\n                            selectedCity.country && `(${selectedCity.country})`\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 177,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-6 gap-6 flex items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2 text-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowUpwardOutlined__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                        lineNumber: 183,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    weather.main.temp_max.toFixed(0),\n                                    \"\\xb0C\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 182,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2 text-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowDownwardOutlined__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                        lineNumber: 186,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    weather.main.temp_min.toFixed(0),\n                                    \"\\xb0C\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                                lineNumber: 185,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                        lineNumber: 181,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n                lineNumber: 167,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matheus/projetos/desafio-dev-frontend/src/pages/_app.js\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O2tDQUU3RCw4REFBQ0M7d0JBQUdqQixXQUFVOzs0QkFDWHZDLGFBQWFFLElBQUk7NEJBQUU7NEJBQ25CRixhQUFhRyxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUVILGFBQWFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7a0NBRXRELDhEQUFDbUM7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUN6RCxnRkFBdUJBOzs7OztvQ0FBRztvQ0FBRVksUUFBUTJELElBQUksQ0FBQ0ksUUFBUSxDQUFDRixPQUFPLENBQUM7b0NBQUc7Ozs7Ozs7MENBRWhFLDhEQUFDakI7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDeEQsa0ZBQXlCQTs7Ozs7b0NBQUc7b0NBQUVXLFFBQVEyRCxJQUFJLENBQUNLLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDO29DQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlFIiwic291cmNlcyI6WyIvaG9tZS9tYXRoZXVzL3Byb2pldG9zL2Rlc2FmaW8tZGV2LWZyb250ZW5kL3NyYy9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmV0Y2hXZWF0aGVyLCBmZXRjaENpdHlTdWdnZXN0aW9ucyB9IGZyb20gXCJAL3BhZ2VzL2FwaS9XZWF0aGVyQXBwXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBBcnJvd1Vwd2FyZE91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd1Vwd2FyZE91dGxpbmVkXCI7XG5pbXBvcnQgQXJyb3dEb3dud2FyZE91dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0Rvd253YXJkT3V0bGluZWRcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaFwiO1xuXG5pbXBvcnQgV2JTdW5ueVR3b1RvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvV2JTdW5ueVR3b1RvbmUnO1xuaW1wb3J0IFdiQ2xvdWR5VHdvVG9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9XYkNsb3VkeVR3b1RvbmUnO1xuaW1wb3J0IFdhdGVyRHJvcFR3b1RvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvV2F0ZXJEcm9wVHdvVG9uZSc7XG5pbXBvcnQgVGh1bmRlcnN0b3JtVHdvVG9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9UaHVuZGVyc3Rvcm1Ud29Ub25lJztcbmltcG9ydCBBY1VuaXRUd29Ub25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjVW5pdFR3b1RvbmUnO1xuaW1wb3J0IERlaGF6ZVR3b1RvbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVoYXplVHdvVG9uZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2l0eVN1Z2dlc3Rpb25zLCBzZXRDaXR5U3VnZ2VzdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRDaXR5LCBzZXRTZWxlY3RlZENpdHldID0gdXNlU3RhdGUoeyBuYW1lOiBcIlwiLCBjb3VudHJ5OiBcIlwiIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUZldGNoQ2l0eVN1Z2dlc3Rpb25zID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBhd2FpdCBmZXRjaENpdHlTdWdnZXN0aW9ucyhxdWVyeSk7XG4gICAgc2V0Q2l0eVN1Z2dlc3Rpb25zKHN1Z2dlc3Rpb25zKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGZXRjaFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZENpdHkgfHwgIXNlbGVjdGVkQ2l0eS5uYW1lKSB7XG4gICAgICBzZXRFcnJvcihcIlBvciBmYXZvciwgc2VsZWNpb25lIG91IGluc2lyYSBvIG5vbWUgZGUgdW1hIGNpZGFkZSB2w6FsaWRhLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXIoc2VsZWN0ZWRDaXR5Lm5hbWUpO1xuICAgICAgc2V0V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKFwiQ2lkYWRlIG7Do28gZW5jb250cmFkYS4gVGVudGUgbm92YW1lbnRlLlwiKTtcbiAgICAgIHNldFdlYXRoZXIobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHdlYXRoZXJUcmFuc2xhdGlvbnMgPSB7XG4gICAgQ2xlYXI6IHtcbiAgICAgIHRleHQ6IFwiQ8OpdSBsaW1wb1wiLFxuICAgICAgaWNvbjogKDxXYlN1bm55VHdvVG9uZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTIwcHhcIiB9fSAvPiksXG4gICAgfSxcbiAgICBDbG91ZHM6IHtcbiAgICAgIHRleHQ6IFwiTnV2ZW5zXCIsXG4gICAgICBpY29uOiAoPFdiQ2xvdWR5VHdvVG9uZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTIwcHhcIiB9fSAvPiksXG4gICAgfSxcbiAgICBSYWluOiB7XG4gICAgICB0ZXh0OiBcIkNodXZhXCIsXG4gICAgICBpY29uOiAoPFdhdGVyRHJvcFR3b1RvbmVJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEyMHB4XCIgfX0gLz4pLFxuICAgIH0sXG4gICAgRHJpenpsZToge1xuICAgICAgdGV4dDogXCJHYXJvYVwiLFxuICAgICAgaWNvbjogKDxXYXRlckRyb3BUd29Ub25lSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxMjBweFwiIH19IC8+KSxcbiAgICB9LFxuICAgIFRodW5kZXJzdG9ybToge1xuICAgICAgdGV4dDogXCJUcm92b2FkYVwiLFxuICAgICAgaWNvbjogKDxUaHVuZGVyc3Rvcm1Ud29Ub25lSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxMjBweFwiIH19IC8+KSxcbiAgICB9LFxuICAgIFNub3c6IHtcbiAgICAgIHRleHQ6IFwiTmV2ZVwiLFxuICAgICAgaWNvbjogKDxBY1VuaXRUd29Ub25lSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxMjBweFwiIH19IC8+KSxcbiAgICB9LFxuICAgIE1pc3Q6IHtcbiAgICAgIHRleHQ6IFwiTsOpdm9hXCIsXG4gICAgICBpY29uOiAoPERlaGF6ZVR3b1RvbmVJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEyMHB4XCIgfX0gLz4pLFxuICAgIH0sXG4gICAgU21va2U6IHtcbiAgICAgIHRleHQ6IFwiRnVtYcOnYVwiLFxuICAgICAgaWNvbjogKDxEZWhhemVUd29Ub25lSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxMjBweFwiIH19IC8+KSxcbiAgICB9LFxuICAgIEhhemU6IHtcbiAgICAgIHRleHQ6IFwiTmVibGluYVwiLFxuICAgICAgaWNvbjogKDxEZWhhemVUd29Ub25lSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxMjBweFwiIH19IC8+KSxcbiAgICB9LFxuICAgIER1c3Q6IHtcbiAgICAgIHRleHQ6IFwiUG9laXJhXCIsXG4gICAgICBpY29uOiAoPERlaGF6ZVR3b1RvbmVJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEyMHB4XCIgfX0gLz4pLFxuICAgIH0sXG4gICAgRm9nOiB7XG4gICAgICB0ZXh0OiBcIk5ldm9laXJvXCIsXG4gICAgICBpY29uOiAoPERlaGF6ZVR3b1RvbmVJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEyMHB4XCIgfX0gLz4pLFxuICAgIH0sXG4gICAgU2FuZDoge1xuICAgICAgdGV4dDogXCJBcmVpYVwiLFxuICAgICAgaWNvbjogKDxEZWhhemVUd29Ub25lSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxMjBweFwiIH19IC8+KSxcbiAgICB9LFxuICAgIEFzaDoge1xuICAgICAgdGV4dDogXCJDaW56YXNcIixcbiAgICAgIGljb246ICg8RGVoYXplVHdvVG9uZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTIwcHhcIiB9fSAvPilcbiAgICB9LFxuICAgIFNxdWFsbDoge1xuICAgICAgdGV4dDogXCJSYWphZGFcIixcbiAgICAgIGljb246ICg8RGVoYXplVHdvVG9uZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTIwcHhcIiB9fSAvPilcbiAgICB9LFxuICAgIFRvcm5hZG86IHtcbiAgICAgIHRleHQ6IFwiVG9ybmFkb1wiLFxuICAgICAgaWNvbjogKDxEZWhhemVUd29Ub25lSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxMjBweFwiIH19IC8+KVxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZ2V0VHJhbnNsYXRlZFdlYXRoZXIgPSAod2VhdGhlck1haW4pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgd2VhdGhlclRyYW5zbGF0aW9uc1t3ZWF0aGVyTWFpbl0gfHwgeyB0ZXh0OiB3ZWF0aGVyTWFpbiwgaWNvbjogbnVsbCB9XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaXR5SW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRDaXR5KHF1ZXJ5KTtcbiAgICBoYW5kbGVGZXRjaENpdHlTdWdnZXN0aW9ucyhxdWVyeSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2l0eVNlbGVjdCA9IGFzeW5jIChjaXR5TmFtZSwgY291bnRyeSkgPT4ge1xuICAgIHNldENpdHkoY2l0eU5hbWUpO1xuICAgIHNldFNlbGVjdGVkQ2l0eSh7IG5hbWU6IGNpdHlOYW1lLCBjb3VudHJ5IH0pO1xuICAgIHNldENpdHlTdWdnZXN0aW9ucyhbXSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXIoY2l0eU5hbWUpO1xuICAgICAgc2V0V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKFwiQ2lkYWRlIG7Do28gZW5jb250cmFkYS4gVGVudGUgbm92YW1lbnRlLlwiKTtcbiAgICAgIHNldFdlYXRoZXIobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi04XCI+TWFuY2hlc3RlciBXZWF0aGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHNtOnctMTEvMTIgbWQ6dy0yLzMgbGc6dy0xLzIgbXgtYXV0byBwLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtjaXR5IHx8IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNpdHlJbnB1dENoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgZGEgY2lkYWRlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC0zeGwgYm9yZGVyLWJsYWNrIHAtNCBwbC04IHctZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2NpdHlTdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciByb3VuZGVkIHAtMiBtdC0yIHctMS8zIG1heC1oLTQwIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICB7Y2l0eVN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCBwLTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZUNpdHlTZWxlY3Qoc3VnZ2VzdGlvbi5uYW1lLCBzdWdnZXN0aW9uLmNvdW50cnkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N1Z2dlc3Rpb24ubmFtZX0sIHtzdWdnZXN0aW9uLmNvdW50cnl9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbXQtMlwiPntlcnJvcn08L3A+fVxuXG4gICAgICB7d2VhdGhlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsXCI+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGVkV2VhdGhlcih3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbikuaWNvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbXQtNlwiPlxuICAgICAgICAgICAgICB7Z2V0VHJhbnNsYXRlZFdlYXRoZXIod2VhdGhlci53ZWF0aGVyWzBdLm1haW4pLnRleHR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtdC02XCI+e3dlYXRoZXIubWFpbi50ZW1wLnRvRml4ZWQoMCl9wrBDPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bFwiPlxuICAgICAgICAgICAge3NlbGVjdGVkQ2l0eS5uYW1lfXtcIiBcIn1cbiAgICAgICAgICAgIHtzZWxlY3RlZENpdHkuY291bnRyeSAmJiBgKCR7c2VsZWN0ZWRDaXR5LmNvdW50cnl9KWB9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNiBnYXAtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICA8QXJyb3dVcHdhcmRPdXRsaW5lZEljb24gLz4ge3dlYXRoZXIubWFpbi50ZW1wX21heC50b0ZpeGVkKDApfcKwQ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgIDxBcnJvd0Rvd253YXJkT3V0bGluZWRJY29uIC8+IHt3ZWF0aGVyLm1haW4udGVtcF9taW4udG9GaXhlZCgwKX3CsENcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZldGNoV2VhdGhlciIsImZldGNoQ2l0eVN1Z2dlc3Rpb25zIiwiSW1hZ2UiLCJBcnJvd1Vwd2FyZE91dGxpbmVkSWNvbiIsIkFycm93RG93bndhcmRPdXRsaW5lZEljb24iLCJTZWFyY2hJY29uIiwiV2JTdW5ueVR3b1RvbmVJY29uIiwiV2JDbG91ZHlUd29Ub25lSWNvbiIsIldhdGVyRHJvcFR3b1RvbmVJY29uIiwiVGh1bmRlcnN0b3JtVHdvVG9uZUljb24iLCJBY1VuaXRUd29Ub25lSWNvbiIsIkRlaGF6ZVR3b1RvbmVJY29uIiwiQXBwIiwiY2l0eSIsInNldENpdHkiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImVycm9yIiwic2V0RXJyb3IiLCJjaXR5U3VnZ2VzdGlvbnMiLCJzZXRDaXR5U3VnZ2VzdGlvbnMiLCJzZWxlY3RlZENpdHkiLCJzZXRTZWxlY3RlZENpdHkiLCJuYW1lIiwiY291bnRyeSIsImhhbmRsZUZldGNoQ2l0eVN1Z2dlc3Rpb25zIiwicXVlcnkiLCJzdWdnZXN0aW9ucyIsImhhbmRsZUZldGNoV2VhdGhlciIsIndlYXRoZXJEYXRhIiwiZXJyIiwid2VhdGhlclRyYW5zbGF0aW9ucyIsIkNsZWFyIiwidGV4dCIsImljb24iLCJmb250U2l6ZSIsInN0eWxlIiwiQ2xvdWRzIiwiUmFpbiIsIkRyaXp6bGUiLCJUaHVuZGVyc3Rvcm0iLCJTbm93IiwiTWlzdCIsIlNtb2tlIiwiSGF6ZSIsIkR1c3QiLCJGb2ciLCJTYW5kIiwiQXNoIiwiU3F1YWxsIiwiVG9ybmFkbyIsImdldFRyYW5zbGF0ZWRXZWF0aGVyIiwid2VhdGhlck1haW4iLCJoYW5kbGVDaXR5SW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2l0eVNlbGVjdCIsImNpdHlOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJzdWdnZXN0aW9uIiwiaW5kZXgiLCJsaSIsIm9uQ2xpY2siLCJwIiwibWFpbiIsInRlbXAiLCJ0b0ZpeGVkIiwiaDIiLCJ0ZW1wX21heCIsInRlbXBfbWluIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/pages/api/WeatherApp.js":
/*!*************************************!*\
  !*** ./src/pages/api/WeatherApp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCitySuggestions: () => (/* binding */ fetchCitySuggestions),\n/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)\n/* harmony export */ });\nconst fetchWeather = async (city)=>{\n    const apiKey = \"3b160403fab665468371376faad5d880\";\n    try {\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);\n        if (!response.ok) {\n            throw new Error(\"Cidade não encontrada\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Erro ao buscar os dados do clima:\", error);\n        throw error;\n    }\n};\nconst fetchCitySuggestions = async (query)=>{\n    const apiKey = \"3b160403fab665468371376faad5d880\";\n    try {\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}&limit=5`);\n        const data = await response.json();\n        if (data.cod === \"200\") {\n            const uniqueCities = data.list.map((city)=>({\n                    name: city.name,\n                    country: city.sys.country\n                }));\n            const filteredCities = Array.from(new Set(uniqueCities.map((city)=>`${city.name}, ${city.country}`))).map((cityString)=>{\n                const [name, country] = cityString.split(\", \");\n                return {\n                    name,\n                    country\n                };\n            });\n            return filteredCities;\n        } else {\n            return [];\n        }\n    } catch (error) {\n        console.error(\"Erro ao buscar cidades:\", error);\n        return [];\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL1dlYXRoZXJBcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxlQUFlLE9BQU9DO0lBQ2pDLE1BQU1DLFNBQVM7SUFDZixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsa0RBQWtELEVBQUVILEtBQUssT0FBTyxFQUFFQyxPQUFPLGFBQWEsQ0FBQztRQUNySCxJQUFJLENBQUNDLFNBQVNFLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxPQUFPLE1BQU1ILFNBQVNJLElBQUk7SUFDNUIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ25ELE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBR08sTUFBTUUsdUJBQXVCLE9BQU9DO0lBQ3pDLE1BQU1ULFNBQVM7SUFFZixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQixDQUFDLCtDQUErQyxFQUFFTyxNQUFNLE9BQU8sRUFBRVQsT0FBTyxRQUFRLENBQUM7UUFFbkYsTUFBTVUsT0FBTyxNQUFNVCxTQUFTSSxJQUFJO1FBQ2hDLElBQUlLLEtBQUtDLEdBQUcsS0FBSyxPQUFPO1lBQ3RCLE1BQU1DLGVBQWVGLEtBQUtHLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNmLE9BQVU7b0JBQzVDZ0IsTUFBTWhCLEtBQUtnQixJQUFJO29CQUNmQyxTQUFTakIsS0FBS2tCLEdBQUcsQ0FBQ0QsT0FBTztnQkFDM0I7WUFDQSxNQUFNRSxpQkFBaUJDLE1BQU1DLElBQUksQ0FDL0IsSUFBSUMsSUFBSVQsYUFBYUUsR0FBRyxDQUFDLENBQUNmLE9BQVMsR0FBR0EsS0FBS2dCLElBQUksQ0FBQyxFQUFFLEVBQUVoQixLQUFLaUIsT0FBTyxFQUFFLElBQ2xFRixHQUFHLENBQUMsQ0FBQ1E7Z0JBQ0wsTUFBTSxDQUFDUCxNQUFNQyxRQUFRLEdBQUdNLFdBQVdDLEtBQUssQ0FBQztnQkFDekMsT0FBTztvQkFBRVI7b0JBQU1DO2dCQUFRO1lBQ3pCO1lBQ0EsT0FBT0U7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFO1FBQ1g7SUFDRixFQUFFLE9BQU9aLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBTyxFQUFFO0lBQ1g7QUFDRixFQUFFIiwic291cmNlcyI6WyIvaG9tZS9tYXRoZXVzL3Byb2pldG9zL2Rlc2FmaW8tZGV2LWZyb250ZW5kL3NyYy9wYWdlcy9hcGkvV2VhdGhlckFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZmV0Y2hXZWF0aGVyID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc3QgYXBpS2V5ID0gXCIzYjE2MDQwM2ZhYjY2NTQ2ODM3MTM3NmZhYWQ1ZDg4MFwiO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9bWV0cmljYCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2lkYWRlIG7Do28gZW5jb250cmFkYVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBidXNjYXIgb3MgZGFkb3MgZG8gY2xpbWE6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuXG4gIGV4cG9ydCBjb25zdCBmZXRjaENpdHlTdWdnZXN0aW9ucyA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IGFwaUtleSA9IFwiM2IxNjA0MDNmYWI2NjU0NjgzNzEzNzZmYWFkNWQ4ODBcIjtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZmluZD9xPSR7cXVlcnl9JmFwcGlkPSR7YXBpS2V5fSZsaW1pdD01YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAoZGF0YS5jb2QgPT09IFwiMjAwXCIpIHtcbiAgICAgICAgY29uc3QgdW5pcXVlQ2l0aWVzID0gZGF0YS5saXN0Lm1hcCgoY2l0eSkgPT4gKHtcbiAgICAgICAgICBuYW1lOiBjaXR5Lm5hbWUsXG4gICAgICAgICAgY291bnRyeTogY2l0eS5zeXMuY291bnRyeSxcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZENpdGllcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgbmV3IFNldCh1bmlxdWVDaXRpZXMubWFwKChjaXR5KSA9PiBgJHtjaXR5Lm5hbWV9LCAke2NpdHkuY291bnRyeX1gKSlcbiAgICAgICAgKS5tYXAoKGNpdHlTdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBbbmFtZSwgY291bnRyeV0gPSBjaXR5U3RyaW5nLnNwbGl0KFwiLCBcIik7XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZSwgY291bnRyeSB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkQ2l0aWVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBidXNjYXIgY2lkYWRlczpcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcbiAgXG4gIFxuICAiXSwibmFtZXMiOlsiZmV0Y2hXZWF0aGVyIiwiY2l0eSIsImFwaUtleSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImZldGNoQ2l0eVN1Z2dlc3Rpb25zIiwicXVlcnkiLCJkYXRhIiwiY29kIiwidW5pcXVlQ2l0aWVzIiwibGlzdCIsIm1hcCIsIm5hbWUiLCJjb3VudHJ5Iiwic3lzIiwiZmlsdGVyZWRDaXRpZXMiLCJBcnJheSIsImZyb20iLCJTZXQiLCJjaXR5U3RyaW5nIiwic3BsaXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/WeatherApp.js\n");

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