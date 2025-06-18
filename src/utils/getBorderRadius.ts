export const getOuterBorderRadius = (innerRadius: string | number, padding: string | number) => {
  if (innerRadius === undefined || innerRadius === null) {
    throw new Error('innerRadius is required');
  }
  if (padding === undefined || padding === null) {
    throw new Error('padding is required');
  }

  if (typeof innerRadius !== 'string' && typeof innerRadius !== 'number') {
    throw new Error(`innerRadius must be a string or number, got ${typeof innerRadius}`);
  }
  if (typeof padding !== 'string' && typeof padding !== 'number') {
    throw new Error(`padding must be a string or number, got ${typeof padding}`);
  }

  if (typeof innerRadius === 'string' && innerRadius.trim() === '') {
    throw new Error('innerRadius cannot be an empty string');
  }
  if (typeof padding === 'string' && padding.trim() === '') {
    throw new Error('padding cannot be an empty string');
  }

  const transformedInnerRadius =
    typeof innerRadius === 'string' ? Number(innerRadius) : innerRadius;
  const transformedPadding = typeof padding === 'string' ? Number(padding) : padding;

  if (isNaN(transformedInnerRadius)) {
    throw new Error(`innerRadius ("${innerRadius}") is not a valid number`);
  }
  if (isNaN(transformedPadding)) {
    throw new Error(`padding ("${padding}") is not a valid number`);
  }

  if (transformedInnerRadius <= 0) {
    throw new Error('innerRadius must be a positive number');
  }
  if (transformedPadding < 0) {
    throw new Error('padding must be zero or a positive number');
  }

  const result = transformedInnerRadius + transformedPadding;

  return {
    outerRadius: result,
    outerRadiusString: `${result}px`,
  };
};

export const getInnerRadius = (outerRadius: number, padding: number): number => {
  if (typeof outerRadius !== 'number' || typeof padding !== 'number') {
    throw new Error('outerRadius and padding must be numbers');
  }
  if (outerRadius <= 0) {
    throw new Error('outerRadius must be greater than 0');
  }
  if (padding < 0) {
    throw new Error('padding cannot be negative');
  }
  if (outerRadius - padding <= 0) {
    throw new Error('innerRadius would be zero or negative; check your values');
  }
  return outerRadius - padding;
};
