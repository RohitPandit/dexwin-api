const express = require('express');
const router = express.Router();
const { OddEvenOddController } = require("../controller/index");

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



/*****************************************************  Odd Even Qtr1  Odd API   ****************************************************************************/
/**
 * @swagger
 * /api/live/odds/odd-even/1-quarter:
 *   get:
 *     summary: Odd Even Qtr1 Odds With GameID And BookmakerId
 *     tags: [Exotic Odds]
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
 *         description: The Odd Even Qtr1Odds Data With GameID And BookmakerId
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
 router.get('/odds/odd-even/1-quarter', OddEvenOddController.Odd_Even_Qtr1_Odds_Data_Of_Single_Game);

 /*****************************************************  Odd Even Qtr2  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/2-quarter:
  *   get:
  *     summary: Odd Even Qtr2 Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Odd Even Qtr2Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/2-quarter', OddEvenOddController.Odd_Even_Qtr2_Odds_Data_Of_Single_Game);
 
 /*****************************************************  Odd Even Qtr3  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/3-quarter:
  *   get:
  *     summary: Odd Even Qtr3 Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Odd Even Qtr3Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/3-quarter', OddEvenOddController.Odd_Even_Qtr3_Odds_Data_Of_Single_Game);
 
 /*****************************************************  Odd Even Qtr4  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/4-quarter:
  *   get:
  *     summary: Odd Even Qtr4 Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Odd Even Qtr4Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/4-quarter', OddEvenOddController.Odd_Even_Qtr4_Odds_Data_Of_Single_Game);
 
 /*****************************************************  Home Odd Even Qtr1  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/home/1-quarter:
  *   get:
  *     summary: Home Odd Even Qtr1 Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Home Odd Even Qtr1Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/home/1-quarter', OddEvenOddController.home_Odd_Even_Qtr1_Odds_Data_Of_Single_Game);
 
 /*****************************************************  Home Odd Even Qtr2  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/home/2-quarter:
  *   get:
  *     summary: Home Odd Even Qtr2 Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Home Odd Even Qtr2 Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/home/2-quarter', OddEvenOddController.home_Odd_Even_Qtr2_Odds_Data_Of_Single_Game);
 
 /*****************************************************  Home Odd Even Qtr3  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/home/3-quarter:
  *   get:
  *     summary: Home Odd Even Qtr3 Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Home Odd Even Qtr3 Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/home/3-quarter', OddEvenOddController.home_Odd_Even_Qtr3_Odds_Data_Of_Single_Game);
 
 /*****************************************************  Home Odd Even Qtr4  Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/home/4-quarter:
  *   get:
  *     summary: Home Odd Even Qtr4 Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Home Odd Even Qtr4 Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/home/4-quarter', OddEvenOddController.home_Odd_Even_Qtr4_Odds_Data_Of_Single_Game);
 
 /*****************************************************  Home Odd Even Over Time Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/home/over-time:
  *   get:
  *     summary: Home Odd Even Over Time Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Home Odd Even Over Time Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/home/over-time', OddEvenOddController.home_Odd_Even_Over_Time_Odds_Data_Of_Single_Game);
 
 /*****************************************************  Away Odd Even Over Time Odd API   ****************************************************************************/
 /**
  * @swagger
  * /api/live/odds/odd-even/away/over-time:
  *   get:
  *     summary: Away Odd Even Over Time Odds With GameID And BookmakerId
  *     tags: [Exotic Odds]
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
  *         description: The Away Odd Even Over Time Odds Data With GameID And BookmakerId
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/odd-even/away/over-time', OddEvenOddController.Away_Odd_Even_Over_Time_Odds_Data_Of_Single_Game);
 

module.exports = router;