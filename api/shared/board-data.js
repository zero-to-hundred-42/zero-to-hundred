const data = {
  boards: [
    {
      id: 10,
      name: 'hekang',
      description: '오늘 날씨가 좋네요.',
      date: "2021-08-15",
    },
    {
      id: 20,
      name: 'heom',
      description: '코로나 얼른 사라졌으면 좋겠어요😢',
      date: "2021-08-15",
    },
    {
      id: 30,
      name: 'juepark',
      description: '모두들 건강 조심하세요.',
      date: "2021-08-15",
    },
    {
      id: 40,
      name: 'yookim',
      description: '좋은 하루 보내세요😃',
      date: "2021-08-15",
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
