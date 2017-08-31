# Clase 3 Laboratorio 4 - 2017

## Crear un componente llamado "Adivina el numero"
1 textbox para ingresar un numero
1 boton para verificar que el numero random ingresado corresponde con el numero aleatorio que ha salido por azar.
1 boton para generar un numero random

Para bindear los campos del formulario, ahora hay que importar los siguientes componente y módulo:

```sh
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

...


@NgModule({
    imports: [
         FormsModule      
    ],

```
