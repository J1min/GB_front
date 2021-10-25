temp = [
    10.8,
    8.5,
    8.7,
    7.9,
    5.1,
    8.1,
    8.2,
    10.4,
    11,
    9.9,
    7.8,
    11.1,
    14.5,
    12.2,
    12.6,
    12.9,
    13.7,
]
minr = 9999
maxr = 0
sum1 = 0

for i in temp:
  if(i<minr):
    minr = i
  if(i>maxr):
    maxr = i
  sum1 = sum1 + i

avg = sum1/i

print("최고 기온{}".format(maxr))
print("최저 기온{}".format(minr))
print("평균 기온{}".format(avg))
