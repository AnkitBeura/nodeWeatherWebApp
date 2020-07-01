const request= require('request')

const covid19=(country,callback)=>{

    const url='https://api.covid19api.com/'+country+'/india/status/confirmed/live?from=2020-05-01T00:00:00Z&to=2020-06-29T00:00:00Z'

    request({url:url,json:true},(error,response)=>{

        if(error){
            callback('Unable to connect to COVID-19 services !',undefined)
        }else if(response.body.message){
            callback(response.body.message)
        }else{
            callback('Confirmed cases')
        }

    })

}

module.exports=covid19