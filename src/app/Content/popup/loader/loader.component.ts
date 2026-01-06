import { Component } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrl: './loader.component.css',
    standalone: false
})
export class LoaderComponent {
  public activo: boolean = false
  public salida: boolean = false

  private subscriptions: Subscription = new Subscription()


  constructor(public service: LoaderService) { }


  ngOnInit(): void {
    this.subscriptions.add(
      this.service.getLoaderStatus().subscribe((status) => {
        this.activo = status;
      })
    );

    this.subscriptions.add(
      this.service.getSalidaStatus().subscribe((status) => {
        this.salida = status;
      })
    );
  }
}
