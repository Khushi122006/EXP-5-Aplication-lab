
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t exp5-webapp:latest .'
            }
        }

        stage('Run Application') {
            steps {
                sh 'docker rm -f exp5-webapp || true'
                sh 'docker run -d --name exp5-webapp -p 8081:80 exp5-webapp:latest'
            }
        }

        stage('Test Application') {
            steps {
                sh 'sleep 5'
                sh 'curl -f http://localhost:8081'
            }
        }
    }
}
