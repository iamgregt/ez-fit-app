class ClientsController < ApplicationController

    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_data
    skip_before_action :authorized, :only => [:index]

    def index
        render json: Client.all
    end

    def show
        client = Client.find_by(id: params[:id])
        if client
            render json: client, include: :trainers
        else
            render json: { error: "No user" }, status: :unauthorized
        end
    end

    def update
        client = Client.find_by(id: [params[:id]])
        client.update(client_params)
    end

    def create
        render json: Client.create!(client_params)
    end

    def destroy
        client = Client.find_by(id: [params[:id]])
        client.delete
        head :no_content 
    end

    def clients
        render json: Client.all.count
    end

    private

    def client_params
        params.permit(:name, :email, :total_workouts, :weight, :age, :avatar)
    end

    def invalid_data(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
