import clone from 'lodash.clone';
import cloneDeep from 'lodash.clonedeep';
import map from 'lodash.map';
import union from 'lodash.union';

const isNumber = val => typeof val === 'number';
const isArray = val => Array.isArray(val);
const isString = val => typeof val === 'string';
const isObject = val => val instanceof Object;
const isDate = val => val instanceof Date && !isNaN(val);

const forEach = map;
const each = forEach;
const some = (iterable = [], cb) => iterable.some(cb);
const reject = (iterable = [], cb) => iterable.filter(el => !cb(el));
const min = (iterable = []) => {
  if (iterable.length) {
    return Math.min.apply(null, iterable);
  }
};
const filter = (iterable = [], cb) => iterable.filter(cb);
const includes = (iterable = [], val) =>
  iterable.filter(el => el === val).length !== 0;
const find = (iterable = [], cb) => iterable.find(cb);

const assign = Object.assign;

const endsWith = (str, end) => str.endsWith(end);

const findKey = (obj = {}, cb) => {
  let key = null;
  for (const prop in obj) {
    if (cb(obj[prop])) {
      key = prop;
    }
  }
  return key;
};
const create = (prototype, properties) =>
  Object.assign(Object.create(prototype), properties);

const delay = (cb, wait, args) => {
  setTimeout(() => cb.apply(null, args), wait);
};

export default {
  map,
  forEach,
  each,
  some,
  assign,
  endsWith,
  findKey,
  clone,
  cloneDeep,
  union,
  reject,
  min,
  filter,
  includes,
  find,
  create,
  isNumber,
  isArray,
  isString,
  isObject,
  isDate,
  delay
};
