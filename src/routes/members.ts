import express, { Request, Response } from "express";
import { MemberController } from "../controllers/MemberController";

let bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const memberController = new MemberController();
export const memberRouter = express.Router({
    strict: true
});

memberRouter.get("/member", (req: Request, res: Response) => memberController.read(req, res));
memberRouter.get("/member/show/:id", (req: Request, res: Response) => memberController.show(req, res));
memberRouter.post("/member/add/:id", jsonParser, (req: Request, res: Response) => memberController.create(req, res));
memberRouter.post("/member/up/:id", (req: Request, res: Response) => memberController.update(req, res));
memberRouter.delete("/member/del/:id", (req: Request, res: Response) => memberController.delete(req, res));