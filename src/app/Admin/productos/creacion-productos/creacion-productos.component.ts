import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../services/shared.service';
import { LoaderService } from '../../../Content/popup/loader/loader.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.css']
})
export class CreacionProductosComponent {

  fileForm: FormGroup;
  fileError: string | null = null;
  huboError: boolean = false;
  carga: boolean = false;
  seRegistro: boolean = false;
  mostrarError: boolean = false;

  @ViewChild('productoHtml') componente!: ElementRef;

  public constructor(
    private router: Router,
    public shared: SharedService,
    public loader: LoaderService,
    public api: ApiService,
    private fb: FormBuilder,
    private translate: TranslateService) {

    this.translate.setDefaultLang('es');  // Set default language

    this.fileForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: [null, Validators.required],
      tipo: ['', Validators.required]
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];

      if (file.type !== 'image/png') {
        this.fileError = this.translate.instant('IMAGE_ERROR');
        this.fileForm.patchValue({ imagen: null });
        return;
      }

      const maxFileSize = 2 * 1024 * 1024; // 2 MB
      if (file.size > maxFileSize) {
        this.fileError = this.translate.instant('FILE_SIZE_ERROR');
        this.fileForm.patchValue({ imagen: null });
        return;
      }

      const image = new Image();
      const reader = new FileReader();

      reader.onload = (e: any) => {
        image.src = e.target.result;

        image.onload = () => {
          if (image.width !== 640 || image.height !== 360) {
            this.fileError = this.translate.instant('DIMENSIONS_ERROR') + ` (actual: ${image.width}x${image.height}).`;
            this.fileForm.patchValue({ imagen: null });
          } else {
            this.fileError = null;
            this.fileForm.patchValue({ imagen: file });
          }
        };
      };

      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
    if (this.shared.estaLogeado() && this.shared.getRolUser() == 'admin') {
      console.log("Está logueado como admin");
    } else {
      console.log("No está logueado o no es admin");
      this.router.navigate(['home']);
    }
  }

  onSubmit() {
    this.loader.activarLoader();
    console.log(this.fileForm.value.imagen);
    console.log(this.fileForm.value.imagen.name);

    var tempNombre = this.fileForm.value.imagen.name;
    var nameSplit = tempNombre.split(".png", 1);
    console.log(nameSplit[0]);

    this.api.addImg(this.fileForm.value.imagen, this.fileForm.value.nombre).subscribe({
      next: (respuesta) => {
        var idImagen = respuesta.body.file.img_id;
        var datosParaBDProducto = {
          "productoNombre": this.fileForm.value.nombre,
          "productoDescripcion": this.fileForm.value.descripcion,
          "productTipo": this.fileForm.value.tipo,
          "productoIdImagen": idImagen
        };
        console.log(datosParaBDProducto);
        this.api.registerProduct(datosParaBDProducto).subscribe({
          next: (respuesta) => {
            this.loader.cerrarLoader();
            console.log(respuesta);
          },
          error: (err) => {
            console.log(`Error al registrar producto: ${err}`);
            this.loader.cerrarLoader();
          }
        });
      },
      error: (err) => {
        console.log("Error en la imagen: " + err);
        this.loader.cerrarLoader();
      }
    });
  }

  Back() {
    this.router.navigate([this.Back]);
  }
}
