import React from 'react'

export default props => (
  <header className="todo-header header clearfix">
    <nav>
      <ul className="nav nav-pills float-right">
        <li className="nav-item">
          <a className="nav-link active" href="#/todos">Tarefas <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/about">About</a>
        </li>
      </ul>
    </nav>
    <h1 className="text-muted">TodoApp</h1>
  </header>
)
