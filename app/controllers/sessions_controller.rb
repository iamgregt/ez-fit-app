class SessionsController < ApplicationController

    wrap_parameters format: []
    # skip_before_action :authorized, :only => [:create]


    def create
        client = Client.find_by(email: params[:email])
        if client&.authenticate(params[:password])
            session[:client_id] = client.id
            render json: client, status: :created
        else
        render json: {error: "Invalid username or password"}, status: :unauthorized
        end 
    end
    def destroy
        session.delete :client_id
        head :no_content
      end
end