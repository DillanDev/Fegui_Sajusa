import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.css']
})
export class SliderProductComponent implements OnInit {

  products = [{
    name:'Nombre del articulo',
    image:'https://www.cuestalibros.com/content/images/thumbs/default-image_550.png',
    desc:'Este articulo no esta disponible',
    price:'$58'

  },{ name:'Nombre del articulo',
      image:'https://tienda.madridramossierra.es/assets/images/image-not-found.png',
      desc:'Este articulo no esta disponible',
      price:'$58'
  },{name:'Nombre del articulo',
    image:'https://www.cuestalibros.com/content/images/thumbs/default-image_550.png',
    desc:'Este articulo no esta disponible',
    price:'$58'
  },{name:'Nombre del articulo',
    image:'https://tienda.madridramossierra.es/assets/images/image-not-found.png',
    desc:'Este articulo no esta disponible',
    price:'$58'},
    {
      name:'Nombre del articulo',
      image:'https://www.cuestalibros.com/content/images/thumbs/default-image_550.png',
      desc:'Este articulo no esta disponible',
      price:'$58'
  
    },{ name:'Nombre del articulo',
        image:'https://tienda.madridramossierra.es/assets/images/image-not-found.png',
        desc:'Este articulo no esta disponible',
        price:'$58'
    },{name:'Nombre del articulo',
      image:'https://www.cuestalibros.com/content/images/thumbs/default-image_550.png',
      desc:'Este articulo no esta disponible',
      price:'$58'
    },{name:'Nombre del articulo',
      image:'https://tienda.madridramossierra.es/assets/images/image-not-found.png',
      desc:'Este articulo no esta disponible',
      price:'$58'},{ name:'Nombre del articulo',
      image:'https://tienda.madridramossierra.es/assets/images/image-not-found.png',
      desc:'Este articulo no esta disponible',
      price:'$58'
  },{name:'Nombre del articulo',
    image:'https://www.cuestalibros.com/content/images/thumbs/default-image_550.png',
    desc:'Este articulo no esta disponible',
    price:'$58'
  },{name:'Nombre del articulo',
    image:'https://tienda.madridramossierra.es/assets/images/image-not-found.png',
    desc:'Este articulo no esta disponible',
    price:'$58'}]

  constructor() { 

    
  }
  ngOnInit(): void {
    
  }




  

}
