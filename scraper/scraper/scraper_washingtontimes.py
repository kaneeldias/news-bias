from scraper import scraper
import bs4
import json

class Scraper_WashingtonTimes(scraper.Scraper):

    def get_headline(self, soup):
        h1 = soup.select("h1", class_="headline")[0]
        return h1.contents[0]

    def get_published_date(self, soup):
        data = json.loads(soup.find('script', type='application/ld+json').contents[0], strict=False)
        timestamp = data['datePublished']
        return timestamp.split("T")[0]

    def get_content(self, soup):
        content = soup.find("div", class_="bigtext")
        content = content.find_all("p", recursive=False)
        content_str = ""
        for p in content:
            if p.has_attr('class'):
                continue
            string = self.get_string(p)
            if string != "":
                content_str += string + "\n\n"
        return content_str

