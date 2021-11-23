import json
from urllib.request import urlopen

url = "http://api.open-notify.org/astros.json"
response = urlopen(url)
result = json.loads(response.read())

print("우주닝겐수 : ", result["number"], result["people"])
people = result["people"]

for p in people:
  # print(p[i]["name"], " : ",p[i]["craft"])
  print(p["name"], " : ",p["craft"])
