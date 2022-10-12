import char2byte from './char2byte.js';
import ASCIIEncodeError from './ASCIIEncodeError.js';

export default function* _encode(string, _options = null) {
	let start = 0;

	for (const chr of string) {
		if (!Object.prototype.hasOwnProperty.call(char2byte, chr)) {
			const reason = `cannot find character ${chr}`;
			const object = string;
			const position = {start, end: start + 1};
			throw new ASCIIEncodeError(reason, object, position);
		}

		yield char2byte[chr];

		++start;
	}
}
