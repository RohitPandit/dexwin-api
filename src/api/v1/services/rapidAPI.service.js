const config = require('config');
const credentials = config.get('Customer.rapidapi');

// get Games Api From live API
exports.getGamesUsignDate = (_date) => {
    const options = {
        method: 'GET',
        url: credentials.RAPID_API_BASKETBALL_GAMES,
        params: { date: _date },
        headers: {
            'X-RapidAPI-Key': credentials.X_RapidAPI_Key,
            'X-RapidAPI-Host': credentials.API_BASKETBALL_HOST
        }
    };
    return options;
}

// get Games Api From live API
exports.getOddsUsginGameIdBookmakerIdBetId = (game, bookmaker, betid) => {
    const options = {
        method: 'GET',
        url: credentials.RAPID_API_BASKETBALL_ODDS,
        params: { game: game, bookmaker: bookmaker, bet: betid },
        headers: {
            'X-RapidAPI-Key': credentials.X_RapidAPI_Key,
            'X-RapidAPI-Host': credentials.API_BASKETBALL_HOST
        }
    };
    return options;
}

// get statistics Api From live API
exports.getTeamStatistics = (id, season) => {
    const options = {
        method: 'GET',
        url: credentials.RAPID_API_NBA_TEAMS_STATISTICS,
        params: {id: id, season: season},
        headers: {
          'X-RapidAPI-Key': credentials.X_RapidAPI_Key,
          'X-RapidAPI-Host': credentials.API_NBA_HOST
        }
      };
    return options;
}

// get statistics Api From live API
exports.getPlayerAssist = (id, season) => {
    const options = {
        method: 'GET',
        url: credentials.RAPID_API_NBA_PLAYERS_STATISTICS,
        params: {id: id, season: season},
        headers: {
          'X-RapidAPI-Key': credentials.X_RapidAPI_Key,
          'X-RapidAPI-Host': credentials.API_NBA_HOST
        }
      };
    return options;
}   