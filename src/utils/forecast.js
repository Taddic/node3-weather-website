const request = require('request')

const foreceast = (latitude, longitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=b58b14ddcf37f772b4c8dc77bb7f624a&query=' + latitude + ',' + longitude + '&units=m'

   request({ url, json: true }, (error, { body }) => {
      if (error) {
         callback('Unable to connect to weather services!', undefined)
      } else if (body.error) {
         callback('Unable to find location', undefined)
      } else {
         callback(undefined, body.current.weather_descriptions[0] + '. It is ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
      }
   })
}


module.exports = foreceast



