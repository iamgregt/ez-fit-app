class AddNotesToWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :notes, :text, null: true
  end
end
