class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :age
      t.integer :location
      t.integer :total_workouts
      t.integer :height
      t.integer :weight

      t.timestamps
    end
  end
end
