"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("./element");
const animation_1 = require("./animation");
const transition_1 = require("./transition");
const effect_animation_1 = require("./effect-animation");
const audio_1 = require("./audio");
var Scene;
(function (Scene) {
    let Type;
    (function (Type) {
        Type.NORMAL = 'normal';
        Type.CONDITION = 'condition';
        Type.OPERATION = 'operation';
        Type.JUMP = 'jump';
        Type.END = 'end';
        Type.SKETCH = 'sketch';
    })(Type = Scene.Type || (Scene.Type = {}));
    Scene.Element = element_1.Element;
    Scene.Animation = animation_1.Animation;
    Scene.Transition = transition_1.Transition;
    Scene.EffectAnimation = effect_animation_1.EffectAnimation;
    Scene.Audio = audio_1.Audio;
    let Operation;
    (function (Operation) {
        let Operator;
        (function (Operator) {
            Operator[Operator["ASSIGN"] = 0] = "ASSIGN";
            Operator[Operator["PLUS"] = 1] = "PLUS";
            Operator[Operator["MINUS"] = 2] = "MINUS";
            Operator[Operator["MULTIPLY"] = 3] = "MULTIPLY";
            Operator[Operator["DIVIDE"] = 4] = "DIVIDE";
        })(Operator = Operation.Operator || (Operation.Operator = {}));
        ;
        let Target;
        (function (Target) {
            let Type;
            (function (Type) {
                Type[Type["NUMBER"] = 0] = "NUMBER";
                Type[Type["RANDOM"] = 1] = "RANDOM";
                Type[Type["VARIABLE"] = 2] = "VARIABLE";
            })(Type = Target.Type || (Target.Type = {}));
            ;
        })(Target = Operation.Target || (Operation.Target = {}));
    })(Operation = Scene.Operation || (Scene.Operation = {}));
    let Condition;
    (function (Condition) {
        let Operator;
        (function (Operator) {
            Operator[Operator["EQUAL"] = 0] = "EQUAL";
            Operator[Operator["NOTEQUAL"] = 1] = "NOTEQUAL";
            Operator[Operator["LESS"] = 2] = "LESS";
            Operator[Operator["MORE"] = 3] = "MORE";
            Operator[Operator["LESSEQUAL"] = 4] = "LESSEQUAL";
            Operator[Operator["MOREEQUAL"] = 5] = "MOREEQUAL";
        })(Operator = Condition.Operator || (Condition.Operator = {}));
        ;
        let Target;
        (function (Target) {
            let Type;
            (function (Type) {
                Type[Type["NUMBER"] = 0] = "NUMBER";
                Type[Type["VARIABLE"] = 2] = "VARIABLE";
            })(Type = Target.Type || (Target.Type = {}));
            ;
        })(Target = Condition.Target || (Condition.Target = {}));
    })(Condition = Scene.Condition || (Scene.Condition = {}));
})(Scene = exports.Scene || (exports.Scene = {}));
