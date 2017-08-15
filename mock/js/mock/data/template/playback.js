"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Struct = require("../struct");
exports.material = {
    background: {
        id: "09b881a8-f4e5-4a61-b526-900bc5405ab7",
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
        id: "f46a0e86-7621-4d28-843d-553a9afb85fe",
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
                    path: "assets/button/qm_back/normal.png",
                },
                hover: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 100,
                    x: 0,
                    y: 0,
                    path: "assets/button/qm_back/hover.png",
                },
                text: {
                    x: 0,
                    y: 0,
                    w: 620,
                    h: 100,
                    type: Struct.Metainfo.Type.TEXT,
                    text: "返回游戏",
                },
            },
        },
    },
    playback: {
        id: "37f0e7cb-64b3-4243-a4cb-899c85e75461",
        type: Struct.Material.Type.PLAYBACK,
        metainfo: {
            type: Struct.Metainfo.Type.TEXTBOX,
            w: 672,
            h: 980,
            x: 0,
            y: 0,
            subInfos: {
                background: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 672,
                    h: 780,
                    x: 0,
                    y: 100,
                    path: "assets/textbox/dialogtext/background.png",
                },
                text: {
                    x: 34,
                    y: 100,
                    w: 652,
                    h: 260,
                    type: Struct.Metainfo.Type.TEXT,
                    text: "textbox",
                },
            },
        },
    },
};
exports.materials = [];
exports.materials.push(exports.material.background);
exports.materials.push(exports.material.button1);
exports.materials.push(exports.material.playback);
// 场景
let scene1 = {
    id: 1,
    type: Struct.Scene.Type.SKETCH,
    elements: [
        {
            id: 51,
            alias: "返回游戏",
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
            materialId: exports.material.button1.id,
            interaction: {
                id: Struct.Interaction.Id.GO_BACK,
            }
        },
        {
            id: 52,
            alias: "剧情回放框",
            type: Struct.Element.Type.PLAYBACK,
            x: 24,
            y: 82,
            z: 2,
            w: 672,
            h: 980,
            angle: 0,
            opacity: 100,
            horizontal: false,
            vertical: false,
            materialId: exports.material.playback.id,
            interaction: {
                id: Struct.Interaction.Id.SHOW_PLAYBACK,
            },
            font: {
                family: 'font',
                size: 28,
                color: '#ffffff',
            },
        },
        {
            id: 53,
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
            materialId: exports.material.background.id,
        },
    ],
};
exports.template = {
    id: 1,
    type: Struct.Template.Type.PLAYBACK,
    scenes: [
        scene1
    ],
};
