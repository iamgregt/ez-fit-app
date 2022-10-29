class CommentsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :invalid_data

    def index
        render json: Comment.all, status: :ok
    end

    def show
        comment = Comment.find_by(id:params[:id])

        if comment
        render json: comment, status: :accepted
        else 
        render json: {error: "No Comment with that Id"}, status: :unprocessable_entity
        end
    end

    def create
        render json: Comment.create!(comment_params), status: :accepted
    end

    def update
        comment = Comment.find_by(id:params[:id])
        comment.update!(comment_params)
        render json: comment, status: :accepted
    end
    
    def destroy
        comment = Comment.find_by(id:params[:id])
        comment.delete
        head :no_content
    end

    private
    
    def invalid_data(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def comment_params
        params.permit(:body, :trainer_id, :workout_id, :client_id)
    end

end
