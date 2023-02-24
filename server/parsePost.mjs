/*const unirest = require('unirest');
const cheerio = require('cheerio');*/
import unirest from "unirest";
import cheerio from "cheerio";



/*

function ye() {
    unirest.get('https://ye.ua/syspilstvo/62920_Vtrati_voroga_na_ranok_21_lyitogo.html')
        .end(function (response) {

            const body = response.body;
            const $ = cheerio.load(body);
            const title = $('title').text().split("|")[0];
            const image = $('.the-news img').attr('src').split('.ua')[1];
            const text = $('.the-news').text().split('Читайте також')[0]

            const post = {
                title,
                image,
                text
            }
            console.log(image)

        })
};
//ye()

function vechirniy() {
    unirest.get('https://vechirniy.kyiv.ua/news/78961/')
        .end(function (response) {

            const body = response.body;
            const $ = cheerio.load(body);


            const title = $('title').text().split(' - В')[0];
            const image ='https://vechirniy.kyiv.ua/' + $('img').attr('src');
            const text = $('.full-text').text().split('(adsbygoogle = window.adsbygoogle || []).push({});')[0].trim() + $('.full-text').text().split('(adsbygoogle = window.adsbygoogle || []).push({});')[1]

            const post = {
                title,
                image,
                text
            }
            console.log(post)

        })
};
*/

const  parsePost = async (url, elems) =>  {
   await unirest.get(url)
        .end(({body}) => {

            //const body = response.body;
            const $ = cheerio.load(body);

            const domain = url.match(/\/\/(.*?)\//)[1];
            let title = $(elems.title).text();
            title = title.indexOf('|') >=0 ? title.split("|")[0] : title.split(' - В')[0];

            let image =$(elems.image).attr('src');
            image = image.indexOf('.ua') >=0 ? image.split('.ua')[1] : image;
            image= `https://${domain}${image}`;

            let text = $(elems.text).text();
            text = text.indexOf('(adsbygoogle = window.adsbygoogle || []).push({});')>=0 ?
                ( text.split('(adsbygoogle = window.adsbygoogle || []).push({});')[0].trim()
                    + $('.full-text').text().split('(adsbygoogle = window.adsbygoogle || []).push({});')[1]) :
                text.split('Читайте також')[0]


            const post = {
                title,
                image,
                text
            }
            console.log(post)

        })
};


//module.exports = parsePost;
export default parsePost



