class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.integer :date_time
      t.integer :trainer_id
      t.boolean :virtual
      t.integer :cost

      t.timestamps
    end
  end
end
