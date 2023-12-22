const axios = require('axios') ;

axios.get('https://www.instagram.com/artcartbydiksha/', {
  headers: {
    'User-Agent': 'Googlebot'
  }
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.error(error);
});