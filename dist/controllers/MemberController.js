"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const CrudController_1 = require("./CrudController");
const members_1 = require("../models/members");
//import { sequelize } from "../config/database";
class MemberController extends CrudController_1.CrudController {
    read(req, res) {
        members_1.Member.findAll().then(members => res.json(members));
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
    show(req, res) {
        members_1.Member.findOne({ 'where': { id_members: req.params.id } }).then(members => res.json(members));
    }
    create(req, res) {
        members_1.Member.create(req.body).then(members => res.json(members));
    }
    update(req, res) {
        members_1.Member.update(req.body, { 'where': { id_members: req.params.id } }).then(members => res.json(members));
    }
    delete(req, res) {
        members_1.Member.destroy({ 'where': { id_members: req.params.id } });
    }
}
exports.MemberController = MemberController;
