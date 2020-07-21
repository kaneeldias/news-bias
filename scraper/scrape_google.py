import scrape_lib
import re


def get_url(search_query, domain, page = 1):
    search_terms = search_query.split(" ")
    search_terms.append("site%3A" + domain)
    search_terms.append("&start=" + str((page-1)*10))
    s = "+"
    url = "https://www.google.com/search?q=" + s.join(search_terms)
    return url


def get_links(soup):
    a_tags = soup.find_all("a")
    links = []
    for a_tag in a_tags:
        links.append(a_tag.get("href"))
    return links


def filter_links(links, domain):
    filtered = []
    for link in links:
        link = link.split("/url?q=")
        if (len(link) == 2):
            link = link[1].replace("www.", "")
            l_split = link.split("https://" + domain)
            if (len(l_split) == 2):
                link = link.split("&sa")[0]
                filtered.append(link);

    return filtered

def find_articles(search_query, domain):
    full_links = []

    for page in range(1, 4):
        print("Fetching page ", page)
        url = get_url(search_query, domain, page)
        soup = scrape_lib.get_soup(url)
        links = get_links(soup)
        links = filter_links(links, domain)
        full_links = full_links + links

    return full_links
