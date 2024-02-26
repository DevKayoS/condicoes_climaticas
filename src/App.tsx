import { useState, useEffect } from "react";
import axios from "axios";


import { Busca } from "./components/busca";
import { ClimaAtual } from "./components/climaAtual";
import { Previsao } from "./components/previsao";


export function App() {
  const [cidade, setCidade] = useState('')
  const [clima, setClima] = useState(null)
  const [previsao, setPrevisao] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY || ""

  useEffect(()=> {

    navigator.geolocation.getCurrentPosition(async(position)=>{

      const lat = position.coords.latitude
      const lon = position.coords.longitude

      const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)

      setCidade(resposta.data.name)
      setClima(resposta.data)
    })

  }, [apiKey])

  const buscarClima = async() => {
    try {
      const repostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
      const repostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)

      setClima(repostaClima.data)
      setPrevisao(repostaPrevisao.data.list.slice(0,5))

    } catch (error) {
      console.log("Erro ao buscar clima: ", error)
    }
    console.log(clima)
    console.log(previsao)

  }
  return (
    <div className="flex flex-col items-center justify-center space-y-10 ">
      <div className="flex flex-col items-center  bg-slate-300/30 shadow-xl  shadow-zinc-800/60 w-96  mt-40 rounded-lg ">
        <h1 className="text-2xl font-bold ">Condições Climáticas</h1>
        <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima}/>
        {clima && <ClimaAtual clima={clima}/>}
      </div>
      <div className="bg-slate-300/30 rounded-md w-96  shadow-xl  shadow-zinc-800/60">
        {previsao.length > 0 && <Previsao previsoes={previsao}/> }
      </div>
    </div>
    
  )
}


