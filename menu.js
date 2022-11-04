var home = document.querySelector('#home')
var cat1 = document.querySelector('#cat1')
var lib1 = document.querySelector('#lib1')
var imagesMenu = document.querySelector('#imagesMenu')
var subMenu =document.querySelector('.submenu')
var drawingsMenu = document.querySelector('#drawingsMenu')


var isVisible = 0;
var isVisibleSlave =0;



function toggle(druh)
{        
    console.log(druh.innerHTML)
    
    if(isVisible===0){
        
        cat1.nextElementSibling.style.display='none'
        cat2.nextElementSibling.style.display='none'
        cat3.nextElementSibling.style.display='none'
        cat4.nextElementSibling.style.display='none'
        lib1.nextElementSibling.style.display='none'
        lib2.nextElementSibling.style.display='none'
        druh.nextElementSibling.style.display='inline'
        return this.isVisible=0
        
    }
    else {
        imagesMenu.nextElementSibling.style.display='none'
        druh.nextElementSibling.style.display='none'
        return this.isVisible=1
    }
}

function toggleSlave(druh)
{        
    console.log(druh.innerHTML)
    
    if(isVisibleSlave===0){
        imagesMenu.nextElementSibling.style.display='none'
        drawingsMenu.nextElementSibling.style.display='none'
        druh.nextElementSibling.style.display='inline'
        
        return this.isVisibleSlave=0
        
    }
    else {
        
        imagesMenu.nextElementSibling.style.display='none'
        druh.nextElementSibling.style.display='none'
        return this.isVisibleSlave=1
    }
}


home.addEventListener('click', ()=> toggleSlave(home))
imagesMenu.addEventListener('click', ()=> toggleSlave(imagesMenu))
drawingsMenu.addEventListener('click', ()=> toggleSlave(drawingsMenu))

console.log(imagesMenu)
console.log(drawingsMenu)

cat1.addEventListener('click', ()=> toggle(cat1))
cat2.addEventListener('click', ()=> toggle(cat2))
cat3.addEventListener('click', ()=> toggle(cat3))
cat4.addEventListener('click', ()=> toggle(cat4))

lib1.addEventListener('click', ()=> toggle(lib1))
lib2.addEventListener('click', ()=> toggle(lib2))

//menubar

var mainContent = document.querySelector('.mainContent')

console.log(imagesMenu)
imagesMenu.addEventListener('click', ()=>{mainContent.innerHTML=`
<div class="content">
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pulvinar eleifend sem.</p>
<hr>
<div class='bgimg'>
<a  href="03.png"><img " src="03.png" alt="boar"></a>
<p class="resetstyle">rembrandts boar copy</p>
</div>


<hr>
<p >Integer malesuada. Ut tempus purus at lorem. Mauris metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nulla quis diam. Integer imperdiet lectus quis justo. Donec vitae arcu. Aliquam ornare wisi eu metus. Mauris dictum facilisis augue. Duis condimentum augue id magna semper rutrum. Fusce nibh. Pellentesque pretium lectus id turpis. Duis pulvinar. Nulla pulvinar eleifend sem. Donec iaculis gravida nulla. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Nunc auctor. Nam sed tellus id magna elementum tincidunt.</p>
<hr>
<a href="04.png"><img class="bgimg" src="04.png" alt="boar"></a>
<hr>
<p >Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Aenean id metus id velit ullamcorper pulvinar. Etiam bibendum elit eget erat. Curabitur bibendum justo non orci. Aliquam ornare wisi eu metus. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Nulla non lectus sed nisl molestie malesuada. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Quisque porta. Nullam eget nisl. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
<hr>
<p >Et harum quidem rerum facilis est et expedita distinctio. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam faucibus mi quis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis pulvinar. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Aliquam erat volutpat. Aliquam ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Donec quis nibh at felis congue commodo.</p>
<hr>
<a href="02.png"><img class="bgimg" src="02.png" alt="boar"></a>
<hr>

<p >Curabitur bibendum justo non orci. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Suspendisse nisl. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Integer lacinia. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer in sapien. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Fusce suscipit libero eget elit. Fusce wisi. Integer in sapien.</p>
<hr>

</div>
<div class="blank"></div>
    
</div>`})
cat2.addEventListener('click', ()=> {mainContent.innerHTML=`
<p>This is a paragraph.</p>
<p>This is a paragraph.</p>
<p>This is a paragraph.</p>`})
home.addEventListener('click', ()=> {mainContent.innerHTML=`    <p>hello</p>
<div class="content">

    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pulvinar eleifend sem. Et harum quidem rerum facilis est et expedita distinctio. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Maecenas lorem. Aenean id metus id velit ullamcorper pulvinar. Fusce consectetuer risus a nunc. Aliquam ante. Maecenas lorem. Fusce wisi. Vestibulum fermentum tortor id mi. Aliquam ante. Praesent id justo in neque elementum ultrices. Vivamus ac leo pretium faucibus. Nullam faucibus mi quis velit.</p>
<hr>
<div>
  <model-viewer class='bg' camera-controls src= 'Sunbeam Daytona Mono Posto.glb'  auto-rotate></model-viewer>

</div>
<hr>
<p>Integer malesuada. Ut tempus purus at lorem. Mauris metus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nulla quis diam. Integer imperdiet lectus quis justo. Donec vitae arcu. Aliquam ornare wisi eu metus. Mauris dictum facilisis augue. Duis condimentum augue id magna semper rutrum. Fusce nibh. Pellentesque pretium lectus id turpis. Duis pulvinar. Nulla pulvinar eleifend sem. Donec iaculis gravida nulla. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Nunc auctor. Nam sed tellus id magna elementum tincidunt.</p>
<hr>
<div>
  <model-viewer class='bg' camera-controls src= 'Sunbeam Daytona Mono Posto.glb'  auto-rotate></model-viewer>

</div>
<hr>
<p>Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Aenean id metus id velit ullamcorper pulvinar. Etiam bibendum elit eget erat. Curabitur bibendum justo non orci. Aliquam ornare wisi eu metus. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Nulla non lectus sed nisl molestie malesuada. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Quisque porta. Nullam eget nisl. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
<hr>
<p>Et harum quidem rerum facilis est et expedita distinctio. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nullam faucibus mi quis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis pulvinar. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Aliquam erat volutpat. Aliquam ante. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Donec quis nibh at felis congue commodo.</p>
<hr>
<p>Curabitur bibendum justo non orci. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Suspendisse nisl. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Integer lacinia. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer in sapien. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Fusce suscipit libero eget elit. Fusce wisi. Integer in sapien.</p>
<hr>


</div>
<div class="blank"></div>
    
</div>
`} )



