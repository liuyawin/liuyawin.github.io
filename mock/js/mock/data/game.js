"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let info = {
    name: 'mock-name',
    identifer: 'mock-identifer',
    rendererVersion: '0.24.0',
};
let indexPath;
let font = {
    indexPath: 'assets/font/font.fnt',
    picturePath: 'assets/font/font_0.png',
    family: 'font',
    size: 29,
    color: '#ffffff'
};
let screen = {
    width: 720,
    height: 1280,
    isPortrait: true,
    isFull: false,
};
let audio = {
    effectVolume: 80,
    bgmVolume: 70,
    voiceVolume: 90,
};
let setting = {
    screen,
    font,
    isAutoPlay: false,
    audio: audio,
};
let variables = [];
exports.variable1 = {
    id: 1,
    desc: 'v1',
    value: 0,
};
exports.variable2 = {
    id: 2,
    desc: 'v2',
    value: 0,
};
exports.variable3 = {
    id: 3,
    desc: 'v3',
    value: 0,
};
variables.push(exports.variable1);
variables.push(exports.variable2);
variables.push(exports.variable3);
exports.game = {
    info,
    setting,
    variables,
};
