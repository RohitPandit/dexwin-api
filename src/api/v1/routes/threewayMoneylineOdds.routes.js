const express = require('express')
const router = express.Router()
const { ThreeWayMoneyLineOddsController } = require("../controller/index")


// Get 3 Way Money Line odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/three-way:
 *   get:
 *     summary: Get 3 Way Money Line odds With GameID And BookmakerID
 *     tags: [Popular Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The Game OR Match Id
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmaker Id
 *     responses:
 *       200:
 *         description: Get Money Line 3 Way Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/three-way', ThreeWayMoneyLineOddsController.getThreeWayOdds);

// Get 3 Way Money Line (1-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/three-way/1-quarter:
 *   get:
 *     summary: Get 3 Way Money Line (1-Quarter) odds With GameID And BookmakerID
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The Game OR Match Id
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmaker Id
 *     responses:
 *       200:
 *         description: Get Money Line 3 Way 1st-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/three-way/1-quarter', ThreeWayMoneyLineOddsController.getThreeWayResultFirstQuarter);

// Get 3 Way Money Line (2-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/three-way/2-quarter:
 *   get:
 *     summary: Get 3 Way Money Line (2-Quarter) odds With GameID And BookmakerID
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The Game OR Match Id
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmaker Id
 *     responses:
 *       200:
 *         description: Get Money Line 3 Way 2nd-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/three-way/2-quarter', ThreeWayMoneyLineOddsController.getThreeWayResultSecondQuarter);

// Get 3 Way Money Line (3-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/three-way/3-quarter:
 *   get:
 *     summary: Get 3 Way Money Line (3-Quarter) odds With GameID And BookmakerID
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The Game OR Match Id
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmaker Id
 *     responses:
 *       200:
 *         description: Get Money Line 3 Way 3rd-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/three-way/3-quarter', ThreeWayMoneyLineOddsController.getThreeWayResultThirdQuarter);

// Get 3 Way Money Line (4-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/three-way/4-quarter:
 *   get:
 *     summary: Get 3 Way Money Line (4-Quarter) odds With GameID And BookmakerID
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The Game OR Match Id
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmaker Id
 *     responses:
 *       200:
 *         description: Get Money Line 3 Way 4th-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/three-way/4-quarter', ThreeWayMoneyLineOddsController.getThreeWayResultFourthQuarter);

// Get 3 Way Money Line (1-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/three-way/1st-half:
 *   get:
 *     summary: Get 3 Way Money Line (1-Half) odds With GameID And BookmakerID
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The Game OR Match Id
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmaker Id
 *     responses:
 *       200:
 *         description: Get Money Line 3 Way 1st-half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/three-way/1st-half', ThreeWayMoneyLineOddsController.getThreeWayResultFirstHalf);

// Get 3 Way Money Line (2-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/three-way/2nd-half:
 *   get:
 *     summary: Get 3 Way Money Line (2-Half) odds With GameID And BookmakerID
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The Game OR Match Id
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmaker Id
 *     responses:
 *       200:
 *         description: Get Money Line 3 Way 2nd-Half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/three-way/2nd-half', ThreeWayMoneyLineOddsController.getThreeWayResultSecondHalf);

module.exports = router;