# f = open("test/python/text/test.txt","r",encoding="utf-8")
# f.write("안녕")
# data = f.readlines()
# f.close()

# fp = open('test/python/text/temp.txt', "r", encoding="utf-8")
# data = fp.readlines()
# fp.close()
# print(data)
# test/python/text/test.txt
def writeFiles(fileName):
  route = "test/python/text/"+fileName+'.txt'
  f = open(route,'w',encoding='utf-8')
  inputTxt = input("뭐라고쓸까 : ")
  f.write(inputTxt)
  data = f.readlines()
  f.close()
  return data

def openFiles(fileName):
  route = "test/python/text/"+fileName+'.txt'
  f = open(route,'r',encoding="utf-8")
  data = f.readlines()
  f.close()
  print(data)

openFiles('test')
writeFiles('test')