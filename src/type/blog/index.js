/**
 * Created by jack on 16-7-30.
 */

import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
} from 'graphql';

import PostType from './Post';
import TagType from './Tag';

import { getPostByName, getPostsList, getTagByName, getTagsList } from '../../data';

const BlogType = new GraphQLObjectType({
	name: 'BlogType',
	fields: () => ({
		post: {
			type: PostType,
			args: {
				name: {
					type: GraphQLString
				}
			},
			resolve: (root, { name }) => getPostByName(name),
		},
		posts: {
			type: new GraphQLList(PostType),
			resolve: () => getPostsList(),
		},
		tag: {
			type: TagType,
			args: {
				name: {
					type: GraphQLString
				}
			},
			resolve: (root, { name }) => getTagByName(name),
		},
		tags: {
			type: new GraphQLList(TagType),
			resolve: () => getTagsList(),
		}
	})
});

export default BlogType;
