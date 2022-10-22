class ClientsController < ApplicationController

    wrap_parameters format: []

    def index
        render json: Client.all
    end

    def show
        client = Client.find_by(id: params[:id])
        render json: client
    end

    def update
        client = Client.find_by(id: [params[:id]])
        client.update(client_params)
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
        params.permit(:name, :email, :years_training, :location, :in_person, :virtual, :accepting_clients, :workouts_sold)
    end
end
