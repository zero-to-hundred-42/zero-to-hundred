import axios from 'axios';

const serviceKey = process.env.SERVICE_KEY;
serviceKey = "EwASIYoegy8BFcuqV1HMC2T7Gk3f5OldW";

export function getPost() {
	return axios.get(`https://api.corona-19.kr/korea/?serviceKey=` + serviceKey);
}

export function getPostNew() {
	return axios.get(`https://api.corona-19.kr/korea/country/new/?serviceKey=` + serviceKey);
}