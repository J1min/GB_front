기온 = [5.2,2,3.5,4.8,5,6,7,8,9.1,10,11.1,12.5,3.5]
날짜 = range(1, 14)
sum1 = 0
모두합친딕셔너리 = dict(zip(기온, 날짜))

최고기온 = max(기온)
최저기온 = min(기온)

for i in 기온:
  if i == 최저기온:
    print(모두합친딕셔너리[i], end="일 ")
    print(i, '도')
  if i == 최고기온:
    print(모두합친딕셔너리[i], end="일 ")
    print(i, '도') 
  sum1 = sum1 + i  

print(f'평균은{sum1/len(기온):.2f} 도')  