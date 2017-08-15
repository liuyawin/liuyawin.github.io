"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Struct = require("../../struct");
const Game = require("../../game");
exports.option1 = {
    id: 1,
    next: -1,
    variableId: Game.variable1.id,
    operator: Struct.Scene.Condition.Operator.LESS,
    target: {
        type: Struct.Scene.Condition.Target.Type.NUMBER,
        value: 10,
    }
};
exports.option2 = {
    id: 2,
    next: -1,
    variableId: Game.variable1.id,
    operator: Struct.Scene.Condition.Operator.MOREEQUAL,
    target: {
        type: Struct.Scene.Condition.Target.Type.NUMBER,
        value: 10,
    }
};
exports.create = () => ({
    id: -1,
    type: Struct.Scene.Type.CONDITION,
    next: -1,
    options: [
        exports.option1,
        exports.option2,
    ],
});
