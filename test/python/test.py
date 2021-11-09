def is_odd(num):
  if num%2==1:
    return True
  else:
    return False

def is_even(num):
  if num%2==0:
    return True
  else:
    return False

def is_prime(num):
  cnt = 0
  for i in range(2,num):
    if(num%i==0):
      cnt=cnt+1
  if cnt>1:
    return True
  else:
    return False

def show(num):
  print( is_even(num))
  print(is_odd(num))
  print(is_prime(num))

show(3)