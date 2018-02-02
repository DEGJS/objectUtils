import expect from 'expect';
import {ensureArray, alphabetizeKeys} from './objectUtils';

describe('ensureArray', () => {
	it('should put object in array', () => {
		const obj = {
			test: 'best'
		};
		expect(ensureArray(obj)).toEqual([obj]);
	});

	it('should put object in array', () => {
		const obj = {
			test: 'best'
		};
		expect(ensureArray([obj])).toEqual([obj]);
	});
});

// describe('alphabetizeKeys', () => {
// 	it('should alphabetize keys', () => {
// 		const original = {
// 			name: 'joe',
// 			age: 35
// 		}
// 		const expected = {
// 			age: 35,
// 			name: 'joe'
// 		}
// 		expect(alphabetizeKeys(original)).toEqual(expected);
// 	})
//
// 	it('should remove blacklist', () => {
// 		const original = {
// 			name: 'joe',
// 			ugliness: 'high',
// 			age: 35
// 		}
// 		const expected = {
// 			age: 35,
// 			name: 'joe'
// 		}
// 		expect(alphabetizeKeys(original, 'ugliness')).toEqual(expected);
// 	})
// })
