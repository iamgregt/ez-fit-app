class AddStatusToWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :status, :string
  end
end
