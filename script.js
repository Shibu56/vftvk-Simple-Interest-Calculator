function compute()
{
             var amt = document.getElementById("principal").value;
             var int=document.getElementById("rate").value;
             var yr=document.getElementById("years").value;
             var famount=amt*yr*int/100;
             var year=new Date().getFullYear()+parseInt(yr);
             document.getElementById("result").innerHTML="If you deposit "+amt+",\<br\>at an interest rate of "+int+"%\<br\>You will receive an amount of "+famount+",\<br\>in the year "+year+"\<br\>"
    
}
function updateRate(){
                var rateval=document.getElementbyId("rate").value;
                document.getElementById("rate_val").innerText=rateval;
}
        
