// import { useState } from 'react';
// import './App.css';
// const App=()=>{
//   const [valor, setValor] = useState(0);//HOOK EL FAMOSO
//   const [estaDeshabilitado,setEstaDeshabilitado]= useState(true)//hook
//   const agregarleUno=()=>{
//     setValor(valor + 1)
//     setEstaDeshabilitado(false);
//   };
//   const restarleUno=()=>{
//     setValor(valor-1)
//     if(valor===1){
//     setEstaDeshabilitado(true)}
//   };

//   const Restablecer=()=>{
//     setValor(0)
//     setEstaDeshabilitado(true);
//   }

//   return(
//        <div className="App">
//          <div>{valor}</div>
//          <button onClick={agregarleUno}> + </button>
//          <button disabled={estaDeshabilitado} onClick={restarleUno}> - </button>
//          <button onClick={Restablecer}> Restablecer </button>
//         </div>
// );


  // const [nombre, setNombre] = useState("");
  // const [nombreCopiado, setNombreCopiado] = useState("");

  // const cargarNombre = (evento) => {
  //   setNombre(evento.target.value);
  //   console.log(evento.target);
  // };

  // const copiarNombre = () => {
  //   setNombreCopiado(nombre);
  // };
  // return (
  //   <div className="App">
  //     <input
  //       name="nombre"
  //       onChange={(evento) => cargarNombre(evento)}
  //       placeholder="Nombre"
  //       type="text"
  //     />
  //     <br />
  //     <button onClick={copiarNombre}> Copiar Nombre </button> <br />
  //     <input value={nombreCopiado} />
  //   </div>
  // );

  // const [leyenda, setLeyenda] = useState("");
  // const [LeyendaCopiado, setLeyendaCopiado] = useState("");
  // const [disabled, setDisabled] = useState(true);

  // const cargarLeyenda = (e) => {
  //   setLeyenda(e.target.value);
  //   if (e.target.value.length === ""){
  //     limpiarLeyenda( );
  //     setDisabled(true)
  //   }else {
  //     setLeyenda(e.target.value);
  //     setDisabled(false)
  //   }
  // };

  // const copiarLeyenda = () => {
  //   setLeyendaCopiado(leyenda);
  // };

  // const limpiarLeyenda = () => {
  //   setLeyenda(" ");
  //   setLeyendaCopiado(" ")
  // }

  // return (
  //   <div className="App">
  //     <input
  //       name="leyenda"
  //       onChange={(e) => cargarLeyenda(e)}
  //       placeholder="Nombre"
  //       type="text"
  //     />
  //     <br />
  //     <button onClick={copiarLeyenda} > Mostar leyenda</button> <br />
  //     <button onClick={limpiarLeyenda} disabled={disabled}> Limpiar leyenda</button> <br />
  //     <input value={LeyendaCopiado} />
  //   </div>
  // );



// export default App;

import './App.css';
import {React, useState} from 'react';
function App() {
  const [mostrar, setMostrar] = useState(true);
  const [mostrarParrafo, setMostrarParrafo] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [usuarioNuevo, setUsuarioNuevo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [contraseniaNueva, setContraseniaNueva] = useState("");
  const ingresar = () => {
    setMostrar(false)
  
  }
  const registrar = () => {
    setMostrar(true);
  
  }
  const copiarUsuarioNuevo = (e) => {
    setUsuarioNuevo(e.target.value);
  }
  const copiarContraseniaNueva = (e) => {
    setContraseniaNueva(e.target.value);
  }
  const copiarUsuario = (e) => {
    setUsuario(e.target.value);
  }
  const copiarContrasenia = (e) => {
    setContrasenia(e.target.value);
  }
  const verificar = () => {
    if(usuario === usuarioNuevo && contrasenia === contraseniaNueva){
      setMostrarParrafo(true);// si el if es afirmativo entra por ingreso satisfactorio sino no hace nada hasta que pongamos bien los datos
      setUsuario("");// una vez que ingresa la usuario y contraseña correcta la deja vacia
      setContrasenia("")// una vez que ingresa la usuario y contraseña correcta la deja vacia
    } 
    else{
    }
  }
  return(
  <>
    <div className="App">
      <button onClick={registrar}>SignIn</button>
      <button onClick={ingresar}>LogIn</button>
      <br/>
      { mostrar ? <input value={usuarioNuevo} onChange={(e)=>copiarUsuarioNuevo(e)} placeholder="Usuario Nuevo"/> : <input value={usuario} onChange={(e)=>copiarUsuario(e)} placeholder="Usuario"/> }
      <br/>
      { mostrar ? <input value={contraseniaNueva} onChange={(e)=>copiarContraseniaNueva(e)} placeholder="Contraseña Nueva"/> : <input value={contrasenia} onChange={(e)=>copiarContrasenia(e)} placeholder="Contraseña"/> }
      <br/>
      { mostrar ?<button >Crear Usuario</button> : <button onClick={verificar}>Loguearte</button> }
      <br/>
      { mostrarParrafo ? <p>Ingreso satisfactorio</p> : <p></p> }
    </div>
  </>
  )  
}
export default App;
