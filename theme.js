function themeChange(val)
{
    console.log(val);
    if(val== "white")
    {
        document.querySelector(".header").style.backgroundColor=" #bfbfbf";
        document.querySelector(".header h1").style.color="#000000";
        document.querySelector(".header h1").style.borderBottom="4px solid black";
        document.querySelector("body").style.backgroundColor=" #ffffff";
        document.querySelector("marquee").style.color="#000000";
        document.querySelector("select").style.backgroundColor="#ffffff"
        document.querySelector("select").style.color="black";
        document.querySelector("select").style.border="2px solid grey";
        document.querySelector(".search").style.backgroundColor="#404040";
        document.querySelector(".searchtag").style.backgroundColor="#404040";
        document.querySelector(".searchtag").style.color="white";
        document.querySelector("i").style.color="white";
        document.querySelector("#result").style.backgroundColor="#404040";
        document.querySelector("ul").style.color="white";
        document.querySelector("#_1").style.backgroundImage="linear-gradient("+" toright"+','+ "#fc67fa" +',' + "#f4c4f3" +')'; 
        

        
    }
}