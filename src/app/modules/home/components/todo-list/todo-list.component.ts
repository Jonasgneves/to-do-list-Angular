import { Component, OnInit } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = [
    { task: 'teste', checked: false },
    { task: 'teste 2', checked: false },
    { task: 'teste 3', checked: false },
  ];

  constructor () {}

  OnInit(): void {
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm('Você tem certeza que deseja deletar todos os items?')

    if (confirm) {
      this.taskList = []
    }
  }

}
