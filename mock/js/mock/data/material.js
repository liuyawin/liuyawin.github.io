"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Materials = require("./materials/");
exports.materials = [];
exports.materials = _.concat(exports.materials, Materials.Theme.materials, Materials.Story.materials);
