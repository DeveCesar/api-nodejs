"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _taks = require("../controllers/taks.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/', _taks.createTask);
router.get('/', _taks.getTask);
/* Eliminar una tarea por ID*/

router["delete"]('/:id', _taks.deleteTask);
/* Actualizar una tarea por ID*/

router.put('/:id', _taks.updateTask);
/* Obtener una tarea por ID*/

router.get('/:id', _taks.getOneTask);
router.get('/projects/:projectid', _taks.getTaskByProject);
var _default = router;
exports["default"] = _default;