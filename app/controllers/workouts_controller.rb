class WorkoutsController < ApplicationController
    wrap_parameters format: []
    
    def index
        render json: Workout.all, include: [:client, :trainer]
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
        params.permit(:name, :date_time, :trainer_id, :virtual, :client_id, :status)
    end
end
