const data = require('../shared/board-data');

module.exports = async function (context, req) {
  try {
    const boards = data.getBoards();
    context.res.status(200).json(boards);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
