

export const sum = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  return a + b;
}

export const mult = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  return a * b;
}

export default {
  sum,
  mult,
};
