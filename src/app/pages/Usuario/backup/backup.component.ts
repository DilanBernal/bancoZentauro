import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-backup',
    templateUrl: './backup.component.html',
    styleUrls: ['./backup.component.css'],
    standalone: false
})
export class BackupComponent {

  constructor(private translate: TranslateService) {
    // Establecer el idioma predeterminado, por ejemplo, inglés.
    this.translate.setDefaultLang('en');
  }

  changeLanguage(language: string) {
    // Cambiar el idioma de la aplicación.
    this.translate.use(language);
  }

  onSubmitCon() {
    console.log(this.translate.instant('BACKUP.MESSAGE'));
  }
}
