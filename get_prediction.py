import numpy as np
from transformer import transformer

# commands = ['thanks', 'morning', 'meet', 'unknown', 'sorry', 'welcome', 'good', 'how']
commands = ['unknown', 'how', 'morning', 'welcome', 'good', 'thanks', 'meet', 'sorry']

def get_prediction(model,filePathForModel):
  
  prediction = model.predict(transformer(filePathForModel))
  result = np.array(prediction)
  result = result.argmax(axis=1)
  predictValue = commands[result[0]]
  return predictValue