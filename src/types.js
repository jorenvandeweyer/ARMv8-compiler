module.exports = {
    "R":{
        order: ["opcode", "rm", "shamt", "rn", "rd"],
        params: {
            "opcode": {
                width: 11
            },
            "rm": {
                width: 5
            },
            "shamt": {
                width: 6
            },
            "rn": {
                width: 5
            },
            "rd":{
                width: 5
            }
        }
    },
    "D":{
        order: ["opcode", "dtaddr","op", "rn", "rt"],
        params: {
            "opcode": {
                width: 11
            },
            "dtaddr": {
                width: 9
            },
            "op": {
                width: 2
            },
            "rn": {
                width: 5
            },
            "rt": {
                width: 5
            }
        }
    },
    "CB":{
        order: ["opcode", "condbranchaddr", "rt"],
        params: {
            "opcode": {
                width: 8
            },
            "condbranchaddr": {
                width: 19
            },
            "rt": {
                width: 5
            }
        }
    },
    "B":{
        order: ["opcode", "branchaddr"],
        params: {
            "opcode": {
                width: 6
            },
            "branchaddr": {
                width: 26
            }
        }
    }
};
