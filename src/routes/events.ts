import express, { Request, Response } from "express";
import { EventController } from "../controllers/EventController";

let bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const eventController = new EventController();
export const eventRouter = express.Router({
    strict: true
});

eventRouter.get("/event", (req: Request, res: Response) => eventController.read(req, res));
eventRouter.get("event/show/:id", (req: Request, res: Response) => eventController.show(req, res));
eventRouter.post("/event/add/:id", jsonParser, (req: Request, res: Response) => eventController.create(req, res));
eventRouter.post("/event/up/:id", (req: Request, res: Response) => eventController.update(req, res));
eventRouter.delete("/event/del/:id", (req: Request, res: Response) => eventController.delete(req, res));