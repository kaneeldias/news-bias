from scraper import scraper
import bs4
import json

class Scraper_HuffPost(scraper.Scraper):

    def get_headline(self, soup):
        h1 = soup.select("h1", class_="headline__title")[0]
        return h1.contents[0]

    def get_published_date(self, soup):
        timestamp = soup.find_all("meta", property="article:published_time")[0]
        return timestamp['content'].split(" ")[0]

    def get_content(self, soup):
        content = soup.find("div", class_="entry__text")
        content = content.find_all("p")
        content_str = ""
        for p in content:
            if p.has_attr('class'):
                continue
            string = self.get_string(p)
            if string != "":
                content_str += string + "\n\n"
        return content_str

