class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :age, :total_workouts, :weight, :created_at, :avatar, :workouts, :trainers
end