# 1 - 1번
# for i in range(1,6): print("*"*i) 

# 1 - 2번
# for i in range(1,6):
#  for j in range(1,6):
#    print(" "*j)
#  print("*"*i, end="")

# 1 - 3번
# for i in range(5,0,-1):
#  print("*"*i)

# 1 - 4번
# for i in range(5, 0, -1):
#  print(" " * (5-i),end="")
#  print("*" * i)

# 이상사마의 문제 
for i in range(11, 0, -1):
  if(i==10):
    print(".",end="")
  print()
  for j in range(1, 11):
    if i==j:
      print(".",end="")
    print(j%10,end="")  