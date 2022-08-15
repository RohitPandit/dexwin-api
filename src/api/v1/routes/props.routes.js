const express = require('express');
const router = express.Router();
const { PropsController } = require("../controller/index");




// Get Props odds With GameID And BookmakerID
/**
 * @swagger
 * /api/live/odds/props/team:
 *   get:
 *     summary: Get Props odds With GameID And BookmakerID
 *     tags: [Props Odds]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string 
 *         required: true
 *         description: The Team Id - 1
 *       - in: query
 *         name: season
 *         schema:
 *           type: string
 *         required: true
 *         description: The season - 2021
 *     responses:
 *       200:
 *         description: Get Props Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
 router.get('/odds/props/team', PropsController.getTeamProps);


/**
 * @swagger
 * /api/live/odds/props/playerAssist:
 *   get:
 *     summary: Get Props odds With GameID And BookmakerID
 *     tags: [Props Odds]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string 
 *         required: true
 *         description: The Player Id - 236
 *       - in: query
 *         name: season
 *         schema:
 *           type: string 
 *         required: true
 *         description: The Season - 2021
 *     responses:
 *       200:
 *         description: Get Props Odds Successfully.
 *       404:
 *         description: No Data Found
 *       429:
 *         description: You have exceeded the rate limit per minute for your plan, BASIC, by the API provider
 *       500:
 *         description: Server Error
 */
router.get('/odds/props/playerAssist', PropsController.playerAssist);

module.exports = router;