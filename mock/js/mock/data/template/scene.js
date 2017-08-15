"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Struct = require("../struct");
let loaded = false;
exports.materials = [];
if (!loaded) {
    loaded = true;
    exports.material = {
        name: {
            id: "3c311a35-aa6a-4447-b105-fe9c4e95fdb6",
            type: Struct.Material.Type.NAME,
            metainfo: {
                type: Struct.Metainfo.Type.TEXTBOX,
                w: 620,
                h: 86,
                x: 0,
                y: 0,
                subInfos: {
                    background: {
                        type: Struct.Metainfo.Type.IMAGE,
                        w: 720,
                        h: 86,
                        x: 0,
                        y: 0,
                        path: 'assets/textbox/dialogname/namebg.png',
                    },
                    text: {
                        type: Struct.Metainfo.Type.TEXT,
                        x: 34,
                        y: 25,
                        w: 652,
                        h: 50,
                        text: "姓名框",
                    },
                },
            },
        },
        dialogue: {
            id: "37f0e7cb-64b3-4243-a4cb-899c85e75467",
            type: Struct.Material.Type.DIALOGUE,
            metainfo: {
                type: Struct.Metainfo.Type.TEXTBOX,
                w: 720,
                h: 274,
                x: 0,
                y: 0,
                subInfos: {
                    background: {
                        type: Struct.Metainfo.Type.IMAGE,
                        w: 720,
                        h: 274,
                        x: 0,
                        y: 0,
                        path: 'assets/textbox/dialogtext/dialogbg.png',
                    },
                    text: {
                        x: 34,
                        y: 0,
                        w: 652,
                        h: 274,
                        type: Struct.Metainfo.Type.TEXT,
                        text: "对话框",
                    },
                },
            },
        },
        button: {
            id: "a2109d0d-5dfb-4f6a-be61-a5d9162feb97",
            type: Struct.Material.Type.BUTTON,
            metainfo: {
                type: Struct.Metainfo.Type.BUTTON,
                w: 90,
                h: 100,
                x: 0,
                y: 0,
                subInfos: {
                    normal: {
                        type: Struct.Metainfo.Type.IMAGE,
                        w: 90,
                        h: 100,
                        x: 0,
                        y: 0,
                        path: 'assets/button/qm/normal.png',
                    },
                    hover: {
                        type: Struct.Metainfo.Type.IMAGE,
                        w: 90,
                        h: 100,
                        x: 0,
                        y: 0,
                        path: 'assets/button/qm/hover.png',
                    },
                    text: {
                        x: 0,
                        y: 0,
                        w: 90,
                        h: 100,
                        type: Struct.Metainfo.Type.TEXT,
                        text: "菜单按钮",
                    },
                },
            },
        },
        option: {
            id: "40aeb066-8746-47ac-afb7-9b21a960ede4",
            type: Struct.Material.Type.OPTION,
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
                        path: 'assets/button/option/normal.png',
                    },
                    hover: {
                        type: Struct.Metainfo.Type.IMAGE,
                        w: 620,
                        h: 100,
                        x: 0,
                        y: 0,
                        path: 'assets/button/option/hover.png',
                    },
                    text: {
                        x: 0,
                        y: 0,
                        w: 620,
                        h: 100,
                        type: Struct.Metainfo.Type.TEXT,
                        text: "选项按钮",
                    },
                },
            },
        }
    };
    exports.materials.push(exports.material.name);
    exports.materials.push(exports.material.dialogue);
    exports.materials.push(exports.material.button);
    exports.materials.push(exports.material.option);
}
exports.name = {
    id: 101,
    alias: "姓名框",
    type: Struct.Element.Type.NAME,
    x: 0,
    y: 920,
    z: 101,
    w: 720,
    h: 86,
    angle: 0,
    opacity: 100,
    horizontal: false,
    vertical: false,
    materialId: exports.material.name.id,
    font: {
        family: 'font',
        size: 28,
        color: '#ffffff',
    },
    text: '',
};
exports.dialogue = {
    id: 102,
    alias: "对话框",
    type: Struct.Element.Type.DIALOGUE,
    x: 0,
    y: 1006,
    z: 102,
    w: 720,
    h: 274,
    angle: 0,
    opacity: 100,
    horizontal: false,
    vertical: false,
    materialId: exports.material.dialogue.id,
    font: {
        family: 'font',
        size: 28,
        color: '#ffffff',
    },
    text: '',
    playback: '',
};
exports.button = {
    id: 103,
    alias: "快捷菜单",
    type: Struct.Element.Type.BUTTON,
    x: 626,
    y: 14,
    z: 103,
    w: 90,
    h: 100,
    angle: 0,
    opacity: 100,
    horizontal: false,
    vertical: false,
    materialId: exports.material.button.id,
    interaction: {
        id: Struct.Interaction.Id.POPUP_QUICK_MENU,
    },
};
exports.option = {
    id: 104,
    alias: "选项按钮",
    type: Struct.Element.Type.BUTTON,
    x: 50,
    y: 50,
    z: 104,
    w: 620,
    h: 100,
    angle: 0,
    opacity: 100,
    horizontal: false,
    vertical: false,
    materialId: exports.material.option.id,
};
// 场景
let scene1 = {
    id: 1,
    type: Struct.Scene.Type.SKETCH,
    elements: [
        exports.name,
        exports.dialogue,
        exports.button,
        exports.option,
    ],
};
exports.template = {
    id: 1,
    type: Struct.Template.Type.SCENE,
    scenes: [
        scene1
    ],
};
