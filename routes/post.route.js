const express = require('express');
const router = express.Router();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const post_controller = require('../controllers/post.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', post_controller.test);

router.post('/create', post_controller.post_create);

// router.get('/:id', post_controller.post_details);

router.put('/:id/update', post_controller.post_update);

router.delete('/:id/delete', post_controller.post_delete);

router.get('/', post_controller.post_all);

router.get('/dynamic', post_controller.dynamic_view_all);
router.get('/:id/dynamic', post_controller.dynamic_view);

module.exports = router;