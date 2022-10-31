class RemoveCostFromWorkouts < ActiveRecord::Migration[6.1]
  def change
    remove_column :workouts, :cost, :integer
  end
end
