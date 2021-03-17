import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listNoticias: any[] = [];
  loading: boolean = false;

  constructor(private _noticiaService: NoticiaService) {}

  buscarNoticias(parametros: any): void {
    this.loading = true;
    this.listNoticias = [];
    this._noticiaService.getNoticias(parametros).subscribe(
      (data) => {
        this.loading = false;
        this.listNoticias = data.articles;
      },
      (error) => {
        this.loading = false;
        this.listNoticias = [];
      }
    );
  }
}
