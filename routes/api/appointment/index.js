'use strict';

var express = require('express');
var controller = require('./appointment.controller');

var router = express.Router();
var auth = require('../../../lib/auth');


/**
 * @api {get} /m/appointment Confirm an Appointment
 * @apiName confirm
 * @apiGroup Appointment
 * @apiPermission admin
 *
 * @apiParam {String} fname Firstname of the User.
 * @apiParam {String} lname Lastname of the User.
 * @apiParam {String} dob Date of birth of the User.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/api/m/appointment?fname=John&lname="Doe"&dob="05/13/1965
 *
 * @apiSuccess {String} fname Firstname of the User.
 *
 * @apiSuccessExample Request (example):
 * HTTP/1.1 200 OK
 * {
 *  "appointment": [
 *     "appointmentObject"
 *  ]
 * }
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError ApptNotFound  The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
router.get('/', controller.confirm);

/**
 * @api {get} /m/appointment/:id Get Appointment Info
 * @apiVersion 0.6.0
 * @apiName retrieve
 * @apiGroup Appointment
 * @apiPermission admin
 *
 * @apiParam {String} id Appointment id
 *
 *
 * @apiExample Example usage:
 * http://localhost/api/m/appointment/123456789
 *
 * @apiSuccess {String} fname Firstname of the User.
 *
 * @apiSuccessExample Success-Response (example):
 * HTTP/1.1 200 OK
 * {
 *  "appointment": [
 *     "appointmentObject"
 *  ]
 * }
 */
router.get('/:id', auth.isAuthenticated, controller.retrieve);

/**
 * @api {put} /m/appointment/:id/state/next Transition to Next State
 * @apiName controller.nextState
 * @apiGroup Appointment
 * @apiPermission admin
 */
router.put('/:id/state/next', controller.nextState);

/**
 * @api {put} /m/appointment/:id/state Set a Specific State
 * @apiName controller.updateState
 * @apiGroup Appointment
 * @apiPermission admin
 */
router.put('/:id/state', controller.updateState);


module.exports = router;
