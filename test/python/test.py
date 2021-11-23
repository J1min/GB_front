
money = input("님돈얼마있? ")

def bitcoinIsGood(money):
  import json
  from urllib.request import urlopen

  url = "https://api.coindesk.com/v1/bpi/currentprice/KRW.json"
  response = urlopen(url)
  source = response.read().decode("utf-8")

  tree = json.loads(source)
  price = (tree['bpi']['KRW']['rate_float'])
  return float(money)/price


print(f'{bitcoinIsGood(money)}')

