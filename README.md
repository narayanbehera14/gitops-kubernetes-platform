# Zero-Cost GitOps Kubernetes Platform

A zero-cost DevOps project that demonstrates containerization, Kubernetes deployment, and GitOps using Docker, K3s, and Argo CD.

## Architecture

GitHub → Argo CD → K3s Kubernetes → Dockerized Node.js Application

## Technologies

- Linux (Parrot OS)
- Git & GitHub
- Node.js
- Express.js
- Docker
- Kubernetes
- K3s
- Argo CD

## Current Features

- Node.js REST application
- `/health` health-check endpoint
- Docker containerization
- Kubernetes Deployment
- Kubernetes Service
- Kubernetes readiness and liveness probes
- Git-based infrastructure configuration
- Zero cloud infrastructure cost

## Project Structure

```text
gitops-kubernetes-platform/
├── app/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
├── .gitignore
└── README.md


