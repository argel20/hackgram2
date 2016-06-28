class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.build(comment_params)
    @comment.user_id = current_user.id
    redirect_to post_path(@post)
    @comment.save!
  end

  private

  def comment_params
    params.require(:comment).permit([:user_id,:content,:post_id])
  end
end
