class RemoveNameFromTrainers < ActiveRecord::Migration[6.1]
  def change
    remove_column :trainers, :name, :string
  end
end
