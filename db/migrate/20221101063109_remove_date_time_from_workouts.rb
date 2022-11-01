class RemoveDateTimeFromWorkouts < ActiveRecord::Migration[6.1]
  def change
    remove_column :workouts, :date_time, :integer
  end
end
