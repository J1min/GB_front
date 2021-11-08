number = int(input())
sum = 0
theNum = 0
for i in range(number):
  for j in range(10):
    theNum = input()
    if(int(theNum) % 2 == 1):
      sum = sum + theNum
  print(f'#{i+1} {sum}')