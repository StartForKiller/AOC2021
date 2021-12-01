file = open("./adventofcode/input.txt", "r")

filereaded = file.read()
lines = filereaded.split("\n")

last = -1
increased = 0
for i in range(len(lines)):
    value = int(lines[i])
    if last == -1:
        last = 0
        continue
    elif value > last:
        increased += 1
    last = value

print(increased)
