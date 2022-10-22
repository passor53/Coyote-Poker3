"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const CrudController_1 = require("./CrudController");
const events_1 = require("../models/events");
//import { sequelize } from "../config/database";
class EventController extends CrudController_1.CrudController {
    read(req, res) {
        events_1.Event.findAll().then(events => res.json(events));
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
    show(req, res) {
        events_1.Event.findOne({ 'where': { id_events: req.params.id } }).then(events => res.json(events));
    }
    create(req, res) {
        events_1.Event.create(req.body).then(events => res.json(events));
    }
    update(req, res) {
        events_1.Event.update(req.body, { 'where': { id_events: req.params.id } }).then(events => res.json(events));
    }
    delete(req, res) {
        events_1.Event.destroy({ 'where': { id_events: req.params.id } });
    }
}
exports.EventController = EventController;
