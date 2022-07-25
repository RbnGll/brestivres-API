const cheerio = require('cheerio');
const request = require('request');
import { News } from "../models/news.model";

function getOFNews() {
    let newsList = new Array();
    let id = 0
    while(!error){
        const url = `https://www.ouest-france.fr/recherche/#!r/requete=Ivres%2C&onglet=actualites`;
        const data = await new Promise(function (resolve, reject){
          request(url, function(error, _response, html) {
            if(!error) {
              $ = cheerio.load(html);
              const articleImage = $('div.articleItem > div.zone-active > div.articleItem__imageContainer > figure > div > img').image();
              const articleContent = $('div.articleItem > div.zone-active > div.articleItem__textContainer').text();
              resolve(
                { ... new News(),
                  id: id,
                  title: title[id],
                  content: articleContent,
                  link: link,
                  source: source,
                  image: articleImage
              });
            }else{
              reject(undefined);
            }
          });
        });
        newsList.push(data);
        id++;
    }
    return newsList;
}

exports.getAllnews = async (_req, res, _next) => {
    let json = [];

    json.push(getOFNews())

    if (err) res.status(400).json({ message: err });
    res.status(201).json({
        json
    });

}

exports.addnews = async (_req, _res, _next) => {

}

exports.editnews = async (_req, _res, _next) => {

}

exports.deletenewsById = async (_req, _res, _next) => {

}