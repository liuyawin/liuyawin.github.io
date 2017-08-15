"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Struct = require("../../struct");
const Template = require("../../template");
let material = {
    background: {
        id: "7afea2c8-a328-4cfd-9938-dabb88840723",
        type: Struct.Material.Type.BACKGROUND,
        metainfo: {
            type: Struct.Metainfo.Type.IMAGE,
            w: 720,
            h: 1280,
            x: 0,
            y: 0,
            path: "assets/image/background_heading.png",
        },
    },
};
exports.materials = [];
exports.materialIds = [
    material.background.id
];
exports.materials.push(material.background);
let name = _.clone(Template.Scene.name);
name.text = 'condition';
let dialogue = _.clone(Template.Scene.dialogue);
dialogue.text = 'condition true';
exports.create = () => ({
    id: -1,
    type: Struct.Scene.Type.NORMAL,
    elements: [
        {
            id: 40,
            alias: "背景",
            type: Struct.Element.Type.BACKGROUND,
            x: 0,
            y: 0,
            z: 0,
            w: 720,
            h: 1280,
            angle: 0,
            opacity: 100,
            horizontal: false,
            vertical: false,
            materialId: material.background.id,
        },
        name,
        dialogue,
        Template.Scene.button,
    ],
    next: -1,
    thumbnail: 'assets/thumbnail/scene.png',
});
