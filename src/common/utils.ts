import { ObjectID } from 'mongodb';

export const toStringSafe = obj => obj ? obj.toString() : null;

export const toObjectId = (value) => typeof value === 'string' ? new ObjectID(value) : value;

export const canonicalizeUrl = (url: string) => url && url.startsWith('www.') ? 'https://' + url : url;

export const typeFn = type => () => type;

export const toInteger = text => parseInt(text, 10);
