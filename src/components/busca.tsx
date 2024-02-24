interface props {
  cidade: string,
  setCidade: any,
  buscarClima(): any,
}

export function Busca({cidade, setCidade, buscarClima}: props){
  return (
    <div className="flex m-16 gap-4 items-center "> 
      <input 
      placeholder="Digite uma cidade..." 
      className=" outline-none hover:ring-slate-500 p-3 rounded-md shadow-lg shadow-zinc-800/50" 
      type="text" 
      onChange={(e) => setCidade(e.target.value)}
      value={cidade}
      />
      <button onClick={buscarClima} className="w-20 rounded-md h-9 bg-sky-400 shadow-lg shadow-sky-900/50 hover:bg-sky-500 hover:text-slate-100">Buscar</button>
    </div>
  )
}