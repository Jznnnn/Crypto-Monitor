(function() {
const electron = require('electron')
const path = require('path')
const axios = require('axios')

function getxmr() {
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=XMR&tsyms=USD')
  .then(res => {
    const xmr = res.data.XMR.USD
    monero.innerText = '$' + xmr.toLocaleString('en')
  })
}

getxmr()
setInterval(getxmr, 2500);
})();
