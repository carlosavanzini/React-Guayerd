import { useState } from 'react';
import './App.css';
const App=()=>{
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

  const [leyenda, setLeyenda] = useState("");
  const [LeyendaCopiado, setLeyendaCopiado] = useState("");
  const [disabled, setDisabled] = useState(true);

  const cargarLeyenda = (e) => {
    setLeyenda(e.target.value);
    if (e.target.value.length === ""){
      limpiarLeyenda( );
      setDisabled(true)
    }else {
      setLeyenda(e.target.value);
      setDisabled(false)
    }
  };

  const copiarLeyenda = () => {
    setLeyendaCopiado(leyenda);
  };

  const limpiarLeyenda = () => {
    setLeyenda(" ");
    setLeyendaCopiado(" ")
  }

  return (
    <div className="App">
      <input
        name="leyenda"
        onChange={(e) => cargarLeyenda(e)}
        placeholder="Nombre"
        type="text"
      />
      <br />
      <button onClick={copiarLeyenda} > Mostar leyenda</button> <br />
      <button onClick={limpiarLeyenda} disabled={disabled}> Limpiar leyenda</button> <br />
      <input value={LeyendaCopiado} />
    </div>
  );


}
export default App;
