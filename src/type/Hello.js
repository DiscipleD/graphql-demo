/**
 * Created by jack on 16-7-30.
 */

import { GraphQLString } from 'graphql';

const HelloType = {
	type: GraphQLString,
	resolve() {
		return 'world';
	}
};

export default HelloType;
