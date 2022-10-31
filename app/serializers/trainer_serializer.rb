class TrainerSerializer < ActiveModel::Serializer
  

  attributes :id, :first_name, :last_name, :email, :workouts_sold, :password, :comments
end
