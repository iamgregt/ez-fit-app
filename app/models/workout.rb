class Workout < ApplicationRecord
    belongs_to :trainer
    belongs_to :client
    has_many :comments, dependent: :destroy
end
