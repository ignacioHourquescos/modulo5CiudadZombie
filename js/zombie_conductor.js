/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */


  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */

class ZombieConductor extends Enemigo{
    constructor(sprite, x, y, ancho, alto, velocidad, rangoMov,movimiento){
    super(sprite, x, y, ancho, alto, velocidad, rangoMov);
    this.movimiento=movimiento;
  };
}

/* Completar creacion del ZombieConductor */


/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {  
  if (this.movimiento=="v") {
    this.y -= this.velocidad;
  } else {
    //Sino, hace otro movimiento
    this.x -= this.velocidad;
  }


/*

  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
  this.velocidad *= -1;
}
// Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
  this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
}
}


ZombieConductor.prototype.atacar = function() { 
  Jugador.perderVidas(Jugador.vidas);
  }
