import re

regex_integer_in_range = re.compile(r"^[1-9][0-9]{5}$")
regex_alternating_repetitive_digit_pair = re.compile(r"(\d)(?=\d\1)")
P = input()

print(re.findall(regex_alternating_repetitive_digit_pair, P))
print(bool(re.match(regex_integer_in_range, P))
and len(re.findall(regex_alternating_repetitive_digit_pair, P)) < 2)
