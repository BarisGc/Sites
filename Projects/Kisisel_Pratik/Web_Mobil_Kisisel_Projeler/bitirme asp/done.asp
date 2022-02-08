<table width="630"  border="1" align="center" cellpadding="55" cellspacing="0" bordercolor="#999999"> 

     

    <tr> 

      <td height="47" colspan="2" align="center" bgcolor="#CCCCCC"><span class="style2"> Your registration has been done successfully</span></td> 

    </tr> 

 

<% 

 

Dim fso 

Dim tst 

 

Set fso=Server.CreateObject("Scripting.FileSystemObject") 

Set tst = fso.OpenTextFile("C:\register.txt", 2, true) 

 

tst.writeline("NAME:") 

tst.writeline  Request.Form("adsoyad") 

tst.writeline("BIRTHDAY:") 

tst.writeline  Request.Form("dogum_tarihi") 

tst.writeline("MARRIAGE:") 

tst.writeline  Request.Form("medeni") 

tst.writeline("ADDRESS:") 

tst.writeline  Request.Form("ikamet") 

tst.writeline("POSTCODE:") 

tst.writeline  Request.Form("posta") 

tst.writeline("MOBILE-PHONE:") 

tst.writeline  Request.Form("cep") 

tst.writeline("LANDLINE PHONE:") 

tst.writeline  Request.Form("sabit") 

tst.writeline("E-MAIL:") 

tst.writeline  Request.Form("email") 

tst.writeline("BLOOD TYPE:") 

tst.writeline  Request.Form("kangurubu") 

tst.writeline("APPOINTMENT DATE:") 

tst.writeline  Request.Form("randevu_tarihi") 

tst.writeline("TIME PERIOD:") 

tst.writeline  Request.Form("saat") 

tst.writeline("__") 

tst.close 

Set tst = Nothing 

Set fso = Nothing 

 

%> 