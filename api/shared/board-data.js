const data = {
  boards: [
    {
      id: 10,
      name: 'hello',
      description: '블라블라',
      quantity: "2021-08-13",
    },
    {
      id: 20,
      name: 'hi',
      description: '블라블라',
      quantity: "2021-08-13",
    },
    {
      id: 30,
      name: 'good-morning',
      description: '블라블라',
      quantity: "2021-08-13",
    },
    {
      id: 40,
      name: 'nono',
      description: '블라블라',
      quantity: "2021-08-13",
    }
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addBoard = (board) => {
  board.id = getRandomInt();
  data.boards.push(board);
  return board;
};

const updateBoard = (board) => {
  const index = data.boards.findIndex((v) => v.id === board.id);
  console.log(board);
  data.boards.splice(index, 1, board);
  return board;
};

const deleteBoard = (id) => {
  const value = parseInt(id, 10);
  data.boards = data.boards.filter((v) => v.id !== value);
  return true;
};

const getBoards = () => {
  return data.boards;
};

module.exports = { addBoard, updateBoard, deleteBoard, getBoards };
