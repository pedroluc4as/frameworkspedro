import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/component/task.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  task = new FormControl('');
  descricacao = new FormControl('');
  responsavel = new FormControl('');
  dt_inicio = new FormControl('');
  dt_fim = new FormControl('');

  tasks: Task [] = []

  constructor(private router: Router, private taskService: TaskService){}

  addTask(){
    let t = this.dataToObject();
    this.taskService.tasks.push(t);
    console.log(t);

    this.limparForm();
    
    this.router.navigateByUrl('/dashboard')
  }
  
  dataToObject(){
    let task = new Task();
    task.nome = this.task.value!;
    task.descricao = this.descricacao.value!;
    task.responsavel = this.responsavel.value!;
    task.dt_inicio = new Date(this.dt_inicio.value!);
    task.dt_fim = new Date(this.dt_fim.value!);

    return task;

  }

  limparForm(){
    //limpar as caixas de texto
    this.task.setValue('');
    this.descricacao.setValue('');
    this.responsavel.setValue('');
    this.dt_inicio.setValue('');
    this.dt_fim.setValue('');
  }
}
