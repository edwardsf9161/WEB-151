# Web-151 
# M4T2 - Python Graphics Part 2 - Snowflake
# Florinda Edwards
# 06/24/2018



import turtle
import random
edis = turtle.Turtle()


turtle.Screen().bgcolor("blue")
colours = ["cyan", "purple", "white", "blue"]

edis.color("orange")

edis.penup()
edis.forward(90)
edis.left(45)
edis.pendown()

def branch():
    for i in range(3):
        for i in range(3):
            edis.forward(30)
            edis.backward(30)
            edis.right(45)
        edis.left(90)
        edis.backward(30)
        edis.left(45)
    edis.right(90)
    edis.forward(90)

for i in range(8):
    branch()
    edis.left(45)
