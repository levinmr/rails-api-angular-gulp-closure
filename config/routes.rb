Rails.application.routes.draw do
  get '/favicon.ico' => redirect('/images/favicon.png')
end
