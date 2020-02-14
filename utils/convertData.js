const convertData = {
  toNumber(str) {
    return Number(str.replace(/[^0-9]/g, ''));
  }
}

export default convertData;