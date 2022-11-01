class RemoveNameFromWorkouts < ActiveRecord::Migration[6.1]
  def change
    remove_column :workouts, :name, :string
  end
end
