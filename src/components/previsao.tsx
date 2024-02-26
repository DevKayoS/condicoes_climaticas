export function Previsao({previsoes}: any){
  return(
    <div className="flex flex-col items-center space-y-4">
     <h4 className="font-bold"> Previsão para as próximas horas</h4>
     <ul>
        {previsoes.map((previsao: any)=> (
            <li className="flex items-center text-lg hover:text-slate-50 " key={previsao}>
              <img src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`} alt="" />
               {previsao.main.temp} ºC - {previsao.weather[0].description}
               <p>{}</p>
            </li>
        ))}
      
     </ul>
    </div>
  )
}