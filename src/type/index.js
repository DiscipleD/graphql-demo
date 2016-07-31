/**
 * Created by jack on 16-7-30.
 */


import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
} from 'graphql';

import HelloType from './Hello';
import BlogType from './blog';

const queryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
		hello: HelloType,
		blog: {
			type: BlogType,
			resolve: () => ({})
		},
	})
});

export { queryType };
