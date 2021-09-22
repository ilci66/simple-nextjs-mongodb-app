const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            async function getPosts(req,res){
                try {
                    // connect to the database
                    let { db } = await connectToDatabase();
                    // fetch the posts
                    let posts = await db
                        .collection('posts')
                        .find({})
                        .sort({ published: -1 })
                        .toArray();
                    // return the posts
                    return res.json({
                        message: JSON.parse(JSON.stringify(posts)),
                        success: true,
                    });
                } catch (error) {
                    // return the error
                    return res.json({
                        message: new Error(error).message,
                        success: false,
                    });
                }
            }
            return getPosts(req, res);
        }

        case 'POST': {
            async function addPost(req, res) {
                try {
                    // connect to the database
                    let { db } = await connectToDatabase();
                    // add the post
                    await db.collection('posts').insertOne(JSON.parse(req.body));
                    // return a message
                    return res.json({
                        message: 'Post added successfully',
                        success: true,
                    });
                } catch (error) {
                    // return an error
                    return res.json({
                        message: new Error(error).message,
                        success: false,
                    });
                }
            }
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}