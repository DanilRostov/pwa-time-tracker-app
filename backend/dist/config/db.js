"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB_OPTIONS = exports.DB_URI = void 0;
const DB_URI = 'mongodb://mongo:27017';
exports.DB_URI = DB_URI;
const DB_OPTIONS = {
  useNewUrlParser: true,
  autoReconnect: true
};
exports.DB_OPTIONS = DB_OPTIONS;