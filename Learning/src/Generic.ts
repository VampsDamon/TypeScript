const syntaxGen = <T>(x: T) => {
  return x;
};

interface TODO {
  id: number;
  title: string;
  description: string;
  done?: boolean;
}

class TODOs<T extends TODO> {
  private todos: T[] = [];

  addTODO(todo: T) {
    this.todos.push({...todo,done:false});
  }

  removeTODO(id: number) {
    this.todos = this.todos.filter((todo: T) => todo?.id !== id);
  }

  getAllTodos(): T[] {
    return [...this.todos];
  }

  updateTODO(id: number) {
    this.todos = this.todos.map((todo: T): T => {
      return todo.id == id ? { ...todo, done: true } : todo;
    });
  }
}

const GenericLearning = () => {
  //   let output11 = syntaxGen<string>("Hello")
  //   let output12 = syntaxGen<number>(1)
  //   console.log(output12)
  const studyTodos = new TODOs<TODO>();
  for(let i=1;i<=5;i++){
      studyTodos.addTODO({
        id:i,
        title:`TODO ${i}`,
        description:`This is TODO : ${i}`,
      })
  }
  studyTodos.updateTODO(4)
  console.log(studyTodos.getAllTodos())
};

export default GenericLearning;
