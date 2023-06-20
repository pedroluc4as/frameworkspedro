import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  addTask(){
    let t = this.dataToObject();
    this.tasks.push(t);
    console.log(t);

    this.limparForm();
  }
  
  dataToObject(){
    let task = new Task();
    task.nome = this.task.value!;
    task.descricao = this.descricacao.value!;
    task.responsavel = this.responsavel.value!;
    task.dt_fim = Number(this.dt_fim.value)!;
    task.dt_inicio = Number(this.dt_inicio.value!);

    return task;

  }

  limparForm(){
    this.task.setValue('');
    this.descricacao.setValue('');
    this.responsavel.setValue('');
    this.dt_fim.setValue('');
    this.dt_inicio.setValue('');
  }
}
