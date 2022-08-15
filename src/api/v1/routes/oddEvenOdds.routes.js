const express = require('express');
const router = express.Router();
const { OddEvenOddController } = require("../controller/index");



/*************************************** odd even odds routes ***********************************************/

// Get Odd Even odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even:
 *   get:
 *     summary: Get Odd Even odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Odd Even Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even', OddEvenOddController.getEvenOdd);

// Get Odd Even odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/over-time:
 *   get:
 *     summary: Get Odd Even Overtime odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Odd Even Overtime Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/over-time', OddEvenOddController.getEvenOddOverTime);

// Get Odd Even (1-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/1st-half:
 *   get:
 *     summary: Get Odd Even (1-Half) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Odd Even 1st-half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/1st-half', OddEvenOddController.getEvenOddFirstHalf);

// Get Odd Even (2-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/2nd-half:
 *   get:
 *     summary: Get Odd Even (2-Half) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Odd Even 2nd-Half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/2nd-half', OddEvenOddController.getEvenOddSecondHalf);

// Get Odd Even (Home) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/home:
 *   get:
 *     summary: Get Odd Even (Home) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Odd Even Home Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/home', OddEvenOddController.getEvenOddHome);

// Get Odd Even (Away) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/away:
 *   get:
 *     summary: Get Odd Even (Away) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
router.get('/odds/odd-even/away', OddEvenOddController.getEvenOddAway);




// Get Away Odd Even (1-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/away/1st-half:
 *   get:
 *     summary: Get Away Odd Even (1-Half) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Away Odd Even 1st-half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/away/1st-half', OddEvenOddController.getAwayEvenOddFirstHalf);

// Get Away Odd Even (2-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/away/2nd-half:
 *   get:
 *     summary: Get Away Odd Even (2-Half) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Away Odd Even 2nd-Half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/away/2nd-half', OddEvenOddController.getAwayEvenOddSecondHalf);

// Get Away Odd/Even (1-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/away/1-quarter:
 *   get:
 *     summary: Get Away Odd/Even (1-Quarter) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Away Odd/Even 1st-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/away/1-quarter', OddEvenOddController.getAwayEvenOddFirstQuarter);

// Get Away Odd/Even (2-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/away/2-quarter:
 *   get:
 *     summary: Get Away Odd/Even (2-Quarter) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Away Odd/Even 2nd-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/away/2-quarter', OddEvenOddController.getAwayEvenOddSecondQuarter);

// Get Away Odd/Even (3-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/away/3-quarter:
 *   get:
 *     summary: Get Away Odd/Even (3-Quarter) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Away Odd/Even 3rd-Qtr Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/away/3-quarter', OddEvenOddController.getAwayEvenOddThirdQuarter);

// Get Away Odd/Even (4-Quarter) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/away/4-quarter:
 *   get:
 *     summary: Get Away Odd/Even (4-Quarter) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
router.get('/odds/odd-even/away/4-quarter', OddEvenOddController.getAwayEvenOddFourthQuarter);

// Get Home Odd Even (1-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/home/1st-half:
 *   get:
 *     summary: Get Home Odd Even (1-Half) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Home Odd Even 1st-half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/home/1st-half', OddEvenOddController.getHomeEvenOddFirstHalf);

// Get Home Odd Even (2-Half) odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/odd-even/home/2nd-half:
 *   get:
 *     summary: Get Home Odd Even (2-Half) odds With GameID And BookmakerID
 *     tags: [Exotic Odds]
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
 *         description: Get Home Odd Even 2nd-Half Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/odd-even/home/2nd-half', OddEvenOddController.getHomeEvenOddSecondHalf);


module.exports = router;