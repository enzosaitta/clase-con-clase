// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  nombreDepartamento: String;
  constructor(nombreDepto: String) {
    this.nombreDepartamento = nombreDepto;
  }
  getName() {
    return this.nombreDepartamento;
  }
}

class Piso {
  nombrePiso: string;
  departamentos: Departamento[];
  constructor(nombre: string) {
    this.nombrePiso = nombre;
    this.departamentos = [];
  }
  pushDepartamento(departamentos: Departamento) {
    return this.departamentos.push(departamentos);
  }
  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
}
class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const buscarPiso = this.pisos.find((p) => p.nombrePiso == nombreDePiso);
    return buscarPiso.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    //Departamento [] --> establece el tipo de retorno del modulo.
    const pisoBuscado = this.pisos.find((p) => p.nombrePiso == nombreDePiso);
    return pisoBuscado.getDepartamentos();
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("Realice un cambio");
  consol.log("aca hice otro cambio, hace pull rey")
}
main();
