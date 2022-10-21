"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRouter = void 0;
const express_1 = __importDefault(require("express"));
const MemberController_1 = require("../controllers/MemberController");
let bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const memberController = new MemberController_1.MemberController();
exports.memberRouter = express_1.default.Router({
    strict: true
});
exports.memberRouter.get("/member", (req, res) => memberController.read(req, res));
exports.memberRouter.get("/member/show/:id", (req, res) => memberController.show(req, res));
exports.memberRouter.post("/member/add/:id", jsonParser, (req, res) => memberController.create(req, res));
exports.memberRouter.post("/member/up/:id", (req, res) => memberController.update(req, res));
exports.memberRouter.delete("/member/del/:id", (req, res) => memberController.delete(req, res));
