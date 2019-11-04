import axios from "axios";
import { playerList, uploadAction } from "../actions/index";
const route = "http://localhost:8080/csv/";
export const getPlayers = async () => {
  const result = await Promise.all([
    axios.get(`${route}wta_players.csv`),
    axios.get(`${route}wta_rankings_current.csv`)
  ]);
  const players = {};
  result[0].data.forEach(player => {
    players[player[0]] = `${player[1]} ${player[2]}`;
  });
  return { players, ranking: result[1].data };
};

export const getMatches = async () => {
  const result = Promise.all([
    axios.get(`${route}wta_matches_2010.csv`),
    axios.get(`${route}wta_matches_2011.csv`),
    axios.get(`${route}wta_matches_2012.csv`),
    axios.get(`${route}wta_matches_2013.csv`),
    axios.get(`${route}wta_matches_2014.csv`),
    axios.get(`${route}wta_matches_2015.csv`),
    axios.get(`${route}wta_matches_2016.csv`)
  ]);
  console.log(result);
};
