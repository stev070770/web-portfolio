import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/service/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor (public infoService:InfoPaginaService){}
}
