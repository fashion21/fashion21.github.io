pipeline {
	agent {
		docker {
			image 'ruby:2.4.1'
		}
	}
	stages {
		stage('Install Requirements') {
			steps {
				sh 'gem install bundler -v 1.17.3'
				sh 'bundle install'
			}
		}
		stage('Build') {
			steps {
				sh 'bundle exec jekyll build'
			}
		}
	}
}