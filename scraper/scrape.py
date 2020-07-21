import article
import scrape_google

search = ["net neutrality", "nuclear energy"]
domain = ["apnews.com", "cnn.com", "washingtontimes.com", "huffpost.com", "foxnews.com"]

for s in search:
    for d in domain:
        links = scrape_google.find_articles(s, d)
        #links = ["https://apnews.com/07f9f83f09754fa8b5a2725a8b60eec1"]
        #d = "apnews.com"
        for link in links:
            print(link)
            a = article.Article(d, link)
            if not a.is_valid():
                print("INVALID")
                continue
            a.set_generated_topic(s)
            a.save()
