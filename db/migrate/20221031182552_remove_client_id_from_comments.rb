class RemoveClientIdFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :client_id, :integer
  end
end
