class SessionsController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, :only => [:create]


    def create
        trainer = Trainer.find_by(email: params[:email])
        if trainer&.authenticate(params[:password])
            session[:trainer_id] = trainer.id
            render json: trainer, status: :created
        else
        render json: {error: "Invalid username or password"}, status: :unauthorized
        end 
    end
    def destroy
        session.delete :trainer_id
        head :no_content
      end
end