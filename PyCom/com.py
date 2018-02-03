from threading import Thread
import time
import sys
import os

import websocket
import serial

def restart_program():
    python = sys.executable
    os.execl(python, python, *sys.argv)

def com_r(n):
    try:
        print("## com写入 " + n + " ##")
        r = ser.read(n)
    except Exception as err:
        print("## com读取失败 ##")
        time.sleep(1)
        restart_program()
    return r

def com_w(w):
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
    com_w(msg);


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
                text = ser.read(2)
                if text:
                    if text == bytes(b'\x01'):
                        print("## 接受到com口信息 ##")
                        print(text)
                    elif text == bytes(b'\x02'):
                        print("## 接受到com口信息 ##")
                        print(text)
                        emit("1")
                    else:
                        print("## 接受到com口信息，但未注册响应动作 ##")
                        print(text)

                time.sleep(0.001)
        except Exception as err:
            time.sleep(1)
            restart_program()
    Thread(target=com).start()


if __name__ == "__main__":
    port = "COM17"
    try:
        ser = serial.Serial(port=port, baudrate=9600, timeout=2)
        print("## " + port + "连接成功 ##")
    except Exception as err:
        print("## "+port+"连接失败 ##")
        time.sleep(3)
        restart_program()

    host = "ws://localhost:3002/"
    ws = websocket.WebSocketApp(host,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()

