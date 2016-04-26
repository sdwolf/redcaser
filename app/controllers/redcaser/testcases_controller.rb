# frozen_string_literal: true

class Redcaser::TestcasesController < RedcaserBaseController
  before_action :find_test_case, only: :update

  def index
    # TODO: What if there is none?
    test_case = TestCase.where({ issue_id: params[:object_id] }).first
    render json: test_case.to_json(view_context)
  end

  def copy
    destination_project = Project.find(params[:dest_project])
    unless User.current.allowed_to?(:add_issues, destination_project)
      raise ::Unauthorized
    end
    # TODO: What if there is none?
    test_case = TestCase.where({ issue_id: params[:id] }).first
    test_case.copy_to(destination_project)
    render json: { success: true }
  end

  def update
    result = @test_case.update_attributes(test_case_params)

    if result
      render json: {success: 'Test Case updated!'}
    else
      render json: {errors: @test_case.error_messages}, status: 400
    end
  end

  private

  def find_test_case
    @test_case = TestCase.where(id: params[:id]).first

    unless @test_case
      render json: {error: 'Test Case not found'}, status: 404
    end
  end

  def test_case_params
    params.require(:test_case).permit(:id, :test_suite_id)
  end

  def execute(test_case)
    version = Version.find_by_name_and_project_id(
      params[:version],
      @project.id
    )
    comment = params[:comment].blank? ? nil : params[:comment]
    result = ExecutionResult.find_by_name(params[:result])
    environment = ExecutionEnvironment.find(params[:envs])
    ExecutionJournal.create(
      version: version,
      comment: comment,
      test_case: test_case,
      result: result,
      executor: User.current,
      environment: environment
    )
    render json: ExecutionJournal
      .order('created_on desc')
      .where({ test_case_id: test_case.id })
      .collect { |ej| ej.to_json }
  end
end
