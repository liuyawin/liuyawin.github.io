"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Struct = require("../../struct");
const Game = require("../../game");
exports.create = () => ({
    id: -1,
    type: Struct.Scene.Type.OPERATION,
    variableId: Game.variable1.id,
    operator: Struct.Scene.Operation.Operator.ASSIGN,
    target: {
        type: Struct.Scene.Operation.Target.Type.NUMBER,
        value: 10,
    },
    next: -1,
});
