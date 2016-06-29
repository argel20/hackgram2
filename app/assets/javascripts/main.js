// $("#buton").click(function(){
//   $.ajax("/posts",{
//   success: function(data){
//
//     console.log(data);
//   }
// });
// });
    // $.each(response, function(index, user){
    //   $('#'+index+'').append('<td >'+User.name+'</td>')
    //
    // $('tbody').append('<tr id='+index+'></tr>')
    //
    // });
    // }
$('#form_post').submit(function(e){
  e.preventDefault();

  console.log($('#form_post'));
  location.reload()
  // $('.argel').load('/posts',.row.argel)
    // $('#form_post').append('<div class="thumbnail"><div class="thumbnail"><div class="media"><div class="media-left media-middle"><a href="#"></a><img alt="..." class="media-object" src="assets/user3-100x100.jpg" style="width:64px; height:64px"/></div><div class="media-body"><h4 class="media-heading">"pureba"</h4></div></div></div></div>')

});

// <div class="thumbnail"><div class="thumbnail"><div class="media"><div class="media-left media-middle"><a href="#"></a><img alt="..." class="media-object" src="assets/user3-100x100.jpg" style="width:64px; height:64px"/></div><div class="media-body"><h4 class="media-heading">prueba</h4></div></div></div></div>
//
