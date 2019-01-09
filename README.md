Temperature Converter Test 

1 To view the live Site: http://www.kickstartapps.us

2. Setup and get code from github

  cd ~
  git clone git@github.com:jahskee/temp-converter.git flexion
  cd flexion

  npm install


3. Enable Sass in React

  npm install sass-loader node-sass --save-dev
  npm run eject

Copy the file from ~/flexion/react-script/webpack.config.dev.js to
~/flexion/node_modules/react-script/webpack.config.dev.js


4. Run the Temperature Converter Test app

  npm start




II. CI/CD Strategy

I have experience with TravisCI and Jenkins automated deployments to test servers. Production deployment are manually run from a stable code version. CI Servers triggers other events and runs scripts such as Webpack, Grunt, Karma, Headless Chrome, Jasmine, Jest, Maven to do autmomated linting, prettier, build and test. When the build is error free, then it will be deployed to Test Server for QA Engineers to process. Afterwards, the user client will do the acceptance test and once accepted it will ready for Production release. 


Server auto-scaling in production:

In most cases during production deployment front-end and back-end web servers  are packed in multiple copies called containers via Docker. wThe image container is stored on registries such as DockerHub and Amazon ECR. These container images can be deployed and auto-scaled to Kubernetes, Docker Swarm, OpenShift or Amazon ECS. Other notable deployment technologies are AWS CodeDeploy and Lambda Functions.  


III. TravisCI 

It is a cloud solution and easy to setup with GitHub, by just adding .travis.yml file in the project root directory.  It works well with various cloud platforms for deployments. Likewise, can trigger different scripts to run right after code checkin. It can execute AWS CLI, Google Cloud CLI to deploy to the cloud.   


Integrate with Karma or Headless Chrome and runs eslinter, prettier, maven, AWS CLI, Google Cloud CLI and various others. 

Please see example TravisCI configuration (.travis.yml at the root of project directory)

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


IV. Jenkins

It is ideal for on-premise or private network CI/CD; likewise, it has the capability to run script and deploy code or applications to various Cloud test servers. Usually configured to run every 45 mins on schedule by default.  It is a traditional tool for CI/CD, however, it's features are catching up with latest tools.


V. Sonar / SonarQube

Can auto generate complex analysis and reports about the current quality of te code, such as code smell, test coverage and various others.



Thank you for reviewing.


Sincerely yours,
Jaizon Lubaton
