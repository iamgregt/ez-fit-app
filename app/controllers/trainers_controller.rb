class TrainersController < ApplicationController

    wrap_parameters format: []

    def index
        render json: Trainer.all
    end

    def show
        trainer = Trainer.find_by(id: params[:id])
        render json: trainer
    end

    def update
        trainer = Trainer.find_by(id: params[:id])
        trainer.update(trainer_params)
    end

    def destroy
        trainer = Trainer.find_by(id: params[:id])
        trainer.delete
        head :no_content
    end

    private

    def trainer_params
        params.permit(:name, :years_training, :location, :in_person, :virtual, :accepting_clients, :workout_sold)
    end
end
