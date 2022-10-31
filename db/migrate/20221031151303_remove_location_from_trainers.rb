class RemoveLocationFromTrainers < ActiveRecord::Migration[6.1]
  def change
    remove_column :trainers, :location, :integer
  end
end
