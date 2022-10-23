from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def analyze_sentiment(responce):
    analyzer = SentimentIntensityAnalyzer()
    x = analyzer.polarity_scores(responce)
    return int(x['compound']*100)

