<!DOCTYPE html> 

<html> 

 

<head> 

 

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> 

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> 

<style type="text/css"> 

 

 

 

 

 

body{  font-family: 'lintelregular';} 

.style2 {font-size: 24px} 

    </style> 

 

 

 

</head> 

 

<body > 

<div> 

 

<h3 style=" font:Verdana, Arial, Helvetica, sans-serif; text-transform:uppercase;"></h3> 

<form name="register" method="post" action="done.asp"> 

 

  <table width="630" border="1" align="center" cellpadding="0" cellspacing="0" bordercolor="#999999"> 

     

    <tr> 

      <td height="47" colspan="2" align="center" bgcolor="#CCCCCC"><span class="style2">  Blood Donation-Registration Form </span></td> 

    </tr> 

    <tr> 

      <td width="323" height="30" align="center">Name Surname : * </td> 

      <td width="301" height="30" align="center"><label> 

        <input name="adsoyad" type="text" id="adsoyad" maxlength="50"  required> 

      </label></td> 

    </tr> 

    

    <tr> 

      <td height="30" align="center">Birthday ( Gün/Ay/Yıl ): * </td> 

      <td height="30" align="center"><input name="dogum_tarihi" type="text" id="dogum_tarihi" maxlength="15" required></td> 

    </tr> 

 

     

    <tr> 

      <td height="30" align="center">Marriage : * </td> 

      <td height="30" align="center"><label> 

        <select name="medeni" id="medeni" required> 

          <option value="Married">Married</option> 

          <option value="Single">Not married</option> 

        </select> 

      </label></td> 

    </tr> 

    

    <tr> 

      <td height="30" align="center">Address : * </td> 

      <td height="30" align="center"><label> 

        <textarea name="ikamet" id="ikamet" required></textarea> 

      </label></td> 

    </tr> 

 <tr> 

      <td height="30" align="center">Postcode : * </td> 

      <td height="30" align="center"><input name="posta" type="text" id="cep" maxlength="15" required></td> 

    </tr> 

    <tr> 

      <td height="30" align="center">Mobile Phone : * </td> 

      <td height="30" align="center"><input name="cep" type="text" id="cep" maxlength="15" required></td> 

    </tr> 

    <tr> 

      <td height="30" align="center">LandlineTelephone :  </td> 

      <td height="30" align="center"><input name="sabit" type="text" id="sabit" maxlength="15" ></td> 

    </tr> 

    <tr> 

      <td height="30" align="center">E-Mail Address  :* </td> 

      <td height="30" align="center"><input name="email" type="text" id="email" maxlength="35" required></td> 

    </tr> 

<tr> 

      <td height="30" align="center">Blood Type * </td> 

      <td height="30" align="center"><label> 

        <select name="kangurubu" id="kangurubu" required> 

          <option value="A+">A+</option> 

          <option value="A-">A-</option> 

  <option value="B+">B+</option> 

  <option value="B-">B-</option> 

  <option value="AB+">AB+</option> 

  <option value="AB-">AB-</option> 

  <option value="0+">0+-</option> 

  <option value="0-">0-</option> 

  <option value="0-">I do not know</option> 

   

        </select> 

      </label></td> 

    </tr> 

 

  

  </table> 

  <br> 

  <br>  <br> 

  <br> 

  <table width="630" border="1" align="center" cellpadding="0" cellspacing="0" bordercolor="#999999"> 

    <tr> 

      <td height="30" align="center">Appointment week which you prefer: * </td> 

      <td height="30" align="center"><input name="randevu_tarihi" type="text" id="randevu_tarihi" maxlength="15" required></td> 

    </tr> 

</table> 

  <table width="630" border="1" align="center" cellpadding="0" cellspacing="0" bordercolor="#999999"> 

 

<tr> <td height="30" align="center">Programme</td> 

 

 <td height="30" align="center">9-10</td> 

 <td height="30" align="center">10-11</td> 

 <td height="30" align="center">11-12</td> 

 <td height="30" align="center">12-13</td> 

 <td height="30" align="center">13-14</td> 

 <td height="30" align="center">14-15</td> 

 <td height="30" align="center">15-16</td> 

 <td height="30" align="center">16-17</td> 

 

</tr> 

 

 

   

  <% 

Dim fso, f,x,temp,counter,counter2 

Dim arr1(40) 

Set fso = CreateObject("Scripting.FileSystemObject") 

counter=1 

counter2=1 

Set f = fso.OpenTextFile("C:\reading.txt",1) 

 

' Read line from the text file  

 

x= f.readline  

 

f.Close 

a=Split(x,",") 

 

 

 

 

For j = 0  To UBound(a) 

temp=a(j) 

arr1(temp)=1 

next 

 

For i=1 To 40 

If counter=1 Then 

Response.Write("<tr>") 

Response.write("<td height='30' align='center'> Monday</td>") 

 

elseif counter=9 Then 

response.write("</tr>") 

Response.Write("<tr>") 

Response.write("<td height='30' align='center'> Tuesday</td>") 

 

elseif	 counter=17 Then 

response.write("</tr>") 

Response.Write("<tr>") 

Response.write("<td height='30' align='center'> Wednesday</td>") 

 

elseif	 counter=25 Then 

response.write("</tr>") 

Response.Write("<tr>") 

Response.write("<td height='30' align='center'> Thursday</td>") 

elseif	 counter=33 Then 

response.write("</tr>") 

Response.Write("<tr>") 

Response.write("<td height='30' align='center'> Friday</td>") 

 

 

 

counter=counter+1 

END IF 

 

If arr1(i)=1 		Then 

Response.Write("<td height='30' align='center'>FULL") 

Else  

Response.Write("<td height='30' align='center'><input type=radio name=saat value='"&i&"'><br></td>") 

counter2=counter2+1 

End If 

counter=counter+1 

next 

 

 

 

 

  

 

%> 

 

 

 

 

 

  

 

 

 

     

    <tr> 

      <td height="85" colspan="22" align="center"><label></label> 

        <label> 

        <input type="submit" name="Submit" value="Registration Confirmation"> 

      </label></td> 

    </tr> 

  </table> 

   

 

</form> 

 

</div> 

 

</body> 

</html> 