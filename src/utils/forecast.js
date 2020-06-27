const request= require('request')

const forecast=(lat,long,callback)=>{

    const url='http://api.weatherstack.com/current?access_key=7e1849ad25fd1f8aa06c4dd8f7de1966&query='+lat+','+long+'&units=m'
 
    request({url:url,json:true},(error,response)=>{
 
       if(error){
 
           callback('Unable to connect to forecast services !',undefined)
 
       }else if(response.body.error){
 
          callback('Unable to forecast for this location. Try with another serach.',undefined)
 
       }else{

        const forecastResult= response.body.current.weather_descriptions[0]+' through out the day. The temperature is '+response.body.current.temperature
        +' degree out. But it feels like '+response.body.current.feelslike+' degree.'

          callback(undefined,forecastResult)

       }
 
    })
 
 }

 module.exports=forecast