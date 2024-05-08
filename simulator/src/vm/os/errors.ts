export enum ERRNO {
  SYS_WAIT_DURATION_NOT_POSITIVE = 1,
  ARRAY_SIZE_NOT_POSITIVE = 2,
  DIVIDE_BY_ZERO = 3,
  SQRT_NEG = 4,
  ALLOC_SIZE_NOT_POSITIVE = 5,
  HEAP_OVERFLOW = 6,
  ILLEGAL_PIXEL_COORD = 7,
  ILLEGAL_LINE_COORD = 8,
  ILLEGAL_RECT_COORD = 9,
  ILLEGAL_CENTER_COORD = 12,
  ILLEGAL_RADIUS = 13,
  STRING_LENGTH_NEG = 14,
  GET_CHAR_INDEX_OUT_OF_BOUNDS = 15,
  SET_CHAR_INDEX_OUT_OF_BOUNDS = 16,
  STRING_FULL = 17,
  STRING_EMPTY = 18,
  STRING_INSUFFICIENT_CAPACITY = 19,
  ILLEGAL_CURSOR_LOCATION = 20,
}

export function isSysError(errno: number): errno is ERRNO {
  return Object.values(ERRNO).includes(errno as ERRNO);
}