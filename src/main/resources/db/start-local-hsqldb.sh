#!/bin/sh
# $JAVA_HOME needs to point to an installation that contain javadb
java -cp %UserProfile%\.m2\repository\org\hsqldb\hsqldb\2.3.1\hsqldb-2.3.1.jar org.hsqldb.Server --props ./server.properties