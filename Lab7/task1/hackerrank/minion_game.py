vowels = ['a','e','i','o','u']
s = input()
substrs = set()
n = len(s)
for i in range(n+1):
    for j in range(i+1,n+1):
        substrs.add(s[i:j])
subs = list(substrs)
v = 0
c = 0
for su in subs:
    if su[0] in vowels:
        v += s.count(su)
    else:
        c += s.count(su)

if v > c:
    print("Kevin", v)
elif v < c:
    print("Stuart", c)
else:
    print("Draw")
