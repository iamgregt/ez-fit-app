class CommentSerializer < ActiveModel::Serializer
  attributes :id, :workout_id, :trainer_id, :body
  
end
