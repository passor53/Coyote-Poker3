"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const CrudController_1 = require("./CrudController");
const sessions_1 = require("../models/sessions");
//import { sequelize } from "../config/database";
class SessionController extends CrudController_1.CrudController {
    read(req, res) {
        sessions_1.Session.findAll().then(sessions => res.json(sessions));
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
        sessions_1.Session.findOne({ 'where': { id_sessions: req.params.id } }).then(sessions => res.json(sessions));
    }
    create(req, res) {
        sessions_1.Session.create(req.body).then(sessions => res.json(sessions));
    }
    update(req, res) {
        sessions_1.Session.update(req.body, { 'where': { id_sessions: req.params.id } }).then(sessions => res.json(sessions));
    }
    delete(req, res) {
        sessions_1.Session.destroy({ 'where': { id_sessions: req.params.id } });
    }
}
exports.SessionController = SessionController;
