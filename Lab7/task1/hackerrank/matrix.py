import re

n, m = list(map(int, input().split()))
string = [" "]*n*m
for i in range(n):
    inp = input()
    for j in range(m):
        string[i+n*j] = inp[j]
print(re.sub(r"([a-z]|[0-9]|[A-Z])(!|@|#|%|&|\$| )+([a-z]|[0-9]|[A-Z])",r"\1 \3",''.join(string)))
