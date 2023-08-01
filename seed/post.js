import { Post } from '../src/models/communityForums/post.model.js'
import { faker } from '@faker-js/faker'
import mongoose from 'mongoose';
import fs from 'fs'

const MONGO_URI = 'mongodb://localhost:27017/mind-care'

mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Successfully connected to database");
	})
	.catch((error) => {
		console.log("database connection failed. exiting now...");
		console.error(error);
		process.exit(1);
	});

// Posts Seed by Therapist
const generatePosts = (num) => {
	const post = [];
	const tag = ['help', 'anxiety', 'depression', 'advice']
	for (let i = 0; i < num; i++) {
		let postId = faker.database.mongodbObjectId()
		let therapistId = faker.database.mongodbObjectId()
		let pictureLink = faker.image.urlLoremFlickr()
		let title = faker.lorem.lines({ min: 1, max: 2 })
		let body = faker.lorem.lines({ min: 2, max: 10 })
		let tags = [
			faker.helpers.arrayElement(tag),
			faker.helpers.arrayElement(tag),
			faker.helpers.arrayElement(tag),
		]

		let comments = [{
			commentId: faker.database.mongodbObjectId(),
			postId: postId,
			therapistId: therapistId,
			parentId: "",
			body: faker.lorem.lines({ min: 2, max: 4 }),
			upvotes :[{
				upvoteId: faker.database.mongodbObjectId(),
				therapistId: faker.database.mongodbObjectId(),
				postId:postId,
				commentId: faker.database.mongodbObjectId()
			}],
			downvotes :[{
				downvoteId: faker.database.mongodbObjectId(),
				therapistId: faker.database.mongodbObjectId(),
				postId:postId,
				commentId: faker.database.mongodbObjectId()
			}]
		},
		{
			commentId: faker.database.mongodbObjectId(),
			postId: postId,
			therapistId: therapistId,
			parentId: "",
			body: faker.lorem.lines({ min: 2, max: 4 }),
			upvotes :[{
				upvoteId: faker.database.mongodbObjectId(),
				therapistId: faker.database.mongodbObjectId(),
				postId:postId,
				commentId: faker.database.mongodbObjectId()
			}],
			downvotes :[{
				downvoteId: faker.database.mongodbObjectId(),
				therapistId: faker.database.mongodbObjectId(),
				postId:postId,
				commentId: faker.database.mongodbObjectId()
			}]
		},
		{
			commentId: faker.database.mongodbObjectId(),
			postId: postId,
			therapistId: therapistId,
			parentId: "",
			body: faker.lorem.lines({ min: 2, max: 4 }),
			upvotes :[{
				upvoteId: faker.database.mongodbObjectId(),
				therapistId: faker.database.mongodbObjectId(),
				postId:postId,
				commentId: faker.database.mongodbObjectId()
			}],
			downvotes :[{
				downvoteId: faker.database.mongodbObjectId(),
				therapistId: faker.database.mongodbObjectId(),
				postId:postId,
				commentId: faker.database.mongodbObjectId()
			}]
		},
		{
			commentId: faker.database.mongodbObjectId(),
			postId: postId,
			therapistId: therapistId,
			parentId: "",
			body: faker.lorem.lines({ min: 2, max: 4 }),
			upvotes :[{
				upvoteId: faker.database.mongodbObjectId(),
				therapistId: faker.database.mongodbObjectId(),
				postId:postId,
				commentId: faker.database.mongodbObjectId()
			}],
			downvotes :[{
				downvoteId: faker.database.mongodbObjectId(),
				therapistId: faker.database.mongodbObjectId(),
				postId:postId,
				commentId: faker.database.mongodbObjectId()
			}]
		}
		]
		let upvotes = [{
			upvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		},
		{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		},
		{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		},
		{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		},
		{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		}]
		let downvotes = [{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		},
		{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		},
		{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		},
		{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		},
		{
			downvoteId: faker.database.mongodbObjectId(),
			therapistId: faker.database.mongodbObjectId(),
			postId:postId,
			commentId: faker.database.mongodbObjectId()
		}]

		post.push({
			postId,
			therapistId,
			pictureLink,
			title,
			body,
			tags,
			comments,
			upvotes,
			downvotes

		});
	}
	return post;
};

const posts = generatePosts(10)

console.log(posts)


fs.writeFileSync('posts.json', JSON.stringify(posts, null, '\t'));

// var done = 0;
// for (var i = 0; i < posts.length; i++) {
// 	posts[i].save().then(res => {
// 		done++
// 		if (done === posts.length) {
// 			exit()
// 		}
// 	}).catch(err => {
// 		console.log('error', err)
// 	})
// }

// const exit = async () => {
// 	mongoose.disconnect()
// }

// exit()