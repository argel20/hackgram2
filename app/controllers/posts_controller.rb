class PostsController < ApplicationController

  def index
    @user = current_user
    #Obtienes todos los posts en orden descendiente del usario logeado
    @posts = @user.get_posts
    #Obienes la lista de usarios que no sigue
    @users = User.all
    @list_following = @user.following #EL usuario se sigue a si mismo?? Debe pasar para que funcione @posts
    @list_to_show = @users - @list_following - [@user]
  end

  def new
    @post = Post.new
  end

  def show
    @post = Post.find params[:id]
  end

  def create
    @user = current_user
    #Creacion de nuevos posts con el modal
    @post = Post.new(post_params)
    @user.posts.push @post
    @post.save
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :content,:avatar, :type_of, :link, :language, :title, :code)
  end


end
