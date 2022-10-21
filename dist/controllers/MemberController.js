"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const CrudController_1 = require("./CrudController");
const members_1 = require("../models/members");
const database_1 = require("../config/database");
class MemberController extends CrudController_1.CrudController {
    read(req, res) {
        members_1.Member.findAll().then(member => res.json(member));
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
        members_1.Member.findOne({ 'where': { member_id: req.params.id } }).then(member => res.json(member));
    }
    create(req, res) {
        members_1.Member.create(req.body).then(member => res.json(member));
    }
    update(req, res) {
        members_1.Member.update(req.body, { 'where': { member_id: req.params.id } }).then(member => res.json(member));
    }
    delete(req, res) {
        members_1.Member.destroy({ 'where': { member_id: req.params.id } });
    }
}
exports.MemberController = MemberController;
