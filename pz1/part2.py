file = open("./adventofcode/input.txt", "r")

filereaded = file.read()
lines = filereaded.split("\n")
sumlist = []

for i in range(len(lines)):
    lines[i] = int(lines[i])

for i in range(len(lines) - 2):
    sumlist.append(lines[i + 0] + lines[i + 1] + lines[i + 2])

last = -1
increased = 0
for i in range(len(sumlist)):
    value = sumlist[i]
    if last == -1:
        last = 0
        continue
    elif value > last:
        increased += 1
    last = value

print(increased)
