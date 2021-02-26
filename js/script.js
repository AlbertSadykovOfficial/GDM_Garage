document.getElementById("send_m").onclick = send_animation_go;

let complete = ['C','o','m','p','l','e','t','e'];
let loading = ["Loading","Loading.","Loading..","Loading..."];

function send_animation_go(){
  let object = document.getElementById("post_car");
  object.style.opacity = 1;
  document.getElementById("complete_text").innerHTML = "Loading";
  let left_point = 110;
  let visible = 1;
  let n = 0;
        function ride(){
// Вывод текста
            if (left_point > 250) {
              if (left_point % 38 == 0) {
                if (n==0) {
                  document.getElementById("complete_text").innerHTML = complete[n];
                  n++;
                }else{
                  document.getElementById("complete_text").innerHTML += complete[n];
                  n++;
                }
              }
            }

// Движение машинки
              if(left_point > 400){
                visible -= 0.00645;
                object.style.opacity = visible;
              }

              if(left_point < 555){
                left_point++;
                object.style.marginLeft = left_point + 'px'; 
              } else {
                clearTimeout(timer);
                object.style.opacity = 0;
              }
        }
   let timer = setInterval(ride,10);
}


/*myobj1 = document.getElementById("middle_txt_1");
myobj1.onclick = act(myobj1,100);

object = document.getElementById("middle_txt_1");
object.onclick = act(100);

function act(right_point){
  let left_point = 0;
  let n = 0;
    function move(){
      if (left_point < right_point){
        left_point++;
        object.style.marginLeft = left_point + "px";
      }
      clearTimeout(timer1);
    }
  let timer1 = setInterval(move,10);
}
*/
object1 = document.getElementById("f1");
object2 = document.getElementById("f2");
object3 = document.getElementById("f3");
object1.onclick = go;

function go(){
  let n = 0;
    function move(){
      if (n%2==0){
        object1.style.marginLeft = 5 + "px";
        object1.style.marginRight = 0 + "px";
        object1.style.marginTop = 5 + "px";
        object1.style.width = 40 + "px";

        object2.style.paddingLeft = 5 + "px";
        object2.style.marginTop = 0 + "px";
        object2.style.width = 50 + "px";

        object3.style.paddingLeft = 15 + "px";
        object3.style.marginRight = 0 + "px";
        object3.style.marginTop = 5 + "px";
        object3.style.width = 40 + "px";
      }else{
        object1.style.marginLeft = 0 + "px";
        object1.style.marginRight = 5 + "px";
        object1.style.marginTop = 0 + "px";
        object1.style.width = 50 + "px";   

        object2.style.paddingLeft = 15 + "px";
        object2.style.marginTop = 0 + "px";
        object2.style.width = 40 + "px";

        object3.style.paddingLeft = 10 + "px";
        object3.style.marginRight = 5 + "px";
        object3.style.marginTop = 0 + "px";
        object3.style.width = 50 + "px"; 
      }
      n++;  
    }
    let timer1 = setInterval(move,500);
}