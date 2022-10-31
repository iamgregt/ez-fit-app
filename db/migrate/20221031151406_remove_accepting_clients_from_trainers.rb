class RemoveAcceptingClientsFromTrainers < ActiveRecord::Migration[6.1]
  def change
    remove_column :trainers, :accepting_clients, :boolean
  end
end
