import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [{
    image: 'https://cdn2.mediotiempo.com/uploads/media/2021/02/13/las-imagenes-del-dia-del-11.jpg',
    title: 'Titulo de mi articulo 2',
    content: 'lo que sea papus'
  },{},{},{},{},{},{},{},{
    image: 'https://www.seisamed.com/wp-content/uploads/4-tipos-de-iluminacion-para-salas-de-cirugia.jpg',
    title: 'Articulo Medico',
    content: 'Contenido del articulo medico.'
  }]

  ultim:any;
  constructor() { 
    this.ultim = this.articles.pop() || [{}];

  }


  ngOnInit(): void {
  }

}
