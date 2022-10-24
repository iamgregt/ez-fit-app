class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.text :body
      t.references :conversations, index: true
      t.references :clients, index: true

      t.timestamps
    end
  end
end
