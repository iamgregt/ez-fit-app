class RemoveVirtualFromTrainers < ActiveRecord::Migration[6.1]
  def change
    remove_column :trainers, :virtual, :boolean
  end
end
