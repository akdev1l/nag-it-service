FROM openjdk:19-jdk-slim 

RUN mkdir -p /app/{lib,bin,etc}
COPY ./build/libs/snag-it-service.jar /app/lib/snag-it-service.jar

WORKDIR /app
ENTRYPOINT ["java", "-jar", "/app/lib/snag-it-service.jar"]
