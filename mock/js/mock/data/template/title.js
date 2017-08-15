"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Struct = require("../struct");
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
    button1: {
        id: "07c1bdb1-2f9a-47d6-a90c-cc50dbb4dd0f",
        type: Struct.Material.Type.BUTTON,
        metainfo: {
            type: Struct.Metainfo.Type.BUTTON,
            w: 620,
            h: 100,
            x: 0,
            y: 0,
            subInfos: {
                normal: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 100,
                    x: 0,
                    y: 0,
                    path: 'assets/button/settingsgame/normal.png',
                },
                hover: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 100,
                    x: 0,
                    y: 0,
                    path: 'assets/button/settingsgame/hover.png',
                },
                text: {
                    type: Struct.Metainfo.Type.TEXT,
                    x: 0,
                    y: 0,
                    w: 620,
                    h: 100,
                    text: "模版按钮",
                },
            },
        },
    },
    button2: {
        id: "e8069000-f725-4631-824c-29505d1da59e",
        type: Struct.Material.Type.BUTTON,
        metainfo: {
            type: Struct.Metainfo.Type.BUTTON,
            w: 620,
            h: 100,
            x: 0,
            y: 0,
            subInfos: {
                normal: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 100,
                    x: 0,
                    y: 0,
                    path: 'assets/button/continuegame/normal.png',
                },
                hover: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 100,
                    x: 0,
                    y: 0,
                    path: 'assets/button/continuegame/hover.png',
                },
                text: {
                    x: 0,
                    y: 0,
                    w: 620,
                    h: 100,
                    type: Struct.Metainfo.Type.TEXT,
                    text: "模版按钮",
                },
            },
        },
    },
    button3: {
        id: "de7425c4-203e-4e74-926d-f2ebc2b2e073",
        type: Struct.Material.Type.BUTTON,
        metainfo: {
            type: Struct.Metainfo.Type.BUTTON,
            w: 620,
            h: 100,
            x: 0,
            y: 0,
            subInfos: {
                normal: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 100,
                    x: 0,
                    y: 0,
                    path: 'assets/button/startgame/normal.png',
                },
                hover: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 100,
                    x: 0,
                    y: 0,
                    path: 'assets/button/startgame/hover.png',
                },
                text: {
                    x: 0,
                    y: 0,
                    w: 620,
                    h: 100,
                    type: Struct.Metainfo.Type.TEXT,
                    text: "模版按钮",
                },
            },
        },
    }
};
exports.materials = [];
exports.materials.push(material.background);
exports.materials.push(material.button1);
exports.materials.push(material.button2);
exports.materials.push(material.button3);
// 场景
let scene1 = {
    id: 1,
    type: Struct.Scene.Type.SKETCH,
    elements: [
        {
            id: 37,
            alias: "游戏设置",
            type: Struct.Element.Type.BUTTON,
            x: 50,
            y: 1120,
            z: 3,
            w: 620,
            h: 100,
            angle: 0,
            opacity: 100,
            horizontal: false,
            vertical: false,
            materialId: material.button1.id,
            interaction: {
                id: Struct.Interaction.Id.POPUP_SETTING_MENU,
            },
        },
        {
            id: 38,
            alias: "继续游戏",
            type: Struct.Element.Type.BUTTON,
            x: 50,
            y: 980,
            z: 2,
            w: 620,
            h: 100,
            angle: 0,
            opacity: 100,
            horizontal: false,
            vertical: false,
            materialId: material.button2.id,
            interaction: {
                id: Struct.Interaction.Id.POPUP_LOAD_GAME,
            },
        },
        {
            id: 39,
            alias: "开始游戏",
            type: Struct.Element.Type.BUTTON,
            x: 50,
            y: 840,
            z: 1,
            w: 620,
            h: 100,
            angle: 0,
            opacity: 100,
            horizontal: false,
            vertical: false,
            materialId: material.button3.id,
            interaction: {
                id: Struct.Interaction.Id.START_GAME,
            },
        },
        {
            id: 40,
            alias: "背景1",
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
    ],
};
exports.template = {
    id: 1,
    type: Struct.Template.Type.TITLE,
    scenes: [
        scene1
    ],
};
