"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Audio;
(function (Audio) {
    // export enum Type {
    //     BGM = 100,
    //     EFFECT = 101,
    // };
    let Type;
    (function (Type) {
        Type.BGM = 'bgm';
        Type.EFFECT = 'effect';
    })(Type = Audio.Type || (Audio.Type = {}));
    let TriggerType;
    (function (TriggerType) {
        TriggerType[TriggerType["Click"] = 0] = "Click";
        TriggerType[TriggerType["End"] = 1] = "End";
        TriggerType[TriggerType["Start"] = 2] = "Start";
    })(TriggerType = Audio.TriggerType || (Audio.TriggerType = {}));
    ;
})(Audio = exports.Audio || (exports.Audio = {}));
