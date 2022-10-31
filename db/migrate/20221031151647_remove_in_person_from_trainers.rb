class RemoveInPersonFromTrainers < ActiveRecord::Migration[6.1]
  def change
    remove_column :trainers, :in_person, :boolean
  end
end
