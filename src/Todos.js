import React, { Component } from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
          return (
              <div className="collection-item" key={todo.id}>
                  <span className="" onClick={() => { deleteTodo(todo.id) } } >{todo.content}</span>
              </div>
          )  
        })
    ) : (<p className="center">Yo have no todos</p>);

    return (
      <div className="todos collection">
        { todoList }
      </div>
    );
}

export default Todos;
