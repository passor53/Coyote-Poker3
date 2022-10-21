"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBPASSWORD = exports.DBUSER = exports.DBNAME = exports.PORT = void 0;
exports.PORT = process.env.PORT || 8000;
exports.DBNAME = process.env.DBNAME || "";
exports.DBUSER = process.env.DBUSER || "root";
exports.DBPASSWORD = process.env.DBPASSWORD || "";
