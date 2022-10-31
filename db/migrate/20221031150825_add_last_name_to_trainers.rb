class AddLastNameToTrainers < ActiveRecord::Migration[6.1]
  def change
    add_column :trainers, :last_name, :string
  end
end
