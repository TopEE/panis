src/main/webapp/js/i18n
=====

<img src="http://benjamin-balet.info/wp-content/uploads/2013/04/translation.png" alt="" style="width:100px">

### Understøttelse af forskellige sprog

I panis applikationen kan man vælge mellem forskellige sprog. I den nuværende udgave kan man vælge mellem følgende sprøg:

* Dansk
* Engelsk

### Implementering

Vi benytter os af frameworket [angular-translate](https://github.com/angular-translate/angular-translate) som er et framework
som udnytter angular's two-way binding til at kunne udskifte tekster "on the fly"

#### Tilføj et nyt sprog

Nye sprog tilføjes til messages.js med kommandoen 

    $translateProvider.translations('<key>', <object>)

Hvor \<key\> er en string kode som definere sproget og \<object\> er et javascript object som indeholder oversættelsen.

#### Eksempel

##### webapp/js/messges.js

    $translateProvider.translations('da', translation_da)

##### webapp/js/i18n/danish.js


    var translation_da = {
        common: {
            header: "Dette er en overskrift"
        }
    }


Tilføj beskeder med filter eller directive.

    <div>{{'common.header' | translate}}</div>

    <div translate="common.header"></div>

