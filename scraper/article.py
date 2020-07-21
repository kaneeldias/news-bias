import scrape_lib
import database


class Article:

    def __init__(self, domain, url, date, headline, content):
        self.domain = domain
        self.url = url
        self.date = date
        self.headline = headline
        self.content = content

    def __init__(self, domain, url):
        self.domain = domain
        self.url = url
        self.set_scraper()
        try:
            info = self.scraper.get_info(self.url)
            self.headline = info[0]
            self.date = info[1]
            self.content = info[2]
            self.valid = True
        except (AttributeError, IndexError) as e:
            print(e)
            self.valid = False

    def is_valid(self):
        return self.valid

    def set_scraper(self):
        self.scraper = scrape_lib.get_scraper(self.domain)

    def set_generated_topic(self, topic):
        self.generated_topic = topic

    def display(self):
        print(self.headline)
        print(self.date)
        print(self.content)

    def save(self):
        db = database.get_db()
        cursor = db.cursor()
        sql = "REPLACE INTO articles " \
              "(url, domain, generated_topic, date, headline, content)" \
              "VALUES (%s, %s, %s, %s, %s, %s)"
        val = (self.url, self.domain, self.generated_topic, self.date, self.headline, self.content)
        cursor.execute(sql, val)
        db.commit()
