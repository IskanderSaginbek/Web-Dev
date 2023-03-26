s = input()
k = int(input())
n = len(s)
subs = [""]*k
for i in range(0,n,k):
    for j in range(k):
        if s[i+j] not in subs[i//k]:
            subs[i//k] += s[i+j]
print(subs)
        
