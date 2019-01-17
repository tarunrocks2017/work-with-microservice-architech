const con = require('../../MigrationScripts/SqlScripts/connection');

const SELECT_FROM_ACTORS_BY_ID = `select m.moviename , m.movieid , ac.actorname , activeyear , totalmovies, ac.image_url,
ac.description from actors ac inner join movies m on m.movieid = ac.movieid where actorid = ?`;

const SELECT_FROM_ACTORS = 'select actorname , image_url , actorid from actors';

async function fetchActorsData() {
  try {
    const connection = await con.getConnection();
    const result = await connection.query(SELECT_FROM_ACTORS);
    await connection.end();
    return result;
  } catch (err) {
    return err;
  }
}

async function fetchActorDataById(id) {
  try {
    const connection = await con.getConnection();
    const formatQuery = await connection.format(SELECT_FROM_ACTORS_BY_ID, [id]);
    const result = await connection.query(formatQuery);
    await connection.end();
    return result;
  } catch (err) {
    return err;
  }
}

module.exports = {
  fetchActorsData,
  fetchActorDataById,
};
