import { Request, Response } from "express";
import { CrudController } from "./CrudController";
import { Event } from "../models/events";
//import { sequelize } from "../config/database";

export class EventController extends CrudController {

    public read(req: Request, res: Response): void {
        Event.findAll().then(events => res.json(events));
        /*sequelize
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
        Event.findOne({ 'where': { id_events: req.params.id } }).then(events => res.json(events));
    }
    public create(req: Request, res: Response): void {
        Event.create(req.body).then(events => res.json(events));
    }
    public update(req: Request, res: Response): void {
        Event.update(req.body, { 'where': { id_events: req.params.id } }).then(events => res.json(events));
    }
    public delete(req: Request, res: Response): void {
        Event.destroy({ 'where': { id_events: req.params.id } });
    }
}