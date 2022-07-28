import { NgModule } from "@angular/core";
import { AppComponent } from '../app.component';
import { ContadorComponent } from '../contador/contador/contador.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroeModule {}