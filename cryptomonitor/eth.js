(function() {
  const electron = require('electron')
  const path = require('path')
  const axios = require('axios')

  function getETH() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
      .then(res => {
        const cryptos = res.data.ETH.USD
        eth.innerText = '$' + cryptos.toLocaleString('en')
      })
  }

  getETH()
  setInterval(getETH, 2000);
})();
