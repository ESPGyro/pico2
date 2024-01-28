const PG_ADDR = 0x66;
let send_id = 255;
//% color="#AA278D" icon="\uf2dc" weight=50
namespace Picogame {
    //% block
    //% blockId="sensor_read" block="Receive data"
    export function i2cRead(): number {
	let i2cbuf = pins.createBuffer(1);
          i2cbuf[0] = send_id; 
        pins.i2cWriteBuffer(PG_ADDR, i2cbuf);
        let readbuf = pins.i2cReadBuffer(PG_ADDR, 1);
	let receivedData = readbuf[0];
	if (receivedData !== undefined) {
            send_id = readbuf[0];
	} else {
	    receivedData =0;
	}
		return receivedData;
    }
    //% blockId="sensor_write" block="Broadcast value |%v"
    //% v.min=0 v.max=200
    export function i2cwrite(v: number): void {
	let i2cbuf1 = pins.createBuffer(1);
        i2cbuf1[0] = v;
        pins.i2cWriteBuffer(PG_ADDR, i2cbuf1);
    }	
}
