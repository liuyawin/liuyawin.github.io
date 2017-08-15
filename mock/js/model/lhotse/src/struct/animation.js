"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation;
(function (Animation) {
    let Target;
    (function (Target) {
        let Type;
        (function (Type) {
            Type[Type["Element"] = 0] = "Element";
            Type[Type["Scene"] = 1] = "Scene";
        })(Type = Target.Type || (Target.Type = {}));
    })(Target = Animation.Target || (Animation.Target = {}));
    let Trigger;
    (function (Trigger) {
        let Type;
        (function (Type) {
            Type[Type["Start"] = 0] = "Start";
            Type[Type["End"] = 1] = "End";
            Type[Type["Click"] = 2] = "Click";
        })(Type = Trigger.Type || (Trigger.Type = {}));
    })(Trigger = Animation.Trigger || (Animation.Trigger = {}));
    let Segment;
    (function (Segment) {
        let Layer;
        (function (Layer) {
            let Type;
            (function (Type) {
                Type[Type["Top"] = 0] = "Top";
                Type[Type["Bottom"] = 1] = "Bottom";
                Type[Type["Any"] = 2] = "Any";
            })(Type = Layer.Type || (Layer.Type = {}));
        })(Layer = Segment.Layer || (Segment.Layer = {}));
    })(Segment = Animation.Segment || (Animation.Segment = {}));
})(Animation = exports.Animation || (exports.Animation = {}));
