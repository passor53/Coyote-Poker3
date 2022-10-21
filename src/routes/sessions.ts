import express, { Request, Response } from "express";
import { SessionController } from "../controllers/SessionController";

let bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const sessionController = new SessionController();
export const sessionRouter = express.Router({
    strict: true
});

sessionRouter.get("/session", (req: Request, res: Response) => sessionController.read(req, res));
sessionRouter.get("/session/show/:id", (req: Request, res: Response) => sessionController.show(req, res));
sessionRouter.post("/session/add/:id", jsonParser, (req: Request, res: Response) => sessionController.create(req, res));
sessionRouter.post("/session/up/:id", (req: Request, res: Response) => sessionController.update(req, res));
sessionRouter.delete("/session/del/:id", (req: Request, res: Response) => sessionController.delete(req, res));