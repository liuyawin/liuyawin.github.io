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
name.text = '';
let dialogue = _.clone(Template.Scene.dialogue);
dialogue.text = '这是一个新的姓名框';
exports.create = () => ({
    id: -1,
    type: Struct.Scene.Type.NORMAL,
    elements: [
        {
            id: 1,
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
        {
            id: 2,
            alias: "选项",
            type: Struct.Element.Type.OPTION,
            x: 50,
            y: 50,
            z: 1,
            w: 620,
            h: 100,
            angle: 0,
            opacity: 100,
            horizontal: false,
            vertical: false,
            materialId: Template.Scene.material.option.id,
            text: 'second',
        },
        {
            id: 3,
            alias: "选项",
            type: Struct.Element.Type.OPTION,
            x: 50,
            y: 200,
            z: 2,
            w: 620,
            h: 100,
            angle: 0,
            opacity: 100,
            horizontal: false,
            vertical: false,
            materialId: Template.Scene.material.option.id,
            text: 'third',
        },
        name,
        dialogue,
        Template.Scene.button,
    ],
    options: [
        {
            id: 1,
            next: -1,
            elementId: 2,
        },
        {
            id: 2,
            next: -1,
            elementId: 3,
        }
    ],
    next: -1,
    thumbnail: 'assets/thumbnail/scene.png',
});
