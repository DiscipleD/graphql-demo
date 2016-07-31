/**
 * Created by jack on 16-7-30.
 */
import { GraphQLSchema } from 'graphql';

import { queryType } from '../type';

const schema = new GraphQLSchema({
	query: queryType
});

export default schema;
