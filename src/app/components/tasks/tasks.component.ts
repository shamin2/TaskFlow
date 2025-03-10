import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  //tasks= variable
  //Task[] an array
  // [] stroing it to empty array for now

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks));//updates tasks when data arrives

  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}
