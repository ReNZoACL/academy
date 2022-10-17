import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  public listPlans = [
    {
      id: 1,
      title: 'Báisco',
      description: '',
      price: 40.00,
      recommend: false,
      features: [
        'Seguimiento Personalizado',
        'Entrenamiento solo Sábados'
      ]
    },
    {
      id: 1,
      title: 'Estandar',
      description: '',
      price: 80.00,
      recommend: true,
      features: [
        'Seguimiento Personalizado',
        'Entremiento Martes, Jueves y Sabados',
        'Caracteristica X',
        'Caracteristica X',
        'Caracteristica X'
      ]
    },
    {
      id: 1,
      title: '+PRO',
      description: '',
      price: 100.00,
      recommend: false,
      features: [
        'Seguimiento Personalizado',
        'Entremiento Martes, Jueves y Sabados',
        'Caracteristica X',
        'Caracteristica X',
        'Caracteristica X'
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
