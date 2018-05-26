const readline = require("readline");
const fs = require("fs");

const opcodes = require("./src/opcodes");
const types = require("./src/types");

async function question(string) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(string, (answer) => {
            resolve(answer);
            rl.close();
        })
    });
}

async function main() {
    let action;
    let string;
    if (process.argv.findIndex(str => str[0] === "-") !== -1) {
        let index = process.argv.findIndex(str => str[0] === "-");
        action = process.argv[index].replace("-", "");
        string = process.argv[index+1];
    } else {
        action = await question("Do you want to convert a (f)ile or (s)tring?: ");
        switch (action.toLowerCase()) {
            case "f":
                string = await question("Enter the file name: ");
                break;
            case "s":
                string = await question("Enter the string: ");
                break;
            default:
                console.log(`"${action}" is not a valid option.`);
                return main();
        }
    }

    switch (action) {
        case "f":
            file = fs.readFileSync(string, "utf-8");
            createHex(file).then((compiled) => {
                const filename = createFileName(string);
                console.log(`Created file: ${filename}`);
                fs.writeFileSync(filename, compiled);
            }).catch((err) => {
                console.log(`\x1b[31m${err}\x1b[0m`);
            });
            break;
        case "s":
            createHex(string).then((compiled) => {
                console.log("Result:");
                console.log(compiled);
            }).catch((err) => {
                console.log(`\x1b[31m${err}\x1b[0m`);
            });
            break;
        default:
            console.log(`${action} is not a valid option.`);
            return process.exit(1);
    }

}

function createHex(input) {
    return new Promise((resolve, reject) => {
        input = input.split("\n").map(x => x.split(" "));
        let compiled = [];

        for (let i = 0; i < input.length; i++) {
            if (input[i].length === 0 || input[i][0].length === 0) continue;

            const params = input[i];
            const instr = params.shift().toLowerCase();

            if (instr === "nop") {
                compiled.push(formatToBin(32, "NONE"));
                continue;
            }

            if (!opcodes[instr]) {
                return reject(`Line:${i} "${instr}" is not an opcode`);
            }

            if (opcodes[instr].params.length != params.length) {
                return reject(`Line:${i} not enough parameters - ${instr} ${opcodes[instr].params.join(" ")} - ${opcodes[instr].info}`);
            }

            const instruction = opcodes[instr];
            const format = types[instruction.type];

            const binInstr = format.order.map((p) => {
                if (p === "opcode") {
                    return instruction.opc;
                } else if (instruction.params.map(x => x.toLowerCase()).includes(p)) {
                    const index = instruction.params.map(x => x.toLowerCase()).indexOf(p);
                    const value = params[index];
                    return formatToBin(format.params[p].width, value);
                } else {
                    return formatToBin(format.params[p].width, "NONE");
                }
            }).join("");

            compiled.push(binInstr);
        }

        const result = compiled.map((x) => {
            let hex = parseInt(x, 2).toString(16);
            while (hex.length < 8) {
                hex = "0" + hex;
            }
            return hex;
        }).join("\n");
        resolve(result);
    });
}

function formatToBin(length, value) {
    switch (value[0]) {
        case "X":
            value = value.slice(1);
            break;
        case "#":
            value = value.slice(1);
            break;
        default:
            value = "";
    }

    value = parseInt(value).toString(2);

    while(value.length < length) {
        value = "0" + value;
    }

    return value;
}

function createFileName(filename) {
    if (filename.includes(".")) {
        return filename.replace(".", "_compiled.");
    }
    return `${filename}_compiled`;
}

if (require.main === module) {
    main();
}
