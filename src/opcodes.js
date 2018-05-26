module.exports = {
    "add": {
        opc: "10001011000",
        type: "R",
        width: 11,
        info: "R[Rd] = R[Rn] + R[Rm]",
        params: ["Rd", "Rn", "Rm"]
    },
    "sub": {
        opc: "11001011000",
        type: "R",
        width: 11,
        info: "R[Rd] = R[Rn] - R[Rm]",
        params: ["Rd", "Rn", "Rm"]
    },
    "and": {
        opc: "10001010000",
        type: "R",
        width: 11,
        info: "R[Rd] = R[Rn] & R[Rm]",
        params: ["Rd", "Rn", "Rm"]
    },
    "orr": {
        opc: "10101010000",
        type: "R",
        width: 11,
        info: "R[Rd] = R[Rn]|R[Rm]",
        params: ["Rd", "Rn", "Rm"]
    },
    "eor": {
        opc: "11001010000",
        type: "R",
        width: 11,
        info: "R[Rd] = R[Rn] ^ R[Rm]",
        params: ["Rd", "Rn", "Rm"]
    },
    "lsl": {
        opc: "11010011011",
        type: "R",
        width: 11,
        info: "R[Rd] = R[Rn] << shamt",
        params: ["Rd", "Rn", "shamt"]
    },
    "lsr": {
        opc: "11010011010",
        type: "R",
        width: 11,
        info: "R[Rd] = R[Rn] >>> shamt",
        params: ["Rd", "Rn", "shamt"]
    },
    "ldur": {
        opc: "11111000010",
        type: "D",
        width: 11,
        info: "R[Rt] = M[R[Rn] + DTAddr]",
        params: ["Rt", "Rn", "DTAddr"]
    },
    "stur": {
        opc: "11111000000",
        type: "D",
        width: 11,
        info: "M[R[Rn] + DTAddr] = R[Rt]",
        params: ["Rt", "Rn", "DTAddr"]

    },
    "cbz": {
        opc: "10110100",
        type: "CB",
        width: 8,
        info: "if(R[Rt]==0) PC = PC + CondBranchAddr",
        params: ["Rt", "CondBranchAddr"]
    },
    "cbnz": {
        opc: "10110101",
        type: "CB",
        width: 8,
        info: "if(R[Rt]!=0) PC = PC + CondBranchAddr",
        params: ["Rt", "CondBranchAddr"]
    },
    "b": {
        opc: "000101",
        type: "B",
        width: 6,
        info: "PC = PC + BranchAddr",
        params: ["BranchAddr"]
    },
    "bl": {
        opc: "100101",
        type: "B",
        width: 6,
        info: "PC = PC + BranchAddr",
        params: ["BranchAddr"]
    },
    "br": {
        opc: "11010110000",
        type: "R",
        width: 11,
        info: "PC = R[Rn]",
        params: ["Rn"]
    },
};
