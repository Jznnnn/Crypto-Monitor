(function() {
const electron = require('electron')
const path = require('path')
const axios = require('axios')

function getBTC() {
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
  .then(res => {
    const cryptos = res.data.BTC.USD
    btc.innerText = '$' + cryptos.toLocaleString('en')
  })
}

getBTC()
setInterval(getBTC, 1000);
})();
