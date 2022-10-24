class AddClientIdToWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :client_id, :integer
  end
end
