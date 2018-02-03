import socket

port = 15001
host = "localhost"
upd = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
upd.bind(('', 0))
upd.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
addr = ('255.255.255.255', port)

send = b"\xff\xff\xff\xff\xff\xff"
t = 1
for i in range(0, 16):
    send = send+b"\x00\xE0\x67\x05\xC5\xC2"
print(send)
upd.sendto(send , addr)