from scraper import scraper


class Scraper_AP(scraper.Scraper):

    def get_headline(self, soup):
        h1 = soup.select("h1", class_="page-headline")[0]
        return h1.contents[0]

    def get_published_date(self, soup):
        timestamp = soup.find_all("span", class_="Timestamp")[0]
        return timestamp['data-source'].split("T")[0]

    def get_content(self, soup):
        content = soup.find("div", class_="Article")
        content = content.find_all("p")
        content_str = ""
        for p in content:
            paragraph = self.get_string(p)
            if paragraph == "___":
                break
            else:
                content_str += paragraph + "\n\n"
        return content_str
