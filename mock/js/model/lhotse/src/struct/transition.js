"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transition;
(function (Transition) {
    let Type;
    (function (Type) {
        Type[Type["NONE"] = 0] = "NONE";
        Type[Type["COVER_LEFT"] = 1] = "COVER_LEFT";
        Type[Type["COVER_RIGHT"] = 2] = "COVER_RIGHT";
        Type[Type["UNCOVER_LEFT"] = 3] = "UNCOVER_LEFT";
        Type[Type["UNCOVER_RIGHT"] = 4] = "UNCOVER_RIGHT";
        Type[Type["FADE_SMOOTHLY"] = 5] = "FADE_SMOOTHLY";
        Type[Type["FADE_BLACK"] = 6] = "FADE_BLACK";
        Type[Type["SHAPE_CIRCLE"] = 7] = "SHAPE_CIRCLE";
        Type[Type["SHAPE_DIAMOND"] = 8] = "SHAPE_DIAMOND";
        Type[Type["LINE_VERTICAL"] = 9] = "LINE_VERTICAL";
        Type[Type["DISSOLVE"] = 10] = "DISSOLVE";
        Type[Type["CLOCK_CLOCKWISE"] = 11] = "CLOCK_CLOCKWISE";
        Type[Type["WIPE_LEFT"] = 12] = "WIPE_LEFT";
        Type[Type["PUSH_TOP"] = 13] = "PUSH_TOP";
        Type[Type["PUSH_LEFT"] = 14] = "PUSH_LEFT";
    })(Type = Transition.Type || (Transition.Type = {}));
})(Transition = exports.Transition || (exports.Transition = {}));
