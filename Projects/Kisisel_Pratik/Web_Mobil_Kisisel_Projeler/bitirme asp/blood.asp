<%@language="javascript"%> 

 

<form action ="basvuru.asp"> 

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> 

 

<% 

q1=Request.QueryString("q1") 

q2=Request.QueryString("q2") 

q3=Request.QueryString("q3") 

q4=Request.QueryString("q4") 

q5=Request.QueryString("q5") 

q6=Request.QueryString("q6") 

q7=Request.QueryString("q7") 

q8=Request.QueryString("q8") 

q9=Request.QueryString("q9") 

q10=Request.QueryString("q10") 

q11=Request.QueryString("q11") 

q12=Request.QueryString("q12") 

q13=Request.QueryString("q13") 

q14=Request.QueryString("q14") 

q15=Request.QueryString("q15") 

q16=Request.QueryString("q16") 

q17=Request.QueryString("q17") 

q18=Request.QueryString("q18") 

q19=Request.QueryString("q19") 

q20=Request.QueryString("q20") 

q21=Request.QueryString("q21") 

q22=Request.QueryString("q22") 

q23=Request.QueryString("q23") 

q24=Request.QueryString("q24") 

q25=Request.QueryString("q25") 

q26=Request.QueryString("q26") 

q27=Request.QueryString("q27") 

q28=Request.QueryString("q28") 

q29=Request.QueryString("q29") 

q30=Request.QueryString("q30") 

q31=Request.QueryString("q31") 

q32=Request.QueryString("q32") 

q45=Request.QueryString("q45") 

q46=Request.QueryString("q46") 

q47=Request.QueryString("q47") 

 

 

if (q45==0) 

Response.Write("<form><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><tr><td><font size ='3' > </font></td><td><center> <tr>  You are not ELIGIBLE for blood donation !</tr></center></td><br><br></form>") 

else 

if(q46==0) 

Response.Write("<form><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><tr><td><font size ='3' > </font></td><td><center> <tr>  You are not ELIGIBLE for blood donation !</tr></center></td><br><br></form>") 

else if(q47==0) 

Response.Write("<form><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><tr><td><font size ='3' > </font></td><td><center> <tr>  You are not ELIGIBLE for blood donation !</tr></center></td><br><br></form>") 

else 

 

if(q1==0 || q2==0  || q4==0  || q5==0 || q6==0 || q7==0 || q8==0 || q9==0 || q10==0 || q11==0 || q12==0 || q13==0 || q14==0 || q15==0 || q16==0 || q17==0 || q18==0 || q19==0 || q20==0 || q21==0  || q22==0 || q23==0 || q24==0  || q26==0 || q27==0  || q29==0 || q30==0 || q31==0 || q32==0 || q45==0 || q46==0 || q47==0) 

Response.Write("<form><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><tr><td><font size ='3' > </font></td><td><center> <tr>  You are not ELIGIBLE for blood donation !</tr></center></td><br><br></form>") 

else 

if(  q1==1  || q2==1 || q3==1 || q4==1  || q5==1 || q6==1 || q7==1 || q8==1 || q9==1 || q10==1 || q11==1 || q12==1 || q13==1 || q14==1 || q15==1 || q16==1 || q17==1 || q18==1 || q19==1 || q20==1 || q21==1  || q22==1 || q23==1 || q24==1 || q25==1 || q26==1 || q27==1 || q28==1 || q29==1 || q30==1 || q31==1 || q32==1 || q45==1 || q46==1 || q47==1) 

{ 

Response.Write("<form>") 

 

Response.Write("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><tr><td bgcolor='#CCCCCC' ><font size ='3' > </font></td><td bgcolor='#CCCCCC'><center> <tr bgcolor='#CCCCCC'>  YOU ARE ELIGIBLE FOR BLOOD DONATION</tr></center></td><br><br>") 

Response.Write ("<td><center><input type=submit name=basvuru value='Click for registration'/></center></td></tr>") 

Response.Write("</form>")} 

 

 

 

%> 

 

 

 

 

</form> 