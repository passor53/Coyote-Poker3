import { Request, Response } from "express";
import { CrudController } from "./CrudController";
import { Event } from "../models/events";
import { sequelize } from "../config/database";

export class EventController extends CrudController {

    public read(req: Request, res: Response): void {
        Event.findAll().then(event => res.json(event));
        sequelize
            .authenticate()
            .then(() => {
                console.log("La connection c'est établie avec succès.");
            })
            .catch((err: any) => {
                console.error("Impossible de se connecter à la base de données.", err);
            });
        res.json({ message: 'boum boum !' });
    }
    public show(req: Request, res: Response): void {
        Event.findOne({ 'where': { event_id: req.params.id } }).then(event => res.json(event));
    }
    public create(req: Request, res: Response): void {
        Event.create(req.body).then(event => res.json(event));
    }
    public update(req: Request, res: Response): void {
        Event.update(req.body, { 'where': { event_id: req.params.id } }).then(event => res.json(event));
    }
    public delete(req: Request, res: Response): void {
        Event.destroy({ 'where': { event_id: req.params.id } });
    }
}