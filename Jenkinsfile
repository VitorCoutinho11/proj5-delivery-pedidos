pipeline {
    agent any

    environment {
        IMAGE_NAME = "delivery-pedidos"
        CONTAINER_NAME = "delivery-pedidos"
        APP_PORT = "9523"

        // Infisical
        INFISICAL_CLIENT_ID = "d5c10fba-9397-4862-9875-ecc66a3a2ba2"
        INFISICAL_CLIENT_SECRET = "25bb4324c295704f26498e75f5ab6e51d177d23409cf7d23c738e769d86f866b"
        INFISICAL_PROJECT_ID = "a4e361bc-4ac8-4d10-9e09-3746b864e0fa"
        INFISICAL_ENV = "prod"
        INFISICAL_SECRET_PATH = "/pasta"
    }

    stages {
        stage('Stop and Remove Old Container') {
            steps {
                script {
                    echo 'Limpando containers e imagens antigas...'
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                }
            }
        }

        stage('Install and Prisma Generate') {
            steps {
                echo 'Preparando dependências e gerando cliente do Prisma usando Infisical...'

                sh '''
                    npm install

                    # Instala o Infisical CLI localmente no projeto, sem precisar de sudo/root
                    npm install --no-save @infisical/cli

                    set +x
                    export INFISICAL_TOKEN=$(./node_modules/.bin/infisical login \
                        --method=universal-auth \
                        --client-id="$INFISICAL_CLIENT_ID" \
                        --client-secret="$INFISICAL_CLIENT_SECRET" \
                        --silent \
                        --plain)

                    ./node_modules/.bin/infisical run \
                        --projectId="$INFISICAL_PROJECT_ID" \
                        --env="$INFISICAL_ENV" \
                        -- npx prisma generate
                    set -x
                '''
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Construindo a nova imagem Docker...'
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Subindo o microserviço com injeção de variáveis...'

                sh '''
                    # Garante que a CLI local do Infisical existe
                    if [ ! -f ./node_modules/.bin/infisical ]; then
                        npm install --no-save @infisical/cli
                    fi

                    set +x
                    export INFISICAL_TOKEN=$(./node_modules/.bin/infisical login \
                        --method=universal-auth \
                        --client-id="$INFISICAL_CLIENT_ID" \
                        --client-secret="$INFISICAL_CLIENT_SECRET" \
                        --silent \
                        --plain)

                    ./node_modules/.bin/infisical export \
                        --projectId="$INFISICAL_PROJECT_ID" \
                        --env="$INFISICAL_ENV" \
                        --format=dotenv > .env
                    set -x

                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --env-file .env \
                        -p ${APP_PORT}:${APP_PORT} \
                        ${IMAGE_NAME}:latest

                    rm -f .env
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executado com sucesso! O serviço está rodando.'
        }
        failure {
            echo 'Erro no pipeline. Verifique os logs do Docker ou do Prisma.'
            sh "docker logs ${CONTAINER_NAME} || true"
        }
    }
}