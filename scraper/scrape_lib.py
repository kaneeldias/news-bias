from bs4 import BeautifulSoup
from urllib.request import Request, urlopen

def get_soup(url):
    hdr = {'User-Agent': 'Mozilla/5.0'}
    req = Request(url, headers=hdr)
    page = urlopen(req)
    soup = BeautifulSoup(page, features="lxml")
    return soup


def get_scraper(domain):
    if domain == "apnews.com":
        from scraper import scraper_ap
        return scraper_ap.Scraper_AP()
    if domain == "cnn.com":
        from scraper import scraper_cnn
        return scraper_cnn.Scraper_CNN()
    if domain == "foxnews.com":
        from scraper import scraper_fox
        return scraper_fox.Scraper_Fox()
    if domain == "washingtontimes.com":
        from scraper import scraper_washingtontimes
        return scraper_washingtontimes.Scraper_WashingtonTimes()
    if domain == "huffpost.com":
        from scraper import scraper_huffpost
        return scraper_huffpost.Scraper_HuffPost()

