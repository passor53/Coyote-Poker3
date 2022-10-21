"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = void 0;
const express_1 = __importDefault(require("express"));
const EventController_1 = require("../controllers/EventController");
let bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const eventController = new EventController_1.EventController();
exports.eventRouter = express_1.default.Router({
    strict: true
});
exports.eventRouter.get("/event", (req, res) => eventController.read(req, res));
exports.eventRouter.get("event/show/:id", (req, res) => eventController.show(req, res));
exports.eventRouter.post("/event/add/:id", jsonParser, (req, res) => eventController.create(req, res));
exports.eventRouter.post("/event/up/:id", (req, res) => eventController.update(req, res));
exports.eventRouter.delete("/event/del/:id", (req, res) => eventController.delete(req, res));
