/**
 * Created by jack on 16-7-30.
 */

import {
	GraphQLObjectType,
	GraphQLString,
} from 'graphql';

import WorldType from './World';
import BlogType from './blog';

const queryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
		hello: WorldType,
		blog: {
			type: BlogType,
			resolve: () => ({})
		},
	})
});

export { queryType };
