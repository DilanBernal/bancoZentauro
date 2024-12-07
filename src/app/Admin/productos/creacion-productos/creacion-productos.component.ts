import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrl: './creacion-productos.component.css'
})
export class CreacionProductosComponent {

  fileForm: FormGroup;
  fileError: string | null = null

  public constructor(private router: Router, public shared:SharedService, public api: ApiService, private fb: FormBuilder) {
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

      // Validar formato del archivo
      if (file.type !== 'image/png') {
        this.fileError = 'La imagen debe estar en formato .png';
        this.fileForm.patchValue({ imagen: null });
        return;
      }

      // Validar tamaño del archivo (máximo 2 MB)
      const maxFileSize = 2 * 1024 * 1024; // 2 MB
      if (file.size > maxFileSize) {
        this.fileError = 'El tamaño del archivo no debe exceder los 2 MB.';
        this.fileForm.patchValue({ imagen: null });
        return;
      }

      // Validar dimensiones de la imagen
      const image = new Image();
      const reader = new FileReader();

      reader.onload = (e: any) => {
        image.src = e.target.result;

        image.onload = () => {
          if (image.width !== 640 || image.height !== 360) {
            this.fileError = `Las dimensiones deben ser exactamente 640x360 px (actual: ${image.width}x${image.height}).`;
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
    if(this.shared.estaLogeado() && this.shared.getRolUser() == 'admin'){
      console.log("Esta logeado en admin mode")
    }else {
      console.log("no esta logeado o no esta como admin")
      this.router.navigate(['home'])
    }
  }

  onSubmit() {
    console.log(this.fileForm.value.imagen)
    console.log(this.fileForm.value.imagen.name)

    var tempNombre = this.fileForm.value.imagen.name

    var nameSplit = tempNombre.split(".png", 1);
    console.log(nameSplit[0])

    this.api.addImg(this.fileForm.value.imagen, this.fileForm.value.nombre).subscribe({
      next: (respuesta) => {
        var idImagen = respuesta.body.file.img_id
        var datosParaBDProducto = {
          "productoNombre": this.fileForm.value.nombre,
          "productoDescripcion": this.fileForm.value.descripcion,
          "productTipo": this.fileForm.value.tipo,
          "productoIdImagen": idImagen
        }
        console.log(datosParaBDProducto)
        this.api.registerProduct(datosParaBDProducto).subscribe({
          next: (respuesta) => {
            console.log(respuesta)
          },
          error: (err) => {
            console.log(`Error regis prod ${err}`)
          }
        })
      },
      error: (err) => {
        console.log("errir imagenes" + err)
      }
    })

  }


  Back() {
    this.router.navigate([this.Back]);
  }
}
