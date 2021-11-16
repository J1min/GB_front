import matplotlib.pyplot as plt
plt.rc('font', family='AppleGothic') 
plt.rcParams['axes.unicode_minus'] = False 
# 연습
x = [2, 3, 6, 7, 9]
#y = [50, 20, 30, 40, 10]
plt.plot(x)
#plt.plot(x,y)
plt.title("한글이안나와요")
plt.show()