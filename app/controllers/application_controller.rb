class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized

  def authorized
    render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :trainer_id
  end

end
