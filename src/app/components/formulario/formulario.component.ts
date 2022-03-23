import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;


  constructor(private postsService: PostsService,
    private router: Router) {
    this.formulario = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      body: new FormControl('', [
        Validators.required,
      ]),
      author: new FormControl('', []),
      image: new FormControl('', []),
      category: new FormControl('', []),
      createdAt: new FormControl('', [
        Validators.required,

      ]),
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    //Modifico la fecha para transformarla a objeto Date
    const fechaCreacion = new Date(this.formulario.value.createdAt)
    /* console.log(typeofthis.formulario.value.createdAt )string */
    this.formulario.value.createdAt = fechaCreacion;
    console.log(typeof this.formulario.value.createdAt)

    //Mediante el servicio inseryamos el nuevo Post dentro del array
    this.postsService.create(this.formulario.value);
    alert('Post insertado')

    //Navego hacia la ruta/posts
    this.router.navigate(['/posts'])

    //Si quiero crear un nuevo post
    /* this.formulario.reset() */

  }

}
