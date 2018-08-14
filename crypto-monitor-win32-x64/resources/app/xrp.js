(function() {
const electron = require('electron')
const path = require('path')
const axios = require('axios')

function getXRP() {
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=XRP&tsyms=USD')
  .then(res => {
    const xrp = res.data.XRP.USD
    xrpc.innerText = '$' + xrp.toLocaleString('en')
  })
}

getXRP()
setInterval(getXRP, 2500);
})();
