let posts = require('../data/input.json.js')
const filename = './data/input.json'
const helper = require('./helper.js.js')
const fs = require('fs');


function getPosts() {
    return new Promise((resolve, reject) => {
        if (posts.length === 0) {
            reject({
                message: 'no posts available',
                status: 202
            })
        }
        resolve(posts)
    })
}

function getPost(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(posts, id)
        .then(post => resolve(post))
        .catch(err => reject(err))
    })
}

function insertPost(newPost, link1,link2) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getId(posts) }
        var new_quotes = {"quote1": link1, "quote2": link2}   
        //console.log(quote1)
        newPost = { ...id, ...newPost, ...new_quotes }
        posts.push(newPost)
        helper.writeJSONFile(filename, posts)
        resolve(newPost)
    })
}

function updatePost(id, newPost) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(posts, id)
        .then(post => {
            const index = posts.findIndex(p => p.id == post.id)
            id = { id: post.id }        
            quotes = {"quote1": post.quote1, "quote2": post.quote2}
            posts[index] = { ...id, ...newPost, ...quotes }
            helper.writeJSONFile(filename, posts)
            resolve(posts[index])
        })
        .catch(err => reject(err))
    })
}

function deletePost(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(posts, id)
        .then(() => {             
            posts = posts.filter(p => p.id != id)
            helper.writeJSONFile(filename, posts)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    insertPost,
    getPosts,
    getPost, 
    updatePost,
    deletePost
}