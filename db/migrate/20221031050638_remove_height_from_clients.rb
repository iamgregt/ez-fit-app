class RemoveHeightFromClients < ActiveRecord::Migration[6.1]
  def change
    remove_column :clients, :height, :integer
  end
end
