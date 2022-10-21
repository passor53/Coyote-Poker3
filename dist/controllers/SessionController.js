"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const CrudController_1 = require("./CrudController");
const sessions_1 = require("../models/sessions");
const database_1 = require("../config/database");
class SessionController extends CrudController_1.CrudController {
    read(req, res) {
        sessions_1.Session.findAll().then(session => res.json(session));
        database_1.sequelize
            .authenticate()
            .then(() => {
            console.log("La connection c'est établie avec succès.");
        })
            .catch((err) => {
            console.error("Impossible de se connecter à la base de données.", err);
        });
        res.json({ message: 'boum boum !' });
    }
    show(req, res) {
        sessions_1.Session.findOne({ 'where': { session_id: req.params.id } }).then(session => res.json(session));
    }
    create(req, res) {
        sessions_1.Session.create(req.body).then(session => res.json(session));
    }
    update(req, res) {
        sessions_1.Session.update(req.body, { 'where': { session_id: req.params.id } }).then(session => res.json(session));
    }
    delete(req, res) {
        sessions_1.Session.destroy({ 'where': { session_id: req.params.id } });
    }
}
exports.SessionController = SessionController;
