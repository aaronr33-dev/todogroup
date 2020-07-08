import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title = ' Welcome to Your To Do List ';
  signature = 'Created By: Ratchet Bill and A-A-RON! ';
  task = "Make A New Item";
  done: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  addTask(task: string): void {
    if(task){
      this.task = task;
    }

  }
  updateTask(): void {
  

  }
  deleteTask(): void {

  }

  

}
