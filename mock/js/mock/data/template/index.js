"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Title = require("./title");
exports.Title = Title;
const Menu = require("./menu");
exports.Menu = Menu;
const Playback = require("./playback");
exports.Playback = Playback;
const Saved = require("./saved");
exports.Saved = Saved;
const Setting = require("./setting");
exports.Setting = Setting;
const Scene = require("./scene");
exports.Scene = Scene;
exports.templates = [
    Title.template,
    Menu.template,
    Saved.template,
    Setting.template,
    Playback.template,
    Scene.template,
];
