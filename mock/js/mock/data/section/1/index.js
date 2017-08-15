"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.section = {
    id: 1,
    name: '第一小节',
    preloads: [{
            id: 1,
            materials: [],
            scenes: [],
        }],
    scenes: [],
    startSceneId: 2,
};
// let s0 = Scene.Operation.create.number();
// s0.id = 1;
// s0.next = 2;
// section.scenes.push(s0);
// import * as S1 from './1';
// let s1 = S1.create();
// s1.id = 1;
// s1.next = 5;
// s1.options[0].next = 2;
// s1.options[1].next = 3;
// section.scenes.push(s1);
// section.preloads[0].materials = section.preloads[0].materials.concat(S1.materialIds);
// section.preloads[0].scenes.push(s1.id);
const S2 = require("./2");
let s2 = S2.create();
s2.id = 2;
s2.next = 3;
exports.section.scenes.push(s2);
exports.section.preloads[0].materials = exports.section.preloads[0].materials.concat(S2.materialIds);
exports.section.preloads[0].scenes.push(s2.id);
const S3 = require("./3");
let s3 = S3.create();
s3.id = 3;
s3.next = 8;
exports.section.scenes.push(s3);
exports.section.preloads[0].materials = exports.section.preloads[0].materials.concat(S3.materialIds);
exports.section.preloads[0].scenes.push(s3.id);
// import * as S4 from './4';
// let s4 = S4.create();
// s4.id = 4;
// s4.next = 5;
// section.scenes.push(s4);
// import * as S5 from './5';
// let s5 = S5.create();
// s5.id = 5;
// s5.next = 8;
// s5.options[0].next = 6;
// s5.options[1].next = 7;
// section.scenes.push(s5);
// import * as S6 from './6';
// let s6 = S6.create();
// s6.id = 6;
// s6.next = 8;
// section.scenes.push(s6);
// section.preloads[0].materials = section.preloads[0].materials.concat(S6.materialIds);
// section.preloads[0].scenes.push(s6.id);
// import * as S7 from './7';
// let s7 = S7.create();
// s7.id = 7;
// s7.next = 8;
// section.scenes.push(s7);
// section.preloads[0].materials = section.preloads[0].materials.concat(S7.materialIds);
// section.preloads[0].scenes.push(s7.id);
// import * as S8 from './8';
// let s8 = S8.create();
// s8.id = 8;
// s8.sectionId = 2;
// section.scenes.push(s8);
