const data = require('../shared/board-data');

module.exports = async function (context, req) {
  const board = {
    id: parseInt(req.params.id, 10),
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  };

  try {
    const updatedBoard = data.updateBoard(board);
    context.res.status(200).json(updatedBoard);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
