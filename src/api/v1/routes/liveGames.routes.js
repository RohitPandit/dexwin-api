const express = require("express");
const router = express.Router();
const { LiveGamesController } = require("../controller/index")

/* Schema for Live API*/
// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Live:
//  *       type: object
//  *       required:
//  *         - date      
//  *       properties:
//  *        id:
//  *           type: string
//  *           description: The auto-generated id of the use
//  *       example:
//  *           id: 186173
//  *           date: 2022-07-24T00:00:00+00:00
//  *           time: 00:00
//  *           timestamp: 1658620800
//  *           timezone: UTC
//  *           stage: null
//  *           week: 6
//  *           status: 
//  *                long: Game Finished
//  *                short: FT
//  *                timer: null           
//  *           league:
//  *                id: 178
//  *                name: BIG3
//  *                type: cup
//  *                season: 2022
//  *                logo: https://media.api-sports.io/basketball/leagues/178.png
//  *           country: 
//  *                id: 5
//  *                name: USA
//  *                code: US
//  *                flag: https://media.api-sports.io/flags/us.svg
//  *           teams: 
//  *             home: 
//  *                  id: 2924
//  *                    name: Trilogy
//  *                    logo: https://media.api-sports.io/basketball/teams/2924.png
//  *             away: 
//  *                    id: 2919
//  *                    name: Enemies
//  *                    logo: https://media.api-sports.io/basketball/teams/2919.png                
//  *            scores: 
//  *                home
//  *                  quarter1: 0
//  *                  quarter2: 26
//  *                  quarter3: 0
//  *                  quarter4: 24
//  *                  overtime: null
//  *                  total: 50
//  *                away:
//  *                  quarter1": 0
//  *                  quarter2: 20
//  *                  quarter3: 0
//  *                  quarter4: 18
//  *                  overtime: null
//  *                  total: 38    
//  */

//==================================================================
// /**
//  * @swagger
//  * tags:
//  *   name: Lives
//  *   description: The User managing API
//  */
//==================================================================


/*=================================================== Live Api Start Here ===================================================================*/

/***************************************************  Get Games Data By Date *************************************************************/
/**
 * @swagger
 * /api/live/get-game/{date}:
 *   get:
 *     summary: Get the the games Data by Date
 *     tags: [Live]
 *     parameters:
 *       - in: path
 *         name: date
 *         schema:
 *           type: string
 *         required: true
 *         description: The Date 2022-08-11
 *     responses:
 *       200:
 *         description: The games Data by Date
 *       400:
 *         description: The User was not found
 */
router.get('/get-game/:date', LiveGamesController.liveData);


/*************************************************** Get Data of All Games of Today *******************************************************/
/**
 * @swagger
 * /api/live/get-today-game:
 *   get:
 *     summary: Get Data of All Games of Today
 *     tags: [Live]
 *     responses:
 *       200:
 *         description: The list of the Today Games
 */
router.get('/get-today-game', LiveGamesController.todayGames);


/***************************************************  Get Data of Today Completed Games *******************************************************/
/**
 * @swagger
 * /api/live/get-today-complete-games:
 *   get:
 *     summary: Get Data of Today Completed Games
 *     tags: [Live]
 *     responses:
 *       200:
 *         description: The list of Today Completed Games
 */
router.get('/get-today-complete-games', LiveGamesController.getTodayCompletedGames);


/***************************************************  Get Data of Today Up Comming Games *******************************************************/
/**
 * @swagger
 * /api/live/get-today-upcomming-games:
 *   get:
 *     summary: Get Data of Today Up Comming Games
 *     tags: [Live]
 *     responses:
 *       200:
 *         description: The list of Today Up Comming Games
 */
router.get('/get-today-upcomming-games', LiveGamesController.getTodayUpCommingGames);


/***************************************************  Get Data of Today Live Games And Store In db *******************************************************/
/**
 * @swagger
 * /api/live/get-today-live-games-data:
 *   get:
 *     summary: Get Data of Today live Games And Store In Moralis
 *     tags: [Live]
 *     responses:
 *       200:
 *         description: The list of Today live Games
 */
router.get('/get-today-live-games-data', LiveGamesController.getTodayMatchesAndStoreInDB);


/***************************************************  Get Data of Today Live Games ***************************************************************/
/**
 * @swagger
 * /api/live/get-today-live-games:
 *   get:
 *     summary: Get Data of Today live Games
 *     tags: [Live]
 *     responses:
 *       200:
 *         description: The list of Today live Games
 */
 router.get('/get-today-live-games', LiveGamesController.getTodayLiveGames);

/*===================================================   Live Api End Here =========================================================================*/




// live  API Routes
// router.get('/get-game', LiveGamesController.liveData);
// router.get('/get-today-game', LiveGamesController.todayGames);
// router.get('/get-today-complete-games', LiveGamesController.getTodayCompletedGames);
// router.get('/get-today-upcomming-games', LiveGamesController.getTodayUpCommingGames);
//  router.get('/get-today-live-games', LiveGamesController.getTodayLiveGames);

module.exports = router;