file = open("./pz1/input.txt", "r")

filereaded = file.read()
lines = filereaded.split("\n")
sumlist = []

for i in range(len(lines)):
    lines[i] = int(lines[i])

for i in range(len(lines) - 2):
    sumlist.append(lines[i + 0] + lines[i + 1] + lines[i + 2])

last = -1
increased = 0
for i in range(1, len(sumlist)):
    value = sumlist[i]
    if value > last:
        increased += 1
    last = value

print(increased)
