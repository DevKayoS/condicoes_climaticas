interface Props {
  clima: {
    name: string;
    weather: Array<any>;
    main: {
      temp: number;
    };
  } 
}

export function ClimaAtual({clima}: Props){
  if (!clima) {
    return <div>Carregando...</div>;
  }

  // Verifica se as propriedades necessárias estão presentes em clima
  const { name, weather, main } = clima;
  if (!name || !weather || !weather[0] || !main) {
    return <div/>;
  }
  
  return(
    <div className="flex flex-col items-center mb-6">
      <h3 className="font-bold text-3xl ">{name}</h3>
      {/* Use operador de encadeamento opcional para lidar com a possibilidade de weather[0] ser undefined */}
      <img src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`} alt={weather[0]?.description} />
      <p className="text-2xl">{main.temp}ºC</p>
      <p className="text-2xl">{weather[0]?.description}</p>
    </div>
  )
}