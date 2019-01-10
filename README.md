# Temperature Converter Test 

![Teacher Page](https://i.imgur.com/KOLqQh8.png)
![Student Page](https://i.imgur.com/JbEMRQH.png)

## I. Setup for Development

### - View live site:

http://www.kickstartapps.us

### - Get code from github

  cd ~
  
  git clone git@github.com:jahskee/temp-converter.git flexion
  
  cd flexion

  npm install


### - Enable Sass in React

  npm install sass-loader node-sass --save-dev
  
  npm run eject

   Copy ~/flexion/react-script/webpack.config.dev.js to
   ~/flexion/node_modules/react-script/webpack.config.dev.js


### - Run the Temperature Converter Test app

  npm start



## II. CI/CD Strategy

I have experience with TravisCI and Jenkins, it does automated deployment to test servers. Production deployment is done manually  from a stable branch or code version. CI Servers trigger other events and can run many scripts such as Webpack, Grunt, Karma, Headless Chrome, Jasmine, Jest, Maven; likewise it does autmomated linting, prettier, build and test. When the build is successful, it will then deploy to Test Server. Now QA support will do functional testing. Afterwards, the user client will do the acceptance test and once accepted it will be in the next Production release. 


### Server auto-scaling in production:

In most cases during production deployment front-end and back-end web servers runs in multiple copies via Docker container. The image containers are saved on registries such as DockerHub and Amazon ECR. These container images can be deployed and auto-scaled to Kubernetes, Docker Swarm, OpenShift or Amazon ECS. Other notable deployment technologies are AWS CodeDeploy and AWS Lambda Functions.  


## III. TravisCI 

A cloud solution that is easy to setup with GitHub, simply by adding .travis.yml file in the project root directory.  It works well with various cloud platforms for deployments. Likewise, can trigger different scripts to run right after code checkin. It can execute AWS CLI, Google Cloud CLI and many other scripts for cloud deployment.   


Integrate with Karma or Headless Chrome and runs eslinter, prettier, maven, AWS CLI, Google Cloud CLI and various others. 

Please see example TravisCI configuration (.travis.yml at the root of project directory)

----------.travis.yml----------------

language: node_js

sudo: false

node_js:
  - "8.11"

before_script: 

- npm install --save-dev yarn

- yarn add --dev jest


branches:
   only:
   - master

install:  
  - yarn install
 
script:
  - yarn test

deploy:
  - bash, aws cli, google ci, azure cli
     
-----------------------------

## V. Jenkins

Jenkins has been around for many years, and is ideal for on-premise or private network CI/CD; moreover, it has the capability to run script and deploy code or applications to various Cloud test servers. Usually configured to run every 45 mins on schedule by default. It is a traditional tool for CI/CD, however, new features are added to catch up with latest strategies and tools.


## V. Sonar / SonarQube

Can auto generate complex analysis and reports about the current quality of te code, such as code smell, test coverage and various others.




Thanks for reviewing my work.




Sincerely yours,

Jaizon Lubaton
