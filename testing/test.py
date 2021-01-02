import sys,time
going = 5

buffer = 100


while (going > 0):

    buffer += going

    print(buffer)
    sys.stdout.flush()
    time.sleep(1)
    going -= 1
