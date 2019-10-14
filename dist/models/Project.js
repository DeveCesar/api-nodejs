"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _task = _interopRequireDefault(require("./task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = _database.sequelize.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  prioridad: {
    type: _sequelize["default"].INTEGER
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  fecha: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Project.hasMany(_task["default"], {
  foreingKey: 'projectid',
  sourceKey: 'id'
});

_task["default"].belongsTo(Project, {
  foreingKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;