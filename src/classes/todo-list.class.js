import { Todo } from "./todo.class";

 

 export class TodoList {


       constructor(){

      //   this.todos = []

      this.cargarLocalStorage();

       }


       nuevoTodo (todo){

        this.todos.push(todo);
        this.guardarLocalStorage();

       }

       eliminarTodo(id){
            this.todos = this.todos.filter(todo => todo.id != id); //devolver el arreglo con todos los elemntos diferentes al id que recibo por parametro

       }

       toggleTodo(id){

            for(const todo of this.todos){
                  console.log(id, todo.id);

                  if(todo.id == id){
                        todo.completado = !todo.completado;
                        break;
                  }
            }

            this.guardarLocalStorage();

       }

       eliminarCompletados() {

            this.todos = this.todos.filter(todo => !todo.completado);
            this.guardarLocalStorage();

       }

       guardarLocalStorage(){

            localStorage.setItem('todo', JSON.stringify(this.todos));
       }

       cargarLocalStorage(){
           
            // if(localStorage.getItem('todo') ){

            //       this.todos = JSON.parse(localStorage.getItem('todo'));
            //       console.log('cargarLocal:', this.todos );
            // }else{
            //       this.todos = [];
            // }
            
            this.todos = (localStorage.getItem('todo') 
                  ?
             JSON.parse(localStorage.getItem('todo')) 
              
                  : [] );

            this.todos = this.todos.map(obj => Todo.fromJson(obj));

       }

 }