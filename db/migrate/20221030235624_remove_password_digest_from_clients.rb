class RemovePasswordDigestFromClients < ActiveRecord::Migration[6.1]
  def change
    remove_column :clients, :password_digest, :string
  end
end
