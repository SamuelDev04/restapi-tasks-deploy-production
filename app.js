"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("config"));
var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// settings
app.set("PORT", _config["default"].get("server.port"));

// middlewares
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));

// routes
app.get("/", function (req, res) {
  res.send({
    message: "Welcome to my application"
  });
});
app.use("/api/tasks", _tasks["default"]);
var _default = app;
exports["default"] = _default;