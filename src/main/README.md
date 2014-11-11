src/main
=====

Kode der skal pakkes med ned i target er placeret her

![alt tag](http://bitwizards.com/bitwizards/media/Blogs/Vincent_Mayfield/2011/build-graph.jpg)

Efter at du har lavet en clone af projektet skal du gøre følgende:

> Før du går igang skal du sikre dig at du har node, npm, bower og maven installeret på din maskine

1. Gå til roden af panis og skriv "npm install"
2. Gå til panis/src/main/webapp/scripts/ og skriv "bower install"
3. Du kan nu importere projektet i et IDE
4. Gå til roden af panis og skriv "mvn clean install"
5. Deploy panis/target/panis.war på en applikations server

[Webapp: Læs mere om hvilke regler der gælder hvis du skal tilføje noget](./../../src/main/webapp)
