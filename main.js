document.getElementById("button").addEventListener("click",function(){

    function city(){
        var city=document.getElementById("place").value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`46ad7457603b9b0104e633e78cd60e16`}&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("location").innerHTML=data.name;
                document.getElementById("temp").innerHTML=data.main.temp;
                document.getElementById("weather").innerHTML=data.weather[0].main;
                //document.getElementById("icon").innerHTML=data.weather[0].icon;
                console.log(data);
                const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                const imgIcon = document.getElementById("icon");
                imgIcon.setAttribute('src', url);
                //console.log(data);
            })
        } 
        city() ; 
    
})
