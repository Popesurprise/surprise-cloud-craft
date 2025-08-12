pipeline {
  agent any

  environment {
    NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')
    NETLIFY_SITE_ID    = credentials('NETLIFY_SITE_ID')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        bat 'echo Checked out %WORKSPACE%'
      }
    }

    stage('Verify Node & npm') {
      steps {
        bat 'node -v'
        bat 'npm -v'
        bat 'npx -v'
      }
    }

    stage('Install dependencies') {
      steps {
        // npm ci fails if package-lock.json missing; fall back to npm install
        bat 'npm ci || npm install'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Deploy to Netlify') {
      steps {
        // Use npx to avoid global install. Netlify CLI reads NETLIFY_AUTH_TOKEN env var automatically.
        bat '''
          echo Deploying to Netlify site %NETLIFY_SITE_ID%
          npx -y netlify-cli deploy --dir=dist --prod --site=%NETLIFY_SITE_ID% --auth=%NETLIFY_AUTH_TOKEN% --message="Jenkins build %BUILD_NUMBER%"
        '''
      }
    }
  }

  post {
    success {
      echo "✅ Build + deploy succeeded"
    }
    failure {
      echo "❌ Build or deploy failed — check console output"
    }
  }
}
