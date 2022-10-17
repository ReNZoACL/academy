import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public textMessageWhatsapp = 'Hola..! Puede darme más información?';
  public listSocials = [
    {
      class: 'fa-brands fa-facebook fa-xl',
      value: 'Fan Page',
      link: 'https://www.facebook.com/profile.php?id=100083271882625'
    },
    {
      class: 'fa-brands fa-instagram fa-xl',
      value: 'AC.RocioPereira.of',
      link: ''
    },
    {
      class: 'fa-brands fa-whatsapp fa-xl',
      value: '915 942 347',
      link: 'https://api.whatsapp.com/send?phone=51915942347&text={{textMessageWhatsapp}}'
    },
    {
      class: 'fa-brands fa-whatsapp fa-xl',
      value: '938 876 900',
      link: 'https://api.whatsapp.com/send?phone=51938876900&text={{textMessageWhatsapp}}'
    }
  ]
  constructor() { }
  
  ngOnInit(): void {
  }

}
