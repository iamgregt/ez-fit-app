class WorkoutsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, :only => [:index]
    
    def index
        if params[:trainer_id]
        trainer = Trainer.find(params[:trainer_id])
        workouts = trainer.workouts
        else
        workouts = Workout.all
        end
        render json: workouts, include: :trainer
    end

    def show 
        render json: Workout.find_by(id:params[:id]), include: [:client, :trainer]
    end

    def create
        render json: Workout.create(workout_params)
    end

    def update
        workout = Workout.find_by(id:params[:id])
        workout.update(workout_params)
        render json: workout, status: :accepted
    end

    def destroy
        workout = Workout.find_by(id:params[:id])
        workout.delete
        head :no_content
    end



    private

    def workout_params
        params.permit( :hour, :trainer_id, :virtual, :client_id, :status, :minute, :day, :year, :month)
    end
end
