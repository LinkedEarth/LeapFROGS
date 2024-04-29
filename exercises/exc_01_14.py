_____ caesar_cypher(_____,_______):
    ans = ""
    # iterate over the given text
    _______ i in range(len(message)):
        ch = message[i]
        # check if space is there then simply add space
        _____ ch==" ":
            ans+=" "
        # check if a character is uppercase then encrypt it accordingly 
        ______ (ch.isupper()):
            ans+= chr((ord(ch) + shift-65) % 26 + 65)
        # check if a character is lowercase then encrypt it accordingly
        _______:
            ans+= chr((ord(ch) + shift-97) % 26 + 97)
    
    _________


text = ["I love geoscience", "Geology ROCKS"]
ans = []

for item in text:
    ans.append(caesar_cypher(item))
    