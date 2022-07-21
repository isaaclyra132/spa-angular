import { Component, OnInit } from '@angular/core';
import { alunos } from '../models/alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [
    {
      nome: 'Thamires',
      idade: 23,
      email: 'thamires@gmail.com',
      curso: 'Ecologia'
    },
    {
      nome: 'Isaac',
      idade: 24,
      email: 'isaac@gmail.com',
      curso: 'Engenharia de Computação'
    },
    {
      nome: 'Fulano',
      idade: 21,
      email: 'fulano@gmail.com',
      curso: 'Engenharia de Computação'
    },
    {
      nome: 'Sicrano',
      idade: 22,
      email: 'sicrano@gmail.com',
      curso: 'Tecnologia da Informação'
    }
  ]

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela() {
    this.exibeTabela = true;
  }

}
