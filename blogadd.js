const new_form=document.querySelector("#form2");
const write_title = document.querySelector("#title");
const write_des = document.querySelector("#subject");


new_form.addEventListener('submit',(e) =>{
       e.preventDefault();
       
       const task = write_title.value;
      //  console.log(task);
       const task1 =write_des.value;
      //  console.log(task1);

       

const new_home = document.createElement('div');
new_home.classList.add('BoxContainer');
home_page.appendChild(new_home);

const new_image = document.createElement('div');
new_image.classList.add('photo');
new_home.appendChild(new_image);
/** function for random images */
let image_url ="https://jsonplaceholder.typicode.com/photos?_limit=1";
fetch(image_url).then((responce) =>
     responce.json())
     .then(result =>{
/** for geting url of image by map */
        result.map((value) =>{
            let key =value.url;
           /* console.log(key); */


           const new_img = document.createElement('img');
           new_img.src=`https://picsum.photos/400/400?random=${key}`;
           new_image.appendChild(new_img);

          

           
        })
      
    
    
})
/*const new_img = document.createElement('img');
new_image.appendChild(new_img);*/


const newprofile_img =document.createElement('div');
       
       newprofile_img.classList.add('Authorpic');
       new_home.appendChild(newprofile_img);
       const new_profile = document.createElement('img');
       new_profile.src="https://i.pinimg.com/originals/24/4a/70/244a70a7916bf9b411deb294af95076c.jpg";
      newprofile_img.appendChild(new_profile);

      const new_div = document.createElement('div');
      new_div.classList.add('textContainer');
      new_home.appendChild(new_div);
      const new_title = document.createElement('a');
      new_title.innerText=task;
      
    
      new_div.appendChild(new_title);

       /**discription */
       const new_dis = document.createElement('p');
       console.log(new_dis);
       new_dis.innerText= task1;
       
       
      
        new_home.appendChild(textContainer);

})



