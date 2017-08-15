"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Struct = require("../struct");
const Game = require("../game");
var Target = Struct.Scene.Operation.Target;
exports.target = {
    number: {
        type: Target.Type.NUMBER,
        value: 10,
    },
    random: {
        type: Target.Type.RANDOM,
        begin: 1,
        end: 10,
    },
    variable: {
        type: Target.Type.VARIABLE,
        variableId: Game.variable1.id,
    }
};
exports.create = {
    number: () => ({
        id: -1,
        type: Struct.Scene.Type.OPERATION,
        variableId: Game.variable1.id,
        operator: Struct.Scene.Operation.Operator.ASSIGN,
        target: exports.target.number,
        next: -1,
    }),
    random: () => ({
        id: -1,
        type: Struct.Scene.Type.OPERATION,
        variableId: Game.variable1.id,
        operator: Struct.Scene.Operation.Operator.PLUS,
        target: exports.target.random,
        next: -1,
    }),
    variable: () => ({
        id: -1,
        type: Struct.Scene.Type.OPERATION,
        variableId: Game.variable1.id,
        operator: Struct.Scene.Operation.Operator.MINUS,
        target: exports.target.variable,
        next: -1,
    }),
};
