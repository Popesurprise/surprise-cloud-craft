pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')
        NETLIFY_SITE_ID = credentials('NETLIFY_SITE_ID')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Popesurprise/surprise-cloud-craft.git'
            }
        }

        stage('Install Node.js') {
            steps {
                sh '''
                # Install Node.js if not already available
                if ! command -v node > /dev/null; then
                  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                  apt-get install -y nodejs
                fi
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build site') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                sh '''
                npm install -g netlify-cli
                netlify deploy --dir=dist --prod --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN --message="Deployed via Jenkins: $BUILD_NUMBER"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
