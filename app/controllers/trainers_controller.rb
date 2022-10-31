class TrainersController < ApplicationController

    wrap_parameters format: []

    def index
        render json: Trainer.all
    end

    def show
        trainer = Trainer.find_by(id: session[:trainer_id])
        if trainer
            render json: trainer
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        render json: Trainer.create!(trainer_params)
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

    def workouts_index
        trainer = Trainer.find(params[:trainer_id])
        workouts = trainer.workouts
        render json: workouts, include: :trainer
    end

    def client
        workout = Workout.find(params[:id])
        render json: client, include: :trainer
    end

    private

    def trainer_params
        params.permit(:first_name, :last_name, :email, :workouts_sold, :password)
    end
end
