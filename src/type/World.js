/**
 * Created by jack on 16-7-30.
 */

import { GraphQLString } from 'graphql';

const WorldType = {
	type: GraphQLString,
	resolve() {
		return 'world';
	}
};

export default WorldType;
