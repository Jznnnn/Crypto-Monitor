(function() {
const electron = require('electron')
const path = require('path')
const axios = require('axios')

function getlitecoin() {
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTC&tsyms=USD')
  .then(res => {
    const ltc = res.data.LTC.USD
    litecoin.innerText = '$' + ltc.toLocaleString('en')
  })
}

getlitecoin()
setInterval(getlitecoin, 1000);
})();
