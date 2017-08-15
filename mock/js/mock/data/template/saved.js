"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Struct = require("../struct");
exports.material = {
    background: {
        id: "ccbb0c49-df68-4e3d-96aa-f02b2ed7677c",
        type: Struct.Material.Type.BACKGROUND,
        metainfo: {
            type: Struct.Metainfo.Type.IMAGE,
            w: 720,
            h: 1280,
            x: 0,
            y: 0,
            path: "assets/image/background_save.png",
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
    saved: {
        id: "16d11e2e-dfea-4905-bd75-e496bde342bd",
        type: Struct.Material.Type.SAVED,
        metainfo: {
            type: Struct.Metainfo.Type.SAVED,
            w: 620,
            h: 220,
            x: 0,
            y: 0,
            subInfos: {
                thumbnail: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 114,
                    h: 206,
                    x: 40,
                    y: 7,
                    path: "assets/save/save/saved_thumbnail.png",
                },
                backgroundNormal: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 220,
                    x: 0,
                    y: 0,
                    path: "assets/save/save/background_normal.png",
                },
                backgroundHover: {
                    type: Struct.Metainfo.Type.IMAGE,
                    w: 620,
                    h: 220,
                    x: 0,
                    y: 0,
                    path: "assets/save/save/background_hover.png",
                },
                sectionName: {
                    x: 210,
                    y: 44,
                    w: 370,
                    h: 54,
                    type: Struct.Metainfo.Type.TEXT,
                    text: "小节名",
                },
                date: {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    type: Struct.Metainfo.Type.TEXT,
                    text: "日期",
                },
            },
        },
    }
};
exports.materials = [];
exports.materials.push(exports.material.background);
exports.materials.push(exports.material.button1);
exports.materials.push(exports.material.saved);
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
            alias: "存档",
            type: Struct.Element.Type.SAVED,
            x: 50,
            y: 60,
            z: 2,
            w: 620,
            h: 892,
            angle: 0,
            opacity: 100,
            horizontal: false,
            vertical: false,
            materialId: exports.material.saved.id,
            total: 4,
            margin: 4,
            font: {
                family: 'font',
                size: 3,
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
    type: Struct.Template.Type.SAVED,
    scenes: [
        scene1
    ],
};
