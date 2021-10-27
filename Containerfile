FROM fedora:latest

RUN dnf install -y nodejs vim

ENV NODE_ENV=development
