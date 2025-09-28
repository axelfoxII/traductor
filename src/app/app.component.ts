import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Establece el idioma por defecto
    translate.setDefaultLang('en');
    translate.use('en'); // Idioma inicial
  }

  // Método para cambiar idioma
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  mensaje(){
    Swal.fire({
      title: this.translate.instant('swal_title'),
      text: this.translate.instant('swal_text'),
      icon: 'success',

    })
  }  
}
