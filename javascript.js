var names=[];
var country;
function countryNames(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 & xhr.status==200){
            var data=JSON.parse(xhr.responseText);
           // console.log(data.Global);
            document.getElementById("NewConfirmed").innerHTML=data.Global.NewConfirmed;
            document.getElementById("NewConfirmed").style.color="red";

            document.getElementById("NewDeaths").innerHTML=data.Global.NewDeaths;
            document.getElementById("NewDeaths").style.color="red";
            document.getElementById("NewRecovered").innerHTML=data.Global.NewRecovered;
            document.getElementById("NewRecovered").style.color="red";
            document.getElementById("ToTalConfirmed").innerHTML=data.Global.TotalConfirmed;
            document.getElementById("ToTalConfirmed").style.color="red";
            document.getElementById("TotalDeath").innerHTML=data.Global.TotalDeaths;
            document.getElementById("TotalDeath").style.color="red";
            document.getElementById("ToatalRecovered").innerHTML=data.Global.TotalRecovered;
            document.getElementById("ToatalRecovered").style.color="red";

            document.getElementById("_11").innerHTML=data.Global.NewConfirmed;
            document.getElementById("_22").innerHTML=data.Global.NewDeaths;
            document.getElementById("_33").innerHTML=data.Global.NewRecovered;
            document.getElementById("_44").innerHTML=data.Global.TotalConfirmed;
            document.getElementById("_55").innerHTML=data.Global.TotalDeaths;
            document.getElementById("_66").innerHTML=data.Global.TotalRecovered;
            for(var i in data.Countries){
                //console.log("scnd");
                names[i]=data.Countries[i].Country+" ("+data.Countries[i].CountryCode+")";   // asign value to array variable from api
            }
            
        }
    }
    xhr.open("GET","https://api.covid19api.com/summary",true);
    xhr.send();
}
document.getElementById('find').addEventListener('input',function(){    // on change fire function
    
    var search=document.getElementById('find').value.toUpperCase().trim();       // Searching String assign to variable
    document.getElementById("list").innerHTML = ""; 
    if(search.length<1)
    {
        document.getElementById("result").style.visibility="hidden";
    }                                                                      // empty the list
    for(var i in names){
        var x=names[i].toUpperCase();
        if(x.startsWith(search) && search.length>0)
        {
            document.getElementById("result").style.visibility="visible";
            var li=document.createElement('li');
            var text=document.createTextNode(names[i]);   //+" ("+data.Countries[i].CountryCode+")");
            li.append(text);
            document.querySelector('#list').append(li);
            

        }
    }
    
})


document.getElementById("list").addEventListener('click',function(event){
    country=event.target.innerHTML;
    document.getElementById('find').value=country;
    document.getElementById('result').style.visibility='hidden';  // var num=country.indexOf("(");
                                                                 //country=country.substring(0,num).trim();
    //console.log(country);
    var i=0;    
    for(i in names)
    {
      //  console.log(typeof(country));
        if(country === names[i])
        {
            console.log("sanbxss");
            console.log(names[i]);
            console.log(i);
            break;
        }
    }
    load(i);
    //console.log(names[i]);
})
function load(i){
    var xhr=new XMLHttpRequest();   /// seocnd request
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 & xhr.status==200){
            var data=JSON.parse(xhr.responseText);
           // console.log(data.Countries[i]);
            //console.log(data);

            document.getElementById("_11").innerHTML=data.Countries[i].NewConfirmed;
            document.getElementById("_22").innerHTML=data.Countries[i].NewDeaths;
            document.getElementById("_33").innerHTML=data.Countries[i].NewRecovered;
            document.getElementById("_44").innerHTML=data.Countries[i].TotalConfirmed;
            document.getElementById("_55").innerHTML=data.Countries[i].TotalDeaths;
            document.getElementById("_66").innerHTML=data.Countries[i].TotalRecovered;

        }
    }
    xhr.open("GET","https://api.covid19api.com/summary",true);  // second api call
    xhr.send();

}


