class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|

      t.text "body"
      t.integer "workout_id"
      t.integer "trainer_id"
      t.integer "client_id"

      t.timestamps
    end
  end
end
