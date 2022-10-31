class RemoveYearsTrainingFromTrainers < ActiveRecord::Migration[6.1]
  def change
    remove_column :trainers, :years_training, :integer
  end
end
