const express = require("express");
const router = express.Router();
const { MoneylineOddsController } = require("../controller/index");

/***************************************************** Money Line Odd API   *******************************************************************/
/**
 * @swagger
 * /api/live/odds/money-line:
 *   get:
 *     summary: Money Line  Odds With GameID And BookmakerId
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
 *         description: The Money Line  Odds Data With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/live/odds/money-line', MoneylineOddsController.money_Line_Odds_Data_Of_Single_Game);

/*****************************************************  Money Line Qtr1  Odd API   ****************************************************************************/
/**
 * @swagger
 * /api/live/odds/money-line/1-quarter:
 *   get:
 *     summary: Money Line Qtr1  Odds With GameID And BookmakerId
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
 *         description: The Money Line Qtr1 Odds Data With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/live/odds/money-line/1-quarter', MoneylineOddsController.money_Line_Qtr1_Odds_Data_Of_Single_Game);

/*****************************************************  Money Line Qtr2  Odd API   ****************************************************************************/
/**
 * @swagger
 * /api/live/odds/money-line/2-quarter:
 *   get:
 *     summary: Money Line Qtr2  Odds With GameID And BookmakerId
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
 *         description: The Money Line Qtr2 Odds Data With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/live/odds/money-line/2-quarter', MoneylineOddsController.money_Line_Qtr2_Odds_Data_Of_Single_Game);

/*****************************************************  Money Line Qtr3  Odd API   ****************************************************************************/
/**
 * @swagger
 * /api/live/odds/money-line/3-quarter:
 *   get:
 *     summary: Money Line Qtr3  Odds With GameID And BookmakerId
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
 *         description: The Money Line Qtr3 Odds Data With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/live/odds/money-line/3-quarter', MoneylineOddsController.money_Line_Qtr3_Odds_Data_Of_Single_Game);

/*****************************************************  Money Line Qtr4  Odd API   ****************************************************************************/
/**
 * @swagger
 * /api/live/odds/money-line/4-quarter:
 *   get:
 *     summary: Money Line Qtr4  Odds With GameID And BookmakerId
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
 *         description: The Money Line Qtr4 Odds Data With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/live/odds/money-line/4-quarter', MoneylineOddsController.money_Line_Qtr4_Odds_Data_Of_Single_Game);

/***************************************************** Money Line 1st Half Odd API   ****************************************************************************/
/**
 * @swagger
 * /api/live/odds/money-line/1st-half:
 *   get:
 *     summary: Money Line 1st Half  Odds With GameID And BookmakerId
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
 *         description: The Money Line 1st Half Odds Data With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/live/odds/money-line/1st-half', MoneylineOddsController.money_Line_1stHalf_Odds_Data_Of_Single_Game);

/*****************************************************  Money Line 2nd Half Odd API   ****************************************************************************/
/**
 * @swagger
 * /api/live/odds/money-line/2nd-half:
 *   get:
 *     summary: Money Line 2nd Half  Odds With GameID And BookmakerId
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
 *         description: The Money Line 2nd Half Odds Data With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/live/odds/money-line/2nd-half', MoneylineOddsController.money_Line_2ndHalf_Odds_Data_Of_Single_Game);


module.exports = router;