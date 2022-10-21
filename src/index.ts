require('dotenv').config();

//import cors from 'cors';
import express from 'express';
import { PORT } from "./config/constants";
/*import { adminRouter } from './routes/admins';
import { articleRouter } from './routes/articles';
import { categorieRouter } from './routes/categories';
import { clientRouter } from './routes/clients';*/

let bodyParser = require('body-parser');

const app = express();
app.use(express.json());

var jsonParser = bodyParser.json()
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
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port : ${PORT}`);
});