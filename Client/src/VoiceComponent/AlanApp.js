import React, { Component, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from '../components/NewsCards/NewsCards.js'
import useStyles from './styles.js';
import {Grid, Grow, Typography} from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';

const alanKey='f1820f88357cf6c5263a8678f4d617bf2e956eca572e1d8b807a3e2338fdd0dc/stage';
    const AlanApp = () =>
    {
        const [newsArticles, setNewsArticles] = useState([]);
        const [activeArticle, setActiveArticle] = useState(-1);
        const classes = useStyles();
      
        useEffect(() => {
          alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
              if (command === "newHeadlines") {
                setNewsArticles(articles);
                setActiveArticle(-1);
              } else if (command === "highlight") {
                setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
              } else if (command === "open") {
                const parsedNumber =
                  number.length > 2
                    ? wordsToNumbers(number, { fuzzy: true })
                    : number;
                const article = articles[parsedNumber - 1];
                if (parsedNumber > 20) {
                  alanBtn().playText("Please try that again.");
                } else if (article) {
                  window.open(article.url, "_blank");
                  alanBtn().playText("Opening ...");
                }
              }
            },
          });
        }, []);
      
        return (
          <div>
            <div className={classes.logoContainer}>
                 {newsArticles.length ? (
                    <div className={classes.infoContainer}>
                        {/* <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div> */}
                        <div ><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
                    </div>
                ) : null}
                {/* <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" /> */}
            </div>
            
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
          </div>
        );
      }
      
      export default AlanApp;