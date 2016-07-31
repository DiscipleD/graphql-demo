/**
 * Created by jack on 16-7-30.
 */

import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLNonNull,
	GraphQLList,
} from 'graphql';

import TagType from './Tag';

import { getTagByName } from '../../data';

const Post = new GraphQLObjectType({
	name: 'PostType',
	fields: () => ({
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		createDate: {
			type: new GraphQLNonNull(GraphQLString)
		},
		title: {
			type: new GraphQLNonNull(GraphQLString)
		},
		subtitle: {
			type: GraphQLString
		},
		content: {
			type: GraphQLString
		},
		tags: {
			type: new GraphQLList(TagType),
			resolve: post => post.tags.map(tagName => getTagByName(tagName))
		}
	})
});

export default Post;
