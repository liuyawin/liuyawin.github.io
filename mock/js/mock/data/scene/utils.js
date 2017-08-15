"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Id {
    static create() {
        this.id++;
        return this.id;
    }
    static reset() {
        this.id = 0;
    }
}
Id.id = 0;
exports.Id = Id;
