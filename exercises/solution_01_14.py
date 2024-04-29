def caesar_cypher(message,shift=5):
    ans = ""
    # iterate over the given text
    for i in range(len(message)):
        ch = message[i]
        # check if space is there then simply add space
        if ch==" ":
            ans+=" "
        # check if a character is uppercase then encrypt it accordingly 
        elif (ch.isupper()):
            ans+= chr((ord(ch) + shift-65) % 26 + 65)
        # check if a character is lowercase then encrypt it accordingly
        else:
            ans+= chr((ord(ch) + shift-97) % 26 + 97)
    
    return ans


text = ["I love geoscience", "Geology ROCKS"]
ans = []

for item in text:
    ans.append(caesar_cypher(item))