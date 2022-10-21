"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRouter = void 0;
const express_1 = __importDefault(require("express"));
const SessionController_1 = require("../controllers/SessionController");
let bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const sessionController = new SessionController_1.SessionController();
exports.sessionRouter = express_1.default.Router({
    strict: true
});
exports.sessionRouter.get("/session", (req, res) => sessionController.read(req, res));
exports.sessionRouter.get("/session/show/:id", (req, res) => sessionController.show(req, res));
exports.sessionRouter.post("/session/add/:id", jsonParser, (req, res) => sessionController.create(req, res));
exports.sessionRouter.post("/session/up/:id", (req, res) => sessionController.update(req, res));
exports.sessionRouter.delete("/session/del/:id", (req, res) => sessionController.delete(req, res));
