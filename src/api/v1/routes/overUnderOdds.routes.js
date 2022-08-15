const express = require("express");
const router = express.Router();
const { OverUnderOddsController } = require("../controller/index");

/******************************************************* Over/Under Odd API   *******************************************************************/
/**
 * @swagger
 * /api/live/odds/over-under:
 *   get:
 *     summary: Over/Under Odds With GameID And BookmakerId
 *     tags: [Popular Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The 
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmark Id
 *     responses:
 *       200:
 *         description: The Over/Under Odds Data  With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/over-under', OverUnderOddsController.over_Under_Odds_Data_Of_Single_Game);

/***************************************************** Over/Under Qtr1 Odd API   *******************************************************************/
/**
 * @swagger
 * /api/live/odds/over-under/1-quarter:
 *   get:
 *     summary: Over/Under Qtr1 Odds With GameID And BookmakerId
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The 
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmark Id
 *     responses:
 *       200:
 *         description: The Over/Under Qtr1 Odds Data  With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/over-under/1-quarter', OverUnderOddsController.over_Under_Qtr1_Odds_Data_Of_Single_Game);

/**************************************************** Over/Under Qtr2 Odd API   *******************************************************************/
/**
 * @swagger
 * /api/live/odds/over-under/2-quarter:
 *   get:
 *     summary: Over/Under Qtr2 Odds With GameID And BookmakerId
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The 
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmark Id
 *     responses:
 *       200:
 *         description: The Over/Under Qtr2 Odds Data  With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/over-under/2-quarter', OverUnderOddsController.over_Under_Qtr2_Odds_Data_Of_Single_Game);

/***************************************************** Over/Under Qtr3 Odd API   *******************************************************************/
/**
 * @swagger
 * /api/live/odds/over-under/3-quarter:
 *   get:
 *     summary: Over/Under Qtr3 Odds With GameID And BookmakerId
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The 
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmark Id
 *     responses:
 *       200:
 *         description: The Over/Under Qtr3 Odds Data  With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/over-under/3-quarter', OverUnderOddsController.over_Under_Qtr3_Odds_Data_Of_Single_Game);

/**************************************************** Over/Under Qtr4 Odd API   *******************************************************************/
/**
 * @swagger
 * /api/live/odds/over-under/4-quarter:
 *   get:
 *     summary: Over/Under Qtr4 Odds With GameID And BookmakerId
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The 
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmark Id
 *     responses:
 *       200:
 *         description: The Over/Under Qtr4 Odds Data  With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/over-under/4-quarter', OverUnderOddsController.over_Under_Qtr4_Odds_Data_Of_Single_Game);

/**************************************************** Over/Under 1stHalf Odd API   *******************************************************************/
/**
 * @swagger
 * /api/live/odds/over-under/1st-half:
 *   get:
 *     summary: Over/Under 1stHalf Odds With GameID And BookmakerId
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The 
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmark Id
 *     responses:
 *       200:
 *         description: The Over/Under 1stHalf Odds Data  With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/over-under/1st-half', OverUnderOddsController.over_Under_1stHalf_Odds_Data_Of_Single_Game);

/***************************************************** Over/Under 2ndHalf Odd API   *******************************************************************/
/**
 * @swagger
 * /api/live/odds/over-under/2nd-half:
 *   get:
 *     summary: Over/Under 2ndHalf Odds With GameID And BookmakerId
 *     tags: [Periodic Odds]
 *     parameters:
 *       - in: query
 *         name: gameid
 *         schema:
 *           type: integer 
 *         required: true
 *         description: The 
 *       - in: query
 *         name: bookmakerid
 *         schema:
 *           type: integer
 *         description: The bookmark Id
 *     responses:
 *       200:
 *         description: The Over/Under 2ndHalf Odds Data  With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/over-under/2nd-half', OverUnderOddsController.over_Under_2ndHalf_Odds_Data_Of_Single_Game);

module.exports = router;