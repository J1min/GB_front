import matplotlib.pyplot as plt
plt.rc('font', family='AppleGothic') 
plt.rcParams['axes.unicode_minus'] = False 
# 연습
data = {'서울':[81,0.052,0.4] ,
        '부산':[54,0.072,0.4],
        '대구':[55,0.06,0.4],
        '인천':[52,0.06,0.5],
        '광주':[61,0.064,0.5],
        '대전':[71,0.064,0.4],
        '울산':[60,0.068,0.4],
        '경기':[64,0.06,0.4],
        '강원':[62,0.062,0.4],
        '충북':[59,0.067,0.4],
        '충남':[65,0.063,0.4],
        '전북':[65,0.068,0.4],
        '전남':[51,0.062,0.4],
        '세종':[69,0.06,0.5],
        '경북':[57,0.066,0.4],
        '경남':[49,0.074,0.4],
        '제주':[66,0.076,0.3]}
area = list(data.keys())
value = list(data.values())
pm10 = [value[0]]
o3 = [value[1]]
co = [value[2]]

fig = plt.figure(figsize=(12, 3))

ax1 = fig.add_subplot()
ax2 = fig.add_subplot()
ax3 = fig.add_subplot()

for item in value :
    pm10.append(item[0])
    o3.append(item[1])
    co.append(item[2])
    
# print(pm10)
# print(o3)
# print(co)
# plt.plot(pm10,o3)
# plt.plot(x,y)
plt.subplot(3,1,1)
plt.plot(pm10, color='r', marker ='o', linestyle='--', label='pm10')
plt.xticks(pm10, area)
plt.legend()

plt.subplot(3,1,2)
plt.plot(o3, color='g', marker ='o', linestyle='--', label='pm10')
plt.xticks(o3, area)
plt.legend()

plt.subplot(3,1,3)
plt.plot(co, color='b', marker ='o', linestyle='--', label='pm10')
plt.xticks(co, area)
plt.legend()

plt.title("나의그래프")
plt.show()