const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const reset = () => ({ type: "RESET" });
const incBy = (v) => ({ type: "INCBY", payload: v });

export { inc, dec, reset, incBy };
