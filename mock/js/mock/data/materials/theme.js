"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Template = require("../template/");
exports.materials = [];
exports.materials = _.concat(exports.materials, Template.Title.materials, Template.Menu.materials, Template.Playback.materials, Template.Saved.materials, Template.Setting.materials, Template.Scene.materials);
