from threading import Thread
import time
import sys
import os

import websocket
import serial

def restart_program():
    python = sys.executable
    os.execl(python, python, *sys.argv)

def getTxt(txt):
    try:
        f = open(txt)
        w = f.read()
        f.close()
    except Exception as err:
        print("## "+txt+"读取失败 ##")
    return w

def com_r(ser, n):
    try:
        r = ser.read(n)
    except Exception as err:
        print("## com读取失败 ##")
        time.sleep(1)
        restart_program()
    return r

def com_w(ser, w):
    try:
        w = "\\x" + w
        w = eval('b"' + w + '"')
        print(w)
        ser.write(w)
    except Exception as err:
        print("## com写入失败 ##")
        print(w)
        time.sleep(1)


def emit(val):
    def run():
        print("ws发送"+val)
        ws.send(val)
    Thread(target=run).start()

def on_message(ws, msg):
    print("## ws接收数据 " + msg + " ##")
    json = msg.split("_")
    if json[0] == "20":
        com_w(ser1, json[1])
    if json[0] == "21":
        com_w(ser2, json[1])


def on_error(ws, error):
    print("### ws error ###")


def on_close(ws):
    print("### ws连接失败 "+host+" ###")
    time.sleep(1)
    restart_program()

def on_open(ws):
    print("### ws连接成功 ###")
    def com():
        try:
            while True:
                text1 = com_r(ser1, 2)
                if text1:
                    t1 = str(text1)
                    t1 = t1.replace("'", '')
                    t1 = t1.replace("\\", '')
                    emit("io_"+t1)

                text2 = com_r(ser2, 2)
                if text2:
                    t2 = str(text2)
                    t2 = t2.replace("'", '')
                    t2 = t2.replace("\\", '')
                    emit("io_" + t2)

                time.sleep(0.001)
        except Exception as err:
            time.sleep(1)
            restart_program()
    Thread(target=com).start()


if __name__ == "__main__":
    port1 = getTxt('com_1.txt')
    port2 = getTxt('com_2.txt')
    try:
        ser1 = serial.Serial(port=port1, baudrate=9600, timeout=2)
        print("## " + port1 + "连接成功 ##")
    except Exception as err:
        print("## "+port1+"连接失败 ##")
        time.sleep(3)
        restart_program()

    try:
        ser2 = serial.Serial(port=port2, baudrate=9600, timeout=2)
        print("## " + port2 + "连接成功 ##")
    except Exception as err:
        print("## "+port2+"连接失败 ##")
        time.sleep(3)
        restart_program()

    host = getTxt('ws.txt')
    ws = websocket.WebSocketApp(host,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()

