$('#form_post').submit(function(e){
  e.preventDefault();
  $.ajax("/posts",{
    dataType: 'json',
    type: 'POST',
    data:$('#form_post').serialize(),
    success: function(data) {
    console.log(data);
    $('#form_post').append('<div class="row "><div class="col-md-12"><div class="thumbnail"><div class="thumbnail"><div class="media"><div class="media-left media-middle"><a href="#"></a><img alt="..." class="media-object" src="assets/user3-100x100.jpg" style="width:64px; height:64px"/></div><div class="media-body"><h4 class="media-heading">'+data.content+'</h4></div></div></div><div class="iteracion"><a href="posts/<%= post.id %>"><span class="glyphicon glyphicon-comment"></span></a></div><div class="iteracion"><span class="glyphicon glyphicon-share"></span></div><div class="iteracion"><span class="glyphicon glyphicon-heart"></span></div></div></div></div>')
  },

  });
});
