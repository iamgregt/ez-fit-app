class WorkoutsController < ApplicationController
    wrap_parameters format: []
    
    def index
        render json: Workout.all
    end

    def show 
        render json: Workout.find_by(id:params[:id])
    end

    def update
        workout = Workout.find_by(id:params[:id])
        render json: workout.update(workout_params)
    end

    def destroy
        workout = Workout.find_by(id:params[:id])
        workout.delete
        head :no_content
    end

    private

    def workout_params
        params.permit(:name, :date_time, :trainer_id, :virtual, :cost, :client_id)
    end
end
