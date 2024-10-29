"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const syntaxGen = (x) => {
    return x;
};
class TODOs {
    constructor() {
        this.todos = [];
    }
    addTODO(todo) {
        this.todos.push(Object.assign(Object.assign({}, todo), { done: false }));
    }
    removeTODO(id) {
        this.todos = this.todos.filter((todo) => (todo === null || todo === void 0 ? void 0 : todo.id) !== id);
    }
    getAllTodos() {
        return [...this.todos];
    }
    updateTODO(id) {
        this.todos = this.todos.map((todo) => {
            return todo.id == id ? Object.assign(Object.assign({}, todo), { done: true }) : todo;
        });
    }
}
const GenericLearning = () => {
    //   let output11 = syntaxGen<string>("Hello")
    //   let output12 = syntaxGen<number>(1)
    //   console.log(output12)
    const studyTodos = new TODOs();
    for (let i = 1; i <= 5; i++) {
        studyTodos.addTODO({
            id: i,
            title: `TODO ${i}`,
            description: `This is TODO : ${i}`,
        });
    }
    studyTodos.updateTODO(4);
    console.log(studyTodos.getAllTodos());
};
exports.default = GenericLearning;
