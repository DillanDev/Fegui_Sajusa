import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles = [{
    image: 'https://www.online-image-editor.com/styles/2019/images/power_girl.png',
    title: 'Titulo de mi articuesxdrctfgvhbjnkmldfctghml,drctfgvybuakfhkafakfiwefiohjnilo affha',
    content: 'awsdfyguhjiwsertuhkowse4rtfuhkolwsedrtfgyuhjikowa3tfgyuhjikosxgvybuhjni'
  },{
    image: 'https://cdn2.mediotiempo.com/uploads/media/2021/02/13/las-imagenes-del-dia-del-11.jpg',
    title: 'Titulo de mi articulo 2',
    content: 'lo que sea papus'
  },{},{},{},{},{},{},{},{}]

  constructor() { }

  ngOnInit(): void {

  }

  



}
