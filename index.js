"use strict";

var _app = _interopRequireDefault(require("./app"));
var _index = _interopRequireDefault(require("./config/index.js"));
require("./config/database/mongo.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(_app["default"].get("PORT"), _index["default"]);