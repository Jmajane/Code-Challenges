# from colormap import rgb2hex

# def rgb(r, g, b):
#     return rgb2hex(r, g, b)
# print(rgb())


def func(input_string):

    m = {}

    for i in range(len(input_string)):

        c = input_string[i]

        m[c] = i

    return m
print(func(input_string))