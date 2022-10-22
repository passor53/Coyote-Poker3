require('dotenv').config();

import cors from 'cors';
import express from 'express';
import { PORT } from "./config/constants";
import { memberRouter } from './routes/members';
import { sessionRouter } from './routes/sessions';
import { eventRouter } from './routes/events';
import { generateToken } from './authenticate/jwt';
/*import { adminRouter } from './routes/admins';*/

let bodyParser = require('body-parser');

const app = express();
app.use(express.json());

var jsonParser = bodyParser.json()
const allowedOrigins = ['http://localhost:8000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));

app.get("/", (req, res) => res.send("Hello World"));

app.get("/member", memberRouter);
app.get("/member/show/:id", memberRouter);
app.post("/member/add/:id", memberRouter);
app.post("/member/up/:id", memberRouter);
app.delete("/member/del/:id", memberRouter);

app.get("/session", sessionRouter);
app.get("/session/show/:id", sessionRouter);
app.post("/session/add/:id", jsonParser, sessionRouter);
app.post("/session/up/:id", sessionRouter);
app.delete("/session/del/:id", sessionRouter);

app.get("/event", eventRouter);
app.get("/event/show/:id", eventRouter);
app.post("/event/add/:id", jsonParser, eventRouter);
app.post("/event/up/:id", eventRouter);
app.delete("/event/del/:id", eventRouter);
/*
app.get("/admin", adminRouter);
app.get("/admin/show/:id", adminRouter);
app.post("/admin/add/:id", jsonParser, adminRouter);
app.post("/admin/up/:id", adminRouter);
app.delete("/admin/del/:id", adminRouter);

*/
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port : ${PORT}`);
});

//console.log('Le token JWT :', generateToken());