const express = require("express");
const router = express.Router();
const { Moneyline3WayBetsController, MoneylineBetsController } = require("../controller/index");



/***************************************************** Money Line Bets API   *******************************************************************/
/**
 * @swagger
 * /api/bet/money-line/placebet:
 *   post:
 *     summary: Bet Place Successfully.
 *     tags: [Bets API interact with web3 & smart contract]
 *     responses:
 *       200:
 *         description: Bet Place Successfully.
 *       404:
 *         description: Something Went Wrong.
 */
router.post('/bet/money-line/placebet', MoneylineBetsController.placeBet);

/**
 * @swagger
 * /api/bet/money-line/createbet:
 *   post:
 *     summary: Bet Create Successfully.
 *     tags: [Bets API interact with web3 & smart contract]
 *     responses:
 *       200:
 *         description: Bet Create Successfully.
 *       404:
 *         description: Something Went Wrong.
 */
router.post('/bet/money-line/createbet', MoneylineBetsController.createBet);


/**
 * @swagger
 * /api/bet/money-line-3-way/placebet:
 *   post:
 *     summary: Bet Place Successfully.
 *     tags: [Bets API interact with web3 & smart contract]
 *     responses:
 *       200:
 *         description: Bet Place Successfully.
 *       404:
 *         description: Something Went Wrong.
 */
router.post('/bet/money-line-3-way/placebet', Moneyline3WayBetsController.placeBet);

/**
* @swagger
* /api/bet/money-line-3-way/createbet:
*   post:
*     summary: Bet Create Successfully.
*     tags: [Bets API interact with web3 & smart contract]
*     responses:
*       200:
*         description: Bet Create Successfully.
*       404:
*         description: Something Went Wrong.
*/
router.post('/bet/money-line-3-way/createbet', Moneyline3WayBetsController.createBet);



module.exports = router;