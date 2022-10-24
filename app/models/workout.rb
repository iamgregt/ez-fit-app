class Workout < ApplicationRecord
    has_many :clients
    belongs_to :trainer
end
