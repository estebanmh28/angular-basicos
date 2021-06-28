import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
heroes:string[]=['Spiderman','Thor','Batman','Lasso','Hulk ']
heroeBorrado:string='';

borrarHeroe(){
  //console.log('borrando...')
 /*  return this.heroes.splice(this.heroes.length -1) */
  this.heroeBorrado = this.heroes.shift() || " ";
  
}
}
