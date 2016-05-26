//======================================================================================
// Name			:   Microsoft Unlock Edition
// Author      		: 	adguard and nummerok (WZT)
// Website	    	:	http://rg-adguard.net/
// Version  		:   1.0.10
// Description	: 	Script for opening access to all available images on this page!
// Original script	:	http://rg-adguard.net/dl/script/MS-unlock.js
//======================================================================================
//======================================================================================
// This is a mod version by JaszAndre made from @adguard's original script (v1.0.10).
// All credit goes to the original authors.
// New css styles applied. Notes and descriptions for every download were included.
// http://blog-conocimientoadictivo.blogspot.com/
//======================================================================================

(function() {
    'use strict';
    
var _0x5c09=["product-edition","getElementById","innerHTML","<option value=''>Seleccionar edición</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 7 SP1</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión K = Edición para Corea del Sur.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión N = No incluye Windows Media Player, Windows Media Center, ni Windows DVD Maker.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión KN = Combinación de la edición K y N.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión COEM = Edición Commercial OEM o System Builder, para preinstalar en PCs nuevos.*</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión GGK = Edición Get Genuine Kit (Kit de Legalización). Para legalizar PCs con Windows no original.*</option>\
<option class='product-description-obs' value='' disabled='disabled'> </option>\
<option class='product-description-obs' value='' disabled='disabled'>* Las ediciones COEM y GGK puestas en venta son un pack de ISOs, licencias especiales, certificados</option>\
<option class='product-description-obs' value='' disabled='disabled'>y manuales (en empaque sellado). Aquí sólo se descarga el instalador ISO, no incluye licencias ni certificados.</option>\
<option class='product-item' value='28'>Windows 7 Starter SP1</option>\
<option class='product-item' value='92'>Windows 7 Starter SP1 COEM</option>\
<option class='product-item' value='2'>Windows 7 Home Basic SP1</option>\
<option class='product-item' value='83'>Windows 7 Home Basic SP1 COEM</option>\
<option class='product-item' value='85'>Windows 7 Home Basic SP1 COEM GGK</option>\
<option class='product-item' value='6'>Windows 7 Home Premium SP1</option>\
<option class='product-item' value='87'>Windows 7 Home Premium SP1 COEM</option>\
<option class='product-item' value='88'>Windows 7 Home Premium SP1 COEM GGK</option>\
<option class='product-item' value='20'>Windows 7 Home Premium K SP1</option>\
<option class='product-item' value='89'>Windows 7 Home Premium K SP1 COEM</option>\
<option class='product-item' value='10'>Windows 7 Home Premium N SP1</option>\
<option class='product-item' value='86'>Windows 7 Home Premium N SP1 COEM</option>\
<option class='product-item' value='22'>Windows 7 Home Premium KN SP1</option>\
<option class='product-item' value='97'>Windows 7 Home Premium KN SP1 COEM</option>\
<option class='product-item' value='4'>Windows 7 Professional SP1</option>\
<option class='product-item' value='91'>Windows 7 Professional SP1 COEM</option>\
<option class='product-item' value='16'>Windows 7 Professional K SP1</option>\
<option class='product-item' value='12'>Windows 7 Professional N SP1</option>\
<option class='product-item' value='90'>Windows 7 Professional N SP1 COEM</option>\
<option class='product-item' value='18'>Windows 7 Professional KN SP1</option>\
<option class='product-item' value='98'>Windows 7 Professional KN SP1 COEM</option>\
<option class='product-item' value='8'>Windows 7 Ultimate SP1</option>\
<option class='product-item' value='96'>Windows 7 Ultimate SP1 COEM</option>\
<option class='product-item' value='26'>Windows 7 Ultimate K SP1</option>\
<option class='product-item' value='93'>Windows 7 Ultimate K SP1 COEM</option>\
<option class='product-item' value='14'>Windows 7 Ultimate N SP1</option>\
<option class='product-item' value='95'>Windows 7 Ultimate N SP1 COEM</option>\
<option class='product-item' value='24'>Windows 7 Ultimate KN SP1</option>\
<option class='product-item' value='94'>Windows 7 Ultimate KN SP1 COEM</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 8.1 with Update 1</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión LE = Limited Edition. Posiblemente un VL. No hay más información.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión K = Edición para Corea del Sur.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión N = No incluye Windows Media Player ni Windows Media Center.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión KN = Combinación de la edición K y N.</option>\
<option class='product-item' value='68'>Windows 8.1 Professional LE</option>\
<option class='product-item' value='69'>Windows 8.1 Professional LE K</option>\
<option class='product-item' value='71'>Windows 8.1 Professional LE N</option>\
<option class='product-item' value='70'>Windows 8.1 Professional LE KN</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 8.1 with Update 3</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión K = Edición para Corea del Sur.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión N = No incluye Windows Media Player ni Windows Media Center.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión KN = Combinación de la edición K y N.</option>\
<option class='product-description-obs' value='' disabled='disabled'>ISO Core & PRO = Incluye dos ediciones. La versión es determinada por el serial ingresado durante la instalación.</option>\
<option class='product-item' value='48'>Windows 8.1 Single Language</option>\
<option class='product-item' value='52'>Windows 8.1 (Core & PRO)</option>\
<option class='product-item' value='61'>Windows 8.1 K</option>\
<option class='product-item' value='55'>Windows 8.1 N</option>\
<option class='product-item' value='62'>Windows 8.1 KN</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 10 (Build 10240)</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión K = Edición para Corea del Sur.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión N = No incluye Windows Media Player.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión KN = Combinación de la edición K y N.</option>\
<option class='product-description-obs' value='' disabled='disabled'>ISO Home & PRO = Incluye dos ediciones. Se puede elegir la versión con sólo omitir el serial en la instalación.</option>\
<option class='product-item' value='82'>Windows 10 Single Language</option>\
<option class='product-item' value='79'>Windows 10 (Home & PRO)</option>\
<option class='product-item' value='81'>Windows 10 N</option>\
<option class='product-item' value='80'>Windows 10 KN</option>\
<option class='product-item' value='75'>Windows 10 Education</option>\
<option class='product-item' value='77'>Windows 10 Education N </option>\
<option class='product-item' value='76'>Windows 10 Education KN</option>\
<option class='product-item' value='78'>Windows 10 China Get Genuine Chinese Simplified</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 10 [1511.0] (Build 10586.0) November Update 2015</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión K = Edición para Corea del Sur.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión N = No incluye Windows Media Player.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión KN = Combinación de la edición K y N.</option>\
<option class='product-description-obs' value='' disabled='disabled'>ISO Home & PRO = Incluye dos ediciones. Se puede elegir la versión con sólo omitir el serial en la instalación.</option>\
<option class='product-item' value='106'>Windows 10 Single Language</option>\
<option class='product-item' value='99'>Windows 10 (Home & PRO)</option>\
<option class='product-item' value='105'>Windows 10 N</option>\
<option class='product-item' value='104'>Windows 10 KN</option>\
<option class='product-item' value='100'>Windows 10 Education</option>\
<option class='product-item' value='102'>Windows 10 Education N</option>\
<option class='product-item' value='101'>Windows 10 Education KN</option>\
<option class='product-item' value='103'>Windows 10 China Get Genuine Chinese Simplified</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 10 [1511.1] (Build 10586.103) Updated February 2016</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión K = Edición para Corea del Sur.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión N = No incluye Windows Media Player.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Versión KN = Combinación de la edición K y N.</option>\
<option class='product-description-obs' value='' disabled='disabled'>ISO Home & PRO = Incluye dos ediciones. Se puede elegir la versión con sólo omitir el serial en la instalación.</option>\
<option class='product-item' value='116'>Windows 10 Single Language</option>\
<option class='product-item' value='109'>Windows 10 (Home & PRO)</option>\
<option class='product-item' value='115'>Windows 10 N</option>\
<option class='product-item' value='114'>Windows 10 KN</option>\
<option class='product-item' value='110'>Windows 10 Education</option>\
<option class='product-item' value='112'>Windows 10 Education N</option>\
<option class='product-item' value='111'>Windows 10 Education KN</option>\
<option class='product-item' value='113'>Windows 10 China Get Genuine Chinese Simplified</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 10 Insider Preview Redstone 1 (Build 14295)</option>\
<option class='product-description-obs' value='' disabled='disabled'>OBS: Estas ediciones son versiones aún en desarrollo.</option>\
<option class='product-item' value='120'>Windows 10 Single Language Insider Preview</option>\
<option class='product-item' value='119'>Windows 10 Insider Preview</option>\
<option class='product-item' value='121'>Windows 10 Education Insider Preview</option>\
<option class='product-item' value='122'>Windows 10 Enterprise Insider Preview</option>\
<option class='product-item' value='118'>Windows 10 China Get Genuine Chinese Simplified</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 10 Insider Preview Redstone 1 (Build 14332)</option>\
<option class='product-description-obs' value='' disabled='disabled'>OBS: Estas ediciones son versiones aún en desarrollo.</option>\
<option class='product-item' value='126'>Windows 10 Insider Preview</option>\
<option class='product-item' value='127'>Windows 10 Enterprise Insider Preview</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 10 IoT Core Threshold 2</option>\
<option class='product-description-obs' value='' disabled='disabled'>Edición Internet of Things (IoT) = Internet de las Cosas, para Raspberry Pi 2 y 3, Arrow DragonBoard 410c & MinnowBoard MAX.</option>\
<option class='product-item' value='107'>Windows 10 IoT Core</option>\
<option class='product-edition-selector' value='' disabled='disabled'>ISOs de Windows 10 IoT Core Insider Preview Redstone 1</option>\
<option class='product-description-obs' value='' disabled='disabled'>Edición Internet of Things (IoT) = Internet de las Cosas, para Raspberry Pi 2 y 3, Arrow DragonBoard 410c & MinnowBoard MAX.</option>\
<option class='product-description-obs' value='' disabled='disabled'>Estas ediciones son versiones aún en desarrollo.</option>\
<option class='product-item' value='108'>Windows 10 IoT Core Insider Preview - Build 14262</option>\
<option class='product-item' value='117'>Windows 10 IoT Core Insider Preview - Build 14279</option>\
<option class='product-item' value='123'>Windows 10 IoT Core Insider Preview - Build 14295</option>\
<option class='product-item' value='124'>Windows 10 IoT Core Insider Preview - Build 14322</option>\
<option class='product-item' value='125'>Windows 10 IoT Core Insider Preview - Build 14328</option>\
<option class='product-item' value='128'>Windows 10 IoT Core Insider Preview - Build 14342</option>\
<option class='product-edition-selector' value='' disabled='disabled'>Instaladores EXEs de Microsoft Office 2007</option>\
<option class='product-item' value='129'>Office Small Business 2007</option>\
<option class='product-item' value='131'>Office Home and Student 2007</option>\
<option class='product-item' value='130'>Office Professional 2007</option>\
<option class='product-edition-selector' value='' disabled='disabled'>Instaladores EXEs de Microsoft Office 2010</option>\
<option class='product-description-obs' value='' disabled='disabled'>Tech Guarantee = Actualizan la suite completa o aplicativos individuales de Office 2007 a Office 2010 según su edición.</option>\
<option class='product-item' value='137'>Access 2010</option>\
<option class='product-item' value='132'>Access 2010 Tech Guarantee</option>\
<option class='product-item' value='138'>Excel 2010</option>\
<option class='product-item' value='139'>Excel 2010 Tech Guarantee</option>\
<option class='product-item' value='140'>Excel Home and Student 2010</option>\
<option class='product-item' value='141'>Excel Home and Student 2010 Tech Guarantee</option>\
<option class='product-item' value='142'>InfoPath 2010</option>\
<option class='product-item' value='143'>Office Home and Business 2010</option>\
<option class='product-item' value='144'>Office Home and Student 2010</option>\
<option class='product-item' value='145'>Office Home and Student 2010 Tech Guarantee</option>\
<option class='product-item' value='146'>Office Personal 2010</option>\
<option class='product-item' value='147'>Office Professional 2010</option>\
<option class='product-item' value='134'>Office Professional 2010 Tech Guarantee</option>\
<option class='product-item' value='148'>Office Professional Plus 2010</option>\
<option class='product-item' value='149'>Office Standard 2010</option>\
<option class='product-item' value='150'>OneNote 2010</option>\
<option class='product-item' value='135'>OneNote 2010 Tech Guarantee</option>\
<option class='product-item' value='151'>OneNote Home and Student 2010</option>\
<option class='product-item' value='152'>OneNote Home and Student 2010 Tech Guarantee</option>\
<option class='product-item' value='133'>Office Home and Business 2010 Tech Guarantee</option>\
<option class='product-item' value='153'>Outlook 2010</option>\
<option class='product-item' value='136'>Outlook 2010 Tech Guarantee</option>\
<option class='product-item' value='154'>PowerPoint 2010</option>\
<option class='product-item' value='155'>PowerPoint 2010 Tech Guarantee</option>\
<option class='product-item' value='156'>PowerPoint Home and Student 2010</option>\
<option class='product-item' value='157'>PowerPoint Home and Student 2010 Tech Guarantee</option>\
<option class='product-item' value='158'>Project 2010</option>\
<option class='product-item' value='159'>Project 2010 Tech Guarantee</option>\
<option class='product-item' value='160'>Project Professional 2010</option>\
<option class='product-item' value='161'>Project Professional 2010 Tech Guarantee</option>\
<option class='product-item' value='162'>Publisher 2010 Tech Guarantee</option>\
<option class='product-item' value='163'>Publisher 2010</option>\
<option class='product-item' value='164'>SharePoint Workspace 2010</option>\
<option class='product-item' value='165'>Visio Premium 2010</option>\
<option class='product-item' value='166'>Visio Professional 2010</option>\
<option class='product-item' value='167'>Visio Standard 2010</option>\
<option class='product-item' value='168'>Visio Standard 2010 Tech Guarantee</option>\
<option class='product-item' value='169'>Word 2010</option>\
<option class='product-item' value='170'>Word 2010 Tech Guarantee</option>\
<option class='product-item' value='171'>Word Home and Student 2010</option>\
<option class='product-item' value='172'>Word Home and Student 2010 Tech Guarantee</option>\
","backgroundColor","style","default","color","default","fontdefault","consolas","submit-product-edition","Confirm","go to http://wzor.net/ or https://twitter.com/WZorNET or https://twitter.com/nummerok or https://twitter.com/rg-adguard :D","log"],_0x1d62=[_0x5c09[0],_0x5c09[1],_0x5c09[2],_0x5c09[3],_0x5c09[4],_0x5c09[5],_0x5c09[6],_0x5c09[7],_0x5c09[8],_0x5c09[9],_0x5c09[10],_0x5c09[11],_0x5c09[12]],edititonbox=document[_0x1d62[1]](_0x1d62[0]);edititonbox[_0x1d62[2]]=_0x1d62[3],edititonbox[_0x1d62[5]][_0x1d62[4]]=_0x1d62[6],edititonbox[_0x1d62[5]][_0x1d62[7]]=_0x1d62[8],edititonbox[_0x1d62[5]][_0x1d62[9]]=_0x1d62[10],document[_0x1d62[1]](_0x1d62[11])[_0x1d62[2]]=_0x1d62[12],console[_0x5c09[14]](_0x5c09[13]);
})();

$('.product-description-obs').css({'background-color':'#E3E3E3','color':'#323232','font-size':'0.77em','padding':'0 8px 5px 8px'});
$('.product-edition-selector').css({'background-color':'#db6552','color':'#F8F8F8','font-weight':'bold','padding':'3px 8px'});
$('.product-item').css('paddingLeft','20px');
