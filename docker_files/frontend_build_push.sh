#!/bin/bash
########################################################

## Shell Script to Build Docker Image for tiar flower

########################################################

DATE=`date +%Y.%m.%d.%H.%M`
VERSION=8

cd .. || exit

echo "Image Building process started :"$DATE
docker buildx build --platform=linux/amd64 -t registry.digitalocean.com/techarion-dev/fue-website:latest-amd64 -t registry.digitalocean.com/techarion-dev/fue-website:v${VERSION}-amd64 -f Dockerfile .

echo "Pushing image to repo:"$DATE
docker push registry.digitalocean.com/techarion-dev/fue-website --all-tags

echo "Loggingi in:"$DATE
cd ..
export KUBECONFIG=$PWD/.kube/techarion-production-dev-kubeconfig.yaml


echo "Updating Image:"$DATE
kubectl apply -f k8s/fue_prod/frontend