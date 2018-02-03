import socket

port = 15001
host = "localhost"
upd = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

addr = ('192.168.3.5', port)

send = b"shut"
print(send)
upd.sendto(send , addr)