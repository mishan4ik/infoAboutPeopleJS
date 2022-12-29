
let container = document.getElementById("container");
let content = document.querySelector(".content");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let block_btn = document.querySelector(".block_btn");
let reset = document.getElementById("btn_reset");


 
let text;
let text1;
let img;
let text2;
for(let a in arr ){

    text = document.createElement('li');
    let inp = document.createElement("input");
    inp.setAttribute("type","radio" );
    inp.setAttribute("name","question" );
    inp.setAttribute("id","inp" );
    text.setAttribute("id","text" );
	container.appendChild(text);
    text.appendChild(inp);
    text.innerHTML += arr[a].name + " " + "<br>" ;

}



btn.onclick = function() {
        for(let i in arr){

                if(inp[i].checked){
                    text1 = document.createElement('p');
                    text1.setAttribute("id","text1" );
                    let img = document.createElement('img');
                    img.setAttribute("id","img" );
                    content.appendChild(img);
                    img.setAttribute("src",arr[i].img);
                    content.appendChild(text1);
                    container.style.display = "none";
                    btn.disabled = "true";
                    btn1.style.display = "block";
                    content.style.display = "block";
                    text1.innerHTML += "name:" +  " " + arr[i].name + "<br>" + "born:" + " " + arr[i].born + "<br>" + "real name:" 
                    +  " " + arr[i].realname + "<br>" + "sex:" + " " + arr[i].sex + " " + "<br>" ;
                    
                    
    
                }

        }
        


}

btn1.onclick = function() {


    for(let i in arr){
        if(inp[i].checked ){

            text2 = document.createElement('p');
            text2.setAttribute("id","text2" );
            let img2 = document.createElement('img');
            img2.setAttribute("id","img1" );
            img2.setAttribute("src",arr[i].img1);
            content.appendChild(img2);
            content.appendChild(text2);
            btn.disabled = "true";
            btn1.disabled = "true";
            content.style.display = "block";
            block_btn.style.display = "block";
            text2.innerHTML += arr[i].info + "<br>";


        }
        


    }

}

reset.onclick = () => {

    location.reload();

}