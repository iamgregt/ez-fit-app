class AddAvatarToTrainers < ActiveRecord::Migration[6.1]
  def change
    add_column :trainers, :avatar, :string
  end
end
