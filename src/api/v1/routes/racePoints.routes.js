const express = require('express');
const router = express.Router();
const { RacePointsOddController } = require("../controller/index");


// Get Race to 12 points odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/race/12-points:
 *   get:
 *     summary: Get Race to 12 points odds With GameID And BookmakerID
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
 *         description: Get Race to 12 points Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
 router.get('/odds/race/12-points', RacePointsOddController.getRaceTo12PointOdd);

 // Get Race to 25 points odds With GameID And BookmakerID
 /**
  * @swagger
  * /api/live/odds/race/25-points:
  *   get:
  *     summary: Get Race to 25 points odds With GameID And BookmakerID
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
  *         description: Get Race to 25 points Odds Successfully.
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/race/25-points', RacePointsOddController.getRaceTo25PointOdd);
 
 // Get Race to 45 points odds With GameID And BookmakerID
 /**
  * @swagger
  * /api/live/odds/race/45-points:
  *   get:
  *     summary: Get Race to 45 points odds With GameID And BookmakerID
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
  *         description: Get Race to 45 points Odds Successfully.
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/race/45-points', RacePointsOddController.getRaceTo45PointOdd);
 
 // Get Race to 20 points odds With GameID And BookmakerID
 /**
  * @swagger
  * /api/live/odds/race/20-points:
  *   get:
  *     summary: Get Race to 20 points odds With GameID And BookmakerID
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
  *         description: Get Race to 20 points Odds Successfully.
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/race/20-points', RacePointsOddController.getRaceTo20PointOdd);
 
 // Get Race to 10 points odds With GameID And BookmakerID
 /**
  * @swagger
  * /api/live/odds/race/10-points:
  *   get:
  *     summary: Get Race to 10 points odds With GameID And BookmakerID
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
  *         description: Get Race to 10 points Odds Successfully.
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/race/10-points', RacePointsOddController.getRaceTo10PointOdd);
 
 // Get Race to 50 points odds With GameID And BookmakerID
 /**
  * @swagger
  * /api/live/odds/race/50-points:
  *   get:
  *     summary: Get Race to 50 points odds With GameID And BookmakerID
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
  *         description: Get Race to 50 points Odds Successfully.
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/race/50-points', RacePointsOddController.getRaceTo50PointOdd);
 
 // Get Race to 40 points odds With GameID And BookmakerID
 /**
  * @swagger
  * /api/live/odds/race/40-points:
  *   get:
  *     summary: Get Race to 40 points odds With GameID And BookmakerID
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
  *         description: Get Race to 40 points Odds Successfully.
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/race/40-points', RacePointsOddController.getRaceTo40PointOdd);
 
 // Get Race to 30 points odds With GameID And BookmakerID
 /**
  * @swagger
  * /api/live/odds/race/30-points:
  *   get:
  *     summary: Get Race to 30 points odds With GameID And BookmakerID
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
  *         description: Get Race to 30 points Odds Successfully.
  *       404:
  *         description: No Data Found
  *       429:
  *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
  *       500:
  *         description: Server Error
  */
 router.get('/odds/race/30-points', RacePointsOddController.getRaceTo30PointOdd);
 
module.exports = router; 