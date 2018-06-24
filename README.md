ILDEVCON18 - Kubernetes Code Components
=================================
Presentation
------------
The presentation can be found [here](https://ptdrv.linkedin.com/hdf6ts1)

Prerequisites
------------
1. Helm - [Installation Instructions](https://github.com/kubernetes/helm/blob/master/docs/install.md)
2. Draft - [Installation Instructions](https://github.com/Azure/draft/blob/master/docs/install.md)
3. kubectl - [Installation Instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
4. Docker - [Installation Instructions](https://docs.docker.com/install/)
5. Azure CLI - [Installation Instructions](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) 
6. Kubeless CLI - [Installation Instructions](https://docs.docker.com/install/)
7. Kubernetes Cluster - [AKS Instructions](https://docs.microsoft.com/en-us/azure/aks/)
8. Kompose - [Installation Instructions](https://github.com/kubernetes/kompose/blob/master/docs/installation.md)
9. Ingress Controller Deployed to your Kubermetes Cluster [Installation Instructions](https://kubernetes.io/docs/concepts/services-networking/ingress/)

Move from docker-compose to Kubernetes
-------------------------------------
```
#cd to your docker-compose file dir 
kompose up

#convert docker-compose.yaml to kubernetes yaml
kompose convert
```

Containerize applications using Draft
-------------------------------------
```
# cd to your app root folder
cd node-draft

draft init #initialize draft

draft config set registry $DockerHubUsername

draft create 

draft up
```



Install Kubeless with Helm
--------------
```
#initialize helm

helm init

#install kubeless using helm

helm repo add incubator https://kubernetes-charts-incubator.storage.googleapis.com/

helm install --name my-kubeless --set ui.enabled=true --set ui.service.type=LoadBalancer --namespace kubeless incubator/kubeless
```

Serverless Application on top of Kubernetes with Kubeless
--------------
```
# deploy your serverless application
kubeless function deploy awesomeserverless \
                    --runtime nodejs8 \
                    --handler awesomeserverless.handler \
                    --from-file awesomeserverless.js

# expose your serverless application with ingress rule
kubeless trigger http create myawesomeserverless --function-name awesomeserverless --path myawesomeserverless --hostname ildev.io
```