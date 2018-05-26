# ARMv8-Compiler

## Description

A small compiler which is easily extendable for testing self written processor architectures, written in Verilog HDL or VHDL.

This project was initially written for testing this architecture:
![](https://i.imgur.com/aNqqJm8.png)

## Usage

### Interactive mode:
`npm start` or `node index.js`

Interactive mode will ask wether you want to convert a file or only a single instruction.

### Argument mode:
`node index.js [option] [param]` or `npm start -- [option] [param]`

By passing the arguments while executing the command the compiler won't ask for any other information when running and directly return your output.

##### Options
* `-f` will convert a whole file. The parameter needs to be a filename. The output will be saved in a new file.
    * example: `-f example.txt`
* `-s` will convert a single line. The parameter needs to be an instruction surrounded by quotes.
    * example: `-s "ADD X2 X16 X18"`

## Supported Instructions

* `ADD`
* `SUB`
* `AND`
* `ORR`
* `EOR`
* `LSL`
* `LSR`
* `LDUR`
* `STUR`
* `CBZ`
* `CBNZ`
* `B`
* `BL`
* `BR`
