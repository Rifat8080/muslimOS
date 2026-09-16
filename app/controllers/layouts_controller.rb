# frozen_string_literal: true

class LayoutsController < InertiaController
  before_action :authenticate_user!, only: [:dashboard]

  def landing
    render inertia: "layouts/landing"
  end

  def dashboard
    render inertia: "layouts/dashboard"
  end
end
