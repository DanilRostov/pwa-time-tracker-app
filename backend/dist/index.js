"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _server = require("./config/server");

var _cors2 = _interopRequireDefault(require("./constants/cors"));

var _days = _interopRequireDefault(require("./routes/days"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)(_cors2.default));
app.use(_bodyParser.default.json());
app.use('/', _days.default);
app.use('/', _tasks.default);
app.listen(_server.PORT, () => console.log(`Server started on port ${_server.PORT}`));