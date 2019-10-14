"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTask = getTask;
exports.getOneTask = getOneTask;
exports.createTask = createTask;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;
exports.getTaskByProject = getTaskByProject;

var _Task = _interopRequireDefault(require("../models/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTask(_x, _x2) {
  return _getTask.apply(this, arguments);
}

function _getTask() {
  _getTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var taks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Task["default"].findAll({
              attributes: ['id', 'nombre', 'realizado', 'projectid'],
              order: [['id', 'DESC']]
            });

          case 3:
            taks = _context.sent;
            res.json({
              taks: taks
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              message: "Hubo un error al obtener la informacion...",
              data: {}
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getTask.apply(this, arguments);
}

function getOneTask(_x3, _x4) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _Task["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            task = _context2.sent;
            res.json({
              data: task
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              message: "Hubo un error al intentar obtener tu tarea",
              data: {}
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneTask.apply(this, arguments);
}

function createTask(_x5, _x6) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, realizado, projectid, newTask;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, realizado = _req$body.realizado, projectid = _req$body.projectid;
            _context3.prev = 1;
            _context3.next = 4;
            return _Task["default"].create({
              nombre: nombre,
              realizado: realizado,
              projectid: projectid
            }, {
              fields: ['nombre', 'realizado', 'projectid']
            });

          case 4:
            newTask = _context3.sent;
            res.json({
              message: "Nueva tarea agregada",
              data: newTask
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(500).json({
              message: "Hubo un error al crear tu tarea.. Lo estamos solucionando",
              data: {}
            }));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _createTask.apply(this, arguments);
}

function deleteTask(_x7, _x8) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Task["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            res.json({
              message: "Tarea eliminada satisfactoriamente"
            });
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(500).json({
              message: "Hubo un error al intentar eliminar tu tarea",
              data: {}
            }));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _deleteTask.apply(this, arguments);
}

function updateTask(_x9, _x10) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, realizado, projectid, task, _updateTask2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, realizado = _req$body2.realizado, projectid = _req$body2.projectid;
            _context5.next = 5;
            return _Task["default"].findOne({
              attributes: ['id', 'nombre', 'realizado', 'projectid'],
              where: {
                id: id
              }
            });

          case 5:
            task = _context5.sent;
            _context5.next = 8;
            return _Task["default"].update({
              nombre: nombre,
              realizado: realizado,
              projectid: projectid
            }, {
              where: {
                id: id
              }
            });

          case 8:
            _updateTask2 = _context5.sent;
            res.json({
              message: 'Tarea actualizada satisfactoriamente',
              updateTask: _updateTask2
            });
            _context5.next = 16;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.log(e);
            return _context5.abrupt("return", res.status(500).json({
              message: "Hubo un error al intentar actualizar tu proyecto",
              data: {}
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return _updateTask.apply(this, arguments);
}

function getTaskByProject(_x11, _x12) {
  return _getTaskByProject.apply(this, arguments);
}

function _getTaskByProject() {
  _getTaskByProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var projectid, task;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectid = req.params.projectid;
            _context6.next = 3;
            return _Task["default"].findAll({
              attributes: ['id', 'projectid', 'realizado', 'nombre'],
              where: {
                projectid: projectid
              }
            });

          case 3:
            task = _context6.sent;
            res.json({
              task: task
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getTaskByProject.apply(this, arguments);
}