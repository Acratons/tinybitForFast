/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from liusen
load dependency
"Tinybit": "file:../pxt-Tinybit"
*/

//% color="#006400" weight=20 icon="\uf1b9"
namespace TinybitForFast {

    const PWM_ADD = 0x01
    const MOTOR = 0x02
    const RGB = 0x01
    
  

    function setPwmMotor(speed1: number, speed2: number, speed3: number, speed4: number): void {
      
        let buf = pins.createBuffer(5);
        buf[0] = MOTOR;
       
        buf[1] = speed1; buf[2] = 0; buf[3] = 0; buf[4] = speed2; 
        pins.i2cWriteBuffer(PWM_ADD, buf);
    }

   export function CarSetSpeed( speed1: number, speed2: number, speed3: number, speed4: number): void {
        
        this.setPwmMotor(speed1,speed2,speed3,speed4)
    }    


}
