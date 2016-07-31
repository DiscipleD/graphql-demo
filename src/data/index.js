/**
 * Created by jack on 16-7-30.
 */

let POSTID = 1;
let TAGID = 1;

class Post {
	constructor({name, title, content, subTitle = '', createDate = '', headerImageType = '.jpg', tags = []} = {}) {
		this.id = POSTID++;
		this.name = name;
		this.title = title;
		this.subtitle = subTitle;
		this.createDate = createDate;
		this.content = content;
		this.headerImgName = createDate + headerImageType;
		this.tags = tags;
	}
}

const reduxEntry = new Post({
	name: 'getting-started-with-redux',
	title: 'Redux 入门',
	subTitle: 'A tiny predictable state management lib for JavaScript apps',
	createDate: '2016-07-06',
	tags: ['javascript', 'redux', 'state-management', 'angular-1.x'],
	content: '省略...'
});

const reduxAdvanced = new Post({
	name: 'redux-advanced',
	title: 'Redux 进阶',
	subTitle: 'Advanced skill in Redux',
	createDate: '2016-07-23',
	tags: ['javascript', 'redux', 'state-management', 'angular-1.x', 'ui-router', 'redux-ui-router'],
	content: '省略...'
});

const graphqlConcepts = new Post({
	name: 'graphql-core-concepts',
	title: 'GraphQL 核心概念',
	subTitle: 'A query language created by Facebook for decribing data requirements on complex application data models',
	createDate: '2016-08-01',
	tags: ['graphql'],
	content: '省略...'
});

class Tag {
	constructor(name, label) {
		this.id = TAGID++;
		this.name = name;
		this.label = label;
	}
}

const js = new Tag('javascript', 'JavaScript');
const redux = new Tag('redux', 'Redux');
const stateManagement = new Tag('state-management', 'State Management');
const angular = new Tag('angular-1.x', 'Angular 1.x');
const uiRouter = new Tag('ui-router', 'ui-router');
const reduxUiRouter = new Tag('redux-ui-router', 'redux-ui-router');
const graphql = new Tag('graphql', 'GraphQL');


const PostData = {
	1: reduxEntry,
	2: reduxAdvanced,
	3: graphqlConcepts
};

const TagData = {
	1: js,
	2: redux,
	3: stateManagement,
	4: angular,
	5: uiRouter,
	6: reduxUiRouter,
	7: graphql
};

const getPostById = (id = 1) => PostData[id];
const getPostByName = ( name = '') => PostData[Object.keys(PostData).filter(id => getPostById(id).name === name)];
const getPostsList = () => Object.keys(PostData).map(id => getPostById(id));

const getTagById = (id = 1) => TagData[id];
const getTagByName = ( name = '') => TagData[Object.keys(TagData).filter(id => getTagById(id).name === name)];
const getTagsList = () => Object.keys(TagData).map(id => getTagById(id));

export { getPostById, getPostByName, getPostsList, getTagById, getTagByName, getTagsList}
