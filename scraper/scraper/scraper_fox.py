from scraper import scraper
import bs4

class Scraper_Fox(scraper.Scraper):

    def get_headline(self, soup):
        h1 = soup.select("h1", class_="headline")[0]
        return h1.contents[0]

    def get_published_date(self, soup):
        timestamp = soup.find_all("meta", scheme="dcterms.ISO8601")
        timestamp = timestamp[0]
        return timestamp['content'].split("T")[0]

    def get_content(self, soup):
        content = soup.find("div", class_="article-body")
        content = content.find_all("p", recursive=False)
        content_str = ""
        for p in content:
            if p.has_attr('class'):
                if p['class'][0] == "copyright" \
                        or p['class'][0] == "dek" \
                        or p['class'][0] == "success" \
                        or p['class'][0] == "subscribed":
                    continue
            string = self.get_string(p)
            if string != "":
                content_str += string + "\n\n"
        return content_str

