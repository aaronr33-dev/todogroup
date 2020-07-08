import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[]


  title = ' Welcome to Your To Do List ';
  signature = 'Created By: Ratchet Bill and A-A-RON! ';
  task = "Make A New Item";
  done: Boolean = false;




  constructor(private dataService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
  }


  refreshTodos(){
    this.dataService.fetchListOfTodos().subscribe(
      data => {
        console.log(data);
        this.todos = data;
      },
      error => console.log(error)
      );
    
  }


  goToAddTodo(){
    this.router.navigate(['addTodo']);
  }

  goToEditTodo(id: Number){
    this.router.navigate(['editTodo', id]);
  }

  deleteTodo(id: Number){
    
  }


  

}
