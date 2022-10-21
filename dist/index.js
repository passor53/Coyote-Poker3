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
import { categorieRouter } from './routes/categories';
import { clientRouter } from './routes/clients';*/
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
/*app.get("/client", clientRouter);
app.get("/client/show/:id", clientRouter);
app.post("/client/add/:id", clientRouter);
app.post("/client/up/:id", clientRouter);
app.delete("/client/del/:id", clientRouter);

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
