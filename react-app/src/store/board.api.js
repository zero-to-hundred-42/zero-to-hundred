import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

const captains = console;

export const deleteBoardApi = async (board) => {
  const response = await axios.delete(`${API}/boards/${board.id}`);
  return parseItem(response, 200);
};

export const updateBoardApi = async (board) => {
  captains.log(board.id);
  const response = await axios.put(`${API}/boards/${board.id}`, board);
  return parseItem(response, 200);
};

export const addBoardApi = async (board) => {
  const response = await axios.post(`${API}/boards`, board);
  return parseItem(response, 201);
};

export const loadBoardsApi = async () => {
  const response = await axios.get(`${API}/boards`);
  return parseList(response, 200);
};
