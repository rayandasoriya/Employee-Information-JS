'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs')
const post = require('../models/posts')
const helper = require('../models/helper')
const  axios = require('axios')
var JSSoup = require('jssoup').default;

router.get('/', async (req, res) => {
  await post.getPosts()
  .then(posts => res.json(posts))
  .catch(err => {
      if (err.status) {
          res.status(err.status).json({ message: err.message })
      } else {
          res.status(500).json({ message: err.message })
      }
  })
})

router.get('/:id', helper.mustBeInteger, async (req, res) => {
  const id = req.params.id
  await post.getPost(id)
  .then(post => res.json(post))
  .catch(err => {
      if (err.status) {
          res.status(err.status).json({ message: err.message })
      } else {
          res.status(500).json({ message: err.message })
      }
  })
})

router.post('/', helper.checkFieldsPost, async (req, res) => {
const a =  await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
const b = await axios.get("https://icanhazdadjoke.com")

var link1 = a['data'][0]
var soup = new JSSoup(b['data']);
var tag = soup.find('p');

var link2 = tag.nextElement['_text']
console.log(link1,link2)


  await post.insertPost(req.body,link1,link2)
  .then(post => res.status(201).json({
      message: `The post #${post.id} has been created`,
      content: post
  }))
  .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/:id', helper.mustBeInteger, helper.checkFieldsPost, async (req, res) => {
  const id = req.params.id

  await post.updatePost(id, req.body)
  .then(post => res.json({
      message: `The post #${id} has been updated`,
      content: post
  }))
  .catch(err => {
      if (err.status) {
          res.status(err.status).json({ message: err.message })
      }
      res.status(500).json({ message: err.message })
  })
})

router.delete('/:id', helper.mustBeInteger, async (req, res) => {
  const id = req.params.id

  await post.deletePost(id)
  .then(post => res.json({
      message: `The post #${id} has been deleted`
  }))
  .catch(err => {
      if (err.status) {
          res.status(err.status).json({ message: err.message })
      }
      res.status(500).json({ message: err.message })
  })
})


module.exports = router;
