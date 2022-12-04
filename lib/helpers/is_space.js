'use strict';
// https://github.com/markdown-it/markdown-it/blob/f5a06ec0b626d857d06382e7b8709d943d6f2000/lib/common/utils.js#L154
module.exports = function isSpace(code) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
  }
  return false;
};