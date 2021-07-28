const request = require('request');

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=70a3ef78a34ac6826ce6f7e1046976e0&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    console.log('Datos: ', body);

    if (error) {
      callback(error, undefined);
    } else if (body.error) {
      callback('Unable to find provided location', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}, It is ${body.current.temperature} degrees outside and is 
        ${body.current.humidity}% humid! Its ${body.location.localtime} in ${body.location.name} right now`
      );
    }
  });
};

module.exports = forecast;
