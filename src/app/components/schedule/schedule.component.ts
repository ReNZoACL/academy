import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public listSchedule = [
    {
      id: 1,
      day: 'Martes',
      ubication: 'Polideportivo Parque Zonal',
      hours: [
        {
          hourIni: '3:30 pm',
          hourEnd: '5:00 pm'
        },
        {
          hourIni: '5:00 pm',
          hourEnd: '6:30 pm'
        }
      ]
      
    },
    {
      id: 2,
      day: 'Jueves',
      ubication: 'Polideportivo Parque Zonal',
      hours: [
        {
          hourIni: '10:00 am',
          hourEnd: '11:00 am'
        },
        {
          hourIni: '11:30 am',
          hourEnd: '1:00 pm'
        }
      ]
      
    },
    {
      id: 3,
      day: 'Sabado',
      ubication: 'Polideportivo Parque Zonal',
      hours: [
        {
          hourIni: '3:30 pm',
          hourEnd: '5:00 pm'
        },
        {
          hourIni: '5:00 pm',
          hourEnd: '6:30 pm'
        }
      ]
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
