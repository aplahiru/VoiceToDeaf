# VoiceToDeaf Web Application

The VoiceToDeaf is a translator which can be used to translate speech to sign language commands. A 3D humal model of the application is responsible for representing the sign language commands relavent to the speech of the user. This application is developed for Sinhala language speeches and also it represent sign language commands according to the Sinhala sign language dictionary.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See and follow below instructions for notes on how to run the project on a live system.

## Requirements

this requirements should be added to the local machine to configure and run the application in your local machine.

Back-end:
  * Python programming lanuage (python 3.6)
  * Flask framework
  * Tensorflow machine learning library (CNN library)
  * Anaconda Python distribution platform (for development)
  * FFMPEG
  * Wav

Front-end
  * Reactjs framework
  * Java script
  * Threejs framework
  * Node.js
  * NPM package manager

Other:
  * Any browser (for run and interact)

Hardware:
  * 64bit processor (for development)
  * 4GB RAM or up (for development)

### Prerequisites

Please follow the Installation guide.

This application is developed based on the ReactJs, ThreeJs and Flask frameworks. Therefore, Python and Node environments should be configured to run the application. 

Front-end
1. copy the project to the local machine.
2. setup the Node environment into project location.
3. import relavent packages from node package manager.
4. run the application
5. visit localhost:3000 to view the front-end and interact with it.

Back-end
1. install python into the local machine.
2. create virtual environment in a directory of local machine.
3. install Flask into the local machine.
4. install tensorflow into virtual environment.
5. copy back-end project into that direcotory.
6. run the flask application.
7. the application is run on localhost:5000.

### Installing

Please follow the instructions is given below before running the application.

####For Front-end

install Node.js

```
sudo apt update
sudo apt install nodejs
```

install npm

```
sudo apt install npm
```
Install ReactJs

```
npm install -g create-react-app
```
copy files into the your local directory
[Project Files](https://drive.google.com/drive/folders/1_cMT-OTl2wNNP9qL34RpPXbbNcTsJyIA?usp=sharing)
  or
clone project from github repository
  (first fork project into your account)

```
git clone projectRepositoryUrl
```

install required packages for the application using npm in the terminal of project's directory.

```
npm install
```

run the front-end of the application

```
npm start
```

####For Back-end


install the python

```
sudo apt update
sudo apt install python3.6
```

install the python virtual environment

```
sudo apt install python3-venv
```
activate virtual environment

```
yourSource venv/bin/activate
```
install the FFMPEG

```
sudo apt update
sudo apt install ffmpeg
```
If you use windows operating system please follow instructions of the below link

[Install FFMPEG on Windows](https://www.wikihow.com/Install-FFmpeg-on-Windows#)

install the FFMPEG on macOS

```
brew install ffmpeg
```
copy project files into the virtual enviroment
[Project Files](https://drive.google.com/drive/folders/1_cMT-OTl2wNNP9qL34RpPXbbNcTsJyIA?usp=sharing)
  or
get clone from github repository
  (first get fork into your github account then copy repo url)

```
git clone repositoryUrl
```
If you use git repository, please add CNN model (modelCNNnew.h5) into the below mentioned path to import it.
CNN model can be downloaded from Google drive.

[Google drive link for CNN model](https://drive.google.com/file/d/1EZhkqd7LXKPp-0I2_7L0tcp5Gzk4Xhvq/view?usp=sharing)

```
./files/
```
install required packages

```
pip install -r requirements.txt
```

run the back-end of the application

```
flask run
```

That's all. Now, Front-end and back-end is installed and configured.

## Run the application

1. The front-end of the application is now ready to use. You can navigate into any browser and visit localhost:3000 to view the UI of the application.

2. The back-end of the application is also now ready to use. You can provide voice commands from the UI of the applicaion by pressing record button of the UI.
 
3. Then, you can push it into the back-end for analyzing speech and viewing the sign language commands from 3D humal model.
Otherwise, you can clear the recorded speech by pressing clear button. 

### Note that,

Before recording the new speech, previous record should be clear by pressing clear button of the UI.

### Reporting Issues

You can report any issue or give feedback to the development team by using help option of the UI.

## Deployment

Only owners have authorities to deploy the application for prduction or any industrial usage.
You should be contact development team and contributors before any above mentioned type of usage.

## Built With

* [python](https://devdocs.io/python~3.6/) - python environment
* [npm](https://docs.npmjs.com/) - Dependency Management
* [ReactJs](https://reactjs.org/docs/getting-started.html) - front0end development framework
* [Flask](https://flask-doc.readthedocs.io/en/latest/) - back-end development framework
* [ThreeJs](https://threejs.org/docs/) - 3D model rendering framework
* [NodeJs](https://nodejs.org/en/docs/) - runtime environment for the java script
* [TensorFlow](https://www.tensorflow.org/api_docs) - open-source software library for machine learning
* [FFMPEG](https://ffmpeg.org/ffmpeg.html) - Media encoding and decoding library

## Contributing

you can contact contributors or development team to offer your contribution with this project.

## Authors

* **APL Madhushan** - *Initial work* - [aplahiru](https://github.com/aplahiru)
* **HKDT Karunathilaka** - *Initial work* - [ArrowNeck](https://github.com/ArrowNeck)
* **WMSK Wanninayaka** - *Initial work* - [wanni](https://github.com/wanni)

## Licensing

Most of the source code in the this application is copyright development team and contributors, and this is Version 0.1.

For any requirement or usage of the application or source files, you can contact development team and authors of the system.

## Contact

* Project Link: (https://github.com/aplahiru/VoiceToDeaf.git).
* contributors: 
   * github-> 
          * [lahiru](https://github.com/aplahiru) 
          * [thushan](https://github.com/ArrowNeck)
   * e-mail-> 
          * ict1600034@sjp.ac.lk
          * ict1600028@sjp.ac.lk
