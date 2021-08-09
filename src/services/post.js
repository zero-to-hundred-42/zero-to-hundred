import axios from 'axios';

export function getPost() {
	const serviceKey = "EwASIYoegy8BFcuqV1HMC2T7Gk3f5OldW";
	// return axios.get(`https://cors-anywhere.herokuapp.com/http://api.corona-19.kr/korea?serviceKey=` + serviceKey);
	return axios.get(`https://api.corona-19.kr/korea/?serviceKey=` + serviceKey);
}