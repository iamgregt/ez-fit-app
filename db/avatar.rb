require 'net/http'
require 'open-uri'
require 'json'

class GetPrograms

  URL = "https://xsgames.co/randomusers/avatar.php?g=male"

  def get_programs
    uri = URI.parse(URL)
    response = Net::HTTP.get_response(uri)
    response.body
  end

end

programs = GetPrograms.new.get_programs

