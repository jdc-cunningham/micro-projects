const tresCommas = (moneys) => {
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    return moneys.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export {
    tresCommas
};