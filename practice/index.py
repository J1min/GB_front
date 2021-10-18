def calculator(buho,a,b):
  if buho == '+':
    return a+b
  elif buho == '-':
    return a-b
  elif buho == '*':
    return a*b
  elif buho == '/':
    return a/b
      


print(calculator("+",1,2))
print(calculator("*",3,2))
print(calculator("-",1,2))
print(calculator("/",6,2))
