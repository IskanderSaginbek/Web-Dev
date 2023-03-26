k, m = map(int,input().split())
sum_ = 0
for i in range(k):
    inp = list(map(int,input().split()[1:]))
    sum_ += max(inp)**2
print(sum_)
