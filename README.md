<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BTC-Chat AI | SAB Coin</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: #f5f5f5;
      color: #222;
    }
    .header {
      text-align: center;
      padding: 40px 20px;
      background: #fff;
    }
    .header h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }
    .btn {
      background: #e6007a;
      color: white;
      padding: 12px 25px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .features {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 40px auto;
      max-width: 1000px;
      gap: 20px;
    }
    .card {
      background: white;
      padding: 25px;
      border-radius: 10px;
      text-align: center;
      flex: 1 1 250px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .card img {
      height: 40px;
      margin-bottom: 15px;
    }
    .chart {
      max-width: 800px;
      margin: 40px auto;
    }
    iframe {
      width: 100%;
      height: 400px;
      border: none;
    }
    @media (max-width: 600px) {
      .features {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>AI-Powered Chat and Analysis for Crypto Trading</h1>
    <button class="btn">Jetzt starten</button>
  </div>

  <div class="features">
    <div class="card">
      <img src="https://img.icons8.com/ios-filled/50/bitcoin.png" alt="Chat">
      <h3>Chat Analysis</h3>
      <p>Erhalte Einblicke & triff bessere Entscheidungen</p>
    </div>
    <div class="card">
      <img src="https://img.icons8.com/ios-filled/50/line-chart.png" alt="Chart">
      <h3>Live Chart</h3>
      <p>Bleib aktuell mit den neuesten Kursbewegungen</p>
    </div>
    <div class="card">
      <img src="https://img.icons8.com/ios-filled/50/robot-2.png" alt="Bot">
      <h3>Trading Bot</h3>
      <p>Automatisiere Trades & maximiere Gewinne</p>
    </div>
  </div>

  <div class="chart">
    <h2 style="text-align: center;">Live Bitcoin Chart</h2>
    <iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_8be76&symbol=BINANCE%3ABTCUSDT&interval=30&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=Etc%2FUTC&withdateranges=1&hidevolume=1&hideideas=1&locale=de" allowfullscreen></iframe>
  </div>
</body>
</html>
