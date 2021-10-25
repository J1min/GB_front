import string
a = string.ascii_lowercase
b = range(1, 27)
c = dict(zip(a,b))
sum=0
word = input("문자를 입력하시옹")
for i in word:
  if word != 'q':
    print(c[i])
    sum = sum + c[i]

print('-'*10)
print(sum)
