f = open("test/python/text/test.txt","r",encoding="utf-8")
f.write("안녕")
data = f.readlines()

f.close()

print(data)