import { Request, Response } from "express";
import { CrudController } from "./CrudController";
import { Member } from "../models/members";
//import { sequelize } from "../config/database";

export class MemberController extends CrudController {

    public read(req: Request, res: Response): void {
        Member.findAll().then(member => res.json(member));
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
        Member.findOne({ 'where': { member_id: req.params.id } }).then(member => res.json(member));
    }
    public create(req: Request, res: Response): void {
        Member.create(req.body).then(member => res.json(member));
    }
    public update(req: Request, res: Response): void {
        Member.update(req.body, { 'where': { member_id: req.params.id } }).then(member => res.json(member));
    }
    public delete(req: Request, res: Response): void {
        Member.destroy({ 'where': { member_id: req.params.id } });
    }
}