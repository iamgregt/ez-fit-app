class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :age, :total_workouts, :height, :weight, :created_at, :comments
end
