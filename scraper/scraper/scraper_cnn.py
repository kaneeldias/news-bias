from scraper import scraper
import bs4

class Scraper_CNN(scraper.Scraper):

    def get_headline(self, soup):
        h1 = soup.select("h1")[0]
        return h1.contents[0]

    def get_published_date(self, soup):
        timestamp = soup.find_all("meta", property="og:pubdate")[0]
        return timestamp['content'].split("T")[0]

    def get_content(self, soup):
        content = soup.find_all(class_="zn-body__paragraph")
        content_str = ""
        for p in content:
            content_str += self.get_string(p) + "\n\n"
        return content_str


