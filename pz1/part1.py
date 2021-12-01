file = open("./pz1/input.txt", "r")

filereaded = file.read()
lines = filereaded.split("\n")

last = -1
increased = 0
for i in range(1, len(lines)):
    value = int(lines[i])
    if value > last:
        increased += 1
    last = value

print(increased)
