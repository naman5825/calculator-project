var display=document.getElementById("display");
var buttons=document.getElementsByClassName("button");
var displayValue="";
for(item of buttons)
{
	item.addEventListener('click',
	(e)=>{
       buttonText=e.target.innerText;
	   console.log(buttonText);
	   if(buttonText == "=")
	   {
          display.innerText=eval(display.textContent);
	   }
	   else if(buttonText == "AC")
	   {
		   display.innerText="";
	   }
	   else if(buttonText == "+/-")
	   {
	   	display.innerText= -1 * eval(display.textContent);
	   }
	   else
	   {
		   display.innerText +=buttonText;
	   }
	})
}