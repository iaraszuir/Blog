import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrServicios: Post[];



  constructor() {
    this.arrServicios = [
      { title: 'Cenas con encanto', body: 'La cena (del latín cena) es la última comida del día, se ingiere al atardecer o por la noche y su horario concreto lo determina las costumbres de cada país, así como la cantidad de alimento que se ingiere en la misma. Las cenas suelen incluir dos o más platos, y pueden ir acompañadas de vino o postre.', author: 'Juan Francisco ', image: 'https://elcorreodeespana.com/images/carpeta_relacionados/2019/10/17/24629_15571361655966.jpg', category: 'Alimentacion', createdAt: new Date() },
      { title: 'Volvemos a las andadas', body: 'Así lo informó el ministro de Economía, Lucas Palacios, quien además sostuvo que de los 3.861 establecimientos que funcionan normalmente en las comunas que están en fase 3 de preparación, un 45% abrió sus puertas en la reciente festividad.', author: 'Manuel Garcia', image: 'https://th.bing.com/th/id/R.229be9182bbe3e5d8ff2fb9f0b46f8ad?rik=zpINPQE%2b1xqBkQ&pid=ImgRaw&r=0', category: 'Novedades', createdAt: new Date() }
    ]

  }

  //Metodo que recupera todos los post
  getAll(): Post[] {

    return this.arrServicios;

  }

  //Metodo que filtra por categoria
  getByCategory(pCategoria: string): Post[] {
    const filtrados = [];
    for (let servicio of this.arrServicios) {
      if (servicio.category.toLowerCase() === pCategoria.toLowerCase()) {
        filtrados.push(servicio)
      }
    }
    return filtrados;
  }

  //Metodo que reciba un post u lo inserte dentro del array
  create(pPost: Post) {
    this.arrServicios.push(pPost);

  }

}
