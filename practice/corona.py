import string
word = ''

lst = list(range(1, 27))
tp = tuple(string.ascii_lowercase)
diction = dict(zip(tp, lst))
print(diction)
while word != 'q':
  sum1 = 0
  word = input("단어를 입력해주세요 : ")
  if word == 'q':
    print("감사링 감사띠")
    break
  for i in word:
    print(i, diction[i])
    sum1 = sum1 + diction[i]
  print(sum1)  