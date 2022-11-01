class AddNewDateToWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :day, :integer
    add_column :workouts, :month, :integer
    add_column :workouts, :year, :integer
    add_column :workouts, :hour, :integer
    add_column :workouts, :minute, :integer
  end
end
