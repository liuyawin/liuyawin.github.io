"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Struct = require("../../struct");
const Materials = require("../../materials/story");
const Template = require("../../template");
let material = {
    background: {
        id: "assets/image/background_after.jpg",
        type: Struct.Material.Type.BACKGROUND,
        metainfo: {
            type: Struct.Metainfo.Type.IMAGE,
            w: 720,
            h: 1280,
            x: 0,
            y: 0,
            path: "assets/image/background_after.jpg",
        },
    },
    bgm: {
        id: "assets/sound/bgm.mp3",
        type: Struct.Material.Type.BGM,
        metainfo: {
            type: Struct.Metainfo.Type.SOUND,
            path: "assets/sound/bgm.mp3"
        }
    },
    effect1: {
        id: "assets/sound/effect1.mp3",
        type: Struct.Material.Type.EFFECT,
        metainfo: {
            type: Struct.Metainfo.Type.SOUND,
            path: "assets/sound/effect1.mp3"
        }
    },
    effect2: {
        id: "assets/sound/effect2.mp3",
        type: Struct.Material.Type.EFFECT,
        metainfo: {
            type: Struct.Metainfo.Type.SOUND,
            path: "assets/sound/effect2.mp3"
        }
    },
};
// export let materials: Struct.Material[] = [];
exports.materialIds = [
    material.background.id,
    material.bgm.id,
    material.effect1.id,
    material.effect2.id,
];
// materials.push(material.background);
// materials.push(material.figure);
Materials.materials.push(material.background);
// Materials.materials.push(material.bgm);
// Materials.materials.push(material.effect1);
// Materials.materials.push(material.effect2);
let name = _.clone(Template.Scene.name);
name.text = 'third';
let dialogue = _.clone(Template.Scene.dialogue);
dialogue.text = 'third dialogue';
let audios = [
    {
        id: 1,
        type: Struct.Audio.Type.BGM,
        isLoop: false,
        times: 1,
        volume: 100,
        materialId: material.bgm.id,
        isInherited: false,
    },
    {
        id: 2,
        type: Struct.Audio.Type.EFFECT,
        isLoop: false,
        times: 1,
        volume: 100,
        materialId: material.effect1.id,
        isVoice: false,
        delay: 0,
        triggerType: Struct.Audio.TriggerType.Click,
    },
    {
        id: 3,
        type: Struct.Audio.Type.EFFECT,
        isLoop: false,
        times: 1,
        volume: 100,
        materialId: material.effect2.id,
        isVoice: false,
        delay: 0,
        triggerType: Struct.Audio.TriggerType.Click,
    }
];
exports.create = () => ({
    id: -1,
    type: Struct.Scene.Type.NORMAL,
    // audios: audios,
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
    transition: {
        type: Struct.Transition.Type.CLOCK_CLOCKWISE,
    },
    effectAnimation: {
        type: Struct.Scene.EffectAnimation.Type.RAIN,
    }
});
