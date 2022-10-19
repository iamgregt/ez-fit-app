class ChangeColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :trainers, :accepting_client, :accepting_clients
  end
end
