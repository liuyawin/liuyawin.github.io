"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Scene = require("../../scene");
exports.section = {
    id: 2,
    name: '第二小节',
    preloads: [{
            id: 1,
            materials: [],
            scenes: [],
        }],
    scenes: [],
    startSceneId: 1,
};
// let s0 = Scene.Operation.create.number();
// s0.id = 1;
// s0.next = 2;
// section.scenes.push(s0);
const S1 = require("./1");
let s1 = S1.create();
s1.id = 1;
s1.next = 2;
exports.section.scenes.push(s1);
exports.section.preloads[0].materials = exports.section.preloads[0].materials.concat(S1.materialIds);
exports.section.preloads[0].scenes.push(s1.id);
let s2 = Scene.End.create();
s2.id = 2;
exports.section.scenes.push(s2);
