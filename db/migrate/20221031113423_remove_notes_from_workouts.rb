class RemoveNotesFromWorkouts < ActiveRecord::Migration[6.1]
  def change
    remove_column :workouts, :notes, :text
  end
end
