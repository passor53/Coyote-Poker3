"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const CrudController_1 = require("./CrudController");
const events_1 = require("../models/events");
const database_1 = require("../config/database");
class EventController extends CrudController_1.CrudController {
    read(req, res) {
        events_1.Event.findAll().then(event => res.json(event));
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
        events_1.Event.findOne({ 'where': { event_id: req.params.id } }).then(event => res.json(event));
    }
    create(req, res) {
        events_1.Event.create(req.body).then(event => res.json(event));
    }
    update(req, res) {
        events_1.Event.update(req.body, { 'where': { event_id: req.params.id } }).then(event => res.json(event));
    }
    delete(req, res) {
        events_1.Event.destroy({ 'where': { event_id: req.params.id } });
    }
}
exports.EventController = EventController;
