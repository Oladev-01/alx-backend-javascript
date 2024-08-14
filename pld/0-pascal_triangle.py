#!/usr/bin/python3
"""pascal's triangle"""

# i first wrote a factorial function;
def factorial(n):
    """factorial function"""
    if n == 0 or n == 1:
        return 1 #this is beacuse i need a break case for my function
    return n * factorial(n - 1)

# comb function
def comb(row, col):
    """combination function"""
    return factorial(row) // (factorial(row - col) * factorial(col))

def pascal_triangle(n):
    """pascal's triangle function"""
    # we check if the arg parsed is <= 0
    if n <= 0:
        return []
    # we need two loops: one for outer and one for inner
    pascal_list = []
    for row in range(n):
        new_list = []
        for col in range(row+1):
            new_list.append(comb(row, col))
        pascal_list.append(new_list)
    return pascal_list
