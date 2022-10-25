class Client < ApplicationRecord
    has_secure_password

    validates :email, uniqueness: true
    has_many :workouts
    has_many :trainers, through: :workouts
    has_many :comments
end
