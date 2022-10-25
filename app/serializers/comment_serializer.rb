class CommentSerializer < ActiveModel::Serializer
  attributes :id, :workout_id, :trainer_id, :client_id, :body
  
end
