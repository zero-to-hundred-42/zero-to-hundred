const data = require('../shared/board-data');

module.exports = async function (context, req) {
  const board = {
    id: undefined,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  };

  try {
    const newBoard = data.addBoard(board);
    context.res.status(201).json(newBoard);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
