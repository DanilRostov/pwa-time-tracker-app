"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _days = _interopRequireDefault(require("../../mocks/days"));

var _days2 = _interopRequireDefault(require("../utils/days"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/api/days', (req, res) => {
  const dateFrom = new Date(req.query.dateFrom);
  const dateTo = new Date(req.query.dateTo);
  const daysClass = new _days2.default(dateFrom, dateTo, _days.default);
  const daysList = daysClass.getDaysListByDate();
  res.status(200).send(daysList);
});
router.put('/api/days', (req, res) => {
  const day = req.body;
  res.status(200).send(day);
});
var _default = router;
exports.default = _default;