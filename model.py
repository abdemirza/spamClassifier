import joblib
import sys

model = joblib.load('BayesClassifier.pkl')
email=sys.argv[1]
print(model.predict([email])[0])

