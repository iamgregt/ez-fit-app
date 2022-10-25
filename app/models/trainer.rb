class Trainer < ApplicationRecord

    has_many :workouts
    has_many :clients, through: :workouts
    has_many :comments
end
