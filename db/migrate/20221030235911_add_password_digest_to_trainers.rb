class AddPasswordDigestToTrainers < ActiveRecord::Migration[6.1]
  def change
    add_column :trainers, :password_digest, :string
  end
end
