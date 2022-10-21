"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
//import cors from 'cors';
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const members_1 = require("./routes/members");
const sessions_1 = require("./routes/sessions");
const events_1 = require("./routes/events");
/*import { adminRouter } from './routes/admins';*/
let bodyParser = require('body-parser');
const app = (0, express_1.default)();
app.use(express_1.default.json());
var jsonParser = bodyParser.json();
const allowedOrigins = ['http://localhost:8000'];
/*const options: cors.CorsOptions = {
    origin: allowedOrigins
};*/
//app.use(cors(options));
app.get("/", (req, res) => res.send("Hello World"));
app.get("/member", members_1.memberRouter);
app.get("/member/show/:id", members_1.memberRouter);
app.post("/member/add/:id", members_1.memberRouter);
app.post("/member/up/:id", members_1.memberRouter);
app.delete("/member/del/:id", members_1.memberRouter);
app.get("/session", sessions_1.sessionRouter);
app.get("/session/show/:id", sessions_1.sessionRouter);
app.post("/session/add/:id", jsonParser, sessions_1.sessionRouter);
app.post("/session/up/:id", sessions_1.sessionRouter);
app.delete("/session/del/:id", sessions_1.sessionRouter);
app.get("/event", events_1.eventRouter);
app.get("/event/show/:id", events_1.eventRouter);
app.post("/event/add/:id", jsonParser, events_1.eventRouter);
app.post("/event/up/:id", events_1.eventRouter);
app.delete("/event/del/:id", events_1.eventRouter);
/*
app.get("/admin", adminRouter);
app.get("/admin/show/:id", adminRouter);
app.post("/admin/add/:id", jsonParser, adminRouter);
app.post("/admin/up/:id", adminRouter);
app.delete("/admin/del/:id", adminRouter);

*/
app.listen(constants_1.PORT, () => {
    console.log(`Le serveur écoute sur le port : ${constants_1.PORT}`);
});
