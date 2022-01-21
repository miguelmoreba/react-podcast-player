import axios from "axios";
import * as cheerio from 'cheerio';

export const parseEpisodeUrl = async (url: string) => {
  if (url.includes("pca.st")) {
    return await getEpisodeUrlFromPocketCasts(url);
  } else if (url.includes("podcasts.apple")) {
    return await getEpisodeUrlFromITunes(url);
  }

  return '';
};
const getEpisodeUrlFromPocketCasts = async (url: string) => {
  const pocketCastsResponse =  await axios.get(url, { responseType: "text" });
  const cheerioObject = cheerio.load(pocketCastsResponse.data);

  const myUrl = cheerioObject('#audio_player').get()[0].attribs.src;

  return myUrl.includes('http') ? myUrl : '';

};

const getEpisodeUrlFromITunes = async (url: string) => {

  const iTunesResponse =  await axios.get(url, { responseType: "text" });

  const $ = cheerio.load(iTunesResponse.data);

  const myLink = ($('#shoebox-ember-data-store').get()[0].children[0] as any).data;

  const parsed = JSON.parse(myLink);

  return (Object.values(parsed)[0] as any).data.attributes.assetUrl;
};
