pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "krishala/my-major-frontend"
        DOCKER_TAG = "${BUILD_NUMBER}"
        KUBECONFIG = credentials('kubeconfig')  // Add Kubernetes config in Jenkins credentials
    }

    triggers {
        pollSCM '*/5 * * * *'
    }

    stages {
        stage ('Checkout') {
            steps {
                //Clone the repo
                git branch: 'main',
                credentialsId: 'pat-credential-github',
                url: 'https://github.com/Krish0110/devops-projecct.git'
            }
        }

        stage('Check Docker Access') {
            steps {
                sh 'docker --version'
                sh 'docker ps'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG ./major-web-frontend"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                        withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                        sh "docker push $DOCKER_IMAGE:$DOCKER_TAG"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh "sed -i 's/<TAG>/${BUILD_NUMBER}/' k8s/deployment_frontend.yaml"

                    sh "kubectl apply -f k8s/deployment_frontend.yaml"
                    sh "kubectl apply -f k8s/ingress_frontend.yaml"
                }
            }
        }
    }
}