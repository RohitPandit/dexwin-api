const express = require("express");
const router = express.Router();
const { SpreadOddsController } = require("../controller/index");

// Get Spread odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/spread:
 *   get:
 *     summary: Get Spread odds With GameID And BookmakerID
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
 *         description: Get Spread Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/spread', SpreadOddsController.getSpreadOdds);

// Get Spread (1-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/spread/1st-half:
 *   get:
 *     summary: Get Spread (1-Half) odds With GameID And BookmakerID
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
 *         description: Get Spread 1st-half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/spread/1st-half', SpreadOddsController.getSpreadResultFirstHalf);

// Get Spread (2-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/spread/2nd-half:
 *   get:
 *     summary: Get Spread (2-Half) odds With GameID And BookmakerID
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
 *         description: Get Spread 2nd-Half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/spread/2nd-half', SpreadOddsController.getSpreadResultSecondHalf);

// Get Spread (1-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/spread/1-quarter:
 *   get:
 *     summary: Get Spread (1-Quarter) odds With GameID And BookmakerID
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
 *         description: Get Spread 1st-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/spread/1-quarter', SpreadOddsController.getSpreadResultFirstQuarter);

// Get Spread (2-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/spread/2-quarter:
 *   get:
 *     summary: Get Spread (2-Quarter) odds With GameID And BookmakerID
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
 *         description: Get Spread 2nd-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/spread/2-quarter', SpreadOddsController.getSpreadResultSecondQuarter);

// Get Spread (3-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/spread/3-quarter:
 *   get:
 *     summary: Get Spread (3-Quarter) odds With GameID And BookmakerID
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
 *         description: Get Spread 3rd-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/spread/3-quarter', SpreadOddsController.getSpreadResultThirdQuarter);

// Get Spread (4-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/spread/4-quarter:
 *   get:
 *     summary: Get Spread (4-Quarter) odds With GameID And BookmakerID
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
 *         description: Get Spread 4th-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/spread/4-quarter', SpreadOddsController.getSpreadResultFourthQuarter);

module.exports = router;