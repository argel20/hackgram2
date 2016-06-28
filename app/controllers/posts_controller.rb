class PostsController < ApplicationController
# layout "posts"

	def index
    @post = Post.new
    @posts =  Post.all
		@list_users = User.all

	end

  def new
    @post = Post.new
  end

  def show
    @post = Post.find params[:id]
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to :action => :show, :id => @post.id
    else
      render json: @post.errors, status: :unproccessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content,:avatar, :type_of, :user_id)
  end

end
