Portfolio::Application.routes.draw do

  # The priority is based upon order of creation:
  # earlier in this file -> higher priority.

  root to: 'home#index', as: :home

  get '/pinkhipo' => 'home#project_pinkhipo'
  get '/pinkhipo2' => 'home#project_pinkhipo2'



end
