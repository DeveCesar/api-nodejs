"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _project = require("../controllers/project.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _project.getProject);
router.get('/:id', _project.getOneProject);
router.post('/', _project.createProject);
router["delete"]('/:id', _project.deleteProject);
router.put('/:id', _project.updateProject);
var _default = router;
exports["default"] = _default;