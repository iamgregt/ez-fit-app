class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :age, :location, :total_workouts, :height, :weight, :created_at
end
