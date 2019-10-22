const request = require('request')
// const url = 'https://api.darksky.net/forecast/da535f0d8f2556641c06cf5d5a34f945/37.8267,-122.4233'

// request({url:url,json:true}, (error,response)=> {
//     if(error){
//         console.log('not able to connect')
//     }
//     else if(response.body.error){
//         console.log('uable to locate')
//     }
//     else {
//         console.log(response.body.daily.data[0].summary +response.body.currently.temperature +' degrees outsude'+' there is '+ response.body.currently.precipProbability +'% chance of rain')

//     }
    
    
 
    
//     //console.log(response.body.daily.data[0].summary +' degrees outsude'+' there is '+ response.body.currently.precipProbability +'% chance of rain')
// })

 const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?access_token=pk.eyJ1IjoiemFoZWV0IiwiYSI6ImNrMXJxYXdwYzA3OXkzb3FocXhkbnh1OXkifQ.-EUAd2efajlbDyp4NFhZHw&limit=1'
 
  request({url:geoCodeUrl,json:true}, (error,response)=>{
      if(error){
          console.log('network discoonnected')
      }
      else if(response.body.features.length ===0)
      {
          console.log('url issue')
      }
      else{
     const lat = response.body.features[0].center[1]
     const longd =response.body.features[0].center[0]
     console.log(response.body.features[0].place_name)
     console.log(lat,longd)}
  })