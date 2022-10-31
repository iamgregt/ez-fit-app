class Workout < ApplicationRecord
    belongs_to :trainer
    has_many :comments, dependent: :destroy
end
