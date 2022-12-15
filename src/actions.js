const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const reset = () => ({ type: "RESET" });
const incBy = (value) => ({ type: "INCBY", payload: value });

export { inc, dec, reset, incBy };
