"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
//import cors from 'cors';
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
/*import { adminRouter } from './routes/admins';
import { articleRouter } from './routes/articles';
import { categorieRouter } from './routes/categories';*/
const members_1 = require("./routes/members");
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
/*
app.get("/article", articleRouter);
app.get("/article/show/:id", articleRouter);
app.post("/article/add/:id", jsonParser, articleRouter);
app.post("/article/up/:id", articleRouter);
app.delete("/article/del/:id", articleRouter);

app.get("/admin", adminRouter);
app.get("/admin/show/:id", adminRouter);
app.post("/admin/add/:id", jsonParser, adminRouter);
app.post("/admin/up/:id", adminRouter);
app.delete("/admin/del/:id", adminRouter);

app.get("/categorie", categorieRouter);
app.get("/categorie/show/:id", categorieRouter);
app.post("/categorie/add/:id", jsonParser, categorieRouter);
app.post("/categorie/up/:id", categorieRouter);
app.delete("/categorie/del/:id", categorieRouter);
*/
app.listen(constants_1.PORT, () => {
    console.log(`Le serveur écoute sur le port : ${constants_1.PORT}`);
});
