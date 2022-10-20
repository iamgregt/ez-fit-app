class CreateTrainers < ActiveRecord::Migration[6.1]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :email
      t.integer :years_training
      t.integer :location
      t.boolean :in_person
      t.boolean :virtual
      t.boolean :accepting_client
      t.integer :workouts_sold
      t.timestamps
    end
  end
end
