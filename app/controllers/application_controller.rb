class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  puts "Initializing Rdio consumer"
	@consumer = OAuth::Consumer.new 'naa4src2f68rm2a5thcc36d6', 'quVt6HsB64'
	@consumer.http.read_timeout = 600 # ten-minute timeout, thanks
	puts "Initializing Rdio access token"
	@access_token = OAuth::AccessToken.new @consumer
	puts "Rdio API ready"
end
