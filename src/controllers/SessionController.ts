import { Request, Response } from "express";
import { CrudController } from "./CrudController";
import { Session } from "../models/sessions";
//import { sequelize } from "../config/database";

export class SessionController extends CrudController {

    public read(req: Request, res: Response): void {
        Session.findAll().then(session => res.json(session));
        /* sequelize
             .authenticate()
             .then(() => {
                 console.log("La connection c'est établie avec succès.");
             })
             .catch((err: any) => {
                 console.error("Impossible de se connecter à la base de données.", err);
             });
         res.json({ message: 'boum boum !' });*/
    }
    public show(req: Request, res: Response): void {
        Session.findOne({ 'where': { session_id: req.params.id } }).then(session => res.json(session));
    }
    public create(req: Request, res: Response): void {
        Session.create(req.body).then(session => res.json(session));
    }
    public update(req: Request, res: Response): void {
        Session.update(req.body, { 'where': { session_id: req.params.id } }).then(session => res.json(session));
    }
    public delete(req: Request, res: Response): void {
        Session.destroy({ 'where': { session_id: req.params.id } });
    }
}