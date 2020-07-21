import scrape_lib
import bs4

class Scraper:

    def get_info(self, url):
        soup = scrape_lib.get_soup(url)
        headline = self.get_headline(soup)
        published_date = self.get_published_date(soup)
        content = self.get_content(soup)
        return [str(headline), str(published_date), str(content)]

    def get_string(self, p):
        string = ""
        if not hasattr(p, "contents"):
            return string
        if p.contents is None:
            return string
        for content in p.contents:
            if type(content) is not bs4.element.NavigableString:
                if content.name == "strong" or content.name == "em":
                    continue
                string += self.get_string(content)
            else:
                string += content
        return string
