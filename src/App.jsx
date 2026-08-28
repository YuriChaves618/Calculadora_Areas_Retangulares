import { useState } from 'react'
import './App.css'

function App() {

  const [nome, setNome] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [altura , setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function Calcular(){

    let numeroAltura = parseFloat(altura);
    let numeroComprimento = parseFloat(comprimento);

    if(numeroAltura > 0 && numeroComprimento > 0  ){
      let area = numeroAltura * numeroComprimento;
      setResultado(area);
    }else{
      alert("Informe valores válidos!");
    }

  }

  function Apagar(){

    setAltura("");
    setComprimento("");
    setNome("");
    setResultado("");
  }

  return(
    <div>

      <div className = "header">
        <h1> Calculadora de Áreas Retangulares </h1>
      </div>

      <div className = "nomeLocal">

        <form>
          <label>
            <h2> Qual o nome do ambiente ?</h2>

            <input
            type = "text"
            value = {nome}
            id = "nome"
            onChange = {(evento) => setNome(evento.target.value)}
            />
          </label>
        </form>
        </div>

        <br/>

        <div className = "medidas">

        <form>
            <label>
              <h2> Informe as medidas do ambiente em metros </h2>
              <p> Atenção : Números iguais a 0 ou negativos não serão aceitos </p>

              <input
              type = "number"
              value = {altura}
              id = "altura"
              onChange = {(evento) => setAltura(evento.target.value)}
              placeholder = "Informe a Altura"
              />

              <br/>

              <input
              type = "number"
              id = "comprimento"
              value = {comprimento}
              onChange = {(evento) => setComprimento(evento.target.value)}
              placeholder = "Informe o Comprimento"
              />

            </label>

        </form>
        </div>

        <div className ="areaResultado">

          <button type = "button" className = "calcular" onClick = {Calcular}> Cálcular Área </button>

          {resultado && ( 
            <section className="exibicaoResultado">
             <p> <strong>Nome do ambiente:</strong> {nome} </p> 
             <div className="desenhoArea"> <span className="valorAltura"> {altura}M </span> 
             <div className="retangulo"> <span className="valorDentro"> {resultado}M² </span> 
             </div> <span className="valorComprimento"> {comprimento}M </span> 
             </div> <p> <strong>Área do ambiente:</strong> {resultado}M² </p> </section> 
            )}

          <button type ="button" className = "apagar" onClick = {Apagar}> Limpar Resultados </button>
        </div>

      <div>

      </div>

    </div>
  ); 
}
export default App
