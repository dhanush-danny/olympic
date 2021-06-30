canvas=document.getElementById("myCanvas");
pen=canvas.getContext("2d");

        pen.beginPath();
        pen.strokeStyle="grey";
        pen.lineWidth=5;
        pen.rect(75,75,660,350);
        pen.stroke();


        pen.beginPath();
        pen.strokeStyle="blue";
        pen.lineWidth=5;
        pen.arc(150,150,50,0,2*Math.PI);
        pen.stroke();

        pen.beginPath();
        pen.strokeStyle="yellow";
        pen.lineWidth=5;
        pen.arc(210,190,50,0,2*Math.PI);
        pen.stroke();


        pen.beginPath();
        pen.strokeStyle="black";
        pen.lineWidth=5;
        pen.arc(270,150,50,0,2*Math.PI);
        pen.stroke();

        pen.beginPath();
        pen.strokeStyle="green";
        pen.lineWidth=5;
        pen.arc(330,190,50,0,2*Math.PI);
        pen.stroke();

        pen.beginPath();
        pen.strokeStyle="red";
        pen.lineWidth=5;
        pen.arc(390,150,50,0,2*Math.PI);
        pen.stroke();

function clear_Area(){
    console.log("clear");
    pen.clearRect(0,0,canvas.width,canvas.height);
    
    }
    

        