class AddFirstNameToTrainers < ActiveRecord::Migration[6.1]
  def change
    add_column :trainers, :first_name, :string
  end
end
