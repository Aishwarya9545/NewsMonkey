import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "John Wagner, Mariana Alfaro",
            "title": "Trump calls for 'a humiliating rebuke' of Democrats to close campaign - The Washington Post",
            "description": "With just one day until Election Day, follow our live coverage to get the latest news and updates on the 2022 midterm elections.",
            "url": "https://www.washingtonpost.com/politics/2022/11/07/election-2022-live-updates/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4NW3V2RXGNF3ZUFN3K6HEITOBE.jpg&w=1440",
            "publishedAt": "2022-11-08T04:43:23Z",
            "content": "Is there a bat signal that vulnerable Democrats send into the dark night to summon first lady Jill Biden? If so, it has gone up in an astounding number of states with the countrys most competitive ra… [+619 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Emily Mae Czachor",
            "title": "Monday night's $1.9 billion Powerball jackpot drawing delayed due to technical issue - CBS News",
            "description": "The jackpot is the largest in Powerball history.",
            "url": "https://www.cbsnews.com/news/next-powerball-drawing-monday-tonight-jackpot-record-2022-11-07/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/11/07/04c2e437-c791-4965-a9a1-693262f9b319/thumbnail/1200x630/5b0635f2f5bb95cf727f28674c373cb9/1106-en-powerball-1442607-640x360.jpg",
            "publishedAt": "2022-11-08T04:14:00Z",
            "content": "Monday night's Powerball drawing, originally scheduled for 10:59 p.m. ET, was delayed due to what the organization called a \"technical problem.\" When the issue has been resolved, the winning numbers … [+2781 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Christina Wilkie",
            "title": "Trump suggests he'll launch his 2024 presidential campaign on Nov. 15 in Florida - CNBC",
            "description": "Former President Donald Trump suggests he'll launch his 2024 presidential campaign next Tuesday from his Florida resort, Mar-a-Lago.",
            "url": "https://www.cnbc.com/2022/11/08/trump-suggests-he-will-launch-his-2024-presidential-campaign-on-nov-15.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107146789-16677429812022-11-06t005313z_426277259_rc20gx91iixs_rtrmadp_0_usa-election-trump.jpeg?v=1667879355&w=1920&h=1080",
            "publishedAt": "2022-11-08T03:49:00Z",
            "content": "WASHINGTON After weeks of intensifying speculation, former President Donald Trump said Monday that he will make a \"big announcement\" on Tuesday, Nov. 15 from his Mar-a-Lago resort, where he is expect… [+1674 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "What the final polls show about Senate swing state races going into Election Day 2022 - POLITICO - POLITICO",
            "description": "Independent polls are painting a very different picture of the midterm election than the Republican-aligned firms pointing to GOP victory.",
            "url": "https://www.politico.com/news/2022/11/07/final-senate-swing-state-polls-2022-00065501",
            "urlToImage": "https://static.politico.com/36/6f/e16d1fbf4bf9a87c1fb0f62231ca/v2.jpg",
            "publishedAt": "2022-11-08T02:56:42Z",
            "content": "Im cautiously optimistic, Charles Franklin, who runs Marquette Law Schools polling in Wisconsin, said Monday, days after his final poll pegged both the states marquee Senate and governors races as to… [+5977 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Wayne Sterling, Steve Almasy",
            "title": "Indianapolis Colts part ways with head coach Frank Reich, replace him with first-time NFL coach Jeff Saturday - CNN",
            "description": "The Indianapolis Colts have parted ways with head coach Frank Reich, the NFL team announced Monday.",
            "url": "https://www.cnn.com/2022/11/07/sport/frank-reich-fired-indianapolis-colts-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221107170437-frank-reich-fired-colts-tease.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-08T02:55:00Z",
            "content": "The Indianapolis Colts have parted ways with head coach Frank Reich, the NFL team announced Monday.\r\nFormer Colts Pro Bowl center and Super Bowl winner Jeff Saturday has been named interim head coach… [+2472 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Meta and other Big Tech companies announce layoffs - CNBC Television",
            "description": "Big Tech has begun to announce layoffs. A look at how this could impact the rest of the economy, with former Ford CEO Mark Fields and RLJ Companies founder R...",
            "url": "https://www.youtube.com/watch?v=6bczFCQNMUk",
            "urlToImage": "https://i.ytimg.com/vi/6bczFCQNMUk/maxresdefault.jpg",
            "publishedAt": "2022-11-08T01:52:40Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ashley Joy Parker",
            "title": "Kylie Jenner Brings Edgy Elegance to the Red Carpet at the 2022 CFDA Awards - Yahoo Entertainment",
            "description": "Two weeks after serving up several stylish Halloween costumes, Kylie Jenner turned heads in Mugler on the red carpet at the 2022 CFDA Fashion Awards in New...",
            "url": "https://www.yahoo.com/entertainment/kylie-jenner-brings-edgy-elegance-003300707.html",
            "urlToImage": "https://media.zenfs.com/en/e__181/414f0793b812dd55a54da10d1ea8d4b1",
            "publishedAt": "2022-11-08T01:47:57Z",
            "content": "No one kills it on the red carpet quite like Kylie Jenner.\r\nThe 25-year-old was one of the many style stars to step out for the 2022 CFDA Fashion Awards, held at Cipriani South Street at Casa Ciprian… [+2004 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WESH Orlando"
            },
            "author": null,
            "title": "Watches issued for Central ﻿Florida as ﻿Subtropical Storm Nicole approaches - WESH 2 Orlando",
            "description": "A prolonged period of hazardous weather is expected over the northwestern Bahamas, Florida, and the southeastern coast of the United States this week.",
            "url": "https://www.wesh.com/article/subtropical-storm-nicole/41882810",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/dynamic/wesh/HURR_C_PATH_STATS_STILL2.jpg?crop=1.00xw:1.00xh;0,0&t=2022-11-08T02:56:22.780747Z&resize=1200:*",
            "publishedAt": "2022-11-08T01:09:00Z",
            "content": "ORLANDO, Fla. —On Monday morning, Subtropical Storm Nicole formed near the Bahamas.\r\nAccording to the National Hurricane Center, a prolonged period of hazardous weather is expected over the northwest… [+8230 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Saints vs Ravens Gameday Live | 2022 NFL Week 9 Monday Night Football - New Orleans Saints",
            "description": "LIVE: New Orleans Saints vs. Baltimore Ravens Week 9 pregame news, analysis, and injury updates from Monday Night Football on Saints Gameday Live presented b...",
            "url": "https://www.youtube.com/watch?v=B9uT0MTQho8",
            "urlToImage": "https://i.ytimg.com/vi/B9uT0MTQho8/maxresdefault.jpg",
            "publishedAt": "2022-11-08T00:34:17Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Prideofdetroit.com"
            },
            "author": "Kellie Rowe",
            "title": "Lions News: Aaron Rodgers calls Aidan Hutchinson’s pick a ‘freebie’ - Pride Of Detroit",
            "description": "Talk about things you’d love to see on video.",
            "url": "https://www.prideofdetroit.com/2022/11/7/23446081/aaron-rodgers-calls-aidan-hutchinsons-interception-freebie-lions-packers",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ahk9F4KHxbpaI-fttCaH-ubEOuQ=/408x400:2369x1427/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24176951/1244567632.jpg",
            "publishedAt": "2022-11-08T00:30:00Z",
            "content": "Rookie edge defender Aidan Hutchinson registered his first career interception in the Detroit Lions upset win against the Green Bay Packers this Sunday.\r\nIt was enough to send Detroit fans to their f… [+1785 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Human rights case overshadows start of COP27 climate change summit in Egypt - PBS NewsHour",
            "description": "Global leaders are meeting at a pivotal conference in Egypt to discuss climate change, but human rights are overshadowing the beginning of the COP27 summit. ...",
            "url": "https://www.youtube.com/watch?v=0AWGsQQZ6zI",
            "urlToImage": "https://i.ytimg.com/vi/0AWGsQQZ6zI/maxresdefault.jpg",
            "publishedAt": "2022-11-08T00:06:30Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Law & Crime"
            },
            "author": "alberto-luperon",
            "title": "Tyson Foods CFO Walked Intoxicated into Random Woman’s Home, Fell Asleep on Her Bed: Police - Law & Crime",
            "description": "Police say a major executive of one of America's biggest companies walked intoxicated into a woman's home this weekend and fell asleep on her bed.",
            "url": "https://lawandcrime.com/crime/tyson-foods-cfo-walked-intoxicated-into-random-womans-home-fell-asleep-on-her-bed-police/",
            "urlToImage": "https://lawandcrime.com/wp-content/uploads/2022/11/John-R.-Tyson-via-Washington-County-Jail.jpg",
            "publishedAt": "2022-11-08T00:06:00Z",
            "content": "John R. Tyson\r\nPolice say a man walked intoxicated into a woman’s home this weekend and fell asleep on her bed and the suspect wasn’t just anybody, but a major executive of one of America’s biggest c… [+2002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Janelle Ash",
            "title": "Netflix renews 'Monster' and 'The Watcher' for new seasons - Fox Business",
            "description": "Netflix's \"Monster” and “The Watcher\" have been renewed for more seasons. \"Dahmer — Monster: The Jeffrey Dahmer Story\" is the streaming service's second most popular English series.",
            "url": "https://www.foxbusiness.com/entertainment/netflix-renews-monster-the-watcher",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/09/0/0/jeff-dahmer-netflix.jpg?ve=1&tl=1",
            "publishedAt": "2022-11-07T23:06:17Z",
            "content": "Following the success of Netflix's \"Dahmer — Monster: The Jeffrey Dahmer Story\" and \"The Watcher,\" the streaming service is ordering more seasons. \r\n\"Monster\" is getting two new installments of the a… [+3206 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Evan Real",
            "title": "Lindsay Lohan reacts to ex-boyfriend Aaron Carter's death - Page Six",
            "description": "“My heart goes out to his family and may he rest in peace,” said the actress, who dated the late pop star during their teen years.",
            "url": "https://pagesix.com/2022/11/07/lindsay-lohan-reacts-to-ex-boyfriend-aaron-carters-death/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/11/lindsay-lohan-aaron-carter-death.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2022-11-07T22:31:00Z",
            "content": "Lindsay Lohan paid her respects to ex-boyfriend Aaron Carter, who died Saturday at age 34.\r\nMy heart goes out to his family and may he rest in peace, the Falling for Christmas star, 36, told Entertai… [+2360 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Adam Bankhurst",
            "title": "PSA: Pokémon Scarlet and Violet Spoilers Have Begun to Leak - IGN",
            "description": "We have a warning for all of you trainers out there excited to go to the Paldea region — spoilers for Pokémon Scarlet and Violet have unfortunately begun to leak.",
            "url": "https://www.ign.com/articles/psa-pokmon-scarlet-and-violet-spoilers-have-begun-to-leak",
            "urlToImage": "https://assets-prd.ignimgs.com/2022/11/07/untitled-1-1662556816191-1667859365917.jpg?width=1280",
            "publishedAt": "2022-11-07T22:25:54Z",
            "content": "We have a warning for all of you trainers out there excited to go to the Paldea region spoilers for Pokémon Scarlet and Violet have unfortunately begun to leak.\r\nAs reported by VGC, the leaks arrive … [+1172 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Li Cohen",
            "title": "Blood moon will emerge on Election Day in last total lunar eclipse for 3 years - CBS News",
            "description": "NASA said the eclipse will provide a little \"celestial magic\" during the so-called Beaver Moon.",
            "url": "https://www.cbsnews.com/news/beaver-blood-moon-election-day-last-total-lunar-eclipse-3-years/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/11/04/85f17553-aa24-4694-8ea2-7d439519cc6b/thumbnail/1200x630/997152d92e3dc43709bfc224f02a51e9/gettyimages-1240699850.jpg",
            "publishedAt": "2022-11-07T22:07:00Z",
            "content": "The normally bright and glowing moon will appear an eerie red early Tuesday, in the last total lunar eclipse for the next three years. The so-called \"Beaver Moon,\" as November's full moon is known, w… [+2218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Times of Israel"
            },
            "author": null,
            "title": "Biden congratulates Netanyahu on election win: ‘We’ll make history together’ - The Times of Israel",
            "description": "Likud leader also takes phone call from Ukraine's Zelensky, promises to 'seriously examine' policies; tells US president he believes they'll ink additional peace deals",
            "url": "https://www.timesofisrael.com/biden-congratulates-netanyahu-on-election-win-well-make-history-together/",
            "urlToImage": "https://static.timesofisrael.com/www/uploads/2022/11/WhatsApp-Image-2022-11-07-at-12.17.43-PM-1024x640.jpeg",
            "publishedAt": "2022-11-07T21:55:00Z",
            "content": "US President Joe Biden phoned Likud chairman Benjamin Netanyahu on Monday to congratulate him on last week’s election victory, as Washington aimed to portray a sense of business as usual, despite som… [+4565 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "Cygnus Cargo Spacecraft Fails to Deploy Solar Array Shortly After Launch - Gizmodo",
            "description": "Northrop Grumman says the expendable freighter, with one of two arrays deployed, should have enough power to rendezvous with the ISS on Wednesday.",
            "url": "https://gizmodo.com/cygnus-cargo-spacecraft-fails-deploy-solar-array-1849754041",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6cb930a4b5f969269ff45f814a28717c.jpg",
            "publishedAt": "2022-11-07T21:50:00Z",
            "content": "The Cygnus cargo spacecraft has run into some trouble on its way to the International Space Station (ISS), as one of its two solar arrays is refusing to deploy.\r\nNorthrop Grummans Cygnus spacecraft h… [+1959 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ukraine says Russia forces pillage, occupy Kherson homes ahead of battle - Reuters",
            "description": "Ukraine accused Russia on Monday of looting empty homes in the southern city of Kherson and occupying them with troops in civilian clothes to prepare for street fighting in what both sides predict will be one of the war's most important battles.",
            "url": "https://www.reuters.com/world/europe/us-urges-ukraine-be-open-talks-with-russia-washington-post-2022-11-06/",
            "urlToImage": "https://www.reuters.com/resizer/PSs3AJcLfk-kCoE7YyW9c7piuMI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/57QXWO6NLRL3ZEOFEOSAPWEUHY.jpg",
            "publishedAt": "2022-11-07T21:40:00Z",
            "content": "KYIV, Nov 7 (Reuters) - Ukraine accused Russia on Monday of looting empty homes in the southern city of Kherson and occupying them with troops in civilian clothes to prepare for street fighting in wh… [+4975 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Twitter's blue check policy may be a blessing to Russian trolls - POLITICO",
            "description": "While midterms get a pass, the lax verification policy comes as political tensions rise ahead of the next presidential election cycle.",
            "url": "https://www.politico.com/newsletters/national-security-daily/2022/11/07/twitters-blue-check-policy-may-be-a-blessing-to-russian-trolls-00065390",
            "urlToImage": "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg",
            "publishedAt": "2022-11-07T21:00:26Z",
            "content": "The national security world is already crafting doomsday scenarios for when Twitter users can pay $8 a month for verification. | Noah Berger/AP Photo\r\nWith help from Maggie Miller and Daniel Lippman\r… [+14460 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hello I am a Constructor from News component")
        this.state={
           articles: this.articles, 
           loading:false
        }
      }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey-Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem   title={Element.title} description={Element.description}
                     imageUrl={Element.urlToImage} newsUrl={element.url}/>
                </div>
                })}

                   
                  
                </div>
            </div>
        )
    }
}

export default News
