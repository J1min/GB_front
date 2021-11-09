import turtle as t
t.color("pink")
t.speed(0)

# 꽃잎 한장 그리기
def petal():
  for i in range(2):
    t.circle(200,100)
    t.left(80)
# 꽃 그리기
def draw_flower(petal_num):
  for i in range(petal_num):
    petal()
    t.left(360/petal_num)
    t.dot(50,"yellow") # 수술 그리기 

n = int(input())

draw_flower(n)

t.end_fill()

t.mainloop()