from flask import Flask, flash, request, redirect, url_for, jsonify
from transformer import transformer
from get_prediction import get_prediction
from tensorflow import keras
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS
from pydub import AudioSegment
from pydub.utils import make_chunks


app= Flask(__name__)

model = keras.models.load_model("./files/modelCNNnew.h5")

cors = CORS(app, resources={"/upload": {"origins": "*"}})

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files["file"]
        pathname = os.path.join("./files/uploaded", file.filename)
        file.save(pathname)
        print(file)
        os.system("ffmpeg -y -i ./files/uploaded/test.mp3 -vn -acodec pcm_s16le -ac 1 -ar 16000 -f wav ./files/uploaded/speech.wav")
        myaudio = AudioSegment.from_file("./files/uploaded/speech.wav" , "wav") 
        chunks = make_chunks(myaudio, 1000)
        chunk = chunks[0]
        chunk.export("./files/uploaded/chunk.wav", format="wav")
        path = "./files/uploaded/chunk.wav"
        prediction = get_prediction(model, path)
        print(prediction)
        return jsonify(prediction=prediction)

