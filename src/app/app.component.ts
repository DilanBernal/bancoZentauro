import { Component, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from './core/services/shared.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'bancoZentauro';
  showHeader: WritableSignal<boolean> = signal(true);

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private translate: TranslateService
  ) {
    // Establecer el idioma predeterminado
    this.translate.setDefaultLang('es');
    this.translate.use('es');  // El idioma predeterminado es español

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const excludesRoutes = [/^\/login/, /^\/signin/, /^\/backup/];
        this.showHeader.set(!excludesRoutes.some(route => route.test(event.url)));
      }
    });
  }

  Home() {
    this.router.navigate(["home"]);
  }

  Products() {
    this.router.navigate(["products"]);
  }

  ProductInfo() {
    this.router.navigate(["product-info"]);
  }

  Services() {
    this.router.navigate(["services"]);
  }

  Login() {
    this.router.navigate(["login"]);
  }

  Signin() {
    this.router.navigate(["signin"]);
  }

  // Método para cambiar el idioma
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
