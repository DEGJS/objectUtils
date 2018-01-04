import expect from 'expect';
import {ensureArray} from './objectUtils';

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
