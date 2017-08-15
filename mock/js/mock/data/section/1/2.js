"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Struct = require("../../struct");
const Materials = require("../../materials/story");
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
    figure: {
        id: "6e8d9eaa-7fca-4ea4-8dbb-74ad0a08c277",
        type: Struct.Material.Type.FIGURE,
        metainfo: {
            type: Struct.Metainfo.Type.IMAGE,
            w: 179,
            h: 404,
            x: 0,
            y: 0,
            path: "assets/image/figure.png",
        },
    }
};
// export let materials: Struct.Material[] = [];
exports.materialIds = [
    material.background.id,
    material.figure.id,
    Template.Scene.name.materialId,
    Template.Scene.dialogue.materialId,
    Template.Scene.button.materialId,
];
// materials.push(material.background);
// materials.push(material.figure);
Materials.materials.push(material.background);
Materials.materials.push(material.figure);
let name = _.clone(Template.Scene.name);
name.text = 'second';
let dialogue = _.clone(Template.Scene.dialogue);
// dialogue.text = 'second dialogue1\nsecond dialogue2\nsecond dialogue3\nsecond dialogue4';
dialogue.text = '1';
let figure1 = {
    id: 41,
    alias: "立绘",
    type: Struct.Element.Type.FIGURE,
    x: 100,
    y: 100,
    z: 1,
    w: 179,
    h: 404,
    angle: 0,
    opacity: 100,
    horizontal: false,
    vertical: false,
    materialId: material.figure.id,
};
let figure2 = {
    id: 42,
    alias: "立绘",
    type: Struct.Element.Type.FIGURE,
    x: 300,
    y: 500,
    z: 1,
    w: 179,
    h: 404,
    angle: 0,
    opacity: 100,
    horizontal: true,
    vertical: true,
    materialId: material.figure.id,
};
let animation1 = {
    id: 1,
    target: {
        type: Struct.Animation.Target.Type.Element,
        id: figure1.id,
    },
    trigger: {
        type: Struct.Animation.Trigger.Type.Start,
        delay: 0,
        isFrom: false,
    },
    move: {
        times: 1,
        isLoop: false,
        reverse: false,
        delay: 0,
        duration: 5000,
        x: 100,
        y: 100,
    },
    rotate: {
        times: 1,
        isLoop: false,
        reverse: false,
        delay: 0,
        duration: 5000,
        angle: 360,
    },
    scale: {
        times: 1,
        isLoop: false,
        reverse: false,
        delay: 5000,
        duration: 1000,
        w: 404,
        h: 179,
    },
    fade: {
        times: 1,
        isLoop: false,
        reverse: false,
        delay: 0,
        duration: 2000,
        opacity: 20,
    }
};
let animation2 = {
    id: 1,
    target: {
        type: Struct.Animation.Target.Type.Element,
        id: figure1.id,
    },
    trigger: {
        type: Struct.Animation.Trigger.Type.End,
        delay: 0,
        isFrom: true,
    },
    move: {
        times: 1,
        isLoop: false,
        reverse: false,
        delay: 0,
        duration: 1000,
        x: 300,
        y: 500,
    },
    rotate: {
        times: 1,
        isLoop: false,
        reverse: false,
        delay: 1000,
        duration: 1000,
        angle: 0,
    },
    scale: {
        times: 1,
        isLoop: false,
        reverse: false,
        delay: 0,
        duration: 2000,
        w: 179,
        h: 404,
    },
    fade: {
        times: 1,
        isLoop: false,
        reverse: false,
        delay: 0,
        duration: 2000,
        opacity: 100,
    }
};
let animation3 = {
    id: 1,
    target: {
        type: Struct.Animation.Target.Type.Element,
        id: figure2.id,
    },
    trigger: {
        type: Struct.Animation.Trigger.Type.Click,
        delay: 0,
        isFrom: true,
    },
    layer: {
        type: Struct.Animation.Segment.Layer.Type.Any,
        delay: 0,
        isUpAny: false,
        anyNumber: 1,
    }
};
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
            horizontal: true,
            vertical: true,
            materialId: material.background.id,
        },
        figure1,
        figure2,
        name,
        dialogue,
        Template.Scene.button,
    ],
    next: -1,
    thumbnail: 'assets/thumbnail/scene.png',
    animations: [
        animation1,
        animation2,
        animation3,
    ],
    sceneAnimation: {
        flash: {
            color: '#ffffff',
            times: 4,
            duration: 1,
        }
    },
    effectAnimation: {
        type: Struct.Scene.EffectAnimation.Type.RAIN,
    }
});
